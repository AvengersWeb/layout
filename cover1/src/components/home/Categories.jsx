import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SingleItem from '../SingleItem';
import Loader from '../Loader';

import category1 from '/images/home/cover1/category1.webp';
import category2 from '/images/home/cover1/category2.webp';
import category3 from '/images/home/cover1/category3.webp';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { language } = useAuth();
  const axiosPublic = useAxiosPublic();

  const dummyData = [
    {
      featured_image: category1,
      title: 'Ultra Touch',
    },
    {
      featured_image: category2,
      title: 'Dark Side',
    },
    {
      featured_image: category3,
      title: 'Tringle',
    },
  ];

  return (
    <section className="py-12 md:py-20 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h4 className="text-xl lg:text-2xl uppercase font-bold tracking-widest">
            {language === 'en' ? 'Categories' : 'ক্যাটাগরি'}
          </h4>
        </div>

        {/* categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {dummyData.map((item, i) => (
            <Link
              to="/shop"
              className="relative overflow-hidden z-10 min-h-[350px] p-8 lg:p-12 flex justify-center items-end group"
              key={i}
            >
              <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 -z-10">
                <img
                  src={item?.featured_image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>
              <h4 className="bg-black text-white py-3 px-8 uppercase font-bold text-sm font-secondary tracking-widest">
                {item?.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
