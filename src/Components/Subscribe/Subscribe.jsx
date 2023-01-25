import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Subscribe = () => {
  return (
    <section className={`${styles.subscribe_sec} position-relative`}>
      <div
        className={`${styles.overlay} position-absolute top-0 start-0 bottom-0 end-0`}
      ></div>
      <Container>
        <div>
          <Row className="align-items-center">
            <Col xs="12" md="5" lg="6" xl="7">
              <div>
                <h2>Get 20% Discount For Subscriber</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </Col>
            <Col xs="12" md="7" lg="6" xl="5">
              <form action="#" className="d-sm-flex align-items-sm-center">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-100"
                />
                <button className="text-uppercase" aria-label="subscribe">
                  <MdOutlineAlternateEmail className={styles.icon} />
                  <span>Subscribe</span>
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default Subscribe;
