import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from '../../img/Project/SanidhyaInsta/sanidhyaInsta.png';
import pic2 from '../../img/Project/SanidhyaInsta/goal.png';
import pic3 from '../../img/Project/SanidhyaInsta/tech.png';
import pic4 from '../../img/Project/SanidhyaInsta/feature.png';

const SanidhyaInsta = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="projectTitle">SanidhyaInsta - A MERN based Instagram Clone</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Project Overview & My Role :<br />
							<span>May 2021</span>
						</div>
						<ul>
							<li>It is a clone to our commonly used app: Instagram</li>
							<li>Worked as a Full Stack Developer</li>
							<li>Developed by using MERN stack</li>
							<li>Responsible for both UI designing and handling DB</li>
							<li>Used as an example to teach students about MERN Stack</li>
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
							<li>Made this to brush up my MERN stack skills</li>
							<li>Gave myself a challenge to make a complete clone in 10 Days</li>
							<li>If they fail to return within time , they get charged a very large fine</li>
							<li>Got a chance to Had put my learnings in a fun and interesting project</li>
							<li>Helped coach 50+ students by taking it as an example</li>
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
							<li>Front-End Developed using HTML, CSS, JS</li>
							<li>Back-End Developed using NodeJS, ExpressJS</li>
							<li>Database handled using MongoDB Atlas</li>
							<li>Authentication Using JWT Tokens</li>
							<li>Email Service using Sendgrid Transport mailing API</li>
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
						<ul>
							<li>User receive a SignUp E-mail as soon as they sign up to our website</li>
							<li>Password reset using the mailing service</li>
							<li>User can follow and unfollow other accounts</li>
							<li>User can choose to see all posts or only the people they follow</li>
							<li>It also allows us to like and comment on other's posts</li>
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

export default SanidhyaInsta;
