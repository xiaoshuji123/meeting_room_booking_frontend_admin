import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 解决antd v5在react19中使用的问题
import '@ant-design/v5-patch-for-react-19';
import 'normalize.css';
import './styles/index.less';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
