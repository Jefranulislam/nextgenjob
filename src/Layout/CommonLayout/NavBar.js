/* eslint-disable react/jsx-no-undef */
import React, { useEffect,useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Col, Row, Container, Collapse, NavbarToggler,
   NavItem, Dropdown,DropdownToggle,DropdownMenu} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Nextgenjob.png";
import auth from '../../firebase.init';
import withRouter from '../../components/withRouter';




const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);
  const [userInfo, setUserInfo] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const [signOut] = useSignOut(auth);
  const handleSignOut = async () => {
      try {
          await signOut();
          
          if (true) {
            localStorage.removeItem("userData");
            <p className=' alert '>Your are signing Out</p>
          }
      }
      catch (error) { console.error(error) }
  };

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const parsedData  = JSON.parse(userDataString);
      setUserInfo(parsedData );
    }
  }, []);

  return (
    <React.Fragment>
      <nav className={"navbar navbar-expand-lg fixed-top sticky p-0"} id="navigation">
        <Container fluid className="custom-container container">
          <Row className="w-100 align-items-center">
            <Col xs={1}>
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
                    <NavItem>
                    <Link to="/createajob" className="nav-link">Post a Job</Link>
                  </NavItem>
              
                </ul>
              </Collapse>
            </Col>
            <Col xs={3} className="d-flex justify-content-center  ">
              {userInfo?  (

                <div className="d-flex align-items-center border m-2 border-primary-subtle border-1 rounded-5">
                        <img src={"user.photoURL "} alt={userInfo.displayName} className="rounded-circle me-2" style={{ height: '40px', width: '40px' }} />
                    <div className="me-3">{userInfo.displayName || userInfo.email}
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
                  <Link to="/jobs" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">Jobs</h6>
                      </div>
                    </div>
                  </Link>
                  <Link to="/myprofile/settings" className="text-dark notification-item d-block">
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
              </DropdownMenu>  </Dropdown>  
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
