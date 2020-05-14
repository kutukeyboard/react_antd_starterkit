import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <Card
      hoverable
      cover={<img src={props.data.image} className="img-thumbnail" />}
      className="product-card"
    >
      <h1>{props.data.id}</h1>
      <h3 className="product-name">{props.data.productName}</h3>
      <p className="product-price">{props.data.price}</p>
      <Link href={`/productDetail/${props.data.id}`} as={`/productDetail?id=${props.data.id}`}>
        <a>
          <ShoppingCartOutlined /> Buy Now
        </a>
      </Link>
    </Card>
  );
};

export default ProductCard;
