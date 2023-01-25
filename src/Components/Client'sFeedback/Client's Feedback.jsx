import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Arrow from "../Arrow/Arrow";
import { FaQuoteLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import avatar1 from "../../Assets/avatar1.webp";
import avatar2 from "../../Assets/avatar2.webp";
import avatar3 from "../../Assets/avatar3.webp";
import avatar4 from "../../Assets/avatar4.webp";
import styles from "./style.module.css";

const ClientFeedback = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 1,
    speed: 800,
    cssEase: "linear",
    nextArrow: (
      <span>
        <Arrow dir="right" />
      </span>
    ),
    prevArrow: (
      <span>
        <Arrow dir="left" />
      </span>
    ),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section className="sec-margin">
      <Container>
        <div>
          <div className="heading-sec">
            <h2>client's feedback</h2>
          </div>
          <Slider {...settings}>
            <div
              className={`text-center ${styles.feedback_card} position-relative`}
            >
              <FaQuoteLeft size="43px" className="mb-4" />
              <p className="fst-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, nihil eius illum esse accusantium rerum.
              </p>
              <h4 className="text-capitalize">omar mohamed</h4>
              <ul className=" d-flex justify-content-center">
                <li className="">
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
              </ul>
              <div className={`${styles.avatar_con} position-absolute`}>
                <img
                  width="70"
                  height="70"
                  src={avatar1}
                  alt="avatar"
                  className=" border-4 border-white border
                 rounded-circle w-100 h-100"
                />
              </div>
            </div>
            <div
              className={`text-center ${styles.feedback_card} position-relative`}
            >
              <FaQuoteLeft size="43px" className="mb-4" />
              <p className="fst-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, nihil eius illum esse accusantium rerum.
              </p>
              <h4 className="text-capitalize">ahmed said</h4>
              <ul className=" d-flex justify-content-center">
                <li className="">
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
              </ul>
              <div className={`${styles.avatar_con} position-absolute`}>
                <img
                  width="70"
                  height="70"
                  src={avatar2}
                  alt="avatar"
                  className=" border-4 border-white border
                 rounded-circle w-100 h-100"
                />
              </div>
            </div>
            <div
              className={`text-center ${styles.feedback_card} position-relative`}
            >
              <FaQuoteLeft size="43px" className="mb-4" />
              <p className="fst-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, nihil eius illum esse accusantium rerum.
              </p>
              <h4 className="text-capitalize">mohsin adel</h4>
              <ul className=" d-flex justify-content-center">
                <li className="">
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
              </ul>
              <div className={`${styles.avatar_con} position-absolute`}>
                <img
                  width="70"
                  height="70"
                  src={avatar3}
                  alt="avatar"
                  className=" border-4 border-white border
                 rounded-circle w-100 h-100"
                />
              </div>
            </div>
            <div
              className={`text-center ${styles.feedback_card} position-relative`}
            >
              <FaQuoteLeft size="43px" className="mb-4" />
              <p className="fst-italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, nihil eius illum esse accusantium rerum.
              </p>
              <h4 className="text-capitalize">khaled ashraf</h4>
              <ul className=" d-flex justify-content-center">
                <li className="">
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
                <li>
                  <AiFillStar size="19px" />
                </li>
              </ul>
              <div className={`${styles.avatar_con} position-absolute`}>
                <img
                  width="70"
                  height="70"
                  src={avatar4}
                  alt="avatar"
                  className=" border-4 border-white border
                 rounded-circle w-100 h-100"
                />
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};
export default ClientFeedback;
