import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ParagraphBackgroundHorizonta.css";

const ParagraphBackgroundHorizonta = ({
  className = "",
  heading3HowDoICheckMyGift,
  propWidth,
}) => {
  const heading31Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`paragraphbackgroundhorizonta1 ${className}`}>
      <div className="heading-31" style={heading31Style}>
        {heading3HowDoICheckMyGift}
      </div>
      <div className="symbol-container">
        <div className="symbol1"></div>
      </div>
    </div>
  );
};

ParagraphBackgroundHorizonta.propTypes = {
  className: PropTypes.string,
  heading3HowDoICheckMyGift: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default ParagraphBackgroundHorizonta;
