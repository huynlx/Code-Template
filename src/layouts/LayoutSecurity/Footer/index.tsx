import { Layout } from 'antd';

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff'
};

const Footer = () => {
  return (
    <Layout.Footer className="bg-white" style={footerStyle}>
      <div className="text-black">Footer</div>
    </Layout.Footer>
  );
};

export default Footer;
