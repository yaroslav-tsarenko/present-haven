import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardContainers.css";

const CardContainers = ({
  className = "",
  link202220ALL20GIFT20CARD,
  prop,
  prop1,
  asos,
  calvinKleinAsosGiftCard,
  propLeft,
  propTop,
  propTop1,
  propWidth,
  propDisplay,
  propMinWidth,
  propWidth1,
  propMinWidth1,
}) => {
  const cardContainers5Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const link202220ALL20GIFT20CAR1Style = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const div9Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div10Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const asosStyle = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth1,
    };
  }, [propWidth1, propMinWidth1]);

  return (
    <div
      className={`card-containers17 ${className}`}
      style={cardContainers5Style}
    >
      <div className="container27">
        <img
          className="link-202220all20gift20car8"
          loading="lazy"
          alt=""
          src={link202220ALL20GIFT20CARD}
          style={link202220ALL20GIFT20CAR1Style}
        />
        <div className="container28">
          <div className="backgroundborder19" />
          <div className="backgroundborder20" />
        </div>
      </div>
      <div className="card-containers-inner14">
        <div className="parent25">
          <div className="div90" style={div9Style}>
            {prop}
          </div>
          <div className="div91">{`-  `}</div>
          <div className="div92" style={div10Style}>
            {prop1}
          </div>
        </div>
      </div>
      <div className="asos-wrapper">
        <div className="asos" style={asosStyle}>
          {asos}
        </div>
      </div>
      <div className="calvin-klein-asos">{calvinKleinAsosGiftCard}</div>
    </div>
  );
};

CardContainers.propTypes = {
  className: PropTypes.string,
  link202220ALL20GIFT20CARD: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  asos: PropTypes.string,
  calvinKleinAsosGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propTop1: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default CardContainers;
