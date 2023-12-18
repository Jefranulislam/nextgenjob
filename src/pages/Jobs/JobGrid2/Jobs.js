import React from "react";
import { Container, Row } from "reactstrap";
import JobVacancy2 from "./JobVacancy2";
import Section from "./Section";

const Jobs = () => {
  document.title = "Job Grid2 | NextGenJob - Code Canva Team | NextGenJob";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <JobVacancy2 />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobs;
