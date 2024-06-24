import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", panormaPresentsGiftCard, prop }) => {
  return (
    <div className={`card-quantity ${className}`}>
      <div className="hourly-details" />
      <div className="plus-button">
        <div className="wrapper-cards">
          <img className="cards-icon" alt="" src="/cards-1@2x.png" />
        </div>
        <div className="panorama-card-item">
          <div className="panorma-presents-gift">{panormaPresentsGiftCard}</div>
        </div>
        <div className="empty-item">
          <div className="divider">{prop}</div>
        </div>
        <div className="checkout-button">
          <div className="plus-minus-icons-parent">
            <div className="plus-minus-icons">
              <img className="icon-plus" alt="" src="/iconplus.svg" />
            </div>
            <div className="checkout-title">1</div>
            <input className="minus-icon" type="checkbox" />
          </div>
          <div className="hourly-parent">
            <div className="hourly">Hourly</div>
            <div className="hourly-value">
              <img
                className="logo-container-icon"
                alt=""
                src="/frame-1000002972.svg"
              />
            </div>
          </div>
        </div>
        <div className="company-logo">$10.11</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  panormaPresentsGiftCard: PropTypes.string,
  prop: PropTypes.string,
};

export default FrameComponent1;
