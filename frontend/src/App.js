import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout  from './pages/Logout';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
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
              path="/editbio"
              element={< Editbio/>} 
            />
            <Route 
              path="/login"
              element={< Login/>} 
            />
            <Route 
              path="/signup"
              element={< Signup/>} 
            />
             <Route 
              path="/logout"
              element={< Logout/>} 
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
