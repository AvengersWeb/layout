import { Hero, PopularProdcuts, SubscribeSection } from '../components/';
import { FeaturedProducts } from '../components';

const Home = () => {
  return (
    <div className="font-primary">
      <Hero />
      <FeaturedProducts />
      <SubscribeSection />
      <PopularProdcuts />
    </div>
  );
};

export default Home;
