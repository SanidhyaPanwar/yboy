import React from 'react';
import logo from '../img/yboy.jpg';

const About = () => {
	return (
		<section className="about" id="about">
			<div className="max-width">
				<h2 className="title">About Us</h2>
				<div className="about-content">
					<div className="column left">
						<img src={logo} alt="Your Box of Yarn" />
					</div>
					<div className="column right">
						<div className="text">
							<span className="colored">Crochet & Knitting with Love</span>
						</div>
						<p>
							Welcome to <b>Your Box of Yarn</b> — where threads become art, and every stitch tells a story.
						</p>
						<p>
							I’m a 51-year-old artist from <b>India 🇮🇳</b>, turning passion into purpose. With over <b>20 years</b> of experience in crochet and knitting, I’ve found joy in creating, teaching, and sharing the timeless beauty of handmade crafts.
						</p>
						<p>
							My work blends <b>design, fashion, and tradition</b> — bringing modern style to classic techniques. Whether you're picking up a hook for the first time or refining your craft, you're in the right place.
						</p>
						<p className="highlight">
							💡 From cozy scarves to elegant home décor, every creation starts with a single loop — and a bit of love.
						</p>
						<p>
							Want to start your own yarn journey? Join me on YouTube for <b>free crochet tutorials</b>, tips, and pattern guides:
						</p>
						<a
							href="https://youtube.com/@yourboxofyarn"
							target="_blank"
							rel="noreferrer"
							className="btn"
						>
							🎥 Watch on YouTube — @yourboxofyarn
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
