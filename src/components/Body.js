import { useEffect, useState } from "react";
import ResturantCard, { WithPromotedLabelResturantCard } from "./ResturantCard";
import SkeletonLoaderBody from "./SkeletonLoaderBody";
import { Link } from "react-router-dom";
import { BASE_SWIGGY_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [productsData, setProductsData] = useState([]);
  // console.log(productsData[0]);

  const PromtedResturant = WithPromotedLabelResturantCard(ResturantCard);

  const isOnlineStatusCheck = useOnlineStatus();
  // console.log(!isOnlineStatusCheck);
  useEffect(() => {
    console.log("i am getting called useEffect");
    fetchDataAPI();
  }, []);

  const fetchDataAPI = async () => {
    // const response = await fetch("https://fakestoreapi.com/products");
    const response = await fetch(`https://proxy.cors.sh/${BASE_SWIGGY_URL}`);
    // console.log(response);
    const jsonData = await response.json();
    //optional chaining
    const resturants =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(resturants);
    setProductsData(resturants);
  };

  //filter function for rating
  const HandleFilter = () => {
    const filteredData = productsData.filter((item) => item.rating.rate > 4);
    setProductsData(filteredData);
  };

  console.log(
    "body component rendered first okay then useEffect so mein first"
  );
  // console.log(productsData);

  // if internet is connected or not checking
  if (!isOnlineStatusCheck) {
    return (
      <h1>Check your internet connection seems like you are offline!!!!</h1>
    );
  }

  //conditional rendering
  if (productsData.length === 0) {
    return <SkeletonLoaderBody />;
  }

  return (
    <div className="body-comp">
      <div className="search">Search</div>

      <button className="filter-btn" onClick={HandleFilter}>
        Top Rated Things
      </button>
      <div className="res-comp">
        {productsData && productsData.length > 0 ? (
          productsData.map((EPD) => {
            // console.log(EPD);
            return (
              <Link to={`/resturant/${EPD?.info?.id}`} key={EPD.info.id}>
                {EPD?.info?.avgRating >= 4.4 ? (
                  <PromtedResturant prodData={EPD} />
                ) : (
                  <ResturantCard prodData={EPD} />
                )}
              </Link>
            );
          })
        ) : (
          <p>"No data fetched"</p>
        )}
      </div>
    </div>
  );
};
export default Body;
