import React from "react";

//Company Section
import AboutUs from "../pages/Company/AboutUs/AboutUs";
import Team from "../pages/Company/Team/Team";
import PrivacyAndPolicy from "../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy";

//Jobs Section
import JobDetails from "../pages/Jobs/JobDetails/JobDetails";
import JobsCategories from "../pages/Jobs/JobsCategories/JobsCategories";

//Candidate and Company Section

//Contacts
import Contact from "../pages/Contact/Contact";

//AuthPages
import SignIn from "../pages/ExtraPages/SignIn";
import SignUp from "../pages/ExtraPages/SignUp";
import ComingSoon from "../pages/ExtraPages/ComingSoon";
import Error404 from "../pages/ExtraPages/Error404";
import Components from "../pages/ExtraPages/Components/Components";

//profile section(User Profile)

import MyProfile from "../pages/Profile/MyProfile/MyProfile";
import Settings from "../pages/Profile/MyProfile/Settings";
import Jobs from "../pages/Jobs/JobGrid2/Jobs";
import CreateAJob from "../pages/Jobs/JobDetails/createAJob";
import RequireAuth from "../pages/ExtraPages/RequireAuth";

//Home Section
const Layout2 = React.lazy(() => import("../pages/Home/Layout2/Layout2"));

const userRoutes = [
  //profile Section(User Profile)
 
  { path: "/myprofile", component: <MyProfile /> },
  { path: "/myprofile/settings", component: <Settings /> },



  //Components Section(Extra Pages)
  { path: "/components", component: <Components /> },

  //Contact
  { path: "/contact", component: <Contact /> },

  //Candidate and Company Section

  //Jobs Section
  { path: "/jobscategories", component: <JobsCategories /> },
  { path: "/jobdetails/:jobId", component: <JobDetails /> },
  { path: "/Jobs", component: <Jobs/> },
 
  { path: "/createajob", component:   <RequireAuth>  <CreateAJob /> </RequireAuth>    },

  //Company Section
  { path: "/privacyandpolicy", component: <PrivacyAndPolicy /> },
  { path: "/team", component: <Team /> },
  { path: "/about-us", component: <AboutUs /> },

  //Home Section
  { path: "/", component: <Layout2 /> },
];

const authRoutes = [
  { path: "/error404", component: <Error404 /> },
  { path: "/comingsoon", component: <ComingSoon /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/signin", component: <SignIn /> },
];
export { userRoutes, authRoutes };
