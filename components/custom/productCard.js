import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <Card
      hoverable
      cover={<img src={props.data.image} className="img-thumbnail" />}
      style={{ height: "100%" }}
    >
      <h2 className="product-name">{props.data.productName}</h2>
      <p>SKU : {props.data.id}</p>
      <h3 className="product-price">{props.data.price}</h3>
      <Link href={`/productDetail/${props.data.id}`} as={`/productDetail?id=${props.data.id}`}>
        <a>
          <ShoppingCartOutlined /> Buy Now
        </a>
      </Link>
    </Card>
  );
};

export default ProductCard;
