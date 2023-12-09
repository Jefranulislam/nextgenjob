import React from "react";

// import Layout1 from "../pages/Home/Layout1/Layout1";
// import Layout2 from "../pages/Home/Layout2/Layout2";
// import Layout3 from "../pages/Home/Layout3/Layout3";

//Company Section
import AboutUs from "../pages/Company/AboutUs/AboutUs";
import Team from "../pages/Company/Team/Team";
import PrivacyAndPolicy from "../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy";

//Jobs Section
// import JobList from "../pages/Jobs/JobList/JobList";
import JobList2 from "../pages/Jobs/JobList2/JobList2";
// import JobGrid from "../pages/Jobs/JobGrid/JobGrid";
import JobDetails from "../pages/Jobs/JobDetails/JobDetails";
import JobsCategories from "../pages/Jobs/JobsCategories/JobsCategories";

//Candidate and Company Section
import CandidateList from "../pages/CandidateAndCompany/CandidateList/CandidateList";
import CandidateGrid from "../pages/CandidateAndCompany/CandidateGrid/CandidateGrid";
import CandidateDetails from "../pages/CandidateAndCompany/CandidateDetails/CandidateDetails";
import CompanyList from "../pages/CandidateAndCompany/CompanyList/CompanyList";
import CompanyDetails from "../pages/CandidateAndCompany/CompanyDetails/CompanyDetails";


//Contacts
import Contact from "../pages/Contact/Contact";

//AuthPages
import SignIn from "../pages/ExtraPages/SignIn";
import SignUp from "../pages/ExtraPages/SignUp";
import ResetPassword from "../pages/ExtraPages/ResetPassword";
import ComingSoon from "../pages/ExtraPages/ComingSoon";
import Error404 from "../pages/ExtraPages/Error404";
import Components from "../pages/ExtraPages/Components/Components";

//profile section(User Profile)
import BookMarkJobPost from "../pages/Profile/BookMarkJobPost/BookMarkJobPost";
import ManageJobs from "../pages/Profile/ManageJobs/ManageJobs";
import BookMarkJobs from "../pages/Profile/BookMarkJobs/BookMarkJobs";
import MyProfile from "../pages/Profile/MyProfile/MyProfile";
import Settings from "../pages/Profile/MyProfile/Settings";
import Jobs from "../pages/Jobs/JobGrid2/Jobs";

//Home Section
const Layout2 = React.lazy(() => import('../pages/Home/Layout2/Layout2'));

const userRoutes = [
  //profile Section(User Profile)
  { path: "/bookmarkjobpost", component: <BookMarkJobPost /> },
  
  { path: "/myprofile", component: <MyProfile /> },
  { path: "/myprofile/settings", component: <Settings /> },
  { path: "/bookmarkjobs", component: <BookMarkJobs /> },
  { path: "/managejobs", component: <ManageJobs /> },

  //Components Section(Extra Pages)
  { path: "/components", component: <Components /> },

  //Contact
  { path: "/contact", component: <Contact /> },



  //Candidate and Company Section
  { path: "/companydetails", component: <CompanyDetails /> },
  { path: "/companylist", component: <CompanyList /> },
  { path: "/candidatedetails", component: <CandidateDetails /> },
  { path: "/candidategrid", component: <CandidateGrid /> },
  { path: "/candidatelist", component: <CandidateList /> },

  //Jobs Section
  { path: "/jobscategories", component: <JobsCategories /> },
  { path: "/jobdetails", component: <JobDetails /> },
  { path: "/Jobs", component: <Jobs/> },
  { path: "/joblist2", component: <JobList2 /> },

  //Company Section
  { path: "/privacyandpolicy", component: <PrivacyAndPolicy /> },
  { path: "/team", component: <Team /> },
  { path: "/about-us", component: <AboutUs/> },

  //Home Section
  { path: "/", component: <Layout2 /> }
];

const authRoutes = [
  { path: "/error404", component: <Error404 /> },
  { path: "/comingsoon", component: <ComingSoon /> },
  { path: "/resetpassword", component: <ResetPassword /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/signin", component: <SignIn /> }
];
export { userRoutes, authRoutes };
