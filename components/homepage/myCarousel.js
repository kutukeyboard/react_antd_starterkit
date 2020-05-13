import { Carousel } from "antd";

const MyCarousel = (props) => {
  return (
    <Carousel autoplay style={{ backgroundColor: "#C0EAF9" }}>
      {props.data.map((r, i) => {
        return (
          <a key={i} href={r.link}>
            <img src={r.image} alt={r.altText} className="carousel-image" />
          </a>
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;
