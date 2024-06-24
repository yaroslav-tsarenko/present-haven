import PropTypes from "prop-types";
import "./ProcessSteps.css";

const ProcessSteps = ({ className = "" }) => {
  return (
    <div className={`process-steps ${className}`}>
      <div className="steps">
        <h3 className="contact-customer-support1">
          3.1 Contact Customer Support
        </h3>
        <div className="to-request-a-container1">
          <p className="to-request-a1">
            To request a cancellation, contact our customer support team at
            [Email] or [Phone Number]. Provide the following information:
          </p>
          <p className="blank-line4">&nbsp;</p>
          <ul className="your-name-and-contact-informat1">
            <li className="your-name-and1">
              Your name and contact information
            </li>
            <li className="the-gift-card2">
              The gift card number and purchase details
            </li>
            <li>
              A detailed explanation of the reason for the cancellation request
            </li>
          </ul>
        </div>
      </div>
      <div className="steps1">
        <h3 className="review-and-processing1">3.2 Review and Processing</h3>
        <div className="our-customer-support1">
          Our customer support team will review your cancellation request and
          may ask for additional information or documentation. Cancellation
          requests are typically processed within [X] business days. You will be
          notified of the outcome of your request via email.
        </div>
      </div>
      <div className="steps2">
        <h3 className="approved-cancellations">3.3 Approved Cancellations</h3>
        <div className="if-your-cancellation">
          If your cancellation request is approved, the cancellation will be
          processed, and any funds will be returned to the original payment
          method used for the purchase. The time it takes for the funds to be
          credited to your account may vary depending on your bank or payment
          provider.
        </div>
      </div>
    </div>
  );
};

ProcessSteps.propTypes = {
  className: PropTypes.string,
};

export default ProcessSteps;
