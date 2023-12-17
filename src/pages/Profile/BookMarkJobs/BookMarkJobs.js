import React from "react";
import { Container } from "reactstrap";
import Selected from "../ManageJobs/Selected";
import BookmarkJobListing from "./BookmarkJobListing";
import Section from "./Section";

const BookMarkJobs = () => {
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <BookmarkJobListing />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BookMarkJobs;
