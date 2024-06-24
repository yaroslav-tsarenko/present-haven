import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./DashboardContent.css";

const DashboardContent = ({ className = "" }) => {
  return (
    <section className={`dashboard-content ${className}`}>
      <div className="frame-parent5">
        <div className="your-dashboard-parent">
          <div className="your-dashboard">Your Dashboard</div>
          <TextField
            className="header3"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#645552",
                borderRadius: "5px",
              },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
          <div className="active-downloads">
            <div className="download-list">
              <div className="download-item">
                <div className="wrapper-cards">
                  <img
                    className="cards-icon"
                    loading="lazy"
                    alt=""
                    src="/cards@2x.png"
                  />
                </div>
                <div className="product-title">
                  <div className="panorma-presents-gift">
                    {" "}
                    Panorma Presents Gift Card
                  </div>
                </div>
                <div className="product-credits">
                  <div className="download-credit-details">$100.00</div>
                  <div className="credits">12 Credits</div>
                </div>
              </div>
              <div className="up-time-parent">
                <div className="up-time">Up Time</div>
                <div className="hrs">120 Hrs</div>
              </div>
              <div className="renewal-info-parent">
                <div className="renewal-info">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                </div>
                <div className="renewal-action">
                  <div className="renewal-date">
                    <div className="next-renewal-parent">
                      <div className="next-renewal">Next Renewal</div>
                      <div className="april-2024">24 April, 2024</div>
                    </div>
                  </div>
                  <div className="cancellation">
                    <div className="cancel">Cancel</div>
                    <div className="renew-button">
                      <div className="icons-block-wrapper">
                        <img
                          className="icons-block1"
                          alt=""
                          src="/icons-block-1.svg"
                        />
                      </div>
                      <div className="renew">Renew</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="active-downloads-child" />
          </div>
        </div>
        <div className="checkout-details-wrapper">
          <div className="checkout-details">
            <TextField
              className="header4"
              placeholder="User Details"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#645552",
                  borderRadius: "5px",
                },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
            />
            <div className="user-information">
              <div className="info-list">
                <div className="user-name">
                  <div className="name">Name</div>
                  <div className="darnell-roob">Darnell Roob</div>
                </div>
                <div className="account-details">
                  <div className="detail-items">
                    <div className="email-address">Email Address</div>
                    <div className="darnellroobhotmailcom">
                      Darnell.Roob@hotmail.com
                    </div>
                  </div>
                  <div className="detail-items1">
                    <div className="plan">Plan</div>
                    <div className="basic">Basic</div>
                  </div>
                  <div className="detail-items2">
                    <div className="expiry-date">Expiry Date</div>
                    <div className="april-20241">24 April, 2024</div>
                  </div>
                  <div className="detail-items3">
                    <div className="auto-renewal">Auto Renewal</div>
                    <div className="on">On</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DashboardContent.propTypes = {
  className: PropTypes.string,
};

export default DashboardContent;
