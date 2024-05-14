import React from "react";
import "./Cancell.css";
const Cancell = () => {
  return (
    <div className="cancel-main-container">
      <div className="cancel-title">
        <p>Cancellation Policy</p>
      </div>
      <div className="cancel-Descrition">
        <p>
          Orders cannot be cancelled once packed for delivery. In case of
          unexpected delays, a refund will be provided, if applicable.
        </p>
      </div>
    </div>
  );
};

export default Cancell;
