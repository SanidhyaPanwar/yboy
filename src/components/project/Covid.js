import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from '../../img/Project/Covid/covid.png';
import pic2 from '../../img/Project/Covid/goal.png';
import pic3 from '../../img/Project/Covid/tech.png';
import pic4 from '../../img/Project/Covid/feature.png';

const Covid = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="projectTitle">Covid 19 Case Tracker</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Project Overview & My Role :<br />
							<span>April 2021</span>
						</div>
						<ul>
							<li>It is a simple tracker website which tells number of covid cases in India</li>
							<li>Developed by using HTML, CSS, JS, Covid 19 API</li>
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
							<li>Got a chance to put my learnings in a real life scenario</li>
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
							<li>Front end Developed by using HTML, CSS, JS</li>
							<li>Public Covid 19 API</li>
							<li>API data fetch using JS</li>
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
							<li>User can know about number of active cases, total cases, number of deaths by Covid 19</li>
							<li>User can select any country from search box and see results</li>
							<li>User also sees a graphical representation with different colours to increase clarity</li>
							<li>User can see daily increase as well</li>
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

export default Covid;
