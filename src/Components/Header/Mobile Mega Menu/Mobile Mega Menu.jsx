import styles from "./style.module.css";
import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import useApi from "../../../Hooks/useApi";
import { memo, useState } from "react";
import { Link } from "react-router-dom";
const MobileMegaMenu = ({ open, onClose }) => {
  const [li, setLi] = useState(null);

  const { data } = useApi("https://asos2.p.rapidapi.com/categories/list", {
    params: {
      country: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  });
  return ReactDOM.createPortal(
    <section className={`${!open ? "d-none" : ""} d-lg-none`}>
      <div className="overlay"></div>
      <div className={styles.mobile_mega_menu}>
        <button
          onClick={onClose}
          className={styles.close_btn}
          aria-label="close"
        >
          <MdOutlineClose size="28px" />
        </button>

        <ul className={`${styles.list} position-relative`}>
          {data?.navigation?.[0].children?.[4].children.map((li) => (
            <li key={li.id}>
              <button
                aria-label="open"
                onClick={() => setLi(li)}
                className={`${styles.tab_btn} position-relative p-0 w-100`}
              >
                <img
                  src={li.content.mobileImageUrl}
                  alt=""
                  className="w-100 h-100"
                />
                {li.style.mobileStyleType !== "noTitle" && (
                  <span
                    className={`position-absolute d-inline-block w-100 text-start text-uppercase ${styles.tab_title}`}
                  >
                    {li.content.title}
                    {li.content.subTitle && (
                      <span className={styles.sub_title}>
                        {li.content.subTitle}
                      </span>
                    )}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
        <div
          className={`${styles.menu} ${li ? "start-0" : ""} w-100 h-100 top-0`}
        >
          {li && (
            <>
              {" "}
              <div
                className={`${styles.heading} position-relative border-bottom`}
              >
                <button
                  aria-label="back"
                  className="position-absolute start-0 top-0"
                  onClick={() => setLi(null)}
                >
                  <BsArrowLeft size="20px" />
                </button>
                <h3 className="text-center m-0 text-uppercase">
                  {li.content.title}
                </h3>
              </div>
              <nav className={styles.nav}>
                <div>
                  {li.children.map((el) =>
                    el.display.mobileTemplateId < 0 &&
                    el.children.length < 0 ? (
                      ""
                    ) : el.id === "aabc4f45-92e6-40c9-a476-2a257d40b41e" ||
                      el.id === "59ff785d-8d44-4a98-8d96-a77abe636e81" ||
                      el.id === "609c8581-7f67-4580-ad62-4bf770ab3009" ? (
                      ""
                    ) : (
                      <div key={el.id}>
                        {el.style.mobileStyleType !== "noTitle" && (
                          <h3 className={`${styles.list_title} m-0`}>
                            {el.content.title}
                          </h3>
                        )}
                        <ul
                          className={
                            el.id === "7b174ec9-283c-4b71-b18a-e9c79ad38bd4"
                              ? styles.aToZBrands
                              : styles[el.display.mobileTemplateName]
                          }
                        >
                          {el.children.map((a) =>
                            a.id === "2b8d49d1-894e-4a5b-9f87-551e21042bfb" ||
                            a.id === "ea2cd6be-035b-4e17-9060-5b9ff4760264" ? (
                              ""
                            ) : (
                              <li key={a.id}>
                                <Link
                                  onClick={() => setLi(null)}
                                  to={`/${a.content.title
                                    .trim()
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-")}/cat?cid=${a.link.categoryId}`}
                                  className={
                                    a.style.mobileStyleType === "sale"
                                      ? styles.sale
                                      : a.style.mobileStyleType === "premium"
                                      ? styles.premium
                                      : a.type === "aToZBrands"
                                      ? styles.aToZBrandsItem
                                      : ""
                                  }
                                >
                                  <div className={`${styles.item} `}>
                                    {a.type !== "aToZBrands" && (
                                      <div className={styles.img_con}>
                                        <img
                                          src={a.content.mobileImageUrl}
                                          alt={a.content.title}
                                          className="w-100 h-100"
                                        />
                                      </div>
                                    )}

                                    {a.style.mobileStyleType !== "noTitle" && (
                                      <span>{a.content.title}</span>
                                    )}
                                  </div>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
};
export default memo(MobileMegaMenu);
/*

 */
