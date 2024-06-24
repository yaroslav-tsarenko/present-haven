import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardContainers5.css";

const CardContainers5 = ({
  className = "",
  link202220ALL20GIFT20CARD,
  adidasGiftCardLifestyle,
  propTop,
  propLeft,
}) => {
  const cardContainersStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`card-containers12 ${className}`}
      style={cardContainersStyle}
    >
      <div className="container23">
        <img
          className="link-202220all20gift20car6"
          loading="lazy"
          alt=""
          src={link202220ALL20GIFT20CARD}
        />
        <div className="container24">
          <div className="backgroundborder15" />
          <div className="backgroundborder16" />
        </div>
      </div>
      <div className="card-containers-inner10">
        <div className="parent20">
          <div className="div76">£20.00</div>
          <div className="price-spacing">{`-  `}</div>
          <div className="div77">£100.00</div>
        </div>
      </div>
      <div className="brand-columns">
        <div className="lifestyle3">Life:style</div>
      </div>
      <div className="product-name-columns">
        <div className="adidas-gift-card2">{adidasGiftCardLifestyle}</div>
      </div>
    </div>
  );
};

CardContainers5.propTypes = {
  className: PropTypes.string,
  link202220ALL20GIFT20CARD: PropTypes.string,
  adidasGiftCardLifestyle: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default CardContainers5;
