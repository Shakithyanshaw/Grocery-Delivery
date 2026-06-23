import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

const AppLayout = () => {
  return (
    <>
      <Banner />
      <p>NavBar</p>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>Footer</p>
      <p>Cart Sidebar</p>
    </>
  );
};

export default AppLayout;
