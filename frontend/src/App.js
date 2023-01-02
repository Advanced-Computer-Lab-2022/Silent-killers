import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import CreateNewAdmin from './pages/CreateNewAdmin';
import CreateNewCorporate from './pages/CreateNewCorporate';
import CreateNewCourse from './pages/CreateNewCourse';
import CreateNewInstructor from './pages/CreateNewInstructor';
import Filtersubjectorrating from './pages/filteronsubjectorrating';
import Viewcourseofinstructor from './pages/Viewcourseofinstructor';
import Searchforcourse from './pages/Searchforcourse';

// pages & components
import Home from './pages/Home'
import ViewPriceOfCourse from './pages/ViewPriceOfCourse';
import Viewtitlesandmore from './pages/Viewtitlesandmore';
import Selectcountry from './pages/Selectcountry';
// import { filterPrice } from '../../controllers/CourseController';
import Filteronprice from './pages/filteronprice';
import InstructorRatingandReviews from './pages/InstructorRatingandReviews';
import Editpass from './pages/Editpass';
import ViewandAcceptContract from './pages/ViewandAcceptContract';
import AddPreview from './pages/AddPreview';
import ViewSolutionsAndAnswers from './pages/ViewSolutionsAndAnswers';
import CreateQuestions from './pages/CreateQuestions';
import CreatePromotion from './pages/CreatePromotion'
import SetAnswer from './pages/SetAnswer'
import SubmitAnswer from './pages/SubmitAnswer'
import Watchvideo from './pages/WatchVideo';
//import ViewCourseDetails from "./pages/ViewCourseDetails"
import RateCourse from './pages/RateCourse';
import ViewTraineeGrade from './pages/ViewTraineeGrade';
import ViewRatingsAndReviews from './pages/ViewRatingsAndReviews'
import Results1 from './pages/Results1';
import Results2 from './pages/Results2'
import Sample from './pages/Sample'
import Editbio from './pages/EditBio';
import ViewContract from './pages/ViewContract';
import AddPreview2 from './pages/AddPreview2';
import AddPreview3 from './pages/AddPreview3';
import Filteronprice2 from './pages/Filteronprice2';
import Filteronsubjectorrating2 from './pages/filteronsubjectorrating2'
import CourseRating from './pages/CourseRating';
import Searchforcourse2 from './pages/Searchforcourse2'
import SetAnswer2 from './pages/SetAnswer2';
import SubmitAnswerCT from './pages/SubmitAnswerCT';
import SubmitAnswerIT from './pages/SubmitAnswerIT';
import ViewTraineeGradeCT from './pages/ViewTraineeGradeCT';
import ViewTraineeGradeIT from './pages/ViewTraineeGradeIT';
import ViewandAccept2 from './pages/ViewandAccept2';
import Addpreview4 from './pages/Addpreview4';
import InstructorRatingsandReviews2 from './pages/InstructorRatingsandReviews2';
import Viewanswersandcorrectsol from './pages/Viewanswersandcorrectsol';
import CourseRatingIND from './pages/CourseRatingIND';
import InstructorRating from './pages/InstructorRating';
import InstructorRatingIND from './pages/InstructorRatingIND';
import AddYOUTUBEandDES from './pages/AddYOUTUBEandDES';
import Signup from './pages/Signup';
import ViewTraineewalletamount from './pages/ViewTraineewalletamount';
import TraineeRequestAccess from './pages/TraineeRequestAccess';
import AdminGrantAccess from './pages/AdminGrantAccess';
import Writenotes from './pages/Writenotes';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Getbypob from './pages/Getbypob';
import Pay from './pages/Pay';
import Creditcard from './pages/Creditcard';
import Pdf from './pages/Pdf';
import Sendmail from './pages/Sendmail';
import Getbyid from './pages/Getbyid';
import ViewReportsINS from './pages/ViewReportsINS';
import ViewReportsIT from './pages/ViewReportsIT';
import ViewReportsCT from './pages/ViewReportsCT';
import ReportINS from './pages/ReportINS';
import ReportCT from './pages/ReportCT';
import ReportIT from './pages/ReportIT';
import Followup from './pages/Followup';
import Viewamountowed from './pages/Viewamountowed';
import Writenotes2 from './pages/Writenotes2';
import TraineeRequestAccess2 from './pages/TraineeRequestAcces2';
import Addpreview5 from './pages/Addpreview5';
import ViewTraineewalletamount2 from './pages/ViewTraineewalletamount2';
import AdminGrantAccess2 from './pages/AdminGrantaccess2';
import InstructorRatingsandReviews3 from './pages/InstructorRatingsandReviews3';
import ViewandAccept3 from './pages/ViewandAccept3';
import PreviewVideo from './pages/PreviewVideo';
import ViewCoursebyId from './pages/ViewCoursebyId';
import ViewReportedProblems from './pages/ViewReportedProblems';
import AdminSetProblemStatus from './pages/AdminSetProblemStatus';
import ViewAccessReqByCor from './pages/ViewAccessReqByCor';
import AdminAddPromotion from './pages/AdminAddPromotion';
import ViewEachDetailCourse from './pages/ViewEachDetailCourse';
import InstructorHome from './pages/InstructorHome';
import IndividualTraineeHome from './pages/IndividualTraineeHome';
import Report1CT from './pages/Report1CT';
import Report1IT from './pages/Report1IT';
import Report1INS from './pages/Report1INS';
import CorporateTraineeHome from './pages/CorporateTraineeHome';
import AdminHome from './pages/AdminHome';
import GuestHome from './pages/GuestHome';
import Viewallinstructors from './pages/Viewallinstructors';
import GetAllPayments from './pages/GetAllPayments';
import GetpaymentbyId from './pages/GetPaymentbyID';
import RequestRefundIT from './pages/RequestRefundIT';
import Instructorsearch from './pages/inssearchforcourse';
import Instructorfilter from './pages/insfilter';
import DownloadCertificate from './pages/DownloadCertificate';
import ViewAllAvRefunds from './pages/ViewAllAvRefunds';
import AdminRefundingWallets from './pages/AdminRefundingWallets';
import Viewallcourses from './pages/Viewallcourses';
import ViewCoursebyIdCT from './pages/ViewCoursebyIdCT';
import ViewCoursebyIdINS from './pages/ViewCoursebyIdINS';
import ViewCoursebyIdAdmin from './pages/ViewCoursebyIdAdmin';
import ViewCoursebyIdIT from './pages/ViewCoursebyIT';
import ViewCoursebyIdredirect from './pages/ViewCoursebyidredirect';
import GetbyidCT from './pages/GetbyidCT';
import ViewExercises from './pages/ViewExercises';
import OpenExecise from './pages/OpenExercise';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<GuestHome />} 
            />
            <Route 
              path="/viewtitlesandmore" 
              element={<Viewtitlesandmore />} 
            />
            <Route
            path = "/filteronsubjectorrating"
            element = {<Filtersubjectorrating/>}
            />
            <Route
            path = "/filteronprice"
            element = {<Filteronprice/>}
            />
            <Route
            path = "/addcourse"
            element = {<CreateNewCourse/>}
            />
            <Route
            path = "/addadmin"
            element = {<CreateNewAdmin/>}
            />
            <Route
            path = "/addinstructor"
            element = {<CreateNewInstructor/>}
            />
            <Route
            path = "/addcorporate"
            element = {<CreateNewCorporate/>}
            />
            <Route
            path = "/viewprice"
            element = {<ViewPriceOfCourse/>}
            />
            <Route 
              path="/Viewcourseofinstructor" 
              element={<Viewcourseofinstructor />} 
            />
               <Route 
              path="/selectcountry" 
              element={<Selectcountry />} 
            />
            <Route 
              path="/Searchforcourse" 
              element={<Searchforcourse />} 
            />
             <Route 
              path="/InstructorRatings" 
              element={<InstructorRatingandReviews />} 
            />
             <Route 
              path="/forgotpass" 
              element={<Editpass />} 
            />
            <Route 
              path="/viewandacceptcontract/:id" 
              element={<ViewandAcceptContract />} 
            />
             <Route 
             //removed /:id at 1:18 14/12
              path="/addpreview/:id" 
              element={<AddPreview />} 
            />
             <Route 
              path="/viewanswers" 
              element={<ViewSolutionsAndAnswers />} 
            />
            <Route 
              path="/addquestion"
              element={<CreateQuestions />} 
            />
            <Route 
              path="/createpromotion" 
              element={<CreatePromotion />} 
            />
            <Route
             path="/SetAnswer" 
              element={<SetAnswer />} 
            />
             <Route 
              path="/SubmitAnswer" 
              element={<SubmitAnswer />} 
            />
             <Route 
              path="/watchvideo" 
              element={<Watchvideo />} 
            />
            {/* <Route
            path = "/ViewCourseDetails"
            element = {<ViewCourseDetails/>}
            /> */}
            <Route 
              path="/RateCourse" 
              element={<RateCourse />} 
            />
<Route 
              path="/ViewTraineeGrade" 
              element={<ViewTraineeGrade />} 
            />
            <Route 
              path="/ViewTraineeGrade/Results1" 
              element={<Results1 />} 
            />
            <Route 
              path="/ViewRatingsAndReviews" 
              element={<ViewRatingsAndReviews />} 
            />
            <Route 
              path="/ViewRatingsAndReviews/Results2"
              element={<Results2 />} 
            />
            //test
            <Route 
              path="/test"
              element={<Sample />} 
            />
            <Route 
              path="/editbio/:id"
              element={< Editbio/>} 
            />
            <Route 
              path="/editbiography" 
              element={<Editbio />} 
            />
             <Route 
              path="/viewcontract/:id"
              element={< ViewContract/>} 
            />
            <Route 
              path="/addpreview2"
              element={< AddPreview2/>} 
            />

            <Route 
              path="/addpreview3"
              element={< AddPreview3/>} 
            />
             <Route 
              path="/filteronprice2"
              element={< Filteronprice2/>} 
            />

            <Route 
              path="/filteronsubjectorrating2"
              element={< Filteronsubjectorrating2/>} 
            />

            <Route 
              path="/CourseRating"
              element={<CourseRating />} 
            />

            <Route 
              path="/searchby2"
              element={< Searchforcourse2/>} 
            />
             <Route 
              path="/SetAnswer2" 
              element={<SetAnswer2 />} 
            />
             <Route 
              path="/SubmitAnswerCT"
              element={<SubmitAnswerCT />} 
            />
            <Route 
              path="/SubmitAnswerIT"
              element={<SubmitAnswerIT />} 
            />
            <Route 
              path="/ViewTraineeGradeCT" 
              element={<ViewTraineeGradeCT />} 
            />
            <Route 
              path="/ViewTraineeGradeIT" 
              element={<ViewTraineeGradeIT />} 
            />
             <Route 
              path="/viewandacceptcontract2" 
              element={<ViewandAccept2 />} 
            />
              <Route 
              path="/addpreview4" 
              element={<Addpreview4 />} 
            />
                <Route 
              path="/Insrate" 
              element={<InstructorRatingsandReviews2 />} 
            />
                 <Route 
              path="/viewans2" 
              element={<Viewanswersandcorrectsol />} 
            />
            <Route 
              path="/CourseRatingIND"
              element={<CourseRatingIND />} 
            />
            <Route 
              path="/InstructorRating"
              element={<InstructorRating />} 
            />
<Route 
              path="/InstructorRatingIND"
              element={<InstructorRatingIND />} 
            />
<Route 
              path="/AddYOUTUBEandDES"
              element={<AddYOUTUBEandDES />} 
            />
<Route 
              path="/signup"
              element={<Signup />} 
            />
<Route 
              path="/getwallet"
              element={<ViewTraineewalletamount />} 
            />
<Route 
              path="/requestaccess"
              element={<TraineeRequestAccess />} 
            />
<Route 
              path="/requestaccess2"
              element={<TraineeRequestAccess2 />} 
            />
<Route 
              path="/admingrantaccess"
              element={<AdminGrantAccess />} 
            />
<Route 
              path="/writenotes"
              element={<Writenotes />} 
            />
<Route 
              path="/login"
              element={<Login />} 
            />
<Route 
              path="/logout"
              element={<Logout />} 
            />

<Route 
              path="/getbypob"
              element={<Getbypob />} 
            />

<Route 
              path="/pay"
              element={<Pay />} 
            />


<Route 
              path="/creditcard"
              element={<Creditcard />} 
            />
<Route 
              path="/pdf"
              element={<Pdf />} 
            />
<Route 
              path="/sendmail"
              element={<Sendmail />} 
            />
<Route 
              path="/getbyid"
              element={<Getbyid />} 
            />
<Route 
              path="/ViewReportsINS"
              element={<ViewReportsINS  />} 
            />
<Route 
              path="/ViewReportsIT"
              element={<ViewReportsIT  />} 
            />
<Route 
              path="/ViewReportsCT"
              element={<ViewReportsCT />} 
            />
            <Route 
              path="/ReportINS"
              element={<ReportINS />} 
            />
            <Route 
              path="/ReportCT"
              element={<ReportCT />} 
            />
            <Route 
              path="/ReportIT"
              element={<ReportIT />} 
            />
            <Route 
              path="/Followup"
              element={<Followup />} 
              
            />
            <Route 
              path="/Viewamountowed"
              element={<Viewamountowed />} 
            />
            <Route 
              path="/writenotes2"
              element={<Writenotes2 />} 
            />
               <Route 
              path="/requestaccess2"
              element={<TraineeRequestAccess2 />} 
            />
                 <Route 
              path="/addpreview5"
              element={< Addpreview5 />} 
            />
                     <Route 
              path="/getwallet2"
              element={< ViewTraineewalletamount2 />} 
            />
                        <Route 
              path="/grantaccess2"
              element={< AdminGrantAccess2 />} 
            />
                         <Route 
              path="/insrating2"
              element={< InstructorRatingsandReviews3 />} 
            />
                          <Route 
              path="/viewandaccept3"
              element={< ViewandAccept3 />} 
            />
                               <Route 
              path="/previewvideo"
              element={< PreviewVideo />} 
            />
                                 <Route 
              path="/viewcoursebyid"
              element={< ViewCoursebyId />} 
            />
                                  <Route 
              path="/ViewReportedProblems"
              element={< ViewReportedProblems />} 
            />
                             <Route 
              path="/AdminSetProblemStatus"
              element={< AdminSetProblemStatus />} 
            />
                            <Route 
              path="/ViewAccessReqByCor"
              element={< ViewAccessReqByCor />} 
            />
                         <Route 
              path="/AdminAddPromotion"
              element={< AdminAddPromotion />} 
            />
                      <Route 
              path="/ViewEachDetailCourse"
              element={< ViewEachDetailCourse />} 
            />
                <Route 
              path="/Instructor"
              element={< InstructorHome />} 
            />
             <Route 
              path="/IndividualTrainee"
              element={< IndividualTraineeHome />} 
            />
              <Route 
              path="/CorporateTrainee"
              element={< CorporateTraineeHome />} 
            />
              <Route 
              path="/Admin"
              element={< AdminHome />} 
            />
             <Route 
              path="/Guest"
              element={< GuestHome />} 
            />
            <Route 
              path="/Report1CT"
              element={< Report1CT />} 

            />
            <Route 
              path="/Report1IT"
              element={< Report1IT />} 

            />
            <Route 
              path="/Report1INS"
              element={< Report1INS />} 

            />
               <Route 
              path="/Viewallinstructors"
              element={< Viewallinstructors />} 

            />
            <Route 
              path="/getpayment"
              element={<GetAllPayments />} />
              <Route 
              path="/getpaymentbyid"
              element={<GetpaymentbyId />} />
              <Route 
              path="/refund"
              element={<RequestRefundIT />} />
                  <Route 
              path="/inssearchby"
              element={<Instructorsearch />} />
               <Route 
              path="/insfilter"
              element={<Instructorfilter />} />
                 <Route 
              path="/downloadpdf"
              element={<DownloadCertificate />} />
              <Route 
              path="/ViewAllAvRefunds"
              element={<ViewAllAvRefunds />} 
            />
            <Route 
              path="/AdminRefundingWallets"
              element={<AdminRefundingWallets />} 
            />
             <Route 
              path="/viewallcourses"
              element={<Viewallcourses />} 
            />
             <Route 
              path="/viewcoursebyidCT"
              element={<ViewCoursebyIdCT />} 
            />
              <Route 
              path="/viewcoursebyidINS"
              element={<ViewCoursebyIdINS />} 
            />
              <Route 
              path="/viewcoursebyidAdmin"
              element={<ViewCoursebyIdAdmin />} 
            />
              <Route 
              path="/viewcoursebyidIT"
              element={<ViewCoursebyIdIT />} 
            />
              <Route 
              path="/viewcoursebyidredirect"
              element={<ViewCoursebyIdredirect />} 
            />
             <Route 
              path="/getbyidCT"
              element={<GetbyidCT />} 
            />
             <Route 
              path="/ViewExercises"
              element={<ViewExercises />} 
            />
             <Route 
              path="/OpenExercise"
              element={<OpenExecise />} 
            />
            
          </Routes>
        </div>




        <Toaster  position='top-center' />
      </BrowserRouter>
    </div>
  );
}

export default App;
