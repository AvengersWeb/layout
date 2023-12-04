import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Button = ({ classname, children, link }) => {
  return (
    <div>
      <Link
        to={link}
        className={twMerge(
          'animated-button relative mt-6 pt-4 pb-3.5 px-12 uppercase tracking-wider font-bold rounded-full',
          classname
        )}
      >
        {children || 'Shop Now'}
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
