import { useState } from 'react';
import SubscribeImage from '/images/home/watch1/hero1.webp';
import SubscribeImage2 from '/images/home/watch1/hero2.webp';
import Button from '../common/Button';

const SubscribeSection = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (phone.length === 11) {
      //
      console.log(phone);
    } else {
      setError(true);
    }
  };

  return (
    <section
      className="AW_SUBSCRIBE_1 py-12 md:py-20 lg:py-32 flex justify-center items-center bg-center bg-no-repeat bg-cover"
      id="AW_SUBSCRIBE_1"
      style={{ backgroundImage: `url(${SubscribeImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse gap-4 max-w-[1100px] mx-auto text-white">
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src={SubscribeImage2}
              alt=""
              className="h-[300px] md:h-[555px] w-full object-cover rounded-xl shadow-light"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12">
            <h4 className="text-3xl font-medium mb-4">{`Let's Keep in Touch`}</h4>
            <p className="font-secondary text-base">
              Subscibe with your phone number to get the latest news and sales
              about our products.
            </p>
            <form
              action=""
              onSubmit={handleSubmit}
              className="max-w-[500px] mt-12"
            >
              <div>
                <input
                  type="tel"
                  name="phone"
                  className="bg-transparent border-0 border-b w-full rounded-lg leading-10 duration-500"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mt-11 w-full">
                <Button
                  classname="w-full bg-black text-white pt-5 pb-4"
                  type="submit"
                >
                  Subscribe Now
                </Button>
              </div>
              {error && (
                <p className="font-secondary text-red-500 mt-4">
                  Please Enter a valid bangladeshi 11 digit phone number!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
