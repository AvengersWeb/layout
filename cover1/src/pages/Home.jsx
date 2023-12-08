import {
  Hero,
  PopularProdcuts,
  FeaturedProducts,
  Categories,
  SubscribeSection,
  Testimonial,
} from '../components';

const Home = () => {
  return (
    <div className="font-primary">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SubscribeSection />
      <PopularProdcuts />
      <Testimonial/>
    </div>
  );
};

export default Home;
