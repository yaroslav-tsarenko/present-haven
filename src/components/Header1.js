import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="background-group">
        <div className="background2">
          <div className="container2">
            <div className="free-wallet-with1">
              Free wallet with every order and greeting cards available for
              purchase
            </div>
          </div>
          <div className="icon8" />
          <div className="icon9" />
        </div>
        <div className="header-right">
          <div className="logo-wrapper">
            <div className="logo2">
              <div className="logo-container1">
                <div className="logo-image">
                  <img
                    className="vector-icon"
                    loading="lazy"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="present-haven2">Present Haven</div>
              </div>
            </div>
          </div>
          <nav className="nav-list1">
            <nav className="nav-items">
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
          <div className="user-actions">
            <div className="user-actions-container">
              <div className="user-icon1">
                <img className="vector-icon1" alt="" src="/vector-1.svg" />
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
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
