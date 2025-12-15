import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className={`flex-grow pt-12 md:pt-16`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
