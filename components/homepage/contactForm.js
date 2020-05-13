import { Form, Input, InputNumber, Button, Typography } from "antd";

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
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

const onFinish = (values) => {
  console.log(values);
};

const ContactForm = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Title style={{ textAlign: "center" }}>Contact us</Title>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={["user", "name"]} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={["user", "email"]} label="Email" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item name={["user", "message"]} label="Message">
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
