import { Layout } from 'antd';

// layouts
import Footer from 'src/layouts/LayoutSecurity/Footer';
import Header from 'src/layouts/LayoutSecurity/Header';
import Sider from 'src/layouts/LayoutSecurity/Sider';

/**
 * Renders a wrapped layout with security components
 *
 * @return {JSX.Element} The wrapped layout with security components.
 */
const WrappedLayoutSecurity = () => {
  return (
    <Layout>
      {/* ---------------------------SIDER-------------------------- */}
      <Sider />
      {/* ---------------------------HEADER------------------------- */}
      <Header />
      {/* ---------------------------CONTENT------------------------ */}
      <Layout.Content>
        <div>WrappedPrivateLayout</div>
      </Layout.Content>
      {/* ---------------------------FOOTER------------------------- */}
      <Footer />
    </Layout>
  );
};

export default WrappedLayoutSecurity;
