import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
