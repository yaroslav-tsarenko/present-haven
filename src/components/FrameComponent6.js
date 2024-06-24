import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({
  className = "",
  link202220ALL20GIFT20CARD,
  prop,
  prop1,
  leisureVouchers,
  altonTowersLeisureVoucher,
  propGap,
  propAlignSelf,
  propWidth,
  propWidth1,
  propDisplay,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propGap, propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const div1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`frame-group ${className}`} style={frameDivStyle}>
      <div className="container-wrapper">
        <div className="container5">
          <img
            className="link-202220all20gift20car2"
            loading="lazy"
            alt=""
            src={link202220ALL20GIFT20CARD}
          />
          <div className="container6">
            <div className="backgroundborder4" />
            <div className="backgroundborder5" />
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="frame-wrapper">
          <div className="parent11" style={frameDiv1Style}>
            <div className="div36" style={divStyle}>
              {prop}
            </div>
            <div className="div37">{`-  `}</div>
            <div className="div38" style={div1Style}>
              {prop1}
            </div>
          </div>
        </div>
        <div className="leisure-vouchers1">{leisureVouchers}</div>
        <div className="alton-towers-leisure1">{altonTowersLeisureVoucher}</div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  link202220ALL20GIFT20CARD: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  leisureVouchers: PropTypes.string,
  altonTowersLeisureVoucher: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent6;
