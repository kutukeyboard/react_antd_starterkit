import { Form, Input, Button, Checkbox } from "antd";

import { useRouter } from "next/router";

const SignupForm = () => {
  const router = useRouter();

  const getSignup = async (signupInfo) => {
    // cek login via your API here and return token

    return "1111";
  };

  const onFinish = async (values) => {
    const userToken = await getSignup(values);
    localStorage.setItem("userToken", userToken);
    localStorage.setItem("loginUser", values.email);

    router.reload();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-wrapper">
      <Form
        layout="vertical"
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
          className="login-form"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="login-form"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
