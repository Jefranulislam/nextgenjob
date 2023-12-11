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
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
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

  const onSubmit = async (data,e)=>{
    e.preventDefault();
    const { firstName,lastName } = data;
  }


    return (
        <div className="w-50 mx-auto mt-5 pt-5">
              <form action="#">
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                    <div className="text-center">
                      <Label for="userRole">Account Type</Label>
                          <Input type="select" name="userRole" id="userRole" className="input"  >
                            <option value="">Select Role</option>
                            <option value="HR">HR</option>
                            <option value="applicant">Applicant</option>
                          </Input>
                          <div className="mb-4 profile-user pt-2">
                        <img src={user.photoURL} className="rounded-circle img-thumbnail profile-img"  id="profile-img"  alt=""  />
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <input  id="profile-img-file-input"  type="file" onChange={handleRoleChange}  className="profile-img-file-input"  />
                          <label  htmlFor="profile-img-file-input"  className="profile-photo-edit avatar-xs" >
                            <i className="uil uil-edit"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <Row>



                    {userRole === 'HR' && (
                              <div>
                                <from>
                                  <Row>
                                   <Col lg={6}>
                                    <div className="mb-3">
                                      <label htmlFor="firstName" className="form-label">  First Name  </label>
                                      <input  type="text"  className="form-control"  id="firstName"  {...register("firstName", { required: true, maxLength: 20 })}  />  </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="lastName" className="form-label">   Last Name  </Label>
                                      <Input  type="text"   className="form-control"   id="lastName" {...register("lastName")} />
                                    </div>
                                  </Col>
                                    </Row>
                                    <Row>
                                    <Col lg={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="email" className="form-label"> Company Name  </Label>
                                      <Input type="text"  className="form-control"  id="text" {...register("companyName")} />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    
                                    <div className="mb-3">
                                      <label htmlFor="choices-single-categories"  className="form-label"  >   Your Position In organization   </label>
                                      <select
                                        className="form-select"
                                        data-trigger
                                        name="choices-single-categories"
                                        id="choices-single-categories"
                                        aria-label="Default select example"
                                      >
                                        <option value="4">Sr. Dept. Manager</option>
                                        <option value="1">CEO</option>
                                        <option value="3">Human Resource</option>
                                        <option value="5">Sr.Marketing Manager</option>
                                      </select>
                                    </div>
                                  </Col>
                                  </Row>
                                    <Row>
                                    <Col lg={4}>
                                    <div className="mb-3">
                                      <Label htmlFor="address" className="form-label"> Organization Location  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                      />
                                    </div>
                                  </Col>
                                    <Col lg={4}>
                                    <div className="mb-3">
                                      <Label htmlFor="address" className="form-label"> Organization Contact  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                      />
                                    </div>
                                  </Col>
                                    <Col lg={4}>
                                    <div className="mb-3">
                                      <Label htmlFor="address" className="form-label"> Organization Website  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                      />
                                    </div>
                                  </Col>
                                  
                                  </Row>

                                </from>
                              </div>
                           
                           
                           )}


                            {userRole === 'applicant' && (
                              <div>
                                {/* Applicant-specific fields */}
                                <from>
                                  <label for="applicantField1">Applicant Field 1:</label>
                                  <input type="text" name="applicantField1" id="applicantField1" />
                                </from>
                                {/* Add more Applicant fields as needed */}
                              </div>
                            )}





                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Introduce Yourself
                          </Label>
                          <textarea className="form-control" rows="5">
                            Developer with over 5 years' experience working in
                            both the public and private sectors. Diplomatic,
                            personable, and adept at managing sensitive
                            situations. Highly organized, self-motivated, and
                            proficient with computers. Looking to boost
                            students’ satisfactions scores for International
                            University. Bachelor's degree in communications.
                          </textarea>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="languages" className="form-label">
                            Languages
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="languages"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-location"
                            className="form-label"
                          >
                            Location
                          </label>
                          <select
                            className="form-select"
                            data-trigger
                            name="choices-single-location"
                            id="choices-single-location"
                            aria-label="Default select example"
                          >
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                  </div>

                

            
                  <div className="mt-4 text-end">
                    <Link to="" className="btn btn-primary">
                      Update
                    </Link>
                  </div>
                </form>
        </div>
    );
};

export default Settings;