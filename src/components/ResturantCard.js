import { BASE_IMAGE_URL } from "../utils/constants";

const ResturantCard = ({ prodData }) => {
  // console.log(prodData);
  let { name, avgRatingString, cloudinaryImageId, costForTwo } = prodData.info;
  // let destructuredRating = rating.rate;
  // console.log(BASE_IMAGE_URL);
  // console.log(cloudinaryImageId);
  return (
    <div className="oneres-card">
      <img
        src={`${BASE_IMAGE_URL}/${cloudinaryImageId}`}
        style={{ height: "200px" }}
      />
      <h1>{name}</h1>
      <p>{avgRatingString} stars</p>
      <p>${costForTwo}</p>
    </div>
  );
};

//higher order component
// input - ResturantCard => ResturantPromoted
export const WithPromotedLabelResturantCard = (ResturantCard) => {
  return (props) => {
    return (
      <div className="border border-red-500 bg-blue-400">
        <label className="absolute bg-black text-white m-4 p-2 rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
