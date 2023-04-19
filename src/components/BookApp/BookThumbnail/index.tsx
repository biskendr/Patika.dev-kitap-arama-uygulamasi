import { useBook } from '@/contexts/BookContext';
import Image from 'next/image';
import Link from 'next/link';

function BookThumbnail() {
  const { books } = useBook();

  if (!books || books.length < 1) {
    return (
      <div className='flex justify-center items-center mt-24 text-2xl'>
        The book you are looking for could not be found.
      </div>
    );
  }
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10'>
      {books.map((book) => (
        <Link
          href={{
            pathname: '/book/[id]',
            query: { title: book.volumeInfo.title as string},
          }}
          as={`/book/${book.id}`}
          key={book.id}
          className='bg-white rounded-lg overflow-hidden shadow-md'
        >
          <div className=' overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
            <Image
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : 'https://i.ibb.co/BjGc36B/No-Image.webp'
              }
              width={800}
              height={800}
              alt={book.volumeInfo.title}
            />
          </div>
          <div className='p-4'>
            <h3 className='font-medium text-gray-800'>
              {book.volumeInfo.title}
            </h3>
            <p className='text-sm text-gray-600 mt-1'>
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(', ')
                : ''}
            </p>
            <p className='text-sm text-gray-600 mt-1'>
              {book.volumeInfo.publishedDate}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BookThumbnail;
