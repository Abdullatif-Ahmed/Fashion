import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import {
  FaTruck,
  FaSyncAlt,
  FaHeadset,
  FaLock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  MdOutlineAlternateEmail,
  MdOutlinePhoneIphone,
  MdLocationOn,
} from "react-icons/md";

import logo from "../../Assets/logo.webp";
import googleStore from "../../Assets/google-store.webp";
import appStore from "../../Assets/app-store.webp";
import paypal from "../../Assets/paypal.webp";
import visa from "../../Assets/visa.webp";
import maestro from "../../Assets/maestro.webp";
import discover from "../../Assets/paypal.webp";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className={styles.footer_top}>
          <Container>
            <Row>
              <Col sm="6" lg="3">
                <div
                  className={`${styles.footer_top_con} d-flex align-items-start`}
                >
                  <div className={styles.icon_con}>
                    <i className={styles.icon}>
                      <FaTruck />
                    </i>
                  </div>
                  <div className={styles.footer_top_content}>
                    <h3 className="text-capitalize fs-5">free home delivery</h3>
                    <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                  </div>
                </div>
              </Col>
              <Col sm="6" lg="3">
                <div
                  className={`${styles.footer_top_con} d-flex align-items-start`}
                >
                  <div className={styles.icon_con}>
                    <i className={styles.icon}>
                      <FaSyncAlt />
                    </i>
                  </div>
                  <div className={styles.footer_top_content}>
                    <h3 className="text-capitalize fs-5">
                      instant return policy
                    </h3>
                    <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                  </div>
                </div>
              </Col>
              <Col sm="6" lg="3">
                <div
                  className={`${styles.footer_top_con} d-flex align-items-start`}
                >
                  <div className={styles.icon_con}>
                    <i className={styles.icon}>
                      <FaHeadset />
                    </i>
                  </div>
                  <div className={styles.footer_top_content}>
                    <h3 className="text-capitalize fs-5">
                      quick support system
                    </h3>
                    <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                  </div>
                </div>
              </Col>
              <Col sm="6" lg="3">
                <div
                  className={`${styles.footer_top_con} d-flex align-items-start`}
                >
                  <div className={styles.icon_con}>
                    <i className={styles.icon}>
                      <FaLock />
                    </i>
                  </div>
                  <div className={styles.footer_top_content}>
                    <h3 className="text-capitalize fs-5">secure payment way</h3>
                    <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.footer_bottom}>
          <Container>
            <Row>
              <Col sm="6" xl="3">
                <div className={styles.widget}>
                  <div className={styles.footer_logo_con}>
                    <img src={logo} alt="logo" className="w-100 h-100" />
                  </div>
                  <div className={styles.footer_desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nemo iusto facilis aliquam deserunt, eius doloremque
                    molestias. Natus
                  </div>
                  <ul className={`${styles.social}`}>
                    <li>
                      <a href="/#" aria-label="facebook">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="/#" aria-label="instagram">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="/#" aria-label="twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="/#" aria-label="linkedin">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm="6" xl="3">
                <div className={styles.widget}>
                  <div className={styles.footer_bottom_heading}>
                    <h3 className="text-capitalize fs-5">contact us</h3>
                  </div>
                  <ul className={`${styles.footer_content}`}>
                    <li className="d-flex align-items-center">
                      <MdOutlineAlternateEmail
                        className={styles.contact_icon}
                      />
                      <p>
                        <span>support@example.com</span>
                        <span>carrer@example.com</span>
                      </p>
                    </li>
                    <li className="d-flex align-items-center">
                      <MdOutlinePhoneIphone className={styles.contact_icon} />
                      <p>
                        <span>+140 246 895 45</span>
                        <span>+140 684 256 78</span>
                      </p>
                    </li>
                    <li className="d-flex align-items-center">
                      <MdLocationOn className={styles.contact_icon} />
                      <p>
                        <span>1Hd- 50, 010 Avenue, NY</span>
                        <span>90001 United States</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm="6" xl="3">
                <div className={styles.widget}>
                  <div className={styles.footer_bottom_heading}>
                    <h3 className="text-capitalize fs-5">quick links</h3>
                  </div>
                  <div
                    className={`${styles.linkes} d-flex justify-content-betwen`}
                  >
                    <ul>
                      <li>
                        <Link to="/login">My Account</Link>
                      </li>
                      <li>
                        <a href="/#"> New Arrivals</a>
                      </li>
                      <li>
                        <a href="/#">order history</a>
                      </li>
                      <li>
                        <a href="/#">order tracking</a>
                      </li>
                      <li>
                        <a href="/#">best seller</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/#">location</a>
                      </li>
                      <li>
                        <a href="/#">Affiliates</a>
                      </li>
                      <li>
                        <a href="/#">Contact</a>
                      </li>
                      <li>
                        <a href="/#">Carrer</a>
                      </li>
                      <li>
                        <a href="/#">faq</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm="6" xl="3">
                <div className={styles.widget}>
                  <div className={styles.footer_bottom_heading}>
                    <h3 className="text-capitalize fs-5">download app</h3>
                  </div>
                  <div className={styles.footer_desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nemo iusto facilis aliquam deserunt, eius doloremque
                    molestias. Natus
                  </div>
                  <div>
                    <Row>
                      <Col>
                        <a href="/#">
                          <img
                            src={googleStore}
                            alt="google store"
                            className="w-100"
                          />
                        </a>
                      </Col>
                      <Col>
                        <a href="/#">
                          <img
                            src={appStore}
                            alt="app store"
                            className="w-100"
                          />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <div
              className={`${styles.bottom_part} d-flex align-items-center flex-column flex-md-row justify-content-between`}
            >
              <p>
                © All Copyrights Reserved by <Link to="/">Fashion</Link>
              </p>
              <div>
                <a href="/#">
                  <img src={paypal} alt="paypal" />
                </a>
                <a href="/#">
                  <img src={visa} alt="visa" />
                </a>
                <a href="/#">
                  <img src={discover} alt="discover" />
                </a>
                <a href="/#">
                  <img src={maestro} alt="maestro" />
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
