import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import lightLogo from "../../assets/images/Nextgenjob.png";
import darkLogo from "../../assets/images/Nextgenjob.png";
import signInImage from "../../assets/images/auth/sign-in.png";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();  
  
  
  const onSubmit = async (data) => {
    try { 
      const userData = {email: data.email , password: data.password  , userRole: data.userRole };
      console.log(userData);
        await signInWithEmailAndPassword( data.email,data.password); 
        const response = await fetch("http://localhost:4000/signin/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userData }),
        });
        console.log(response);
        console.log(userData);
        localStorage.setItem("userData", JSON.stringify(userData));

    } catch (error) {
      alert("SignIn Error:", error);
        console.log(error);
        console.error(error);
    }
  };

  if (user ) {
    navigate('/myprofile/settings', { state: { email: user.email, userRole: user.userRole } })
  }

  // Construct error message
  const signinErrors = error || errors ? (
    <p className='text-xs'>{error?.message || 
       errors?.message}</p>
  ) : null;

  if (loading ) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <div className="main-content">
        <div className="page-content">
          <section className="bg-auth">
            <Container>
              <Row className="justify-content-center">
                <Col xl={10} lg={12}>
                  <Card className="auth-box">
                    <Row className="g-0">
                      <Col lg={6} className="text-center">
                        <CardBody className="p-4">
                          <Link to="/">
                            <img src={lightLogo} alt="" className="logo-light img-fluid w-50" />
                            <img src={darkLogo} alt="" className="logo-dark img-fluid w-50" />
                          </Link>
                          <div className="mt-5">
                            <img src={signInImage} alt="" className="img-fluid" />
                          </div>
                        </CardBody>
                      </Col>
                      <Col lg={6}>
                        <CardBody className="auth-content p-5 h-100 text-white">
                          <div className="w-100">
                            <div className="text-center mb-4">
                              <h5>Welcome Back !</h5>
                              <p className="text-white-70">Sign in to continue to Nextgenjob.</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                              <div className="mb-3">
                                <label htmlFor="usernameInput" className="form-label">Email</label>
                                <input name="email" type="email" className="form-control" id="usernameInput" placeholder="Enter your email" {...register("email", { required: true })} />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input {...register("password", { required: true })} name="password" type="password" className="form-control" id="passwordInput" placeholder="Enter your password" />
                              </div>
                              

                              <div className="mb-4">
                                {/* Radio buttons for role selection */}
                                                          <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="hr"
                                    value="Hr"
                                    {...register('userRole')}
                                  />
                                  <label className="form-check-label" htmlFor="hr">
                                    HR
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="applicant"
                                    value="Applicant"
                                    {...register('userRole')}
                                  />
                                  <label className="form-check-label" htmlFor="applicant">
                                    Applicant
                                  </label>
                                </div>
                              </div>

                              <div className="mb-4">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        
                                  <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                </div>
                              </div>
                              <div className="text-center">
                                <button type="submit" className="btn btn-white btn-hover w-100">Sign In</button>
                                {signinErrors}
                              </div>
                            </form>
                            <div className="mt-4 text-center">
                              <p className="mb-0">Don't have an account ? <Link to="/signup" className="fw-medium text-white text-decoration-underline"> Sign Up </Link></p>
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
    </React.Fragment>
  );
};

export default SignIn;
