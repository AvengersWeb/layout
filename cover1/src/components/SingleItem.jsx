import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Button from './common/Button';

const SingleItem = ({ product }) => {
  const { featured_image, title, rprice, sprice, _id } = product;
  const { language } = useAuth();

  return (
    <Link to={_id ? `/single-product/${_id}` : `/shop`}>
      <div className="bg-white rounded-xl shadow-light">
        <img src={featured_image} alt="" className="object-cover rounded-xl" />
      </div>
      <div className="flex flex-col gap-y-2 py-4 px-4">
        <h4 className="text-lg text-center font-bold font-secondary hover:text-rose-400 duration-500 overflow-hidden text-ellipsis line-clamp-1">
          {title}
        </h4>
        <p className="mb-4 text-center">
          <span className="text-base text-red-500 opacity-50 line-through">
            ৳{rprice}
          </span>
          <span className="text-xl font-bold theme-color">৳{sprice}</span>
        </p>

        <div className="flex justify-center">
          <Button link={`/single-product/${_id}`}>
            {language === 'en' ? 'Select Options' : 'অপশন দেখুন'}
          </Button>
        </div>
      </div>
    </Link>
  );
};

SingleItem.propTypes = {
  product: PropTypes.any,
};

export default SingleItem;
