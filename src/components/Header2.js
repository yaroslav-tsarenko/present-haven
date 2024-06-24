import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="background-container">
        <div className="background4">
          <div className="container4">
            <div className="free-wallet-with2">
              Free wallet with every order and greeting cards available for
              purchase
            </div>
          </div>
          <div className="icon10" />
          <div className="icon11" />
        </div>
        <div className="logo-nav-parent">
          <div className="logo-frame">
            <div className="logo3">
              <div className="frame-parent3">
                <div className="logo-icon-container">
                  <img
                    className="logo-icon1"
                    loading="lazy"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="present-haven3">Present Haven</div>
              </div>
            </div>
          </div>
          <nav className="nav-list2">
            <nav className="nav-links">
              <a className="item-link20">All Gift Cards</a>
              <a className="item-link21">Category</a>
              <a className="item-link22">Occasion</a>
              <a className="item-link23">WishCard</a>
              <a className="item-link24">Greeting Cards</a>
              <a className="item-link25">How to Buy</a>
              <a className="item-link26">For Business</a>
              <a className="item-link27">Helping Hand</a>
            </nav>
          </nav>
          <div className="user-cart-parent-wrapper">
            <div className="user-cart-parent">
              <div className="cart-icon-wrapper">
                <img className="cart-icon" alt="" src="/vector-1.svg" />
              </div>
              <img
                className="link-icon2"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
