import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Label, Modal, ModalBody, Row } from "reactstrap";
import JobVacancyPost from "./JobVacancyPost";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { Link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

  const JobDetails = () => {
  document.title = "Job Details | NextGenJob - Code Canva Team | NextGenJob";
const [user]= useAuthState(auth);
  const { jobId } = useParams();
  const [jobs, setjobs] = useState([]);
  const [jobinfo, setjobinfo] = useState([]);
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);



  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  // const handleSubmitApplication = (jobId) => {
  //   // Make a PUT request to update the specific job's applications array
  //   fetch(`http://localhost:4000/jobs/${jobId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       applicationData
  //     })
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response as needed (e.g., show success message, update state)
  //       console.log("Application submitted successfully", data);
  //       // Optionally, close the modal or reset the input fields
  //       setModal(false);
  //       setApplicationData({
  //         name: "",
  //         email: "",
  //         message: ""
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting application", error);
  //     });
  // };

  
  
  const handleSubmitApplication = (jobId) => {
    fetch(`http://localhost:4000/jobs/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        applicationData
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Application submitted successfully", data);
        setModal(false);
        setApplicationData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Error submitting application", error.message);
      });
  };
  














  useEffect(() => {
    fetch(`http://localhost:4000/jobdetails/${jobId}`)
      .then((res) => res.json())
      .then((data) => { 
          setjobs(data);
          localStorage.setItem(`${jobId}`, JSON.stringify(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [jobId]);

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const parsedData  = JSON.parse(userDataString);
      setjobinfo(parsedData );
    }
  }, []);

 


  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
      <Row>
            <Col lg={8}>
            <Card lg={4} md={6} className="job-detail overflow-hidden">
          
        <div>
          <img src={jobs.companyImg} alt="" className="img-fluid w-25" />
          <div className="job-details-compnay-profile">
            <img
              src={""}
              alt=""
              className="img-fluid rounded-3 rounded-3"
            />
          </div>
        </div>
        <CardBody className="p-4">
          <div>
            <Row>
              <Col md={8}>
                <h5 className="mb-1">{jobs.jobDescription}</h5>
                <ul className="list-inline text-muted mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-account"></i> 8 Vacancy
                  </li>
                  <li className="list-inline-item text-warning review-rating">
                    <span className="badge bg-warning">4.8</span>{" "}
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star-half-full align-middle"></i>
                  </li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-heart-alt"></i>
                      </Link>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-setting"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <Row className="g-2">
              <Col lg={3}>
                <div className="border rounded-start p-3">
                  <p className="text-muted mb-0 fs-13">Experience</p>
                  <p className="fw-medium fs-15 mb-0">{jobs.experience}</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Employee type</p>
                  <p className="fw-medium mb-0">{jobs.jobType} </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Position</p>
                  <p className="fw-medium mb-0">Senior</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border rounded-end p-3">
                  <p className="text-muted fs-13 mb-0">Offer Salary</p>
                  <p className="fw-medium mb-0">{jobs.salary}</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Job Description</h5>
            <div className="job-detail-desc">
              <p className="text-muted mb-0">
                {jobs.jobDetails}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Responsibilities</h5>
            <div className="job-detail-desc mt-2">
             
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                <li>
                  <i className="uil uil-circle"></i>  {jobs.positionResponsibilities}
                </li>
                <li>
                  <i className="uil uil-circle"></i>  {jobs.positionResponsibilities}
                </li>
                <li>
                  <i className="uil uil-circle"></i>  {jobs.positionResponsibilities} 
                </li>
                
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Qualification </h5>
            <div className="job-detail-desc mt-2">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">

              <li>
                  <i className="uil uil-circle"></i>  {jobs.additionalQualifications}
                </li>
          
              <li>
                  <i className="uil uil-circle"></i>  {jobs.additionalQualifications}
                </li>
          
              <li>
                  <i className="uil uil-circle"></i>  {jobs.additionalQualifications}
                </li>
          

          
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Skill & Experience</h5>
            <div className="job-details-desc">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                <li>
                  <i className="uil uil-circle"></i> {jobs.positionSkills}
                </li>
                <li>
                  <i className="uil uil-circle"></i>  {jobs.positionSkills }
                </li>
                <li>
                  <i className="uil uil-circle"></i> {jobs.positionSkills }
                </li>
            
               
              </ul>
              <div className="mt-4 d-flex flex-wrap align-items-start gap-1">
                <span className="badge bg-primary">PHP</span>
                <span className="badge bg-primary">JS</span>
                <span className="badge bg-primary">Marketing</span>
                <span className="badge bg-primary">REACT</span>
                <span className="badge bg-primary">PHOTOSHOP</span>
              </div>
            </div>
          </div>

       
        </CardBody>
      </Card>
                      
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">

            <div className="side-bar ms-lg-4" key={jobs._id}>
          <Card className="job-overview">
            <CardBody className="p-4">
              <h6 className="fs-17">Job Overview</h6>
              <ul className="list-unstyled mt-4 mb-0">
                <li>
                  <div className="d-flex mt-4">
                    <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Job Title</h6>
                      <p className="text-muted mb-0">
                        {jobs.jobDescription}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex mt-4">
                    <i className="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Experience</h6>
                      <p className="text-muted mb-0"> {jobs.experience}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex mt-4">
                    <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Location</h6>
                      <p className="text-muted mb-0"> {jobs.officeAddress}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex mt-4">
                    <i className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Offered Salary</h6>
                      <p className="text-muted mb-0">{jobs.salary}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex mt-4">
                    <i className="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Qualification</h6>
                      <p className="text-muted mb-0">Bachelor Degree</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex mt-4">
                    <i className="uil uil-building icon bg-primary-subtle text-primary"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Industry</h6>
                      <p className="text-muted mb-0">Private</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex mt-4">
                    <i className="uil uil-history icon bg-primary-subtle text-primary"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Date Posted</h6>
                      <p className="text-muted mb-0">Posted 2 hrs ago</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-3">
                <Link
                  to="#applyNow"
                  onClick={openModal}
                  className="btn btn-primary btn-hover w-100 mt-2"
                >
                  Apply Now <i className="uil uil-arrow-right"></i>
                </Link>
       
              </div>
            </CardBody>
          </Card>

          <Card className="company-profile mt-4">
            <CardBody className="p-4">
              <div className="text-center">
                <img src={"jobImages2"} alt="" className="img-fluid rounded-3" />

                <div className="mt-4">
                  <h6 className="fs-17 mb-1">{jobs.companyName}</h6>
                </div>
              </div>
              <ul className="list-unstyled mt-4">
                <li>
                  <div className="d-flex">
                    <i className="uil uil-phone-volume text-primary fs-4"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Phone</h6>
                      <p className="text-muted fs-14 mb-0">{jobs.phoneNumber}</p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex">
                    <i className="uil uil-envelope text-primary fs-4"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Email</h6>
                      <p className="text-muted fs-14 mb-0">
                        {jobs.HrEmailAddress}
                      </p>
                    </div>
                  </div>
                </li>
              
                <li className="mt-3">
                  <div className="d-flex">
                    <i className="uil uil-map-marker text-primary fs-4"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Location</h6>
                      <p className="text-muted fs-14 mb-0">
                        {jobs.officeAddress}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  className="btn btn-primary btn-hover w-100 rounded"
                >
                  <i className="mdi mdi-eye"></i> View Profile
                </Link>
              </div>
            </CardBody>
          </Card>

      
          <div
            className="modal fade"
            id="applyNow"
            tabIndex="-1"
            aria-labelledby="applyNow"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <Modal isOpen={modal} toggle={openModal} centered>
                <ModalBody className="modal-body p-5">
                  <div className="text-center mb-4">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Apply For This Job
                    </h5>
                  </div>
                  <div className="position-absolute end-0 top-0 p-3">
                    <button
                      type="button"
                      onClick={openModal}
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="mb-3">
                    <Label for="nameControlinput" className="form-label">
                      Name
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameControlinput"
                      placeholder="Enter your name"
                      value={applicationData.name} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="emailControlinput2" className="form-label">
                      Email Address
                    </Label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailControlinput2"
                      placeholder="Enter your email"
                      value={applicationData.email} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <Label for="messageControlTextarea" className="form-label">
                      Message
                    </Label>
                    <textarea
                      className="form-control"
                      id="messageControlTextarea"
                      rows="4"
                      placeholder="Enter your message"
                      value={applicationData.message} 
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100" onClick={() => handleSubmitApplication(jobId)}
>
                    Send Application
                  </button>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>;


              
            </Col>
          </Row>

        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobDetails;
