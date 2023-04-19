import { createContext, useContext, useEffect, useState } from 'react';
import { BookItem, BookList } from '@/types/types';
import axios, { AxiosResponse } from 'axios';

// Define the type for the BookContext and BookProviderProps
interface BookContextType {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  books: BookItem[];
  setBooks: (books: BookItem[]) => void;
  error: boolean;
  setError: (error: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

interface Props {
  children: React.ReactNode;
}

// Create a new context for the BookContext
const BookContext = createContext<BookContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
  books: [],
  setBooks: () => {},
  error: false,
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const BookProvider: React.FC<Props> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<BookItem[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //Fetch the initial data from the Google Books API
  useEffect(() => {
    let initialTerm = 'adventure+sherlock+holmes';
    async function fetchInitialData() {
      try {
        setLoading(true);
        const response: AxiosResponse<BookList> = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${initialTerm}`
        );
        const { items } = response.data;
        setBooks(items);
      } catch (error: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchInitialData();
  }, []);

  const values: BookContextType = {
    searchTerm,
    setSearchTerm,
    books,
    setBooks,
    error,
    setError,
    loading,
    setLoading,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export const useBook = (): BookContextType => useContext(BookContext);
