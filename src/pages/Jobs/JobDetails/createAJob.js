import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";
import { useForm } from "react-hook-form";

const CreateAJob = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const jobData= { 


     }
    // localStorage.setItem("userData", JSON.stringify(userData));
     const response = await fetch("http://localhost:4000/jobs", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        


      }),
    })




    console.log(data);
  };

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-primary-subtle text-primary p-3">
                <h5 className="mb-0 fs-17">Post a New Job!</h5>
              </div>
            </Col>
          </Row>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="job-post-form shadow mt-4"
          >
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      Job Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Title"
                      {...register("jobtitle")}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobdescription" className="form-label">
                      Job Description
                    </Label>
                    <textarea
                      className="form-control"
                      id="jobdescription"
                      rows="3"
                      placeholder="Enter Job Description"
                      {...register("jobdescription")}
                    ></textarea>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      {...register("email")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      {...register("phoneNumber")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label
                      htmlFor="choices-single-categories"
                      className="form-label"
                    >
                      Categories
                    </label>
                    <select
                      className="form-select"
                      data-trigger=""
                      name="choices-single-categories"
                      id="choices-single-categories"
                      aria-label="Default select example"
                      {...register("categories")}
                    >
                      <option value="ne">Digital & Creative</option>
                      <option value="df">Retail</option>
                      <option value="od">Management</option>
                      <option value="rd">Human Resources</option>
                    </select>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="jobtype" className="form-label">
                      Job Type
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtype"
                      placeholder="Job type"
                      {...register("jobtype")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="designation" className="form-label">
                      Designation
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="designation"
                      placeholder="Designation"
                      {...register("designation")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="salary" className="form-label">
                      Salary($)
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="salary"
                      placeholder="Salary"
                      {...register("salary")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="qualification" className="form-label">
                      Qualification
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="qualification"
                      placeholder="Qualification"
                      {...register("qualification")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="skills" className="form-label">
                      Job Skills{" "}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="skills"
                      placeholder="Job skills"
                      {...register("skills")}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="lastdate" className="form-label">
                      Application Deadline Date
                    </Label>
                    <Input
                      type="date"
                      className="form-control"
                      id="lastdate"
                      {...register("lastdate")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label
                      htmlFor="choices-single-location"
                      className="form-label"
                    >
                      Country
                    </Label>
                    <select
                      className="form-select"
                      data-trigger
                      name="choices-single-location"
                      id="choices-single-location"
                      aria-label="Default select example"
                      {...register("country")}
                    >
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                    </select>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label htmlFor="city" className="form-label">
                      City
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      {...register("city")}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label htmlFor="zipcode" className="form-label">
                      Zipcode
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      placeholder="Zipcode"
                      {...register("zipcode")}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="#" className="btn btn-success">
                      Back
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Post Now <i className="mdi mdi-send"></i>
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CreateAJob;
