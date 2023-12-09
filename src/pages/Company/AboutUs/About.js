import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import AboutImage from "../../../assets/images/aboutNExtgenjob.png";

const About = () => {
  return (
    <React.Fragment>
      <section className="section overflow-hidden">
        <Container>
          <Row className="align-items-center g-0">
            <Col lg={6}>
              <div className="section-title me-lg-5">
                <h6 className="sub-title">About Us</h6>
                <h2 className="title mb-4">
                Welcome to NextGenJob – Where Innovation Meets Career Excellence!
                </h2>
                <p className="text-muted">
                Our Story

At CodeCava, we believe in the power of technology to transform lives and propel careers to new heights. NextGenJob is our latest venture, born out of a shared passion for creating a platform that not only connects employers with top talent but also empowers individuals to shape their professional destinies.

                </p>

                <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-hover">
                    Learn More{" "}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-img mt-4 mt-lg-0">
                <img src={AboutImage} alt="" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
