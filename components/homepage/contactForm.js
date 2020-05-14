import { Form, Input, InputNumber, Button, Typography } from "antd";

const { Title } = Typography;

const layout = {
  labelCol: { md: 8, sm: 10 },
  wrapperCol: { md: 8, sm: 14 },
};

const onFinish = (values) => {
  console.log(values);
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ContactForm = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title style={{ textAlign: "center" }}>Contact us</Title>
      <Form {...layout} name="contactForm" validateMessages={validateMessages} onFinish={onFinish}>
        <Form.Item name="fromName" label="Name" rules={[{ required: true, min: 3, max: 255 }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", required: true, min: 3, max: 255 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="message" label="Message" rules={[{ required: true, min: 3, max: 255 }]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
