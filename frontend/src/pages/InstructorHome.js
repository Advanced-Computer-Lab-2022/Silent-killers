import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const InstructorHome = () => {
return (
	<div>
	<h1>Instructor Home Page</h1>
	<br />
	<ul>

 		<li>
		<Link to="/viewandaccept3">view and accept your contract </Link>
		</li>
		<li>
		<Link to="/selectcountry">Select your country</Link>
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
		<li>
		<Link to="/viewcourseofinstructor">View your Courses</Link>
		</li>
		<li>
		<Link to="/insfilter">Filter your Courses by Price or Subject</Link>
		</li>
		<li>
		<Link to="/inssearchby">Search through your Courses</Link>
		</li>
		<li>
		<Link to="/viewratingsandreviews">View your course ratings and reviews</Link>
		</li>
		<li>
		<Link to="/viewamountowed">View the amount owed</Link>
		</li>
		<li>
		<Link to="/addquestion">Create an exam</Link>
		</li>
		<li>
		<Link to="/viewexercises">View and set answers for exercises</Link>
		</li>
		<li>
		<Link to="/insrating2">View your Ratings and Reviews</Link>
		</li>
		<li>
		<Link to="/addcourse">Add a Course</Link>
		</li>
        <li>
		<Link to="/forgotpass">edit your password</Link>
		</li>
		<li>
		<Link to="/editbiography">Edit email and biography </Link>
		</li>
		<li>
		<Link to="/report1ins">View and report courses </Link>
		</li>
		<li>
		<Link to="/viewreportsins">View previously reported problems and followup </Link>
		</li>
		<li>
		<Link to="/logout">Log out </Link>
		</li>
	</ul>
	</div>
);
};

export default InstructorHome;