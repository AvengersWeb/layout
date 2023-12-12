import PropTypes from 'prop-types';
import { GridLoader, ScaleLoader } from 'react-spinners';

const Loader = ({ size = 50, loader }) => {
  return (
    <div
      className={`flex justify-center items-center text-center !w-full ${
        !loader && 'my-20'
      }`}
    >
      {!loader ? (
        <GridLoader className="" color="#36d7b7" size={size} />
      ) : (
        <ScaleLoader color="#36d7b7" size={size} />
      )}
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.any,
  loader: PropTypes.any,
};

export default Loader;
