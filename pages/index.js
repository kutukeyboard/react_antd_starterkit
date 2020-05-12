import { Card, Row, Col } from "antd";
import MyCarousel from "../components/homepage/myCarousel";
import MycardDisplay from "../components/homepage/cardDisplay";
import ContactForm from "../components/homepage/contactForm";
const Home = (props) => {
  const getCarouselImages = () => {
    // get data from your api here

    const dummyCarouselData = [
      {
        id: 1,
        image: "/images/banner1.svg",
        altText: "",
        link: "",
      },
      {
        id: 2,
        image: "/images/banner2.svg",
        altText: "",
        link: "",
      },
    ];
    return dummyCarouselData;
  };

  const getCards = () => {
    // get data from your api here
    const dummyCardData = [
      {
        id: 1,
        image:
          "https://image.freepik.com/free-vector/online-courses-illustration-concept_23-2148525395.jpg",
        altText: "",
        link: "",
        title: "",
        Description: "",
      },
      {
        id: 2,
        image: "https://image.freepik.com/free-vector/online-courses-tutorials_23-2148529954.jpg",
        altText: "",
        link: "",
        title: "",
        Description: "",
      },
      {
        id: 3,
        image:
          "https://image.freepik.com/free-vector/online-tutorials-illustration-concept_23-2148525396.jpg",
        altText: "",
        link: "",
        title: "",
        Description: "",
      },
    ];

    return dummyCardData;
  };

  return (
    <div>
      {/* each section in hom page  are breakdown into seprate components so it can be swap and maintained more easy */}
      <MyCarousel data={getCarouselImages()} />
      <MycardDisplay data={getCards()} />
      <ContactForm />
    </div>
  );
};

export default Home;
