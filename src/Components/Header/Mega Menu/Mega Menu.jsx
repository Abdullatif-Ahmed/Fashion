import styles from "./style.module.css";
import useApi from "../../../Hooks/useApi";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { memo, useState } from "react";
const MegaMenu = () => {
  const [megaId, setMegaid] = useState(null);
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
  return (
    <nav className={`${styles.nav} d-none d-lg-block`}>
      <Container fluid="xxl">
        <ul className={`d-flex position-relative`}>
          {data?.navigation[0].children[4].children.map((li) =>
            li.id === "abbdc577-6315-4472-a8ea-0b9ff657ea2f" ||
            li.id === "9ed694c4-9cbc-4174-a3e5-258c164a3d6d" ? (
              ""
            ) : (
              <li
                className={`${styles.tab} `}
                key={li.id}
                onMouseEnter={() => setMegaid(li.id)}
                onMouseLeave={() => setMegaid(null)}
              >
                <span
                  className={` d-inline-block ${styles.tab_title} ${
                    li.style.webLargeStyleType === "sale"
                      ? styles.highlight
                      : ""
                  } `}
                >
                  {li.content.title}
                </span>
                <div
                  className={`${styles.menu} ${
                    li.id === megaId ? "d-block" : "d-none"
                  } w-100 start-0 position-absolute top-100`}
                >
                  <Row>
                    {li.children.map((el) =>
                      el.id === "afc238ce-6c14-4974-b803-ea3995561f9f" ||
                      el.id === "a0537c01-ea87-4c68-88fa-b51663935b7e" ? (
                        ""
                      ) : el.display.webLargeTemplateId > 0 ? (
                        <Col
                          xs={
                            el.id === "f30c1d0f-af5a-4b6b-a890-ab10849c0fad"
                              ? 6
                              : el.display.webLargeColumnSpan * 3
                          }
                          className={styles.list}
                          key={el.id}
                        >
                          {el.style.webLargeStyleType !== "noTitle" && (
                            <h3
                              className={`${styles.col_title} border-bottom border-dark`}
                            >
                              {el.content.title}
                            </h3>
                          )}
                          <ul
                            className={`${
                              el.id ===
                                "235f46e5-34fe-40e2-97fc-64d5586cb440" ||
                              el.id === "777403db-d197-4872-8f8a-55b736253a32"
                                ? styles.halfMarketingImage
                                : el.id ===
                                  "f30c1d0f-af5a-4b6b-a890-ab10849c0fad"
                                ? `${styles.fullMarketingImage} ${styles.tailor}`
                                : styles[el.display.webLargeTemplateName]
                            } ${
                              el.display.webLargeColumnSpan >= 2 &&
                              el.children.length > 6
                                ? styles.twoList
                                : ""
                            }`}
                          >
                            {el.children.map((a) => (
                              <li key={a.id}>
                                <Link
                                  to={`/${a.content.title
                                    .trim()
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-")}/cat?categoryId=${
                                    a.link.categoryId
                                  }`}
                                  onClick={() => setMegaid(null)}
                                  className={
                                    a.style.webLargeStyleType === "sale"
                                      ? styles.sale
                                      : a.style.webLargeStyleType === "premium"
                                      ? styles.premium
                                      : ""
                                  }
                                >
                                  {el.display.webLargeTemplateName ===
                                  "textList" ? (
                                    a.content.title
                                  ) : (
                                    <div className={`${styles.item}`}>
                                      <div className={styles.img_con}>
                                        <img
                                          src={a.content.webLargeImageUrl}
                                          alt={a.content.titel}
                                          className="w-100 h-100"
                                        />
                                      </div>
                                      <span>{a.content.title}</span>
                                    </div>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Col>
                      ) : (
                        ""
                      )
                    )}
                  </Row>
                </div>
              </li>
            )
          )}
        </ul>
      </Container>
    </nav>
  );
};
export default memo(MegaMenu);
