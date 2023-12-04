import {
  Hero,
  PopularProdcuts,
  FeaturedProducts,
  Services,
  Categories,
} from '../components';

const Home = () => {
  return (
    <div className="font-primary">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Services />
      <PopularProdcuts />
    </div>
  );
};

export default Home;
