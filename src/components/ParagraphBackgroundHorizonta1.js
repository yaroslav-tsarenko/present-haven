import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ParagraphBackgroundHorizonta1.css";

const ParagraphBackgroundHorizonta1 = ({
  className = "",
  heading3WhereCanISpendThe,
  symbol,
  propGap,
  propMinWidth,
}) => {
  const paragraphBackgroundHorizontaStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const heading3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`paragraphbackgroundhorizonta ${className}`}
      style={paragraphBackgroundHorizontaStyle}
    >
      <div className="heading-3" style={heading3Style}>
        {heading3WhereCanISpendThe}
      </div>
      <div className="symbol-wrapper">
        <div className="symbol">{symbol}</div>
      </div>
    </div>
  );
};

ParagraphBackgroundHorizonta1.propTypes = {
  className: PropTypes.string,
  heading3WhereCanISpendThe: PropTypes.string,
  symbol: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ParagraphBackgroundHorizonta1;
