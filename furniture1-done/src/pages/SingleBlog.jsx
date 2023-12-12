import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
  const blogDetails = useLoaderData();

  return (
    <div className="pb-12 pt-28 md:pb-20 lg:pb-28 lg:pt-36">
      <div className="container mx-auto px-4">
        <div className="max-w-[900px] mx-auto flex flex-col gap-y-3">
          <h2 className="text-center font-bold text-3xl md:text-5xl mb-12 capitalize">
            {blogDetails.blogTitle}
          </h2>
          <div>
            <img
              src={blogDetails.featured_image}
              alt=""
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
          <p className="font-secondary mt-6 text-justify leading-relaxed">
            {blogDetails.blog}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
