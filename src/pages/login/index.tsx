import { Button, Card, Form, Input, Layout } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useLoginMutation } from 'src/service/user';
import { localStorage } from 'src/utils/storage';
import { useNavigate } from 'react-router-dom';
type LoginForm = {
  username: string;
  password: string;
};

const Login = (): React.ReactNode => {
  const [form] = Form.useForm<LoginForm>();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const onFinish = (values: LoginForm) => {
    login(values)
      .unwrap()
      .then((res: any) => {
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/home');
      });
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <div style={{ margin: '200px auto 0', width: '500px' }}>
        <h1 style={{ textAlign: 'center' }}>会议室预定系统-后台管理</h1>
        <Card style={{ marginTop: '20px' }} variant="borderless">
          <Form
            form={form}
            labelCol={{ span: 4 }}
            style={{ marginTop: '20px' }}
            onFinish={onFinish}
          >
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
              <Input size="large" prefix={<UserOutlined />} placeholder="用户名" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password size="large" prefix={<LockOutlined />} placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                style={{ width: '100%' }}
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
