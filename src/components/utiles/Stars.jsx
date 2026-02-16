import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          return <FaStar key={index} className="text-yellow-500 text-lg" />;
        } else if (rating >= starValue - 0.5) {
          return <FaStarHalfAlt key={index} className="text-yellow-500 text-lg" />;
        } else {
          return <FaRegStar key={index} className="text-yellow-500 text-lg" />;
        }
      })}
    </div>
  );
};

export default StarRating;