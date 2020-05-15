import { useEffect, useState } from "react";

import { Row, Col, PageHeader, Descriptions } from "antd";
import { useRouter } from "next/router";

const BlogList = () => {
  const router = useRouter();

  return (
    <div style={{ marginTop: "20px" }}>
      <Row gutter={[16, 26]}>
        <Col span={12}>
          <Row gutter={16}>
            <Col md={4} sm={24}>
              <img
                src="https://miro.medium.com/max/1400/1*GzfZZNWFeQ3kKJsKeKy7_A.jpeg"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md={20} sm={16}>
              <h1>[20/02/2020] Title</h1>
              <h3>Author : James Mathew</h3>
              <p>Body</p>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={8}>
            <Col md={4} sm={24}>
              <img
                src="https://miro.medium.com/max/1400/1*GzfZZNWFeQ3kKJsKeKy7_A.jpeg"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md={20} sm={16}>
              <h1>[20/02/2020] Title</h1>
              <h3>Author : James Mathew</h3>
              <p>Body</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default BlogList;
