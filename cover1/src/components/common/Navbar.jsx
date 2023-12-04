import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingBasket } from 'react-icons/fa';

import logo from '/images/logo.webp';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { pathname } = useLocation();

  const [active, setActive] = useState(pathname);
  const [open, setIsOpen] = useState(false);

  const { total, language, setLanguage } = useAuth();

  const languageHandler = () => {
    if (language === 'en') {
      setLanguage('bn');
    } else {
      setLanguage('en');
    }
  };

  const navData = [
    {
      text: 'Home',
      textBn: 'হোম',
      link: '/',
    },
    {
      text: 'Shop',
      textBn: 'শপ',
      link: '/shop',
    },
    {
      text: 'Cart',
      textBn: 'ব্লগ',
      link: '/cart',
    },
    {
      text: 'Contact Us',
      textBn: 'যোগাযোগ',
      link: '/contact',
    },
  ];

  return (
    <div className="bg-white shadow w-full text-4xl py-3 font-secondary fixed top-0 z-[11111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3">
          {/* nav */}
          {/* desktop navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-x-6 text-base uppercase">
              {navData.map((item, i) => (
                <Link
                  to={item.link}
                  onClick={() => setActive(item.link)}
                  className={`${active === item.link && 'font-bold'}`}
                  key={i}
                >
                  <li>{language === 'en' ? item.text : item.textBn}</li>
                </Link>
              ))}
            </ul>
          </div>
          {/* mobile navigation hamburger menu */}
          <div className="flex items-center lg:hidden">
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu />
            </div>
          </div>
          {/* logo */}
          <Link to="/" className="flex justify-center items-center">
            <img src={logo} alt="" className="max-w-[60px]" />
          </Link>
          {/* cart */}
          <div className="flex justify-end items-center gap-x-4">
            <Link
              to="/cart"
              className="text-xl flex gap-1 items-center hover:text-sky-700 duration-500 whitespace-nowrap"
            >
              <p className="text-base font-bold">৳{total}</p>
              <FaShoppingBasket />
            </Link>
            <p
              className="text-base font-bold cursor-pointer uppercase"
              onClick={languageHandler}
            >
              {language}
            </p>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`${
          open ? 'translate-x-0' : '-translate-x-full'
        } block lg:hidden transition duration-200 absolute h-screen w-screen bg-white top-0 left-0 z-50`}
      >
        <div
          className="absolute top-4 right-5 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex flex-col gap-y-4 text-xl uppercase text-center">
            {navData.map((item, i) => (
              <Link
                to={item.link}
                onClick={() => (setActive(item.link), setIsOpen(false))}
                className={`${active === item.link && 'font-bold'}`}
                key={i}
              >
                <li>{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
