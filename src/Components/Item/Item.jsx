import { Card, Col } from "react-bootstrap";
import styles from "./style.module.css";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTOWishList } from "../../redux/Wishlist Reducer";
import { memo } from "react";

const Item = ({ item, niche }) => {
  const wishList = useSelector((state) => state.WishList.items);
  const ex = wishList.some((el) => el.id === item.id);
  const dispatch = useDispatch();

  return (
    <Col>
      <Card
        bg="white"
        className={`${styles.item} ${
          niche === "featured" && styles.horizontal_card
        }`}
      >
        <div className={`${styles.card_top}  position-relative`}>
          <Link
            to={`/product/${item.id}/${item.name.split(" ").join("-")}`}
            className={`d-block`}
          >
            <Card.Img
              loading="lazy"
              width="205"
              height="260"
              src={`https://${item.imageUrl}`}
              className={`${styles.item_img} h-auto`}
              alt={item.name}
            />
          </Link>
          <div className={`${styles.item_labels} position-absolute `}>
            {item.price.isMarkedDown && (
              <>
                <span
                  className={`${styles.item_label}  ${styles.sale} text-capitalize`}
                >
                  sale
                </span>
                <span
                  className={`${styles.item_label}  ${styles.top_discount} text-capitalize`}
                >
                  {`-${Math.trunc(
                    ((item.price.previous.value - item.price.current.value) *
                      100) /
                      item.price.previous.value
                  )}%`}
                </span>
              </>
            )}

            {niche === "featured" && (
              <span
                className={`${styles.item_label}  ${styles.featured} text-capitalize`}
              >
                featured
              </span>
            )}
            {niche === "top_order" && (
              <span
                className={`${styles.item_label}  ${styles.top_order} text-capitalize`}
              >
                453
              </span>
            )}
            {niche === "top_rating" && (
              <span
                className={`${styles.item_label}  ${styles.top_rating} text-capitalize`}
              >
                4.8
              </span>
            )}
          </div>
          <button
            aria-label="add or remove from wish list"
            onClick={() =>
              dispatch(
                addTOWishList({
                  id: item.id,
                  name: item.name,
                  img: item.imageUrl,
                })
              )
            }
            className={`${styles.item_wish_btn} position-absolute ${
              ex ? styles.existing : ""
            }`}
          >
            <AiFillHeart size="20px" />
          </button>
        </div>
        <div
          className={`${styles.card_bottom} ${
            niche !== "featured" ? "text-center" : ""
          }`}
        >
          <Card.Body className={niche === "featured" ? styles.card_body : ""}>
            <Card.Title
              className={`${styles.item_name} text-capitalize`}
              title={item.name}
            >
              <Link
                to={`/product/${item.id}/${item.name.split(" ").join("-")}`}
              >
                {item.name}
              </Link>
            </Card.Title>
            <div className={`${styles.item_price} mb-2 `}>
              {item.price.isMarkedDown && (
                <del className={`${styles.prev_price} `}>
                  {item.price.previous.text}
                </del>
              )}
              <span className={`${styles.current_price}`}>
                {item.price.current.text}
              </span>
            </div>
            {niche === "featured" && (
              <div className={styles.item_desc}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat commodi doloremque maxime eveniet...
                </p>
              </div>
            )}
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};
export default memo(Item);
