import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SingleItem from '../SingleItem';
import Loader from '../Loader';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper/modules';

import productOne from '/images/home/watch1/product3.webp';
import productTwo from '/images/home/watch1/product4.webp';
import productThree from '/images/home/watch1/product5.webp';
import productFour from '/images/home/watch1/product6.webp';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const PopularProducts = () => {
  const { language } = useAuth();
  const axiosPublic = useAxiosPublic();

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
                  centeredSlides={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={false}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
                  modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                  className="mySwiper mt-6 text-center"
                >
                  {data?.map((product, i) => (
                    <SwiperSlide className="max-w-[400px] p-3" key={i}>
                      <SingleItem key={product._id} product={product} />
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="mySwiper mt-6 text-center"
        >
          {dummyData?.map((product, i) => (
            <SwiperSlide
              className="bg-white border border-gray-200 shadow-light p-3"
              key={i}
            >
              <Link
                to={product._id ? `/single-product/${product._id}` : `/shop`}
              >
                <div className="flex justify-center items-center">
                  <img
                    src={product.featured_image}
                    alt=""
                    className="object-cover text-center"
                  />
                </div>
                <div className="flex flex-col gap-y-2 py-4 px-4">
                  <h4 className="text-base text-center font-bold font-primary hover:text-primary duration-500 overflow-hidden text-ellipsis line-clamp-1">
                    {product.title}
                  </h4>
                  <p className="mb-4 text-center">
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
