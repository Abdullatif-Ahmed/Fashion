import styles from "./style.module.css";
import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineShoppingBag, HiMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { decrement, delete_product, increment } from "../../redux/Cart Reducer";
import { memo } from "react";
const CartModel = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { products, totalPrice, quantity } = useSelector(
    (state) => state.CartReducer
  );
  return ReactDOM.createPortal(
    <>
      {open && <div className="overlay"></div>}
      <div className={`${styles.cart_modal} ${open ? styles.cart_open : ""}`}>
        <button
          aria-label="close"
          className={styles.cart_btn_close}
          onClick={onClose}
        >
          <MdOutlineClose />
        </button>
        <header className=" border-bottom d-flex align-items-center justify-content-center">
          <HiOutlineShoppingBag size="22px" /> Total Items ({quantity})
        </header>
        {quantity === 0 ? (
          <h3
            style={{ color: "crimson", transform: "translateY(-50%)" }}
            className="text-center text-capitalize position-relative top-50"
          >
            no items to show
          </h3>
        ) : (
          <>
            <ul className={styles.productes}>
              {products.map((li) => (
                <li key={li.id} className="border-bottom">
                  <Row>
                    <Col xs={4}>
                      <div className={`${styles.img_con} position-relative `}>
                        <img
                          className="w-100 h-100"
                          src={`https://${li.img}`}
                          alt={li.name}
                        />
                        <div
                          className={`${styles.delete_btn_con} position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center`}
                        >
                          <button
                            aria-label="remove from cart"
                            onClick={() => dispatch(delete_product(li.id))}
                          >
                            <RiDeleteBinLine />
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col xs={8}>
                      <div>
                        <h3 className={styles.product_name}>
                          <Link onClick={onClose} to={`product/${li.id}`}>
                            {li.name}
                          </Link>
                        </h3>
                        <p className={styles.unit_price}>
                          Unit Price - {li.price.current.text}
                        </p>
                        <div className="d-flex justify-content-between">
                          <div
                            className={`${styles.actions} d-flex align-items-center`}
                          >
                            <button
                              aria-label="decrease"
                              onClick={() => dispatch(decrement(li.id))}
                            >
                              <HiMinus />
                            </button>
                            <span>{li.itemQuantity}</span>
                            <button
                              aria-label="increase"
                              onClick={() => dispatch(increment(li.id))}
                            >
                              <BsPlusLg />
                            </button>
                          </div>
                          <span className={styles.item_total_price}>
                            ${li.price.current.value * li.itemQuantity}
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </li>
              ))}
            </ul>
            <div style={{ padding: "15px" }}>
              <a
                href="/#"
                className={`${styles.checkout} d-flex  align-items-center`}
              >
                <span className={`${styles.checkout_title} w-100`}>
                  Proceed to Checkout
                </span>
                <span className={styles.checkout_total_price}>
                  ${totalPrice}
                </span>
              </a>
            </div>
          </>
        )}
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default memo(CartModel);
