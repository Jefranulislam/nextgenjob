import React from "react";
import { Col, Container, Row } from "reactstrap";
import CandidateDetails from "./CandidateDetails";
import JobFilters from "./JobFilters";
import Section from "./Section";

const CandidateList = () => {
  document.title =
    "Candidate List | NextGenJob - Code Canva Team | NextGenJob";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <JobFilters />
          <Row>
            <Col lg={12}>
              <CandidateDetails />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateList;
