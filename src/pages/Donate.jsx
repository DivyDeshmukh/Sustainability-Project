import React from "react";
import DonateHome from "../components/DonateHome";
import WhyDonate from "../components/WhyDonate";
import DonateCards from "../components/DonateCards";
import AdvDonations from "../components/AdvDonations";
import HowDonate from "../components/HowDonate";

const Donate = () => {
  return (
    <div>
      <DonateHome />;
      <WhyDonate />
      <DonateCards />
      <AdvDonations />
      <HowDonate />
    </div>
  );
};

export default Donate;
