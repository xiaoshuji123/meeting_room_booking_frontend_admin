import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Layout: {
            bodyBg: '#f5f7fa',
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
