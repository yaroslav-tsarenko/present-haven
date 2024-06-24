import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardContainers3.css";

const CardContainers3 = ({
  className = "",
  link202220ALL20GIFT20CARD,
  prop,
  prop1,
  theDiningOutGiftCard,
  allBarOneGiftCardDiningOu,
  propTop,
  propLeft,
  propTop1,
  propWidth,
  propDisplay,
  propMinWidth,
}) => {
  const cardContainers2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const link202220ALL20GIFT20CARStyle = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const div5Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div6Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`card-containers14 ${className}`}
      style={cardContainers2Style}
    >
      <div className="container25">
        <img
          className="link-202220all20gift20car7"
          loading="lazy"
          alt=""
          src={link202220ALL20GIFT20CARD}
          style={link202220ALL20GIFT20CARStyle}
        />
        <div className="container26">
          <div className="backgroundborder17" />
          <div className="backgroundborder18" />
        </div>
      </div>
      <div className="card-containers-inner12">
        <div className="parent22">
          <div className="div81" style={div5Style}>
            {prop}
          </div>
          <div className="div82">{`-  `}</div>
          <div className="div83" style={div6Style}>
            {prop1}
          </div>
        </div>
      </div>
      <div className="the-dining-out1">{theDiningOutGiftCard}</div>
      <div className="all-bar-one1">{allBarOneGiftCardDiningOu}</div>
    </div>
  );
};

CardContainers3.propTypes = {
  className: PropTypes.string,
  link202220ALL20GIFT20CARD: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  theDiningOutGiftCard: PropTypes.string,
  allBarOneGiftCardDiningOu: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propTop1: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CardContainers3;
