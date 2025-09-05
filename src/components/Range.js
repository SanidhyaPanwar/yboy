import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../img/animalKeychains.jpg';
import pic2 from '../img/osi.png';
import pic3 from '../img/ig.JPG';
import pic4 from '../img/Portfolio.JPG';
import pic5 from '../img/breakingbad.png';
import pic6 from '../img/covid.jpg';

const Ranges = () => {
	return (
		<section className="ranges" id="ranges">
			<div className="max-width">
				<h2 className="title">My Ranges</h2>
				<div className="range-content">
					<div className="card">
						<div className="box">
							<img src={pic1} alt="AnimalKeychains" />
							<div className="text">Animal Keychains</div>
							<p>
								This is our cute crochet animal themed keychains.
							</p>
							<div className="rangeLinks">
							<div className="link1">
									<a href="https://www.instagram.com/p/CddKLqgLXnD/?img_index=1" target="_blank" rel="noreferrer">
										Visit Range
									</a>
								</div>
								<div className="link2">
									<Link to="/range/animal-keychains">Know More</Link>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="card">
						<div className="box">
							<img src={pic2} alt="" />
							<div className="text">OSI Farming</div>
							<p>
								It is a NodeJS based website that rents out farm equipment to poor farmers who can't afford to buy their
								own.
							</p>
							<div className="rangeLinks">
								<div className="link1">
									<a href="https://www.instagram.com/p/CddKLqgLXnD/?img_index=1" target="_blank" rel="noreferrer">
										Visit Range
									</a>
								</div>
								<div className="link2">
									<Link to="/range/osi-farming">Know More</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic3} alt="" />
							<div className="text">Sanidhya Insta</div>
							<p>
								It is based on MERN Stack and contains functions such as
								password reset, following, unfollowing, liking, and commenting, among others.
							</p>
							<div className="rangeLinks">
								<div className="link1">
									<a href="https://www.instagram.com/p/CddKLqgLXnD/?img_index=1" target="_blank" rel="noreferrer">
										Visit Range
									</a>
								</div>
								<div className="link2">
									<Link to="/range/sanidhya-insta">Know More</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic4} alt="" />
							<div className="text">Panwar Clinic</div>
							<p>
								A website for my father's (Dr.Indra Pal Singh) clinic and the services he provides. My
								site building abilities were put to good use.
							</p>
							<div className="rangeLinks">
								<div className="link1">
									<a href="https://www.instagram.com/p/CddKLqgLXnD/?img_index=1" target="_blank" rel="noreferrer">
										Visit Range
									</a>
								</div>
								<div className="link2">
									<Link to="/range/indrapal">Know More</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic5} alt="" />
							<div className="text">Breaking Bad Wiki</div>
							<p>
								Using their public API, a website can acquire a list of characters and their details
								from the hit show Breaking Bad.
							</p>
							<div className="rangeLinks">
								<div className="link1">
									<a href="https://www.instagram.com/p/CddKLqgLXnD/?img_index=1" target="_blank" rel="noreferrer">
										Visit Range
									</a>
								</div>
								<div className="link2">
									<Link to="/range/breaking-bad">Know More</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic6} alt="" />
							<div className="text">Covid-19 Tracker</div>
							<p>
								A simple covid-19 tracker website that uses a public API to retrieve covid-19
								informationfor different countries.
							</p>
							<div className="rangeLinks">
								<div className="link1">
									<a href="https://www.instagram.com/p/CddKLqgLXnD/?img_index=1" target="_blank" rel="noreferrer">
										Visit Range
									</a>
								</div>
								<div className="link2">
									<Link to="/range/covid">Know More</Link>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Ranges;
