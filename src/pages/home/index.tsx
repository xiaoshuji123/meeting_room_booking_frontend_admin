import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/header';

const { Content } = Layout;

const Home = (): React.ReactNode => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header></Header>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
};

export default Home;
