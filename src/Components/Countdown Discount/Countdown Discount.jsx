import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import styles from "./style.module.css";
import sale from "../../Assets/sale.webp";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountdownDiscount = () => {
  const navigate = useNavigate();
  let [date, setDate] = useState(6564152505);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setDays(Math.trunc(date / (1000 * 60 * 60 * 24)));
      setHours(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setminutes(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.trunc((date % (1000 * 60)) / 1000));
      setDate(date - 1000);
    }, 1000);

    if (date < 0) {
      clearInterval(int);
    }
    return () => clearInterval(int);
  });
  return (
    <section className={`${styles.countdown_sec} sec-margin text-center`}>
      <Container>
        <Row className="align-items-center">
          <Col xs="12" lg="6">
            <div className={styles.countdown_content}>
              <h2 className={`${styles.countdown_heading} text-capitalize`}>
                special discount offer for shoes, boots & sneakers items
              </h2>
              <p className={`${styles.countdown_desc}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis fugiat aut deleniti cupiditate a commodi placeat,
                perferendis vitae ab magni?
              </p>
              <div className={`d-flex justify-content-center mb-5`}>
                <span
                  className={`${styles.countdown_con} px-2 px-sm-4 position-relative`}
                >
                  <span className={`${styles.countdown_num}`}>
                    {days > 9 ? days : "0" + days}
                  </span>
                  <span className={`${styles.countdown_sub} text-capitalize`}>
                    days
                  </span>
                </span>

                <span
                  className={`${styles.countdown_con} px-2 px-sm-4 position-relative`}
                >
                  <span className={`${styles.countdown_num}`}>
                    {hours > 9 ? hours : "0" + hours}
                  </span>
                  <span className={`${styles.countdown_sub} text-capitalize`}>
                    hours
                  </span>
                </span>

                <span
                  className={`${styles.countdown_con} px-2 px-sm-4 position-relative`}
                >
                  <span className={`${styles.countdown_num}`}>
                    {minutes > 9 ? minutes : "0" + minutes}
                  </span>
                  <span className={`${styles.countdown_sub} text-capitalize`}>
                    minutes
                  </span>
                </span>

                <span
                  className={`${styles.countdown_con} px-2 px-sm-4 position-relative`}
                >
                  <span className={`${styles.countdown_num}`}>
                    {seconds > 9 ? seconds : "0" + seconds}
                  </span>
                  <span className={`${styles.countdown_sub} text-capitalize`}>
                    seconds
                  </span>
                </span>
              </div>
              <Button
                aria-label="go to products page"
                className="btn1 mx-auto"
                onClick={() =>
                  navigate("/sale/sale-shoes-&-sneakers/cat?categoryId=1935")
                }
              >
                <HiOutlineShoppingBag size="17px" /> <span>shop now</span>
              </Button>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <div>
              <img
                width="500"
                height="500"
                src={sale}
                alt="sale"
                className="w-100 h-auto"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default CountdownDiscount;
