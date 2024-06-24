import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardContainers1.css";

const CardContainers1 = ({
  className = "",
  container,
  caffeNero,
  caffNeroGiftCard,
  propTop,
  propAlignSelf,
  propWidth,
  propDisplay,
  propMinWidth,
}) => {
  const cardContainers4Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const caffeNeroStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propDisplay, propMinWidth]);

  return (
    <div
      className={`card-containers16 ${className}`}
      style={cardContainers4Style}
    >
      <div className="container-parent3">
        <img className="container-icon21" alt="" src={container} />
        <div className="parent24">
          <div className="div87">£10.00</div>
          <div className="div88">{`-  `}</div>
          <div className="div89">£100.00</div>
        </div>
        <div className="caffe-nero" style={caffeNeroStyle}>
          {caffeNero}
        </div>
        <div className="caff-nero-gift">{caffNeroGiftCard}</div>
      </div>
    </div>
  );
};

CardContainers1.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  caffeNero: PropTypes.string,
  caffNeroGiftCard: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CardContainers1;
