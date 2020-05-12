import { Card, Row, Col } from "antd";
const { Meta } = Card;

const CardDisplay = (props) => {
  return (
    <div className="card-layout">
      <Row gutter={24}>
        {props.data.map((r, i) => {
          return (
            <Col key={i} md={8} sm={24}>
              <a href={r.link}>
                <Card hoverable bordered={false} cover={<img alt={r.altText} src={r.image} />}>
                  <Meta title={r.title} description={r.description} />
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardDisplay;
