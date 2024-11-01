import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);
  //fetch data from api
  useEffect(() => {
    fetchDataAPI();
  }, []);

  const fetchDataAPI = async () => {
    const reponse = await fetch(`${MENU_URL}${resId}`);
    const jsonData = await reponse.json();
    const destructuredData = jsonData.data.cards;
    setResData(destructuredData);
  };

  return resData;
};

export default useRestaurantMenu;
