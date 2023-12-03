import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';

const Loader = ({ size = 50 }) => {
  return (
    <div className="flex justify-center items-center text-center !w-full my-20">
      <GridLoader color="#36d7b7" size={size} />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.any,
};

export default Loader;
