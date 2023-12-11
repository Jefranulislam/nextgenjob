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
    fetch(`http://localhost:4000/jobs/${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        setjobs(data);
        console.log(data);
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
                {jobs.map( (job) => {
              return <h1 key={job.id}job={job} >{job.companyName}</h1>
                })}
              {/* <JobDetailsDescription jobId={jobId} />
              <JobVacancyPost /> */}
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              {/* <RightSideContent /> */}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobDetails;
