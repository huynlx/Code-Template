import { Suspense } from 'react';

// layouts
import Footer from 'src/layouts/Footer';
import Header from 'src/layouts/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>...Loading</div>}>
        <div>Layout</div>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
