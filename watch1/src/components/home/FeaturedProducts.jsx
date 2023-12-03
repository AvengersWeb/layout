import Button from '../common/Button';
import productOne from '/images/home/watch1/product1.webp';
import productTwo from '/images/home/watch1/product2.webp';

const FeaturedProducts = () => {
  return (
    <section
      className="AW_FEATURED_PRODUCTS_1 -my-12 -md:my-20 -lg:my-52 relative z-[100]"
      id="AW_FEATURED_PRODUCTS_1"
    >
      <div className="container mx-auto px-4">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center max-h-[650px] overflow-hidden bg-white shadow-light">
            <div className="sm:w-1/2 max-h-[650px] overflow-hidden">
              <img
                src={productOne}
                alt=""
                className="w-full object-cover max-h-[650px]"
              />
            </div>
            <div className="flex flex-col gap-y-3 sm:w-1/2 p-8 lg:px-20">
              <h4 className="text-xl lg:text-2xl uppercase font-bold tracking-widest">
                Luxury Watches
              </h4>
              <div className="w-11 h-0.5 bg-gray-200"></div>
              <p>
                Discover our finely curated collection of investment-worthy
                diamonds and gemstones, breathtaking designs, and exceptional
                craftsmanship
              </p>
              <div className="mt-12">
                <Button />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 max-h-[650px] overflow-hidden bg-white shadow-light">
            <div className="sm:w-1/2 max-h-[650px] overflow-hidden">
              <img
                src={productTwo}
                alt=""
                className="w-full object-cover max-h-[650px]"
              />
            </div>
            <div className="flex flex-col gap-y-3 sm:w-1/2 p-8 lg:px-20">
              <h4 className="text-xl lg:text-2xl uppercase font-bold tracking-widest">
                SPORTS WATCHES
              </h4>
              <div className="w-11 h-0.5 bg-gray-200"></div>
              <p>
                Discover our finely curated collection of investment-worthy
                diamonds and gemstones, breathtaking designs, and exceptional
                craftsmanship
              </p>
              <div className="mt-12">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
