import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import SingleProduct from '../pages/SingleProduct';
import Blog from '../pages/Blog';
import SingleBlog from '../pages/SingleBlog';
import Contact from '../pages/Contact';

// admin routes
import AdminHome from '../admin/pages/AdminHome';
import Dashboard from '../admin/pages/Dashboard';
import AddProduct from '../admin/pages/AddProduct';
import EditProduct from '../admin/pages/EditProduct';
import AllProducts from '../admin/pages/AllProducts';
// order routes
import OrderDetails from '../admin/pages/OrderDetails';
import OrderCompleted from '../admin/pages/OrderCompleted';
import OrderOnHold from '../admin/pages/OrderOnHold';
import OrderProcessing from '../admin/pages/OrderProcessing';
import EditOrder from '../admin/pages/EditOrder';
// blog routes
import AllBlogs from '../admin/pages/AllBlogs';
import AddBlog from '../admin/pages/AddBlog';
import EditBlog from '../admin/pages/EditBlog';
import UserDetails from '../admin/pages/UserDetails';
import PrivateRoute from './PrivateRoute';

//templates

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/single-product/:id',
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:1111/api/v1/allproducts/${params.id}`),
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:1111/api/v1/allblogs/${params.id}`),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  // admin routes
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/login',
        element: <AdminHome />,
      },

      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-product',
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-products',
        element: (
          <PrivateRoute>
            <AllProducts />,
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/edit-product/:id',
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:1111/api/v1/allproducts/${params.id}`),
      },
      {
        path: '/dashboard/user-details',
        element: (
          <PrivateRoute>
            <UserDetails />
          </PrivateRoute>
        ),
      },

      // order routes
      {
        path: '/dashboard/order-details',
        element: (
          <PrivateRoute>
            <OrderDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/order-completed',
        element: (
          <PrivateRoute>
            <OrderCompleted />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/order-processing',
        element: (
          <PrivateRoute>
            <OrderProcessing />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/order-onhold',
        element: (
          <PrivateRoute>
            <OrderOnHold />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/edit-order/:id',
        element: (
          <PrivateRoute>
            <EditOrder />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:1111/api/v1/allorders/${params.id}`),
      },

      //blog routes
      {
        path: '/dashboard/all-blogs',
        element: (
          <PrivateRoute>
            <AllBlogs />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-blog',
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/edit-blog/:id',
        element: (
          <PrivateRoute>
            <EditBlog />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:1111/api/v1/allblogs/${params.id}`),
      },
    ],
  },
]);

export default router;
