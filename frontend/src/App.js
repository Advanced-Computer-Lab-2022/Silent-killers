import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateNewAdmin from './pages/CreateNewAdmin';
import CreateNewCorporate from './pages/CreateNewCorporate';
import CreateNewCourse from './pages/CreateNewCourse';
import CreateNewInstructor from './pages/CreateNewInstructor';
import Filtersubjectorrating from './pages/filteronsubjectorrating';

// pages & components
import Home from './pages/Home'
import ViewPriceOfCourse from './pages/ViewPriceOfCourse';
import Viewtitlesandmore from './pages/Viewtitlesandmore';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/viewstuff" 
              element={<Viewtitlesandmore />} 
            />
            <Route
            path = "/filteronsubjectorrating"
            element = {<Filtersubjectorrating/>}
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
