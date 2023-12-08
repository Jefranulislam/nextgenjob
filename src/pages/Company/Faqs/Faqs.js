import React from "react";
import Section from "../../Company/Faqs/Section";
import FaqContent from "../../Company/Faqs/FaqContent";

const Faqs = () => {
  document.title = "FAQs | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <FaqContent />
    </React.Fragment>
  );
};

export default Faqs;
