import Nav from './Nav';
import Footer from './Footer';
import { useRouter } from 'next/router';
const Layout = (props) => {
  const router = useRouter();
  return (
    <>
      <Nav path={`${router.pathname}`} />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
