import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from '../../img/Project/BreakingBad/breakingBad.jpg';
import pic2 from '../../img/Project/BreakingBad/goal.png';
import pic3 from '../../img/Project/BreakingBad/tech.jpg';
import pic4 from '../../img/Project/BreakingBad/feature.png';

const BreakingBad = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="projectTitle">Breaking Bad Wiki</h2>
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
							<li>It is a website containing detailed list of characters of popular show "Breaking Bad"</li>
							<li>Worked as a Front End Developer</li>
							<li>Developed by using HTML, CSS, JS, ReactJS</li>
							<li>Responsible for designing UI and content creation</li>
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
							<li>Made this to brush up my web development skills</li>
							<li>Gave myself a challenge to make a complete website in a week</li>
							<li>Had put my learnings in a real life scenario</li>
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
							<li>Front end Developed by using HTML, CSS, JS, ReactJS</li>
							<li>Public Breaking Bad Character API</li>
							<li>Used axios package for data fetching</li>
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
							<li>User can search any of the favourite character</li>
							<li>Detailed info on characters by flipping their photo card</li>
							<li>Deployed on Herokuapp, hence accessible anywhere</li>
						</ul>
                        <Link to="/projects">Back to Projects</Link>
					</div>
					<div className="column left">
						<img src={pic4} alt="Profile Pic" className="image-right" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BreakingBad;
