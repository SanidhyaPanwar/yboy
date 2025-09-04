import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../img/Project/Verizon/verizon.jpg';
import pic2 from '../../img/Project/Verizon/internet.jpg';
import pic3 from '../../img/Project/Verizon/tech.jpg';
import pic4 from '../../img/Project/Verizon/feature.jpg';

const Verizon = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="projectTitle">Verizon OneFiber 5G</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Project Overview & My Role :<br />
							<span>Client : Verizon | August 2021 - Present</span>
						</div>
						<ul>
							<li>One Fiber-Location Management – Verizon's One Fiber project combined all of the telco's
								fiber needs and planning into one project</li>
							<li>It’s used by customers to access the 5G Network in all the Sectors</li>
							<li>Worked in the Location Management team</li>
							<li>Worked as a Full Stack Developer</li>
							<li>Developed by using ReactJS, Java with Springboot</li>
							<li>Responsible for delivering stories working in an agile team</li>
							<li>Responsible for resolving Environment bugs as well</li>
						</ul>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column right">
						<div className="text">
							<span>
								<h2>Goals Achieved :</h2>
							</span>
						</div>
						<ul>
							<li>Providing a seamless experience to book Verizon's Fiber Connection for end user</li>
							<li>Worked with product managers to re-architect a multi-page web app into a single page web-app</li>
							<li>Got to experience working in Agile mode</li>
							<li>Collaborated with 30+ colleagues On-Shore as well as Off-Shore locations</li>
							<li>Developed and Deployed changes as per requirement of Product Owner with accuracy</li>
							<li>Tested software for bugs, fixed them along with documentation to increase clarity</li>
						</ul>
					</div>
					<div className="column left">
						<img src={pic2} alt="Profile Pic" className="image-right" />
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column left">
						<img src={pic3} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							<span>
								<h2>Technology used :</h2>
							</span>
						</div>
						<ul>
							<li>Front-End Developed using ReactJS</li>
							<li>Back-End Developed using Java with Springboot</li>
							<li>Database handled with DBeaver (SQL)</li>
							<li>Progress tracking with One Jira</li>
							<li>Agile methodology with daily scrum call and 14 day sprint period</li>
						</ul>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column right">
						<div className="text">
							<span>
								<h2>Noteworthy Features :</h2>
							</span>
						</div>
                        BAERS 2.0 - Single Page Application (SPA) that contains four major parts for the application process to be more efficient :
						<ul>
							<li>Vetting</li>
							<li>Site Survey</li>
							<li>Negotiate BAA</li>
							<li>Execute BAA</li>
							<Link to="/projects">Back to Projects</Link>
						</ul>
					</div>
					<div className="column left">
						<img src={pic4} alt="Profile Pic" className="image-right" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Verizon;
