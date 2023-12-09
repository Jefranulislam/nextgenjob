import React from "react";
import { Link } from "react-router-dom";
import { Col, Container } from "reactstrap";
import herobannar from "../../../assets/images/herobannar2.png"
const Section = () => {
  return (
    <React.Fragment>
      <section className="page-title-box">
        <Container>
          <div className="row justify-content-center">
            <Col md={6}>
              <div className="text-center text-white">
                <h3 className="mb-4">Empowering Careers, Fuelling Growth</h3>
                
              </div>
            </Col>
          </div>
        </Container>
      </section>
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="shape">
          <img src={herobannar}></img>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section;
