import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent7 from "../components/FrameComponent7";
import CardsGrid from "../components/CardsGrid";
import AsdaCardRow from "../components/AsdaCardRow";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import Footer3 from "../components/Footer3";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <FrameComponent3 />
      <section className="homepage20banner-890x340px-4-wrapper">
        <img
          className="homepage20banner-890x340px-4-icon"
          loading="lazy"
          alt=""
          src="/homepage20banner-890x340px-401png@2x.png"
        />
      </section>
      <section className="section-link-fsm-tgcc20fs-wrapper">
        <img
          className="section-link-fsm-tgcc20fs"
          loading="lazy"
          alt=""
          src="/section--link--fsm-tgcc20fsm20bannerjpg@2x.png"
        />
      </section>
      <FrameComponent7 />
      <section className="order-content-wrapper">
        <div className="order-content">
          <div className="order-heading">
            <div className="frame-parent">
              <div className="heading-2-order-gift-cards-o-wrapper">
                <h1 className="heading-2">Our Top Gift Cards</h1>
              </div>
              <div className="your-one-stop-destination">
                your one-stop destination for the best gift cards! Whether
                you’re celebrating a birthday, an anniversary, or just want to
                show someone you care, we have the perfect gift card for every
                occasion.
              </div>
            </div>
          </div>
          <CardsGrid />
          <AsdaCardRow />
        </div>
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <Footer3 />
    </div>
  );
};

export default HomePage;
