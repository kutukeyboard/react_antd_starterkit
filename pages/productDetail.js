import { Card, Button, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const dummyData = [
  {
    id: "1",
    productName: "Trello Course",
    price: 100000,
    description: "10 day intensive course, learn to use trello.",
    image: "https://image.flaticon.com/icons/png/128/174/174874.png",
  },
  {
    id: "2",
    productName: "MS Excel for data engineer",
    price: 100000,
    description: "Learn using MS Excel for data gathering and manipulation.",
    image: "https://image.flaticon.com/icons/png/128/888/888850.png",
  },
  {
    id: "3",
    productName: "Basic Adobe Illustrator",
    price: 100000,
    description: "Learn basic vector design using adobe illustrator.",
    image: "https://image.flaticon.com/icons/png/128/552/552222.png",
  },
  {
    id: "4",
    productName: "Present Like a Pro",
    price: 100000,
    description: "Learn how to compose best presentation for any needs.",
    image: "https://image.flaticon.com/icons/png/128/888/888874.png",
  },
  {
    id: "5",
    productName: "Photoshop for photographers",
    price: 100000,
    description: "Learn how edit photo using adobe photoshop.",
    image: "https://image.flaticon.com/icons/png/128/552/552220.png",
  },
  {
    id: "6",
    productName: "Build Instagram Business",
    price: 100000,
    description: "Learn how create online store using Instagram.",
    image: "https://image.flaticon.com/icons/svg/1409/1409946.svg",
  },
];

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const router = useRouter();

  const getProduct = () => {};

  useEffect(() => {
    if (router.query.id != undefined) {
      setProduct(dummyData.find((r) => r.id == router.query.id));
    }
  }, [router.query]);

  return (
    <div style={{ marginBottom: 50 }}>
      {product && (
        <Row gutter={16}>
          <Col md={4} sm={24}>
            <img src={product.image} />
          </Col>
          <Col md={12} sm={24}>
            <h1>{product.productName}</h1>
            <h3>Price : {product.price}</h3>
            <p>{product.description}</p>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetail;
