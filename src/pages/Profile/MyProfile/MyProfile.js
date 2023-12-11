import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import heroimage from "../../../assets/images/hero.png"

const MyProfile = () => {
  const [user]  = useAuthState(auth);
  document.title = "Dashboard | NextGenJob - Code Canva Team | NextGenJob";
  return (
    <React.Fragment>
     <section>
     <section className="">
        <Container>
          <Row className="justify-content-center">
            <div md={6} className="col-md-6">
              <div className="text-center text-white">
                <h3 className="mb-4"> Welcome {user.displayName} !</h3>
                <div className="page-next">
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="shape">
      <img className=" min-w-fit " src={heroimage}></img>
        </div>
      </div>
     </section>
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent auth={auth} />
            <RightSideContent auth={auth} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
