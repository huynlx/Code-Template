import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import { FC } from 'react';

const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: 64,
  padding: 0,
  lineHeight: '64px'
};

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Header className="fixed w-full bg-white" style={headerStyle}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64
        }}
      />
    </Layout.Header>
  );
};

export default Header;
