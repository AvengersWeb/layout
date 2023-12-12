import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Pagination = () => {
  const { language } = useAuth();

  return (
    <div className="my-12 flex gap-2 justify-end">
      <Link>
        <button className="bg-black text-white font-sm uppercase font-bold py-2 px-5 hover:translate-y-2 duration-500 rounded">
          {language === 'en' ? 'Previous' : 'পূর্ববর্তী'}
        </button>
      </Link>
      <Link>
        <button className="bg-black text-white font-sm uppercase font-bold py-2 px-5 hover:translate-y-2 duration-500 rounded">
          {language === 'en' ? 'Next' : 'পরবর্তী'}
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
