import { BookItem } from '@/types/types';
import Image from 'next/image';

interface Props {
  bookDetail: BookItem;
}

function BookDetail({ bookDetail }: Props) {
  return (
    <div className='container mx-auto px-4 py-8'>
      {bookDetail && (
        <div className='flex flex-col md:flex-row'>
          <div>
            <Image
              src={
                bookDetail.volumeInfo.imageLinks
                  ? bookDetail.volumeInfo.imageLinks.thumbnail
                  : 'https://i.ibb.co/BjGc36B/No-Image.webp'
              }
              width={300}
              height={300}
              quality={100}
              className='rounded-lg'
              style={{ width: 'auto', height: '460px' }}
              alt={bookDetail.volumeInfo.title}
            />
          </div>
          <div className='md:w-2/3 md:pl-8'>
            <h1 className='text-2xl font-semibold'>
              {bookDetail.volumeInfo.title}
            </h1>
            <div className='text-gray-600 text-sm mt-2'>
              {bookDetail.volumeInfo.authors?.join(', ')}
            </div>
            <div className='text-gray-700 leading-relaxed mt-4'>
              {bookDetail.volumeInfo.description || 'No description available.'}
            </div>
            <div className='mt-4'>
              <a
                href={bookDetail.volumeInfo.infoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
              >
                View on Google Books
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
