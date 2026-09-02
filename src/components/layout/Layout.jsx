import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PolicyBar from './PolicyBar';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <PolicyBar />
      <Footer />
    </>
  );
}
