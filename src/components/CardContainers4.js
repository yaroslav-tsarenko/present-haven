import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardContainers4.css";

const CardContainers4 = ({
  className = "",
  container,
  prop,
  prop1,
  aldi,
  aldiBlueGiftcard,
  propTop,
  propWidth,
  propDisplay,
  propFlex,
}) => {
  const cardContainers1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const div4Style = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      flex: propFlex,
    };
  }, [propWidth, propDisplay, propFlex]);

  return (
    <div
      className={`card-containers13 ${className}`}
      style={cardContainers1Style}
    >
      <img className="container-icon19" loading="lazy" alt="" src={container} />
      <div className="card-containers-inner11">
        <div className="parent21">
          <div className="div78" style={div4Style}>
            {prop}
          </div>
          <div className="div79">{`-  `}</div>
          <div className="div80">{prop1}</div>
        </div>
      </div>
      <div className="aldi7">{aldi}</div>
      <div className="aldi-blue-giftcard-container">
        <div className="aldi-blue-giftcard5">{aldiBlueGiftcard}</div>
      </div>
    </div>
  );
};

CardContainers4.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  aldi: PropTypes.string,
  aldiBlueGiftcard: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propFlex: PropTypes.any,
};

export default CardContainers4;
