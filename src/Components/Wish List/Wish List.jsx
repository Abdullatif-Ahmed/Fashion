import styles from "./style.module.css";
import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { IoIosHeartDislike } from "react-icons/io";
import { Link } from "react-router-dom";
import { removeFromWhishList } from "../../redux/Wishlist Reducer";
import { memo } from "react";

const WishList = ({ open, onClose }) => {
  const { items, quantity } = useSelector((state) => state.WishList);
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <>
      {open && <div className="overlay"></div>}
      <div className={`${styles.wishList} ${open ? styles.active : ""}`}>
        <button
          aria-label="close"
          onClick={onClose}
          className={`${styles.close_btn} rounded-circle position-absolute `}
        >
          <MdOutlineClose />
        </button>
        <h2
          className={`${styles.heading} d-flex justify-content-center align-items-center border-bottom m-0`}
        >
          <AiFillHeart className={styles.icon} /> Total Items({quantity})
        </h2>
        {quantity === 0 ? (
          <h3
            style={{ color: "crimson", transform: "translateY(-50%)" }}
            className="text-center text-capitalize position-relative top-50"
          >
            no items to show
          </h3>
        ) : (
          <ul className={`h-100 ${styles.items}`}>
            {items.map((el) => (
              <li key={el.id} className="d-flex align-items-center">
                <div>
                  <Link to={`/product/${el.id}`} className={styles.img_con}>
                    <img
                      src={`https://${el.img}`}
                      alt={el.name}
                      className="w-100 h-100"
                    />
                  </Link>
                </div>
                <h4 className={`${styles.name} `}>
                  <Link to={`/product/${el.id}`}>{el.name}</Link>
                </h4>
                <button
                  aria-label="remove from whish list"
                  onClick={() => dispatch(removeFromWhishList(el.id))}
                >
                  <IoIosHeartDislike />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default memo(WishList);
