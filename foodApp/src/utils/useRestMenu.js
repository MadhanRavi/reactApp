import { useState, useEffect } from "react";
import resMenu from "./restaurantMenu";

const useRestMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = resMenu;
    setResInfo(data);
  };

  return resInfo;
};

export default useRestMenu;
