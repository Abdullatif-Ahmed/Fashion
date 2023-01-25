import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useDataToChangeTheparamsAndTitle = (title, path) => {
  const Navigate = useNavigate();

  useEffect(() => {
    document.title = title || "Fashion...";
    Navigate(path);
    console.log("r");
  }, [title, path, Navigate]);
};
export default useDataToChangeTheparamsAndTitle;
