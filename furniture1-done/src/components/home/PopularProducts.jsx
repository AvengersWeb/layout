  import { useState } from 'react';
  import { useQuery } from '@tanstack/react-query';
  import useAuth from '../../hooks/useAuth';
  import useAxiosPublic from '../../hooks/useAxiosPublic';
  import SingleItem from '../SingleItem';
  import Loader from '../Loader';
  import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

  // Import Swiper styles
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  import productOne from '/images/home/furniture1/product1.webp';
  import productTwo from '/images/home/furniture1/product2.webp';
  import productThree from '/images/home/furniture1/product3.webp';
  import productFour from '/images/home/furniture1/product4.webp';
  import productFive from '/images/home/furniture1/product5.webp';
  import productSeven from '/images/home/furniture1/product7.webp';
  import { Link } from 'react-router-dom';
  import Button from '../common/Button';

  const PopularProducts = () => {
    const { language } = useAuth();
    const axiosPublic = useAxiosPublic();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwiperUpdate = (swiper) => {
      console.log('Current Index:', swiper.activeIndex);
      console.log('Total Slides:', swiper.slides.length);
      setCurrentIndex(swiper.activeIndex);
    };

    const dummyData = [
      {
        featured_image: productOne,
        title: 'Black Silicon Strap Watch',
        sprice: 1499,
      },
      {
        featured_image: productTwo,
        title: 'Blue Silicon Strap Watch',
        sprice: 2499,
      },
      {
        featured_image: productThree,
        title: 'Silicone Strap Watch',
        sprice: 1999,
      },
      {
        featured_image: productFour,
        title: 'Luxury Watch',
        sprice: 1199,
      },
      {
        featured_image: productFive,
        title: 'Black Silicon Strap Watch',
        sprice: 1499,
      },
      {
        featured_image: productSeven,
        title: 'Blue Silicon Strap Watch',
        sprice: 2499,
      },
      {
        featured_image: productTwo,
        title: 'Silicone Strap Watch',
        sprice: 1999,
      },
      {
        featured_image: productOne,
        title: 'Luxury Watch',
        sprice: 1199,
      },
    ];

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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h4 className="text-xl lg:text-2xl uppercase font-bold tracking-widest">
              {language === 'en' ? 'Popular Products' : 'চলমান প্রডাক্ট'}
            </h4>
          </div>
          {/* products */}
          {/* {isLoading ? (
            <Loader />
          ) : (
            <>
              {data.length === 0 ? (
                <p className="text-lg font-medium">No Product Found!</p>
              ) : (
                <div>
                  <div className="flex gap-x-4 justify-center items-center">
                    <button className="arrow-left">
                      <FaArrowLeft size={30} />
                    </button>
                    <button className="arrow-right">
                      <FaArrowRight size={30} />
                    </button>
                  </div>

                      <Swiper
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            pagination={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={handleSwiperUpdate}
            className="mySwiper mt-6 text-center relative z-10"
          >
            <div>
              <div
                className={`absolute arrow-left bg-white shadow-xl py-5 px-1 z-10 top-[122px]  ${
                  currentIndex === 0
                    ? 'opacity-20 cursor-not-allowed'
                    : 'opacity-100 cursor-pointer'
                }`}
              >
                <IoMdArrowDropleft size={30} />
              </div>
              <div
                className={`absolute arrow-right bg-white shadow-xl py-5 px-1 z-10 top-[122px] right-0 cursor-pointer `}
              >
                <IoMdArrowDropright size={30} />
              </div>
            </div>
            {dummyData?.map((product, i) => (
              <SwiperSlide className="bg-white" key={i}>
                <Link
                  to={product._id ? `/single-product/${product._id}` : `/shop`}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={product.featured_image}
                      alt=""
                      className="object-cover text-center max-h-[300px] w-full"
                    />
                  </div>
                  <div className="flex items-start flex-col gap-y-2 py-4 pr-3 pl-1">
                    <h4 className="text-base font-medium font-primary hover:text-primary duration-500 overflow-hidden text-ellipsis line-clamp-1">
                      {product.title}
                    </h4>
                    <p className="mb-4">
                      <span className="text-lg font-bold">৳{product.sprice}</span>
                    </p>

                    <div className="flex justify-center">
                      <Button
                        link={`/single-product/${product._id}`}
                        classname="text-sm"
                      >
                        {language === 'en' ? 'View Details' : 'অপশন দেখুন'}
                      </Button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
                </div>
              )}
            </>
          )} */}

          <Swiper
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            pagination={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={handleSwiperUpdate}
            className="mySwiper mt-6 text-center relative z-10"
          >
            <div>
              <div
                className={`absolute arrow-left bg-white shadow-xl py-5 px-1 z-10 top-[122px]  ${
                  currentIndex === 0
                    ? 'opacity-20 cursor-not-allowed'
                    : 'opacity-100 cursor-pointer'
                }`}
              >
                <IoMdArrowDropleft size={30} />
              </div>
              <div
                className={`absolute arrow-right bg-white shadow-xl py-5 px-1 z-10 top-[122px] right-0 cursor-pointer `}
              >
                <IoMdArrowDropright size={30} />
              </div>
            </div>
            {dummyData?.map((product, i) => (
              <SwiperSlide className="bg-white" key={i}>
                <Link
                  to={product._id ? `/single-product/${product._id}` : `/shop`}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={product.featured_image}
                      alt=""
                      className="object-cover text-center max-h-[300px] w-full"
                    />
                  </div>
                  <div className="flex items-start flex-col gap-y-2 py-4 pr-3 pl-1">
                    <h4 className="text-base font-medium font-primary hover:text-primary duration-500 overflow-hidden text-ellipsis line-clamp-1">
                      {product.title}
                    </h4>
                    <p className="mb-4">
                      <span className="text-lg font-bold">৳{product.sprice}</span>
                    </p>

                    <div className="flex justify-center">
                      <Button
                        link={`/single-product/${product._id}`}
                        classname="text-sm"
                      >
                        {language === 'en' ? 'View Details' : 'অপশন দেখুন'}
                      </Button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };

  export default PopularProducts;
