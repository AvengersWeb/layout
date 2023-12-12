import { useQuery } from '@tanstack/react-query';
// import Pagination from '../components/Pagination';
import SingleBlogItem from '../components/SingleBlogItem';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const Blog = () => {
  const axiosPublic = useAxiosPublic();
  const { language } = useAuth();

  const { isLoading, data } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(`/api/v1/allblogs`);
        return response.data;
      } catch (error) {
        console.log('axios get error', error);
        throw error;
      }
    },
  });

  return (
    <div className="pb-12 pt-28 md:pb-20 lg:pb-28 lg:pt-36">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          {language === 'en' ? 'Our Blog' : 'আমাদের ব্লগ'}
        </h2>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <div key={item._id}>
                <SingleBlogItem item={item} />
              </div>
            ))}
          </div>
        )}

        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default Blog;
