import { FiCheck } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { memo } from "react";
import styles from "./style.module.css";
import useFilter from "../../Hooks/useFilter";
const FilterDropDown = ({ li }) => {
  const [search, setSearch] = useState("");
  const filterFacetValues = () => {
    return li.facetValues.filter((el) =>
      el.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  };
  const { checkAll, clearAll, handleChange } = useFilter();
  const dropDown = useRef();
  const tab = useRef();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    function clickOutSide(e) {
      if (
        dropDown.current &&
        !dropDown.current.contains(e.target) &&
        !tab.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", clickOutSide);
    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  });

  return (
    <li
      className={`${li.hasSelectedValues ? styles.selected : ""} ${
        styles.filter_tab
      } col position-relative`}
      id="filterTab"
    >
      <button
        data-dropdown={open}
        ref={tab}
        aria-label="open or close dropdown"
        onClick={() => setOpen((state) => !state)}
        className={`${styles.filter_btn} ${
          li.hasSelectedValues ? styles.hasSelectedValues : ""
        } d-flex align-items-center justify-content-between w-100  dropDownBtn`}
      >
        {li.name}
        <MdKeyboardArrowDown className={open ? styles.open : ""} />
      </button>
      {open && (
        <div
          ref={dropDown}
          className={`${styles.dropDown}  position-absolute`}
          id="dropDown"
        >
          <div
            className={`${styles.heading} d-flex justify-content-between flex-wrap`}
          >
            <span>
              {li.facetValues.filter((el) => el.isSelected).length} selected
            </span>

            {filterFacetValues().length !== 0 ? (
              li.hasSelectedValues ? (
                <button onClick={() => clearAll(li.id)}>CLEAR</button>
              ) : (
                <button
                  onClick={() =>
                    checkAll(
                      li.id,
                      filterFacetValues().map((el) => el.id)
                    )
                  }
                  className="d-flex align-items-center"
                >
                  <FiCheck />
                  ALL
                </button>
              )
            ) : (
              ""
            )}
            {li.facetValues.length > 15 && (
              <input
                className="w-100 mt-2 p-2 ps-3 border rounded-pill"
                type="search"
                onInput={(e) => setSearch(e.target.value)}
                value={search}
              />
            )}
          </div>
          <ul className={styles.dropDown_menu}>
            {filterFacetValues().map((el) => (
              <li key={el.id}>
                <input
                  onChange={() => handleChange(li.id, el.id)}
                  className={styles.selectBox}
                  id={`${li.id}_${el.id}`}
                  type="checkbox"
                  value={el.id}
                  checked={el.isSelected}
                />
                <label htmlFor={`${li.id}_${el.id}`}>
                  {el.name} <span>({el.count})</span>
                </label>
              </li>
            ))}
            {filterFacetValues().length === 0 && (
              <span className="h-100 d-flex align-items-center justify-content-center">
                NO Matches
              </span>
            )}
          </ul>
        </div>
      )}
    </li>
  );
};
export default memo(FilterDropDown);
