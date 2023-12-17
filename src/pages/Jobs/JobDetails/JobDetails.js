import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import JobDetailsDescription from "./JobDetailsDescription";
import JobVacancyPost from "./JobVacancyPost";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useParams } from "react-router-dom";

  const JobDetails = () => {
  document.title = "Job Details | NextGenJob - Code Canva Team | NextGenJob";

  const { jobId } = useParams();
  const [jobs, setjobs] = useState([]);


  useEffect(() => {
    fetch(`https://localhost:4000/jobdetails/${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setjobs(data);
        } else {
          console.error("Invalid data format received");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [jobId]);


  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
      <Row>
            <Col lg={8}>
              <JobDetailsDescription jobId={jobId} jobs={jobs} />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <RightSideContent jobId={jobId} jobs = {jobs} />
            </Col>
          </Row>

        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobDetails;
