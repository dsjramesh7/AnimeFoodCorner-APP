import SkeletonLoaderBody from "./SkeletonLoaderBody";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const resData = useRestaurantMenu(resId);
  // console.log("resData", resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category", categories);

  //created a custom hook for fetching data from api called useRestauranMenu hook
  /*
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_URL}${resId}`);
    const jsonData = await response.json();
    const destructuredData = jsonData.data.cards;
    console.log("jsonData", destructuredData);
    setResData(destructuredData);
  };
  */

  if (resData === null) {
    return <SkeletonLoaderBody />;
  }

  const { text, cuisines, costForTwoMessage } = resData[0]?.card?.card;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{text}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ") - { costForTwoMessage }}
      </p>
      {categories.map((category) => (
        <ResturantCategory data={category.card.card} />
      ))}
    </div>
  );
};
export default ResturantMenu;
