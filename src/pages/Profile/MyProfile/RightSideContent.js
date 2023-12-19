import React, { useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Input,
  Form,
  NavItem,
  CardBody,
  Label
} from "reactstrap";

import classnames from "classnames";

//Images Import
import userImage2 from "../../../assets/images/user/img-02.jpg";
import { Link } from "react-router-dom";
import Settings from "./Settings";

const RightSideContent = () => {
  const [activeTab, setActiveTab] = useState("1");
const [hrjob,sethrjobs]= useState("");
  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const retrievedUserData = localStorage.getItem("userData");
  const parsedUserData = typeof retrievedUserData === 'string' ? JSON.parse(retrievedUserData) : retrievedUserData;

const hrsemail = parsedUserData.email;

  fetch(`http://localhost:4000/jobdetailsByEmail/${hrsemail}`)
  .then(response => response.json())
  .then(data => {
    // Handle the received job details data
    sethrjobs(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
  const jobApplications = hrjob.applications;
    return (
    <React.Fragment>
      <Col lg={8}>

        { parsedUserData.role =="hr" &&(
          <Card className="profile-content-page mt-4 mt-lg-0">
            
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist"
          >
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button"
              >
                Overview
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button"
              >
                Settings
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">

          
           <h3> Your Jobs from Your Company:  </h3><h3></h3>

            <div className="border rounded-md pt-5 ">       
            <div class="card alert alert-success">
              <div class="card-header">
              {hrjob.companyName}
              </div>
              <div class="card-body">
              {hrjob.applications && Array.isArray(hrjob.applications) ? (
                    hrjob.applications.map((application, index) => (
                      <div key={index}>
                        <p>Application Name: {application.name}</p>
                        <p>Application Email: {application.email}</p>
                        <p>Application Message: {application.message}</p>
                        {/* Other properties */}
                      </div>
                    ))
                  ) : (
                    <p>No applications found</p>
                  )}
              </div>
            </div>




                   
              </div>


              </TabPane>
              <TabPane tabId="2">
                <Settings></Settings>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>


        )}  
        { parsedUserData.role =="applicant" &&(
          <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist"
          >
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button"
              >
                Overview
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button"
              >
                Settings
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div>
                  <h5 className="fs-18 fw-bold">About</h5>
                  <p className="text-muted mt-4">
                    Developer with over 5 years' experience working in both the
                    public and private sectors. Diplomatic, personable, and
                    adept at managing sensitive situations. Highly organized,
                    self-motivated, and proficient with computers. Looking to
                    boost students’ satisfactions scores for{" "}
                    <b>International University</b>. Bachelor's degree in
                    communications.
                  </p>
                  <p className="text-muted">
                    It describes the candidate's relevant experience, skills,
                    and achievements. The purpose of this career summary is to
                    explain your qualifications for the job in 3-5 sentences and
                    convince the manager to read the whole resume document.
                  </p>
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Education</h6>
                  <div className="candidate-education-content mt-4 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      B
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">
                        BCA - Bachelor of Computer Applications
                      </h6>
                      <p className="mb-2 text-muted">
                        International University - (2004 - 2010)
                      </p>
                      <p className="text-muted">
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                  <div className="candidate-education-content mt-3 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      M
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">
                        MCA - Master of Computer Application
                      </h6>
                      <p className="mb-2 text-muted">
                        International University - (2010 - 2012)
                      </p>
                      <p className="text-muted">
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                  <div className="candidate-education-content mt-3 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      D
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">
                        Design Communication Visual
                      </h6>
                      <p className="text-muted mb-2">
                        International University - (2012-2015)
                      </p>
                      <p className="text-muted">
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
                  <div className="candidate-education-content mt-4 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      {" "}
                      W{" "}
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">
                        Web Design & Development Team Leader
                      </h6>
                      <p className="mb-2 text-muted">
                        Creative Agency - (2013 - 2016)
                      </p>
                      <p className="text-muted">
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                  <div className="candidate-education-content mt-4 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      {" "}
                      P{" "}
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">Project Manager</h6>
                      <p className="mb-2 text-muted">
                        NextGenJob Technology Pvt.Ltd - (Pressent)
                      </p>
                      <p className="text-muted mb-0">
                        There are many variations of passages of available, but
                        the majority alteration in some form. As a highly
                        skilled and successfull product development and design
                        specialist with more than 4 Years of My experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Skills</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Cloud Management
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Responsive Design
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Network Architecture
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    PHP
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Bootstrap
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    UI & UX Designer
                  </span>
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Spoken languages</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    English
                  </span>
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    German
                  </span>
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    French
                  </span>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <Settings></Settings>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>


        )}  
        
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
