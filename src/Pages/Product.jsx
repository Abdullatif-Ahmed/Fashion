import { Col, Container, Row, Form } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";
import Slider from "react-slick";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { HiOutlineShoppingBag, HiMinus, HiCheck } from "react-icons/hi";
import { add_product } from "../redux/Cart Reducer";
import { addTOWishList } from "../redux/Wishlist Reducer";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDataToChangeTheparamsAndTitle from "../Hooks/useDataToChangeTheparamsAndTitle";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.CartReducer.products);
  const [size, setSize] = useState("default");

  let { id } = useParams();
  const wishList = useSelector((state) => state.WishList.items);
  const { data, loading, error, refresh } = useApi(
    `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}`
  );

  const exProduct = cartProducts.some((el) => el.id === data?.id);
  const ex = wishList.some((el) => el.id === data?.id);
  const location = useLocation();

  useDataToChangeTheparamsAndTitle(
    data?.name,
    `/product/${id}/${data?.name.split(" ").join("-")}${location.search}`
  );

  const settings = {
    customPaging: function (i) {
      return (
        <img
          alt={data?.media.images[i].name}
          src={`https://${data?.media.images[i].url}`}
          className="w-100 h-100"
        />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (error)
    return (
      <>
        <h1>Faild to load data</h1>
        <p>{error}</p>
        <button
          className="btn1 mx-auto mb-5"
          aria-label="try again"
          onClick={() => refresh()}
        >
          try again
        </button>
      </>
    );
  else if (data?.errorCode) throw new Error(data?.errorMessage);
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Slider className="product_slider" {...settings}>
              {data?.media?.images.map((im) => (
                <div key={im.type}>
                  <img
                    src={`https://${im.url}`}
                    alt={im.type}
                    className="w-100 h-100"
                  />
                </div>
              ))}
            </Slider>
          </Col>
          <Col xs={12} lg={6}>
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h1
                  style={{
                    marginBottom: "3px",
                    color: "black",
                    fontSize: "24px",
                    letterSpacing: ".4px",
                    fontWeight: "600",
                  }}
                >
                  {data?.name}
                </h1>
                <div>BRAND: {data?.brand.name}</div>
              </div>

              <div
                style={{
                  fontSize: "27px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                {data?.price.previous.text && (
                  <del style={{ color: "#df1b1b", marginRight: "17px" }}>
                    {data?.price.previous.text}
                  </del>
                )}
                <span style={{ color: "var(--main-color)" }}>
                  {data?.price.current.text}
                </span>
              </div>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "400",
                  letterSpacing: " 0.5px",
                  marginBottom: "25px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda illo, maiores quasi fugit placeat quaerat ducimus
                quibusdam beatae labore ratione molestias blanditiis quo veniam
                hic!
              </p>

              <div className=" mb-3 d-flex align-items-center">
                <button
                  aria-label="decrease"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "31px",
                    fontSize: "12px",
                    height: "31px",
                    borderRadius: "5px",
                  }}
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <HiMinus />
                </button>
                <span
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "40px",
                    fontSize: "16px",
                    height: "31px",
                    lineHeight: "31px",
                    borderRadius: "5px",
                    margin: "0 11px",
                    textAlign: "center",
                    color: "var(--main-color)",
                  }}
                >
                  {quantity}
                </span>
                <button
                  aria-label="increace"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "31px",
                    fontSize: "12px",
                    height: "31px",
                    borderRadius: "5px",
                  }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <BsPlusLg />
                </button>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "black",
                  }}
                  htmlFor="selectSize"
                >
                  SIZE:
                </label>
                <Form.Select
                  id="selectSize"
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                >
                  <option value="default">Please select</option>
                  <option>2XS - W28</option>
                  <option>XS - W30</option>
                  <option>S - W32</option>
                  <option>M - W34</option>
                  <option>L - W36</option>
                  <option>XL - W38</option>
                </Form.Select>
              </div>
              <div className=" d-flex align-items-center justify-content-between">
                <button
                  aria-label="add"
                  disabled={exProduct ? true : false}
                  onClick={() =>
                    !exProduct
                      ? size === "default"
                        ? toast.error("You Must Choose size", {
                            position: "top-left",
                          })
                        : dispatch(
                            add_product({
                              item: {
                                id: data.id,
                                name: data.name,
                                img: data.media.images[0].url,
                                price: data.price,
                                size,
                                itemQuantity: quantity,
                              },
                            })
                          )
                      : ""
                  }
                  className=" d-flex align-items-center justify-content-center text-uppercase"
                  style={{
                    opacity: exProduct ? ".5" : "1",
                    cursor: exProduct ? "not-allowed" : "pointer",
                    width: "90%",
                    background: "var(--main-color)",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "15px",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  {exProduct ? (
                    <>
                      <HiCheck style={{ marginRight: "3px" }} /> already added{" "}
                    </>
                  ) : (
                    <>
                      <HiOutlineShoppingBag style={{ marginRight: "3px" }} />
                      add to cart
                    </>
                  )}
                </button>
                <button
                  aria-label="add or remove from wish list"
                  onClick={() =>
                    dispatch(
                      addTOWishList({
                        id: data.id,
                        img: data.media.images[0].url,
                        name: data.name,
                      })
                    )
                  }
                  style={{
                    color: ex ? "red" : "gray",
                    width: "40px",
                    height: "40px",
                    background: "#e7e7e7",
                    borderRadius: "50%",
                  }}
                >
                  <AiFillHeart size="20px" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {loading && <Loading />}
    </section>
  );
};
export default Product;
