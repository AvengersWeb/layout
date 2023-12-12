import {
  Hero,
  PopularProdcuts,
  SubscribeSection,
  FeaturedProducts,
  Services,
  Categories,
} from '../components';

const Home = () => {
  return (
    <div className="font-primary">
      <Hero />
      <Services />
      <FeaturedProducts />
      <Categories />
      <SubscribeSection />
      <PopularProdcuts />
    </div>
  );
};

export default Home;
