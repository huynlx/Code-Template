import { Layout, Menu } from 'antd';
import { FC } from 'react';
import { IParentMenu } from 'src/models/layout.types';

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  position: 'fixed',
  zIndex: 1,
  height: '100%'
};

type SiderProps = {
  collapsed: boolean;
  menus: IParentMenu[];
};

/**
 * Functional component for rendering a Sider.
 *
 * @param {object} props - The props for the Sider component
 * @return {JSX.Element} The Sider component
 */
const Sider: FC<SiderProps> = ({ collapsed, menus }) => {
  return (
    <Layout.Sider
      className="bg-sider-color"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width="13%"
      style={siderStyle}>
      <div className="h-full flex justify-center items-center">Sider</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} items={menus} /> {/* TODO: */}
    </Layout.Sider>
  );
};

export default Sider;
