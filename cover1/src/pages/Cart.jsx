import { Table } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { setTotal, language } = useAuth();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(storedProducts);

    const sum = storedProducts.reduce(
      (acc, product) => acc + product.sprice * product.quantity,
      0
    );
    setTotalPrice(sum);
    setTotal(sum);
  }, [setTotal]);

  const handleDelete = (id) => {
    const remaining = products.filter((product) => product._id !== id);
    localStorage.setItem('cart', JSON.stringify(remaining));
    setProducts(remaining);

    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    const sum = storedProducts.reduce(
      (acc, product) => acc + product.sprice * product.quantity,
      0
    );
    setTotalPrice(sum);
    setTotal(sum);
  };

  return (
    <div className="pb-12 pt-28 md:pb-20 lg:pb-28 lg:pt-36">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          {language === 'en' ? 'Your Cart' : 'আপনার কার্ট'}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
          <div className="col-span-1 lg:col-span-3">
            <div className="black-shadow rounded-lg py-12 px-4 overflow-x-auto ">
              {products.length > 0 ? (
                <Table striped className="relative">
                  <Table.Head>
                    <Table.HeadCell className="text-start">
                      Thumbnail
                    </Table.HeadCell>
                    <Table.HeadCell className="text-start max-w-[200px]">
                      Title
                    </Table.HeadCell>
                    <Table.HeadCell className="text-start">
                      Quantity
                    </Table.HeadCell>
                    <Table.HeadCell className="text-start">
                      Total
                    </Table.HeadCell>
                    <Table.HeadCell className="text-start">
                      Remove
                    </Table.HeadCell>
                  </Table.Head>

                  <Table.Body className="divide-y">
                    {products.map((product) => (
                      <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={product._id}
                      >
                        <Table.Cell>
                          <img
                            src={product.featured_image}
                            alt=""
                            className="w-[80px] h-[80px] object-cover"
                          />
                        </Table.Cell>
                        <Table.Cell className=" font-bold text-gray-900 dark:text-white  max-w-[200px]">
                          {product.title}
                        </Table.Cell>
                        <Table.Cell>{product.quantity}</Table.Cell>
                        <Table.Cell>
                          ${product.sprice * [product.quantity]}
                        </Table.Cell>

                        <Table.Cell onClick={() => handleDelete(product._id)}>
                          <FaTrash className="text-red-500 cursor-pointer" />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              ) : (
                <p>
                  {language === 'en'
                    ? ' Your Cart is currently empty! Please select some product first'
                    : 'আপনার কার্টটি খালি ।'}
                </p>
              )}
              <div>
                <Link to="/shop">
                  <button
                    className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6 "
                    type="submit"
                  >
                    {language === 'en' ? 'Return To Shop' : 'শপ পেজ এ যান'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="black-shadow rounded-lg py-12 px-8">
              <div className="flex gap-4 justify-between">
                <h5 className="font-bold text-2xl">Total</h5>
                <h5 className="font-bold text-2xl">${totalPrice}</h5>
              </div>
              <div>
                <button
                  className={`bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6 w-full ${
                    products.length <= 0 && 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={products.length <= 0}
                  onClick={() => navigate('/checkout')}
                >
                  {language === 'en' ? 'Proceed To Checkout' : 'চেকআউট করুন'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
