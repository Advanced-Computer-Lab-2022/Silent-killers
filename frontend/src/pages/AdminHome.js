import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const AdminHome = () => {
return (
	<div>
	<h1>Admin Home Page</h1>
	<br />
	<ul>

		<li>
		<Link to="/viewreportedproblems">View Reported Problems</Link>
		</li>
        <li>
		<Link to="/viewallavrefunds">View and accept refunds</Link>
		</li>
        <li>
		<Link to="/addamin">Add a new admin </Link>
		</li>
		<li>
		<Link to="/addinstructor">Add a new instructor </Link>
		</li>
        <li>
		<Link to="/addcorporate">Add a new corporate </Link>
		</li>
        <li>
		<Link to="/viewallcourses">view all course to view and grant access requests and set promotions </Link>
		</li>
	</ul>
	</div>
);
};

export default AdminHome;