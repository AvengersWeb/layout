// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// icons
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

import review1 from '/images/home/cover1/review1.webp';
import review2 from '/images/home/cover1/review2.webp';
import review3 from '/images/home/cover1/review3.webp';

import useAuth from '../../hooks/useAuth';

const testimonials = [
  {
    comment:
      'Sleek sophistication meets precision in this timepiece. Its minimalist design complements any style, while impeccable craftsmanship ensures lasting quality. A true blend of form and function.',
    img: review1,
    name: 'John Doe',
    designation: 'Customer',
  },
  {
    comment:
      'Elegance redefined. This watch seamlessly merges classic charm with modern innovation. Its timeless appeal and reliable performance make it a must-have for every discerning wrist.',
    img: review2,
    name: 'Jane Bope',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel. Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: review3,
    name: 'Saad Hasan',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores . Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: review1,
    name: 'Shafayetur Rahman',
    designation: 'Customer',
  },
  {
    comment:
      'Qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel. Corrupti exercitationem rem facere distinctio quibusdam placeat ratione ut accusamus fugit neque.',
    img: review2,
    name: 'John Doe',
    designation: 'Customer',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique, iure facere, qui ut vero numquam quae aut mollitia inventore dolores consectetur temporibus esse quo excepturi hic vel.',
    img: review3,
    name: 'Kamal Malik',
    designation: 'Customer',
  },
];

export default function Testimonial() {
  const { language } = useAuth();

  return (
    <section className="py-20 md:py-36 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold uppercase accent-color">
            {language === 'en'
              ? 'What People Are Saying About Us'
              : 'আমাদের রিভিউ'}
          </h2>
          <div className="flex gap-x-4 justify-center items-center">
            <button className="arrow-left">
              <FaArrowLeft size={30} />
            </button>
            <button className="arrow-right">
              <FaArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
      {/* testimonial */}
      <div>
        <div className="pl-4 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-32"></div>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          pagination={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-12 text-center py-12 p-4"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide
              className="max-w-[500px] bg-white shadow-light rounded p-4 md:p-8 xl:p-12 font-secondary"
              key={i}
            >
              <div>
                <div className="flex justify-between items-center gap-x-4">
                  <div className="text-start flex flex-col gap-y-2 w-2/3">
                    <h6>{item.name}</h6>
                    <div className="flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-sm">{item.comment}</p>
                  </div>
                  <div className="w-1/3">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
