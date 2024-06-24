import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", checkout }) => {
  return (
    <section className={`header-parent ${className}`}>
      <header className="header2">
        <div className="background-group">
          <div className="background2">
            <div className="container10">
              <div className="free-wallet-with1">
                Free wallet with every order and greeting cards available for
                purchase
              </div>
            </div>
            <div className="icon2" />
            <div className="icon3" />
          </div>
          <div className="frame-parent11">
            <div className="logo-wrapper">
              <div className="logo1">
                <div className="frame-parent12">
                  <div className="vector-wrapper">
                    <img
                      className="vector-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="present-haven1">Present Haven</div>
                </div>
              </div>
            </div>
            <nav className="nav-list1">
              <nav className="nav-links1">
                <a className="item-link10">All Gift Cards</a>
                <a className="item-link11">Category</a>
                <a className="item-link12">Occasion</a>
                <a className="item-link13">WishCard</a>
                <a className="item-link14">Greeting Cards</a>
                <a className="item-link15">How to Buy</a>
                <a className="item-link16">For Business</a>
                <a className="item-link17">Helping Hand</a>
              </nav>
            </nav>
            <div className="frame-wrapper3">
              <div className="frame-parent13">
                <div className="search-icon-container">
                  <img className="search-icon1" alt="" src="/vector-1.svg" />
                </div>
                <img
                  className="link-icon1"
                  loading="lazy"
                  alt=""
                  src="/link.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="group-div">
        <div className="checkout-title-inner-parent">
          <div className="checkout-title-inner">
            <h1 className="checkout1">{checkout}</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  checkout: PropTypes.string,
};

export default FrameComponent;
