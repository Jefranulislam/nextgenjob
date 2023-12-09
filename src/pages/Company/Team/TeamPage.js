import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import teamMemberImage from "../../../assets/images/Group Photo Code Canva.jpg";
import teamlogo from "../../../assets/images/LOGO.png";


const TeamPage = () => {
  const teamPage = [
    {
      id: 1,
      teamMemberName: "Jefranul Islam ",
      teamMemberPosition: "MERN Stack Devaloper, 221002812"
    },
    {
      id: 2,
      teamMemberName: "Tareq hasan Munna",
      teamMemberPosition: "ui Designer, 221002612"
    },
    {
      id: 3,
      teamMemberName: "Shivaditya Das",
      teamMemberPosition: "221003012"
    },
    {
      id: 4,
      teamMemberName: "Md Riyad",
      teamMemberPosition: "22100012"
    },
   
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <div className="text-center">
            <img
                      src={teamlogo}
                      alt=""
                      className="rounded w-25  bg-cyan-300"
                    />
          
            <img
                      src={teamMemberImage}
                      alt=""
                      className="img-thumbnail  bg-cyan-300"
                    />
            </div>
            {teamPage.map((teamPageDetails, key) => (
              
              <Col lg={5} md={4} key={key}>
                <div className="team-box card border-0 mt-4">
                
                  <div className="team-content card-body text-center">
                    <Link to="#" className="primary-link">
                      <h6 className="fs-17 mb-1">
                        {teamPageDetails.teamMemberName}
                      </h6>
                    </Link>
                    <p className="text-muted mb-0">
                      {teamPageDetails.teamMemberPosition}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TeamPage;
