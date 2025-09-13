import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from '../../media/categories/Indrapal/homepage.png';
import pic2 from '../../media/categories/Indrapal/goal.png';
import pic3 from '../../media/categories/Indrapal/tech.jpg';
import pic4 from '../../media/categories/Indrapal/feature.png';

const Indrapal = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="categoriesTitle">Panwar Chikitsa Kendra</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Range Overview & My Role :<br />
							<span>May 2021</span>
						</div>
						<ul>
							<li>Website made for my father so that patients can know better about him and contact him easily</li>
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
							<li>Made this website for my father's clinic</li>
							<li>It helped patients to know more about him and his clinic</li>
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
							<li>Front end Developed by using JSX, ReactJS</li>
							<li>Styling defined by CSS, JS </li>
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
							<li>Detailed knowledge related to my father's degree and expertise</li>
							<li>The website is deployed on heroku app, the patients can access it from anywhere anytime</li>
							<li>Detailed mentioning about the services offered at clinic</li>
                            <Link to="/categories">Back to Categories</Link>
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

export default Indrapal;
