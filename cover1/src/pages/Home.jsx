import {
  Hero,
  PopularProdcuts,
  FeaturedProducts,
  Services,
} from '../components';

const Home = () => {
  return (
    <div className="font-primary">
      <Hero />
      <FeaturedProducts />
      <Services />
      <PopularProdcuts />
    </div>
  );
};

export default Home;
