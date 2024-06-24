import Header from "../components/Header";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header />
      <section className="sign-up-form-container-parent">
        <div className="sign-up-form-container">
          <SignIn />
        </div>
        <img
          className="background-shape-icon"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <Footer />
    </div>
  );
};

export default SignUpPage;
