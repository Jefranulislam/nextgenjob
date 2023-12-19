import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Col, Row, CardBody } from "reactstrap";
import lightLogo from "../../assets/images/Nextgenjob.png";
import darkLogo from "../../assets/images/Nextgenjob.png";
import signUpImage from "../../assets/images/auth/sign-up.png";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Toast } from "react-bootstrap";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const navigate = useNavigate();
const onSubmit = async data => {

    try {
      const userData= { email: data.email,  password : data.password, name: data.name, role : data.role };
      await createUserWithEmailAndPassword( userData.email, userData.password);
      console.log(<p className=" alert alert-primary"> success</p>);
    if(user){
    navigate("/jobs");
    
    }

    const response = await fetch("http://localhost:4000/api/signup", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
              email: data.email,
              password : data.password, 
              name: data.name, 
              role : data.role ,
      }),
    })
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate('/myprofile/settings');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="align-items-center">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light img-fluid w-50"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark img-fluid w-50"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signUpImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>Let's Get Started</h5>
                                <p className="text-white-70">
                                  Sign Up and get access to all the features of
                                  Nextgenjob
                                </p>
                              </div>
                              <form
                                onSubmit={handleSubmit(onSubmit)} className="auth-form">
                                <div className="mb-3"> 
                                <label  htmlFor="usernameInput"  className="form-label" > Name</label>
                                  <input {...register("name", { required: true })}name="name" type="text"  className="form-control"  id="email"  placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <input
                                    {...register("email", { required: true })}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    required
                                    id="emailInput"
                                    placeholder="Enter your email"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                      required: true,
                                    })}
                                    name="password"
                                  />
                                </div>
                                <Col lg={12} >
                                <div className="mb-4 form-check" >
                                 <div  className="form-check form-check-inline ">
                                  <input
                                    
                                    {...register("role")}
                                    type="radio"
                                    id="hr"
                                    value="hr"
                                    className="form-check form-check-input"
                                  />
                                  <label htmlFor="hr" className="form-check-label">HR/CEO</label></div>
                                  <div className="form-check  form-check-inline ">
                                  <input
                                    {...register("role")}
                                    type="radio"
                                    id="applicant"
                                    value="applicant"
                                    className="form-check form-check-input"
                                  />
                                  <label htmlFor="applicant" className="form-check-label">Applicant</label>
                                  </div>
                                </div>
                                </Col>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      I agree to the{" "}
                                      <Link
                                        to="#"
                                        className="text-white text-decoration-underline"
                                      >
                                        Terms and conditions
                                      </Link>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Sign Up
                                  </button>
                                </div>
                              </form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Already a member ?{" "}
                                  <Link
                                    to="/signin"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign In{" "}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
