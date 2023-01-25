import { Container } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import ShowMoreBtn from "../Show More Btn/Show More Btn";
import { GiPriceTag } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import styles from "./style.module.css";

const BrowseByTopNiche = () => {
  return (
    <section className="sec-margin">
      <Container>
        <div>
          <div className="heading-sec">
            <h2>browse by top niche</h2>
          </div>
          <nav className={styles.nav_tabs}>
            <ul className="mb-4 rounded-3 border-bottom-0 bg-white d-flex justify-content-center p-4 align-items-center flex-column flex-sm-row">
              <li className={styles.nav_item}>
                <NavLink className={styles.nav_link} to="top-order">
                  <GiPriceTag className={styles.tab_icon} size="17" /> top order
                </NavLink>
              </li>

              <li className={styles.nav_item}>
                <NavLink className={styles.nav_link} to="top-rating">
                  <AiFillStar className={styles.tab_icon} size="17" /> top
                  rating
                </NavLink>
              </li>

              <li className={styles.nav_item}>
                <NavLink className={styles.nav_link} to="top-discount">
                  <TbDiscount2 className={styles.tab_icon} size="17" /> top
                  discount
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
          <Link
            to="/outlet/view-all/cat?categoryId=27396"
            className=" m-auto mt-4 d-block w-fit"
          >
            <ShowMoreBtn text="show more" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default BrowseByTopNiche;
