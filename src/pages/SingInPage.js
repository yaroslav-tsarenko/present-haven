import { Button } from "@mui/material";
import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";
import "./SingInPage.css";

const SingInPage = () => {
  return (
    <div className="singinpage">
      <Header1 />
      <section className="sign-in-content-parent">
        <div className="sign-in-content">
          <div className="sign-in">
            <div className="sign-in-heading">
              <div className="sign-in-title">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="credentials">
                <div className="input-fields">
                  <div className="username">Username</div>
                  <img
                    className="input-containers-icon"
                    alt=""
                    src="/frame-153-1.svg"
                  />
                </div>
                <div className="input-fields1">
                  <div className="password">Password</div>
                  <img
                    className="input-fields-child"
                    alt=""
                    src="/frame-153-2.svg"
                  />
                </div>
                <Button
                  className="button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#645552",
                    borderRadius: "4px",
                    "&:hover": { background: "#645552" },
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-sign-in">
                <img
                  className="social-buttons-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-shape-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <Footer1 />
    </div>
  );
};

export default SingInPage;
