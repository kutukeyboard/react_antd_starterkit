import { useEffect, useState } from "react";

import ProductCard from "../components/custom/productCard";
import { PageHeader, Row, Col, Pagination } from "antd";
import { useRouter } from "next/router";

import ProductData from "../components/custom/productData";

const ProductCatalog = () => {
  const router = useRouter();
  const [listProduct, setListProduct] = useState();
  const [currentpage, setCurrentPage] = useState();
  const [totalData, setTotalData] = useState();

  const onPageChange = (page) => {
    router.push(`/productCatalog/${page}`, `productCatalog?p=${page}`);
  };

  const loadPagination = () => {
    return (
      <Pagination
        current={parseInt(currentpage)}
        onChange={onPageChange}
        total={totalData}
        pageSize={10}
        style={{ textAlign: "center", marginBottom: "20px" }}
      />
    );
  };

  const getProducts = async (slice, page) => {
    //get your list product from your api here

    // following is juat a dummy request
    const data = await ProductData(slice, page);
    setTotalData(data.totalData);
    setListProduct(data.data);
    return;
  };

  useEffect(() => {
    if (router.query.p != undefined) {
      setCurrentPage(router.query.p);
      getProducts(10, router.query.p);
    }
  }, [router.query.p]);

  return (
    <div>
      <PageHeader title="Product catalog" />
      <br />
      {listProduct && (
        <>
          <Row gutter={[24, 24]} className="product-card-layout">
            {listProduct.map((product, index) => {
              return (
                <Col md={4} sm={24} key={index}>
                  <ProductCard key={index} data={product} />
                </Col>
              );
            })}
          </Row>
          {loadPagination()}
        </>
      )}
    </div>
  );
};

export default ProductCatalog;
