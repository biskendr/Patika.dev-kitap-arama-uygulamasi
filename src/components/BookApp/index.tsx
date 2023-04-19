import { useBook } from '@/contexts/BookContext';
import FormInput from './FormInput';
import BookThumbnail from './BookThumbnail';
import Error from '@/pages/404';
import Spinner from '../Spinner';

function Homepage() {
  const { loading, error } = useBook();

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <FormInput />
      <BookThumbnail />
    </div>
  );
}

export default Homepage;
