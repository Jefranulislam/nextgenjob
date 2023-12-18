import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Label, Row } from "reactstrap";
import { useForm } from "react-hook-form";

const CreateAJob = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const jobData = {
      jobtitle: data.jobtitle,
      jobdescription: data.jobdescription,
      email: data.email,
      phoneNumber: data.phoneNumber,
      categories: data.categories,
      jobtype: data.jobtype,
      designation: data.designation,
      salary: data.salary,
      additionalQualifications: data.qualification,
      positionSkills: data.skills,
      officeAddress: data.officeAddress,
      hrName: data.hrName,
      HrEmailAddress: data.HrEmailAddress,
      jobRequirements: data.jobRequirements,
      educationBackground: data.educationBackground,
      companyName: data.companyName,
      CompanyImg: data.CompanyImg,
    };

    const response = await fetch("http://localhost:4000/jobs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
{
  jobtitle: data.jobtitle,
      jobdescription: data.jobdescription,
      email: data.email,
      phoneNumber: data.phoneNumber,
      categories: data.categories,
      jobtype: data.jobtype,
      designation: data.designation,
      salary: data.salary,
      additionalQualifications: data.qualification,
      positionSkills: data.skills,
      officeAddress: data.officeAddress,
      hrName: data.hrName,
      HrEmailAddress: data.HrEmailAddress,
      jobRequirements: data.jobRequirements,
      educationBackground: data.educationBackground,
      companyName: data.companyName,
      CompanyImg: data.CompanyImg,
}

        
      ),
      
    });
    console.log(response);
    localStorage.setItem("jobData", JSON.stringify(jobData));
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
                <Col lg={10}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      Job Title
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Title"
                      name="jobtitle"
                      {...register("jobtitle")}
                    />
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="mb-4">
                    <Label htmlFor="CompanyImg" className="form-label">
                      Company Logo
                    </Label>
                    <input
                      type="link"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Upload on imgBB then paste the full link "
                      name="CompanyImg"
                      {...register("CompanyImg")}
                    />
                  </div>
                </Col>
                
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      Company Name
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="text"
                      placeholder="  Company Name"
                      name="companyName"
                      {...register("companyName")}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                    Job Requirements
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Job Requirements"
                      name="jobRequirements"
                      {...register("jobRequirements")}
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                    Education Background
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder=" Education Background"
                      name="educationBackground"
                      {...register("educationBackground")}
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
                      name="jobdescription"
                      {...register("jobdescription")}
                    ></textarea>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="positionResponsibilities" className="form-label">
                    Position Responsibilities
                    </Label>
                    <textarea
                      className="form-control"
                      id="jobdescription"
                      rows="3"
                      placeholder="Enter Job Description"
                      name="positionResponsibilities"
                      {...register("positionResponsibilities")}
                    ></textarea>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      Email Address
                    </Label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      name="email"
                      {...register("email")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </Label>
                    <input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      name="phoneNumber"
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
                      id="choices-single-categories"
                      aria-label="Default select example"
                      name="categories"
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
                    <input
                      type="text"
                      className="form-control"
                      id="jobtype"
                      placeholder="Job type"
                      name="jobtype"
                      {...register("jobtype")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="designation" className="form-label">
                      Designation
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="designation"
                      placeholder="Designation"
                      name="designation"
                      {...register("designation")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="salary" className="form-label">
                      Salary($)
                    </Label>
                    <input
                      type="number"
                      className="form-control"
                      id="salary"
                      placeholder="Salary"
                      name="salary"
                      {...register("salary")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="qualification" className="form-label">
                      Qualification
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="qualification"
                      placeholder="Qualification"
                      name="qualification"
                      {...register("qualification")}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="skills" className="form-label">
                      Job Skills{" "}
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="skills"
                      placeholder="Job skills"
                      name="skills"
                      {...register("skills")}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="skills" className="form-label">
                    Office Address{" "}
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="skills"
                      placeholder="Office Address"
                      name="officeAddress"
                      {...register("officeAddress")}
                    />
                  </div>
                </Col>
                <h5>Information of HR/CEO</h5>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="skills" className="form-label">
                   hrName{" "}
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="skills"
                      placeholder="hr Name"
                      name="hrName"
                      {...register("hrName")}
                    />
                  </div>
                </Col>
             
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="skills" className="form-label">
                   Hr's Email Address{" "}
                    </Label>
                    <input
                      type="text"
                      className="form-control"
                      id="skills"
                      placeholder="Hr's Email Address"
                      name="HrEmailAddress"
                      {...register("HrEmailAddress")}
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

