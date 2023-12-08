import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import { FaTrash } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import swal from 'sweetalert';

const UserDetails = () => {
  const axiosPublic = useAxiosPublic()
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      axiosPublic
        .get('/api/user')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });
  console.log(data)

  if(isLoading){
    return <p>Loading</p>
  }

  const handleStatusChange = async (id) => {
    const updateStatus = await axiosPublic.patch(`/api/user/${id}`)
    if(updateStatus.data._id){
      console.log(updateStatus)
      console.log(updateStatus.data._id)
      swal('Congratulations', 'Your make a new admin', 'success');
      refetch()
    }
    console.log(id)
  }

  const handleDelete = (id) => {
    console.log(id)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to see this product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
          const res = await axiosPublic.delete(`/api/user/${id}`);
          if (res.data._id) {
              // refetch to update the ui
              refetch();
              swal("Your user has been deleted!", {
                icon: "success",
              });
          }
      }
      else {
        swal("Sorry we can not delete your user this time. Try again later.");
      }
  })
  }

  console.log(data)
  return (
    <div className="py-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          User Details
        </h2>
        <Table striped className="font-secondary relative">
          <Table.Head>
            <Table.HeadCell className="text-start">Role</Table.HeadCell>
            <Table.HeadCell className="text-start">Email</Table.HeadCell>
            <Table.HeadCell className="text-start">Make Admin</Table.HeadCell>
            <Table.HeadCell className="text-start">Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              data.map(user => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user._id}>
              <Table.Cell>
                <h4
                  className={`py-2 px-3 text-center inline-block rounded-full font-bold text-base text-white bg-blue-500 ${
                    user.role === 'user' && ' bg-green-500'
                  }  ${
                    user.role === 'admin' && 'bg-red-500'
                  }`}
                >
                  {user.role}
                </h4>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                {user.email}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
              {
            user.role !== 'admin' ? (
              <button 
          onClick={() => handleStatusChange(user._id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Make Admin</button>
            ) :(
              <button 
          disabled
          className="bg-three text-white font-bold py-2 px-4 rounded">Make Admin</button>
            )
          }
              </Table.Cell>

              <Table.Cell>
                <FaTrash className="text-red-500 cursor-pointer" 
                onClick={() => handleDelete(user._id)}
                />
              </Table.Cell>
            </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserDetails;
