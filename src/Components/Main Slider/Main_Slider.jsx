import Carousel from "react-bootstrap/Carousel";
import styles from "./style.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import slide1 from "../../Assets/slide1.webp";
import slide2 from "../../Assets/slide2.webp";
import slide3 from "../../Assets/slide3.webp";
import slide4 from "../../Assets/slide4.webp";
import slide5 from "../../Assets/slide5.webp";
import slide6 from "../../Assets/slide6.webp";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Arrow from "../Arrow/Arrow";

const MainSlider = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Carousel
        nextIcon={<Arrow dir="right" />}
        prevIcon={<Arrow dir="left" />}
        className={`mb-4 ${styles.carousel} carousel-fade`}
      >
        <Carousel.Item className={`${styles.carousel_item}`}>
          <Container>
            <Row className="align-items-center">
              <Col md="3" className="d-none d-md-block">
                <div className="fade-left">
                  <img
                    className="w-100 h-auto"
                    src={slide3}
                    alt="slide"
                    width="150px"
                    height="190px"
                  />
                </div>
              </Col>
              <Col md="6">
                <div className={`text-center ${styles.caption}`}>
                  <h1 className="fade-down">sale under 15$</h1>
                  <p className="fade">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores, molestias delectus.
                  </p>

                  <Button
                    className="btn1 m-auto fade-up"
                    onClick={() => {
                      navigate("/sale/sale-under-$15/cat?categoryId=28235");
                    }}
                  >
                    <HiOutlineShoppingBag size="17px" /> <span>shop now</span>
                  </Button>
                </div>
              </Col>
              <Col md="3" className="d-none d-md-block">
                <div className="fade-right">
                  <img
                    className="w-100 h-auto"
                    src={slide4}
                    alt="slide"
                    width="150px"
                    height="190px"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item className={`${styles.carousel_item}`}>
          <Container>
            <Row className="align-items-center">
              <Col md="3" className="d-none d-md-block">
                <div className="fade-left">
                  <img
                    className="w-100 h-auto"
                    src={slide1}
                    alt="slide"
                    width="150px"
                    height="190px"
                  />
                </div>
              </Col>

              <Col md="6">
                <div className={`text-center ${styles.caption}`}>
                  <h1 className="fade-down">new collection of suits</h1>
                  <p className="fade">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate nulla dignissimos consectetur rem ut pariatur
                  </p>

                  <Button
                    className="btn1 m-auto fade-up"
                    onClick={() =>
                      navigate("/clothing/suits/cat?categoryId=5678")
                    }
                  >
                    <HiOutlineShoppingBag size="17px" /> <span>shop now</span>
                  </Button>
                </div>
              </Col>
              <Col md="3" className="d-none d-md-block">
                <div className="fade-right">
                  <img
                    className="w-100 h-auto"
                    src={slide2}
                    alt="slide"
                    width="150px"
                    height="190px"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item className={`${styles.carousel_item}`}>
          <Container>
            <Row className="align-items-center">
              <Col md="3" className="d-none d-md-block">
                <div className="fade-left">
                  <img
                    src={slide5}
                    alt="slide"
                    width="150px"
                    height="190px"
                    className="w-100 h-auto"
                  />
                </div>
              </Col>
              <Col md="6">
                <div className={`text-center ${styles.caption}`}>
                  <h1 className="fade-down">shop by brands</h1>
                  <p className="fade">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores, molestias delectus.
                  </p>

                  <Button
                    className="btn1 m-auto fade-up"
                    onClick={() => {
                      navigate("/brands/adidas/cat?categoryId=7113");
                    }}
                  >
                    <HiOutlineShoppingBag size="17px" /> <span>shop now</span>
                  </Button>
                </div>
              </Col>
              <Col md="3" className="d-none d-md-block">
                <div className="fade-right">
                  <img
                    className="w-100 h-auto"
                    src={slide6}
                    alt="slide"
                    width="150px"
                    height="190px"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
export default MainSlider;
