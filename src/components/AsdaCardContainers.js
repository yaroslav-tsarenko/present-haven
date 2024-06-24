import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AsdaCardContainers.css";

const AsdaCardContainers = ({
  className = "",
  container,
  prop,
  prop1,
  asda,
  asdaGiftCard,
  propWidth,
  propWidth1,
  propDisplay,
  propMinWidth,
  propWidth2,
  propMinWidth1,
}) => {
  const asdaCardDetailsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const div3Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const asdaStyle = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth1,
    };
  }, [propWidth2, propMinWidth1]);

  return (
    <div className={`asda-card-containers ${className}`}>
      <img className="container-icon15" alt="" src={container} />
      <div className="asda-card-info">
        <div className="asda-card-details" style={asdaCardDetailsStyle}>
          <div className="div55" style={div2Style}>
            {prop}
          </div>
          <div className="asda-spaces">{`-  `}</div>
          <div className="div56" style={div3Style}>
            {prop1}
          </div>
        </div>
        <div className="asda" style={asdaStyle}>
          {asda}
        </div>
        <div className="asda-gift-card">{asdaGiftCard}</div>
      </div>
    </div>
  );
};

AsdaCardContainers.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  asda: PropTypes.string,
  asdaGiftCard: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth2: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default AsdaCardContainers;
