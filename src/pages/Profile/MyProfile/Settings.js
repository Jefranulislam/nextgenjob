import React, { useState } from "react";
import { Col, Row, Input,Label} from "reactstrap";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form"

const Settings = () => {

  
  const [userRole, setUserRole] = useState(''); 
  const handleRoleChange = (e) => {
  setUserRole(e.target.value); 
   
  };

      //Add to the auth
   const [user]= useAuthState(auth);


        //Handling the submission with Use Form()
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmitHR = async (data, e) => {
      e.preventDefault();
      const {userRole, firstName, lastName, companyName, position, orgAddress, orgPhoneNumber, webAddress } = data;
      // Process HR data
      console.log('HR Data:', data);
    };
    
    const onSubmitApplicant = async (data, e) => {
      e.preventDefault();
      const {userRole, firstName, lastName, experience, educationBackground, skills, toolsExperience, address, phoneNumber, email } = data;
      // Process Applicant data
      console.log('Applicant Data:', data);
    };

    

  const onSubmit = async (data,e)=>{
    if (userRole === 'HR') {
      onSubmitHR(data, e);
    } else if (userRole === 'applicant') {
      onSubmitApplicant(data, e);
    } else {
    }
  };


    return (
        <div className="w-50 mx-auto mt-5 pt-5 pb-5">
              <form  onSubmit={handleSubmit(onSubmit)} className="bg-light" >
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                    <div className="text-center">
                      <Label for="userRole">Account Type</Label>
                          <Input  {...register("userRole")} type="select" name="userRole" id="userRole"   onChange={(e) => handleRoleChange(e)} value={userRole} className="input bg-purple text-white"  >
                            <option value="">Select Role</option>
                            <option value="HR">HR</option>
                            <option value="applicant">Applicant</option>
                          </Input>
                          <div className="mb-4 profile-user pt-2">
                        <img src={user.photoURL} className="rounded-circle img-thumbnail profile-img"  id="profile-img"  alt=""  />
                        <h4> {user.displayName}</h4>
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <input  id="profile-img-file-input"  type="file"   className="profile-img-file-input"  />
                          <label  htmlFor="profile-img-file-input"  className="profile-photo-edit avatar-xs" >
                            <i className="uil uil-edit"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <Row>



                    {userRole === 'HR' && (
                              <div>
                                  <Row>
                                   <Col lg={6}>
                                    <div className="mb-3">
                                      <label htmlFor="firstName" className="form-label">  First Name  </label>
                                      <input  type="text"  className="form-control" name="firstName"  id="firstName"  {...register("firstName")}  />  </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <label htmlFor="lastName" className="form-label">   Last Name  </label>
                                      <input  type="text"   className="form-control" name="lastName"  id="lastName" {...register("lastName")} />
                                    </div>
                                  </Col>
                                    </Row>
                                    <Row>
                                    <Col lg={6}>
                                    <div className="mb-3">
                                      <label htmlFor="CompanyName" className="form-label"> Company Name  </label>
                                      <input type="text"  className="form-control" name="companyName"  id="text" {...register("companyName")} />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    
                                    <div className="mb-3">
                                      <label htmlFor="choices-single-categories"  className="form-label"  >   Your Position In organization   </label>
                                      <select
                                        className="form-select"
                                        data-trigger
                                        name="position"
                                        type="text"
                                        id="choices-single-categories"
                                        aria-label="Default select example"
                                        {...register("position")}
                                      >
                                        <option value="Sr. Dept. Manager">Sr. Dept. Manager</option>
                                        <option value="CEO">CEO</option>
                                        <option value="Human Resource">Human Resource</option>
                                        <option value="Sr.Marketing Manager">Sr.Marketing Manager</option>
                                      </select>
                                    </div>
                                  </Col>
                                  </Row>
                                    <Row>
                                    <Col lg={4}>
                                    <div className="mb-3">
                                      <label htmlFor="orgAddress" className="form-label"> Organization Location  </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="orgAddress"
                                        {...register("orgAddress")}
                                      />
                                    </div>
                                  </Col>
                                    <Col lg={4}>
                                    <div className="mb-3">
                                      <label htmlFor="orgPhoneNumber" className="form-label"> Organization Contact  </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="orgPhoneNumber"
                                        id="phone"
                                        {...register("orgPhoneNumber")}
                                      />
                                    </div>
                                  </Col>
                                    <Col lg={4}>
                                    <div className="mb-3">
                                      <label htmlFor="webAddress" className="form-label"> Organization Website  </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="webAddress"
                                        id="webAddress"
                                        {...register("webAddress")}
                                      />
                                    </div>
                                  </Col>
                                  
                                  </Row>

                              </div>
                           
                           
                           )}


                            {userRole === 'applicant' && (
                              <div>
                                
                                  <Row>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <label htmlFor="firstName" className="form-label">   First Name  </label>
                                      <input  type="text"   className="form-control"  name="firstName"  id="lastName" {...register("firstName")} />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <label htmlFor="lastName" className="form-label">   Last Name  </label>
                                      <input  type="text"   className="form-control" name="lastName"   id="lastName" {...register("lastName")} />
                                    </div>
                                  </Col>
                                  </Row>
                                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Resume</h5>

                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <label
                            htmlFor="experience"
                            className="form-label"
                          >
                            Experiences
                          </label>
                          <textarea className="form-control" rows="5"  name="experience"  {...register("experience")} >
                          -
                          -
                          -
                          -
                          -
                         
                          </textarea>
                        </div>
                        
                      </Col>

                        <Col lg={12}>
                        <div className="mb-3">
                          <label htmlFor="educationBackground"  className="form-label"
                          >  Education Background  </label>
                          <textarea className="form-control" rows="5" placeholder="- will Seprate you Education Background " name="educationBackground"  {...register("educationBackground")}>
                          -
                          -
                          -
                          -
                          -
                         
                          </textarea>

                        </div>
                        </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="languages" className="form-label">
                            Skills 
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="skills"
                            placeholder="(,) Will Seprate your skill set" name="skills"  {...register("skills")}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>

                      <div className="mb-3">
                          <label htmlFor="languages" className="form-label">
                            Tools Experiences 
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Tools"
                            placeholder="(,) Will separate your tools experience set" name="toolsExperience" {...register("toolsExperience")}
                          />
                        </div>

                      </Col>
                      <Col lg={4}>
                      <div className="mb-3">
                          <label htmlFor="languages" className="form-label">
                            Address 
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            {...register("address")}
                          />
                        </div>
                      </Col>
                      <Col lg={4}>
                      <div className="mb-3">
                          <label htmlFor="languages" className="form-label">
                            Phone Number 
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            id="languages"  {...register("phoneNumber")}
                          />
                        </div>
                      </Col>
                      <Col lg={4}>
                      <div className="mb-3">
                          <label htmlFor="languages" className="form-label">
                            Email Address 
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="languages"
                            name="email"
                            {...register("email")}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>       
                              </div>
                            )}





                    </Row>
                  </div>


                  <div className="mt-4 text-end">
                    <input type="submit" to="" className="btn btn-primary"/>
                 
                  </div>
                </form>
        </div>
    );
};

export default Settings;