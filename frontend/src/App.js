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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
