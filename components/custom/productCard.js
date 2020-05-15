import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.data.image} className="img-thumbnail" />
      <div style={{ margin: "0px 20px" }}>
        <h4 className="product-name">{props.data.productName}</h4>
        <p>SKU : {props.data.id}</p>
        <h3 className="product-price">{props.data.price}</h3>
      </div>
      <div className="card-buy-button">
        <Link href={`/productDetail/${props.data.id}`} as={`/productDetail?id=${props.data.id}`}>
          <a>
            <ShoppingCartOutlined /> Buy Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
