import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		<Link to="/viewprice">ViewPriceOfCourse</Link>
		</li>
    <li>
		<Link to="/viewtitlesandmore">viewtitlesandmore</Link>
		</li>
    <li>
		<Link to="/Viewcourseofinstructor">Viewcourseofinstructor</Link>
		</li>
    <li>
		<Link to="/filteronsubjectorrating">filteronsubjectorrating</Link>
		</li>
    <li>
		<Link to="//filteronprice">/filteronprice</Link>
		</li>
    <li>
		<Link to="/selectcountry">selectcountry</Link>
		</li>
    <li>
		<Link to="/addadmin">addadmin</Link>
		</li>
    <li>
		<Link to="/addcourse">addcourse</Link>
		</li>
    <li>
		<Link to="/addinstructor">addinstructor</Link>
		</li>
    <li>
		<Link to="/addcorporate">addcorporate</Link>
		</li>
    <li>
		<Link to="/Searchforcourse">Searchforcourse</Link>
		</li>
	</ul>
	</div>
);
};

export default Home;