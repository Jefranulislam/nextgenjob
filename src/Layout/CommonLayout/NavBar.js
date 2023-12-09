/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Col, Row, Container, Collapse, NavbarToggler, NavItem, Dropdown,DropdownToggle,DropdownMenu,ButtonToggle} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Nextgenjob.png";
import userImage2 from "../../assets/images/Nextgenjob.png";
import jobImage4 from "../../assets/images/Nextgenjob.png";
import userImage1 from "../../assets/images/Nextgenjob.png";
import jobImage from "../../assets/images/Nextgenjob.png";
import { useState } from 'react';
import auth from '../../firebase.init';
import withRouter from '../../components/withRouter';



const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);




  const navigate = useNavigate();
  const [user]  = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
     navigate("/");
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <nav className={"navbar navbar-expand-lg fixed-top sticky p-0"} id="navigation">
        <Container fluid className="custom-container container">
          <Row className="w-100 align-items-center">
            <Col xs={2}>
              <Link className="navbar-brand text-dark fw-bold" to="/">
                <img src={logo} height="22" alt="" className="logo-dark" />
                <img src={logo} height="22" alt="" className="logo-light" />
              </Link>
            </Col>
            <Col xs={7}>
              <NavbarToggler className="me-3" type="button" onClick={toggle}>
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>
              <Collapse isOpen={isOpen} className="navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mx-auto navbar-center">
                  <NavItem>
                    <Link to="/" className="nav-link">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about-us" className="nav-link">About</Link>
                  </NavItem>

                  <NavItem>
                    <Link to="/Jobs" className="nav-link">Jobs</Link>
                  </NavItem>
               
                  <NavItem>
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </NavItem>
                </ul>
              </Collapse>
            </Col>
            <Col xs={2} className="d-flex justify-content-center border m-2 border-primary-subtle border-1 rounded-5 ">
              {user ? (

                <div className="d-flex align-items-center">
                        <img src={user.photoURL } alt={user.displayName} className="rounded-circle me-2" style={{ height: '40px', width: '40px' }} />
                    <div className="me-3">{user.displayName || user.email}
                    </div> 
            <Dropdown
              isOpen={notification}
              toggle={dropDownnotification}
              className="  "
            >
              <DropdownToggle
                href="#"
                className="header-item arrow-down position-relative"
                id="notification"
                type="button"
                tag="a"
              >
              </DropdownToggle>
                     {/* //*inside of notification menu*/}
              <DropdownMenu
                className="dropdown-menu-sm dropdown-menu-end p-0"
                aria-labelledby="notification"
                end
              >
               
                <div className="notification-wrapper dropdown-scroll">
                  <Link
                    to="/myprofile"
                    className="text-dark notification-item d-block active"
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                         Dashboard
                        </h6>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">Jobs</h6>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                         Settings
                        </h6>
                      </div>
                    </div>
                  </Link>
                  
                  <Link className="text-dark notification-item d-block">
                  <button className="btn btn-primary " onClick={handleSignOut}>Sign out</button>
                  
                  </Link>
                </div>
                
              </DropdownMenu> 

              </Dropdown> 

                   
                  
                </div>
              ) : (
                <div>
                  <Link className="btn btn-primary me-2" to="/signin">Login</Link>
                  <Link className="btn btn-primary me-2" to="/signup">Signup</Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
