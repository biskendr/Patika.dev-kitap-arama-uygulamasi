import { FunctionComponent, useEffect, useState } from 'react';
import Layout from './Layout';
import { useBook } from '@/contexts/BookContext';
import { useRouter } from 'next/router';
import { BookItem } from '@/types/types';
import BookDetail from '@/components/BookApp/BookDetail';
import Spinner from '@/components/Spinner';

// Define a type for the query parameters
interface QueryProps {
  id?: string | undefined;
  title?: string | undefined;
}

const Movie: FunctionComponent = () => {
  // Extract the query parameters from the router object
  const router = useRouter();
  const { id, title }: QueryProps = router.query;
  const { books } = useBook();
  const [bookDetails, setBookDetails] = useState<BookItem | undefined>();

  useEffect(() => {
    setTimeout(() => {
      // Find the book in the books array with the matching id
      const data = books.find((element) => element.id === id);
      setBookDetails(data);
    }, 500);
  }, [id, books]);

  if (!bookDetails) {
    return <Spinner />;
  }
  return (
    <Layout title={title}>
      <BookDetail bookDetail={bookDetails!} />
    </Layout>
  );
};

export default Movie;
