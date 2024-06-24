import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="background-parent">
        <div className="background">
          <div className="container">
            <div className="free-wallet-with">
              Free wallet with every order and greeting cards available for
              purchase
            </div>
          </div>
          <div className="icon6" />
          <div className="icon7" />
        </div>
        <div className="logo-nav-container-parent">
          <div className="logo-nav-container">
            <div className="logo1">
              <div className="frame-parent2">
                <div className="logo-icon-wrapper">
                  <img
                    className="logo-icon"
                    loading="lazy"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="present-haven1">Present Haven</div>
              </div>
            </div>
          </div>
          <nav className="nav-list">
            <nav className="nav-link-list">
              <a className="item-link">All Gift Cards</a>
              <a className="item-link1">Category</a>
              <a className="item-link2">Occasion</a>
              <a className="item-link3">WishCard</a>
              <a className="item-link4">Greeting Cards</a>
              <a className="item-link5">How to Buy</a>
              <a className="item-link6">For Business</a>
              <a className="item-link7">Helping Hand</a>
            </nav>
          </nav>
          <div className="user-auth-container-wrapper">
            <div className="user-auth-container">
              <div className="user-icon-wrapper">
                <img className="user-icon" alt="" src="/vector-1.svg" />
              </div>
              <img
                className="link-icon"
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

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
