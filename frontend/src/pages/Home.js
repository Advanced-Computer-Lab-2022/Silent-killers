import{ BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import {CreateNewAdmin,CreateNewCorporate,CreateNewCourse,CreateNewInstructor,
  filteronprice,filtersubjectorrating,ViewPriceOfCourse,Viewtitlesandmore} from 'pages';

import { Nav } from 'components';
function Home() {
   return (
    <Router>
       <Nav/>
       <Switch>
         <Route path ="/CreateNewAdmin"component= {CreateNewAdmin} />
         <Route path ="/CreateNewCorporate"component= {CreateNewCorporate} />
         <Route path ="/CreateNewCourse"component= {CreateNewCourse}  />
         <Route path ="/CreateNewInstructor"component= {CreateNewInstructor}  />
         <Route path ="/filteronprice"component= {filteronprice}  />
         <Route path ="/filtersubjectorrating"component= {filtersubjectorrating}  />
         <Route path ="/ViewPriceOfCourse"component= {ViewPriceOfCourse}  />
         <Route path ="/Viewtitlesandmore"component= {Viewtitlesandmore}  >
         </Route>
        </Switch>
     </Router>
)}
export default Home