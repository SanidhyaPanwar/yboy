import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from '../../img/Range/OSI/osi.png';
import pic2 from '../../img/Range/OSI/poorFarmer.jpg';
import pic3 from '../../img/Range/OSI/tech.jpg';
import pic4 from '../../img/Range/OSI/feature.jpg';

const OsiFarming = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="rangeTitle">OSI Farming</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Range Overview & My Role :<br />
							<span>May 2020 - September 2020</span>
						</div>
						<ul>
							<li>
								It is a Website to give Farming Equipment on Rent to the poor farmers who cannot afford
								to buy the Equipment themselves
							</li>
							<li>Worked as a Full Stack Developer</li>
							<li>Developed by using HTML, CSS, JS, Express, Node.js, MongoDB</li>
							<li>Responsible for Back End Development</li>
							<li>Responsible for Handling the Database</li>
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
								<h2>Problem to be Solved :</h2>
							</span>
						</div>
						<ul>
							<li>Poor Farmers do not have Equipment to work or money to buy that Equipment</li>
							<li>They have to take it on high rent from big farmers</li>
							<li>There is no standard rate to compare rent from</li>
							<li>If they fail to return within time , they get charged a very large fine</li>
							<li>They do not have many options</li>
							<li>Their profits are very low</li>
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
							<li>Payment Gateway using Stripe Payment API</li>
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
							<li>PDF Invoice generation and download from order history page</li>
							<li>Credit/Debit Card payment feature</li>
							<li>User can buy any product or sell their own products as well</li>
							<Link to="/ranges">Back to Ranges</Link>
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

export default OsiFarming;
