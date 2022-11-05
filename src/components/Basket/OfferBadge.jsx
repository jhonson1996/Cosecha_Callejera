import React from "react";
import offerCode from "../../Offer";

const OfferBadge = () => {
  return (
    <div className="offerBadge">
      <span>%{offerCode.disCount}</span>
    </div>
  );
}

export default OfferBadge;
