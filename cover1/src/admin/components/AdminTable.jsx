import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loader from '../../components/Loader';

const AdminTable = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosSecure
        .get('/api/v1/allproducts')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });
  console.log(data);

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await axiosSecure.delete(`/api/v1/allproduct/${id}`);
        // console.log(res.data);
        if (res.data._id) {
          // refetch to update the ui
          refetch();

          swal(' Your  file has been deleted!', {
            icon: 'success',
          });
        }
      } else {
        swal('Your file is safe!');
      }
    });
  };

  return (
    <div className="my-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container px-4 mx-auto">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Manage Products
        </h2>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.length === 0 ? (
              <p className="text-center text-xl font-semibold">No Data Found</p>
            ) : (
              <Table striped className="relative">
                <Table.Head>
                  <Table.HeadCell className="text-start">
                    Thumbnail
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">Title</Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    Category
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    R. Price
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    S. Price
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">Edit</Table.HeadCell>
                  <Table.HeadCell className="text-start">Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {data?.map((product) => (
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
                      <Table.Cell className="whitespace-wrap font-bold text-gray-900 dark:text-white min-w-[200px]">
                        {product.title}
                      </Table.Cell>
                      <Table.Cell>{product.category}</Table.Cell>
                      <Table.Cell>${product.rprice}</Table.Cell>
                      <Table.Cell>${product.sprice}</Table.Cell>
                      <Table.Cell>
                        <Link
                          to={`/dashboard/edit-product/${product._id}`}
                          className="cursor-pointer hover:text-blue-800"
                        >
                          <FaEdit />
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        <FaTrash
                          className="text-red-500 cursor-pointer"
                          onClick={() => handleDelete(product._id)}
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminTable;
