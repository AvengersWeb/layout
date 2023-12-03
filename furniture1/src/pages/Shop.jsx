import { useQuery } from '@tanstack/react-query';
// import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const { language } = useAuth();

  const { isLoading, data } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosPublic
        .get(`/api/v1/allproducts`)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  return (
    <div className="pb-12 pt-28 md:pb-20 lg:pb-28 lg:pt-36">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          {language === 'en' ? 'Our Shop' : ' আমাদের শপ'}
        </h2>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.length === 0 ? (
              <p className="text-lg font-medium">No Product Found!</p>
            ) : (
              <div className="grid gap-4 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.map((product) => (
                  <SingleItem key={product._id} product={product} />
                ))}
              </div>
            )}
          </>
        )}

        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default Shop;
