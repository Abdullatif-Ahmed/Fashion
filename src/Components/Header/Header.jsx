import styles from "./style.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../Assets/logo.webp";
import userLogo from "../../Assets/user.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaSearch, FaBars } from "react-icons/fa";
import { AiFillHeart, AiTwotoneHome, AiFillShop } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useCallback, useState } from "react";
import MegaMenu from "./Mega Menu/Mega Menu";
import MobileMegaMenu from "./Mobile Mega Menu/Mobile Mega Menu";
import CartModel from "../Cart Model/Cart Model";
import { useSelector } from "react-redux";
import WishList from "../Wish List/Wish List";
import { useEffect } from "react";
const Header = () => {
  const wishListQuantity = useSelector((state) => state.WishList.quantity);
  const [openMediaSearch, setOpenMediaSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const quantity = useSelector((state) => state.CartReducer.quantity);
  const Navigate = useNavigate();
  const q = new URLSearchParams(useLocation().search).get("q");
  const [searchQ, setSearchQ] = useState("");
  useEffect(() => {
    setSearchQ(q ? q.trim() : "");
  }, [q]);

  function handelSearchForm(e) {
    e.preventDefault();
    if (searchQ.trim().length !== 0) Navigate(`/search?q=${searchQ.trim()}`);
  }

  return (
    <header>
      <div className=" d-none d-lg-block">
        <Container>
          <Row className="justify-content-between pt-3 pb-3">
            <Col className="flex-2 d-flex justify-content-between align-items-center">
              <Link to="/" className={styles.logo_container}>
                <img src={logo} className="w-100 h-100" alt="logo" />
              </Link>
              <Link
                to="/login"
                className={`${styles.account_container} d-block`}
              >
                <div className={` d-flex align-items-center`}>
                  <Image
                    thumbnail
                    roundedCircle
                    src={userLogo}
                    className={`${styles.account_img} me-2 `}
                    alt="user logo"
                  />
                  <span>Join</span>
                </div>
              </Link>
            </Col>
            <Col className="flex-4  d-lg-flex justify-content-between align-items-center">
              <form
                onSubmit={handelSearchForm}
                className={`${styles.search_group} d-flex rounded-3 w-100 position-relative`}
              >
                <input
                  className={`${styles.search_input} ps-3 w-100`}
                  type="search"
                  placeholder="search anything..."
                  onInput={(e) => setSearchQ(e.target.value)}
                  value={searchQ}
                />
                <button
                  type="submit"
                  aria-label="search"
                  className={`${styles.search_btn}`}
                >
                  <FaSearch />
                </button>
              </form>
            </Col>
            <Col className="flex-1  justify-content-end align-items-center d-lg-flex">
              <button
                aria-label="open whishList"
                onClick={() => setOpenWishList(true)}
                className={`${styles.widget} position-relative me-4 rounded-circle d-flex justify-content-center align-items-center`}
              >
                <AiFillHeart size="17px" />
                <Badge
                  bg="none"
                  className={`${styles.badge} position-absolute top-0 start-100 translate-middle border border-2 border-white rounded-circle`}
                >
                  {wishListQuantity}
                </Badge>
              </button>
              <button
                aria-label="open cart"
                onClick={() => setOpenCart(true)}
                className={`${styles.widget} position-relative rounded-circle d-flex justify-content-center align-items-center`}
              >
                <HiOutlineShoppingBag size="17px" />
                <Badge
                  bg="none"
                  className={`${styles.badge}  position-absolute top-0 start-100 translate-middle border border-2 border-white rounded-circle`}
                >
                  {quantity}
                </Badge>
              </button>
            </Col>
          </Row>
        </Container>
        <MegaMenu />
      </div>
      <div className={`${styles.media_header} d-lg-none pt-2 pb-2`}>
        <Container>
          <div
            className={`  d-flex justify-content-between align-items-center pt-2 pb-2`}
          >
            <div className="d-flex align-items-center">
              <button aria-label="open menu" onClick={() => setOpen(true)}>
                <FaBars size="22px" />
              </button>
              <Link
                to="/login"
                className={`${styles.account_container} d-block ms-1`}
              >
                <div className={` d-flex align-items-center`}>
                  <Image
                    thumbnail
                    roundedCircle
                    src={userLogo}
                    className={`${styles.account_img} me-2 `}
                  />
                </div>
              </Link>
            </div>
            <Link to="/" className={styles.logo_container}>
              <img src={logo} className="w-100 h-100" alt="..." />
            </Link>
            <button
              aria-label="open media search"
              className={`${styles.search_btn} rounded-circle`}
              onClick={() => setOpenMediaSearch((prev) => !prev)}
            >
              {openMediaSearch ? <GrClose /> : <FaSearch />}
            </button>
          </div>
          {openMediaSearch && (
            <form
              className={`${styles.search_group} d-flex rounded-3 w-100`}
              onSubmit={handelSearchForm}
            >
              <input
                className={`${styles.search_input} ps-3 w-100`}
                type="search"
                placeholder="search anything..."
                onInput={(e) => setSearchQ(e.target.value)}
                value={searchQ}
              />
              <button
                type="submit"
                aria-label="search"
                className={`${styles.search_btn}`}
              >
                <FaSearch />
              </button>
            </form>
          )}
        </Container>
      </div>
      <div
        className={`${styles.media_menu} d-lg-none  d-blck  position-fixed w-100 bottom-0 start-0 `}
      >
        <ul className="d-flex align-items-center justify-content-between">
          <li>
            <Link
              to="/"
              className={`${styles.widget} flex-column position-relative   d-flex justify-content-center align-items-center`}
            >
              <AiTwotoneHome size="17px" />
              <span className={`${styles.widget_title}`}>home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/new-in/view-all/cat?categoryId=27110"
              className={`${styles.widget} flex-column position-relative   d-flex justify-content-center align-items-center`}
            >
              <AiFillShop size="17px" />
              <span className={`${styles.widget_title}`}>shop</span>
            </Link>
          </li>
          <li>
            {" "}
            <button
              aria-label="open wish list"
              onClick={() => setOpenWishList(true)}
              className={`${styles.widget} flex-column position-relative   d-flex justify-content-center align-items-center`}
            >
              <AiFillHeart size="17px" />
              <span className={`${styles.widget_title}`}>wishlist</span>
              <Badge
                bg="none"
                className={`${styles.badge} position-absolute  rounded-circle border border-2 border-white`}
              >
                {wishListQuantity}
              </Badge>
            </button>
          </li>
          <li>
            <button
              aria-label="open cart"
              onClick={() => setOpenCart(true)}
              className={`${styles.widget} flex-column position-relative  d-flex justify-content-center align-items-center`}
            >
              <HiOutlineShoppingBag size="17px" />
              <span className={`${styles.widget_title}`}>cartlist</span>
              <Badge
                bg="none"
                className={`${styles.badge}  position-absolute  rounded-circle border border-2 border-white`}
              >
                {quantity}
              </Badge>
            </button>
          </li>
        </ul>
      </div>

      <MobileMegaMenu
        open={open}
        onClose={useCallback(() => setOpen(false), [])}
      />
      <CartModel
        open={openCart}
        onClose={useCallback(() => setOpenCart(false), [])}
      />
      <WishList
        open={openWishList}
        onClose={useCallback(() => setOpenWishList(false), [])}
      />
    </header>
  );
};
export default Header;
