import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductCard = (props) => {
  console.log(props.data);
  return (
    <Card
      hoverable
      cover={<img src={props.data.image} className="img-thumbnail" />}
      actions={[<ShoppingCartOutlined />]}
      className="product-card"
    >
      <h3 className="product-name">{props.data.productName}</h3>
      <p className="product-price">{props.data.price}</p>
    </Card>
  );
};

export default ProductCard;
