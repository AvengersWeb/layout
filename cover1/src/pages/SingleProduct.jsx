import { useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SingleProduct = () => {
  const product = useLoaderData();
  const { language } = useAuth();
  const {
    featured_image,
    gallery_image,
    rprice,
    sprice,
    title,
    size,
    color,
    desc,
  } = product;
  const [activeImage, setActiveImage] = useState(featured_image);
  const [quantity, setQuantity] = useState(1);
  const [choosenSize, setChoosenSize] = useState('');
  const [choosenColor, setChoosenColor] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();

    const productToAdd = { ...product, quantity, choosenColor, choosenSize };
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCartItems, productToAdd];

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    navigate('/cart');
  };

  return (
    <div className="pb-12 pt-28 md:pb-20 lg:pb-28 lg:pt-36">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:gap-10 md:grid-cols-2">
          {/* images */}
          <div>
            <div className="box-border overflow-hidden rounded-lg">
              <img
                src={activeImage}
                alt=""
                className="hover:scale-110 duration-700 max-h-[500px] w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 my-5">
              <img
                src={featured_image}
                alt=""
                className="rounded-lg w-[80px] h-[80px] object-cover cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(featured_image)}
              />
              <img
                src={gallery_image}
                alt=""
                className="rounded-lg w-[80px] h-[80px] object-cover cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(gallery_image)}
              />
            </div>
          </div>
          {/* contents */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
            <p className="mb-4">
              <span className="text-lg font-bold text-red-500 opacity-75 line-through">
                ${rprice}
              </span>
              <span className="text-2xl font-bold text-black"> ${sprice}</span>
            </p>
            <form
              action=""
              onSubmit={(e) => handleAddToCart(e)}
              className="bg-white rounded black-shadow p-6 md:px-10"
            >
              {/* input group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between mt-6">
                {/* Size */}
                <div className="flex flex-col gap-y-2 w-full">
                  <label htmlFor="size" className="form-label">
                    {language === 'en' ? 'Size' : 'সাইজ'}
                  </label>
                  <select
                    name="size"
                    required
                    value={choosenSize}
                    onChange={(e) => setChoosenSize(e.target.value)}
                    className="rounded input-with-shadow text-lg font-bold !focus:outline-0"
                  >
                    <option value="" hidden defaultChecked>
                      {language === 'en' ? 'Select Size' : 'সাইজ দিন'}
                    </option>
                    {size?.map((sizeOption, index) => (
                      <option
                        className="text-gray-700 py-3"
                        key={index}
                        value={sizeOption}
                      >
                        {sizeOption}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Color */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="color" className="form-label">
                    {language === 'en' ? 'Color' : 'কালার'}
                  </label>
                  <select
                    name="color"
                    required
                    value={choosenColor}
                    onChange={(e) => setChoosenColor(e.target.value)}
                    className="rounded input-with-shadow text-lg font-bold !focus:outline-0"
                  >
                    <option value="" hidden defaultChecked>
                      {language === 'en' ? 'Select Color' : 'কালার দিন'}
                    </option>
                    {color?.map((colorOption, index) => (
                      <option
                        className="text-gray-700 py-3"
                        key={index}
                        value={colorOption}
                      >
                        {colorOption}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Quantity */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="quantity" className="form-label">
                    {language === 'en' ? 'Quantity' : 'পরিমাণ'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    required
                    className="input-with-shadow"
                  />
                </div>
              </div>
              <div>
                <button
                  className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6 w-full"
                  type="submit"
                >
                  {language === 'en' ? ' Add To Cart' : 'কার্টে যোগ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* description */}
        <div className="mt-6">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">
            {language === 'en' ? 'Product Details' : 'প্রডাক্টের বিবরণী'}
          </h2>
          <p className="font-secondary leading-loose max-w-4xl text-justify">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
