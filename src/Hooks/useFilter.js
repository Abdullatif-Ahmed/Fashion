import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useFilter = () => {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    params.delete("page");
  }, [params]);
  function checkAll(id, vals) {
    params.set(id, vals.join(","));
    setParams(params);
  }
  function clearAll(id) {
    params.delete(id);
    setParams(params);
  }
  function handleChange(id, val) {
    let pa = params.get(id);
    if (pa) {
      if (pa.includes(val)) {
        params.set(
          id,
          pa.split(",").filter((e) => e !== val)
        );
        console.log(pa);
        params.get(id).length === 0 && params.delete(id);
      } else {
        params.set(id, `${pa},${val}`);
      }
    } else {
      params.set(id, val);
    }

    setParams(params);
  }
  return { checkAll, clearAll, handleChange };
};
export default useFilter;
