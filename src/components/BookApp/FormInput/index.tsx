import axios, { AxiosResponse } from 'axios';
import { BookList } from '@/types/types';
import { useBook } from '@/contexts/BookContext';

function FormInput() {
  // Getting the necessary states and functions from the BookContext
  const { searchTerm, setSearchTerm, setBooks, setLoading, setError } =
    useBook();
  const handleInput = async (e: any) => {
    // Replace spaces with + to match Google Books API query format
    setSearchTerm(e.target.value.split(' ').join('+'));
  };

  // Handle search submission
  const handleSearch = async (e: any) => {
    e.preventDefault();
    // Regex to test if search term is only whitespace or empty
    const regex = /^[+%&\s]*$/;
    if (!regex.test(searchTerm)) {
      try {
        setLoading(true);
        const response: AxiosResponse<BookList> = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );
        const { items } = response.data;
        setBooks(items);
      } catch (error: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <form className='flex justify-center items-center' onSubmit={handleSearch}>
      <input
        placeholder='Search Book'
        className='border-2 border-gray-500 px-4 py-3 rounded-2xl max-w-xs w-full focus:outline-none'
        onChange={handleInput}
      />
      <button className='bg-gray-700 rounded-2xl p-2 mx-4'>
        <svg
          fill='white'
          width='32'
          height='32'
          strokeLinejoin='round'
          strokeMiterlimit='2'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z'
            fillRule='nonzero'
          />
        </svg>
      </button>
    </form>
  );
}

export default FormInput;
