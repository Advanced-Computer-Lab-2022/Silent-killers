import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const GuestHome = () => {
return (
	<div>
	<h1>Guest Home Page</h1>
	<br />
	<ul>

		<li>
		<Link to="/login">Already a User? Log in to your account</Link>
		</li>
        <li>
		<Link to="/Signup">Sign up as a new user</Link>
		</li>
        <li>
		<Link to="/selectcountry">Select your country </Link>
		</li>
        <li>
		<Link to="/viewtitlesandmore">View Titles, Total Hours and Ratings of the courses </Link>
		</li>
        <li>
		<Link to="/viewprice">View Course Prices </Link>
		</li>
        <li>
		<Link to="/filteronsubjectorrating2">Filter Courses on subject or rating </Link>
		</li>
        <li>
		<Link to="/filteronprice2">Filter Courses on Price </Link>
		</li>
        <li>
		<Link to="/searchforcourse">Search for a course </Link>
		</li>
        <li>
		<Link to="/getbypob">View the most popular courses </Link>
		</li>
	</ul>
	</div>
);
};

export default GuestHome;