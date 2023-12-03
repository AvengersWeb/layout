import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Button = ({ classname, spanClassname, children, link }) => {
  return (
    <div>
      <Link
        to={link}
        className={twMerge(
          'relative mt-6 pt-4 pb-3 px-9 uppercase tracking-wider font-bold text-white  bg-gradient-to-r from-teal-400 to-teal-600 rounded-full outline-none ',
          classname
        )}
      >
        <span
          className={twMerge(
            `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-teal-500 ring-animation`,
            spanClassname
          )}
        />

        <span className="relative z-50 font-bold leading-none">
          {children || 'Shop Now'}
        </span>
      </Link>
    </div>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  spanClassname: PropTypes.string,
  link: PropTypes.any,
  children: PropTypes.string,
};

export default Button;
