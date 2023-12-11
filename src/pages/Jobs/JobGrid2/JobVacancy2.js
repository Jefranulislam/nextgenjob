import React, { useEffect, useState } from "react";
import { Col, Modal, ModalBody, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const JobVacancy2 = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/jobs')
        .then(res => res.json())
        .then(data => {
            setjobs(data);

        })
        .catch(error => {
            console.error(error)
        })
}, []);

  
  return (
    <React.Fragment>
      {jobs.map((jobVacancy2Details) => (
        <Col lg={4} md={6} className="mt-4" key={jobVacancy2Details._id}>
          <div
            className={
              jobVacancy2Details.addclassNameBookmark === true
                ? "card job-grid-box bookmark-post"
                : "card job-grid-box"
            }
          >
            <div className="card-body p-4">
              <div className="favorite-icon">
                <Link to="#">
                  <i className="uil uil-heart-alt"></i>
                </Link>
              </div>
              <div>
                <Link to={`/jobdetails/${jobVacancy2Details._id}`}>
                  <img
                    src={jobVacancy2Details.companyImg}
                    alt=""
                    className="img-fluid rounded-3 w-50"
                  />
                </Link>
              </div>
              <div className="mt-4">
                <Link to={`/jobdetails/${jobVacancy2Details._id}`}  className="primary-link">
                  <h5 className="fs-17 mb-1">
                    {jobVacancy2Details.jobDescription}
                  </h5>
                </Link>
                <p className="text-muted">{jobVacancy2Details.companyName}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span className="badge bg-success-subtle text-success fs-13 mt-1">
                      {jobVacancy2Details.salary}
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                      {jobVacancy2Details.experience}
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge bg-blue-subtle text-blue fs-13 mt-1">
                      {jobVacancy2Details.jobType}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="job-grid-content mt-3">
                <p className="text-muted">{jobVacancy2Details.jobDetails}</p>
                <div className="d-flex align-items-center justify-content-between mt-4 border-top pt-3">
                  <p className="text-muted float-start mb-0">
                    {jobVacancy2Details.jobTimeDate}
                  </p>
                  <div className="text-end">
                    <a
                      href="#applyNow"
                      onClick={openModal}
                      className="btn btn-sm btn-primary"
                    >
                      Apply Now <i className="uil uil-angle-right-b"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
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
                <Label for="nameControlInput" className="form-label">
                  Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="nameControlInput"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <Label for="emailControlInput2" className="form-label">
                  Email Address
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  id="emailControlInput2"
                  placeholder="Enter your email"
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
                ></textarea>
              </div>
              <div className="mb-4">
                <Label className="form-label" for="inputGroupFile01">
                  Resume Upload
                </Label>
                <Input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Application
              </button>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobVacancy2;
