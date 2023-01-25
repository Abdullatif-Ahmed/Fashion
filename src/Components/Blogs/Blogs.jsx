import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Arrow from "../Arrow/Arrow";
import ShowMoreBtn from "../Show More Btn/Show More Btn";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import blog1 from "../../Assets/blog1.webp";
import blog2 from "../../Assets/blog2.webp";
import blog3 from "../../Assets/blog3.webp";
import blog4 from "../../Assets/blog4.webp";

import styles from "./style.module.css";
const Blog = () => {
  let settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    cssEase: "ease-out",
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="sec-margin">
      <Container>
        <div>
          <div className="heading-sec">
            <h2>read our articles</h2>
          </div>
          <Slider {...settings} className="blogs_slider">
            <div className={styles.blog_card}>
              <div className={`${styles.blog_img_con}`}>
                <a aria-label="blog" href="/#">
                  <img width="380" height="250" src={blog1} alt="blog" />
                </a>
              </div>
              <div className={styles.content}>
                <ul
                  className={`d-flex align-items-center ${styles.meta} text-uppercase`}
                >
                  <li className="d-flex align-items-center">
                    <FaUserAlt size={14} className={`${styles.icon}`} />
                    <span>admin</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <FaCalendarAlt size={14} className={`${styles.icon}`} />
                    <span>october 20, 2022</span>
                  </li>
                </ul>
                <h4 className={`${styles.titel}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi, odit dicta corporis culpa...
                </p>
                <a href="/#" className={`${styles.blog_btn} text-uppercase`}>
                  <span>read more</span>
                  <HiArrowNarrowRight className={styles.blog_btn_icon} />
                </a>
              </div>
            </div>
            <div className={styles.blog_card}>
              <div className={`${styles.blog_img_con}`}>
                <a href="/#" aria-label="blog">
                  <img width="380" height="250" src={blog2} alt="blog" />
                </a>
              </div>
              <div className={styles.content}>
                <ul
                  className={` d-flex align-items-center ${styles.meta} text-uppercase`}
                >
                  <li className="d-flex align-items-center">
                    <FaUserAlt size={14} className={`${styles.icon}`} />
                    <span>admin</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <FaCalendarAlt size={14} className={`${styles.icon}`} />
                    <span>october 20, 2022</span>
                  </li>
                </ul>
                <h4 className={`${styles.titel}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi, odit dicta corporis culpa...
                </p>
                <a href="/#" className={`${styles.blog_btn} text-uppercase`}>
                  <span>read more</span>
                  <HiArrowNarrowRight className={styles.blog_btn_icon} />
                </a>
              </div>
            </div>
            <div className={styles.blog_card}>
              <div className={`${styles.blog_img_con}`}>
                <a href="/#" aria-label="blog">
                  <img width="380" height="250" src={blog3} alt="blog" />
                </a>
              </div>
              <div className={styles.content}>
                <ul
                  className={` d-flex align-items-center ${styles.meta} text-uppercase`}
                >
                  <li className="d-flex align-items-center">
                    <FaUserAlt size={14} className={`${styles.icon}`} />
                    <span>admin</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <FaCalendarAlt size={14} className={`${styles.icon}`} />
                    <span>october 20, 2022</span>
                  </li>
                </ul>
                <h4 className={`${styles.titel}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi, odit dicta corporis culpa...
                </p>
                <a href="/#" className={`${styles.blog_btn} text-uppercase`}>
                  <span>read more</span>
                  <HiArrowNarrowRight className={styles.blog_btn_icon} />
                </a>
              </div>
            </div>
            <div className={styles.blog_card}>
              <div className={`${styles.blog_img_con}`}>
                <a aria-label="blog" href="/#">
                  <img width="380" height="250" src={blog4} alt="blog" />
                </a>
              </div>
              <div className={styles.content}>
                <ul
                  className={` d-flex align-items-center ${styles.meta} text-uppercase`}
                >
                  <li className="d-flex align-items-center">
                    <FaUserAlt size={14} className={`${styles.icon}`} />
                    <span>admin</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <FaCalendarAlt size={14} className={`${styles.icon}`} />
                    <span>october 20, 2022</span>
                  </li>
                </ul>
                <h4 className={`${styles.titel}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi, odit dicta corporis culpa...
                </p>
                <a href="/#" className={`${styles.blog_btn} text-uppercase`}>
                  <span>read more</span>
                  <HiArrowNarrowRight className={styles.blog_btn_icon} />
                </a>
              </div>
            </div>
          </Slider>
          <a href="/#" className=" m-auto mt-5 d-block w-fit">
            <ShowMoreBtn text="view all blog" />
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Blog;
