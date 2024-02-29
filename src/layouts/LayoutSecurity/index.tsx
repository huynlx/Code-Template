import { Flex, Layout } from 'antd';
import { FC, useState } from 'react';

// layouts
import Footer from 'src/layouts/LayoutSecurity/Footer';
import Header from 'src/layouts/LayoutSecurity/Header';
import Sider from 'src/layouts/LayoutSecurity/Sider';

// types
import { IParentMenu } from 'src/models/layout.types';

const { Content } = Layout;

interface LayoutSecurityProps {
  children: React.ReactNode;
  menus: IParentMenu[];
}

const layoutStyle = {
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: '100%'
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff'
};

/**
 * Renders a wrapped layout with security features.
 *
 * @param {LayoutSecurityProps} children - The children components to be rendered within the layout.
 * @return {JSX.Element} The rendered wrapped layout with security features.
 */
const WrappedLayoutSecurity: FC<LayoutSecurityProps> = ({ children, menus }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        {/* ----------------------------SIDER--------------------------- */}
        <Sider collapsed={collapsed} menus={menus} />
        <Layout>
          {/* ---------------------------HEADER------------------------- */}
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          {/* ---------------------------CONTENT------------------------ */}
          <Content className="bg-body-bg" style={contentStyle}>
            <section>{children}</section>
          </Content>
          {/* ---------------------------FOOTER------------------------- */}
          <Footer />
        </Layout>
      </Layout>
    </Flex>
  );
};

export default WrappedLayoutSecurity;
