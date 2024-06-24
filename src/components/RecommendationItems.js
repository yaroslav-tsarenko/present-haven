import PropTypes from "prop-types";
import "./RecommendationItems.css";

const RecommendationItems = ({
  className = "",
  container,
  aldiBlueGiftcard,
}) => {
  return (
    <div className={`recommendation-items ${className}`}>
      <img className="container-icon17" alt="" src={container} />
      <div className="recommendation-items-inner">
        <div className="parent17">
          <div className="div64">£10.00</div>
          <div className="div65">{`-  `}</div>
          <div className="div66">£100.00</div>
        </div>
      </div>
      <div className="aldi5">Aldi</div>
      <div className="aldi-blue-giftcard3">{aldiBlueGiftcard}</div>
    </div>
  );
};

RecommendationItems.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  aldiBlueGiftcard: PropTypes.string,
};

export default RecommendationItems;
