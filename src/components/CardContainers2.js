import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardContainers2.css";

const CardContainers2 = ({
  className = "",
  container,
  prop,
  prop1,
  asda,
  asdaGiftCard,
  propLeft,
  propWidth,
  propDisplay,
  propMinWidth,
  propWidth1,
  propMinWidth1,
}) => {
  const cardContainers3Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const div7Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div8Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const asda1Style = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth1,
    };
  }, [propWidth1, propMinWidth1]);

  return (
    <div
      className={`card-containers15 ${className}`}
      style={cardContainers3Style}
    >
      <img className="container-icon20" alt="" src={container} />
      <div className="card-containers-inner13">
        <div className="parent23">
          <div className="div84" style={div7Style}>
            {prop}
          </div>
          <div className="div85">{`-  `}</div>
          <div className="div86" style={div8Style}>
            {prop1}
          </div>
        </div>
      </div>
      <div className="asda-wrapper">
        <div className="asda1" style={asda1Style}>
          {asda}
        </div>
      </div>
      <div className="asda-gift-card1">{asdaGiftCard}</div>
    </div>
  );
};

CardContainers2.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  asda: PropTypes.string,
  asdaGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default CardContainers2;
