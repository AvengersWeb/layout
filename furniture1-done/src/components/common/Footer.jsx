import logo from '/images/logo.webp';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const Footer = () => {
  const { language } = useAuth();

  return (
    <div className="bg-black py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-4 justify-center items-center text-center">
          <img src={logo} alt="" className="max-w-[100px]" />
          <p className="font-secondary">
            {language === 'en'
              ? 'Connect with us today'
              : 'আমাদের সাথেই থাকুন ।'}
          </p>
          <div className="flex items-center gap-4 justify-center text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <div className="divider mt-6 mb-4" />
          <p className="font-secondary text-sm">
            © 2023. Made with ❤️ by Avengers Web
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
