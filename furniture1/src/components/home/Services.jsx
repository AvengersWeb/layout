import { RiSecurePaymentLine } from 'react-icons/ri';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { MdSupportAgent } from 'react-icons/md';
import { HiOutlineTruck } from 'react-icons/hi2';

const servicesData = [
  {
    icon: <RiSecurePaymentLine size={30} />,
    title: 'Secure Payment',
  },
  {
    icon: <IoReturnUpBackOutline size={30} />,
    title: '30 days return period',
  },
  {
    icon: <MdSupportAgent size={30} />,
    title: '24/7 customer support',
  },
  {
    icon: <HiOutlineTruck size={30} />,
    title: 'Flexible shipping',
  },
];

const Services = () => {
  return (
    <section className="py-12 border-y-2 border-gray-200 mb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 items-center">
          {servicesData?.map((item, i) => (
            <div
              className="flex justify-center sm:justify-start items-center gap-x-4"
              key={i}
            >
              {item.icon}
              <h4 className="font-bold text-xl">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
