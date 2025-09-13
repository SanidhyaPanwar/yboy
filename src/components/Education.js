import React from "react";
import pic1 from "../media/kiet.jpg";
import pic2 from "../media/dps.png";
import pic3 from "../media/dps.jpg";

const educationData = [
	{
	  image: pic1,
	  title: "Bachelor of Technology",
	  subtitle: "(CSE)",
	  description: [
		"Graduated in August 2021 from KIET Group of Institutions, Ghaziabad (affiliated with Dr. APJ Abdul Kalam Technical University).",
		"Developed skills in:",
		"- Competitive coding",
		"- Full-stack web development",
		"- Various other technical and problem-solving skills"
	  ],
	  details: {
		"CGPA": "(8.78)",
		"Division": "(First Division with Honors)"
	  },
	  link: "https://www.kiet.edu/",
	  linkText: "Visit College",
	  imageRight: false,
	},
	{
	  image: pic2,
	  title: "Higher Secondary School",
	  subtitle: "(12th Class)",
	  description: [
		"Completed in July 2016 from Delhi Public School, Meerut (affiliated with CBSE).",
		"Subjects studied:",
		"- English, Physics, Chemistry, Mathematics",
		"- Physical Education, Computer Science (C++)",
		"Key skills gained:",
		"- Programming in C++",
		"- Problem-solving and analytical thinking"
	  ],
	  details: {
		"Aggregate": "(83.80%)"
	  },
	  link: "https://www.dpsmeerut.in/",
	  linkText: "Visit School",
	  imageRight: true,
	},
	{
	  image: pic3,
	  title: "Senior Secondary School",
	  subtitle: "(10th Class)",
	  description: [
		"Completed in July 2014 from Delhi Public School, Meerut (affiliated with CBSE).",
		"Subjects studied:",
		"- English, Mathematics, Science, Hindi",
		"- Social Studies, Information Technology",
		"Key skills gained:",
		"- English communication",
		"- Basic information technology and computing skills"
	  ],
	  details: {
		"Aggregate": "(91.20%)",
		"CGPA": "(9.60)"
	  },
	  link: "https://www.dpsmeerut.in/",
	  linkText: "Visit School",
	  imageRight: false,
	}
  ];
  

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="max-width">
        <h2 className="title">Education</h2>
        {educationData.map((edu, index) => (
          <>
            <div key={index} className="education-content">
              {edu.imageRight ? (
                <>
                  <div className="column right">
                    <EducationDetails edu={edu} />
                  </div>
                  <div className="column left">
                    <img
                      src={edu.image}
                      alt="Education Pic"
                      className="image-right"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="column left">
                    <img src={edu.image} alt="Education Pic" />
                  </div>
                  <div className="column right">
                    <EducationDetails edu={edu} />
                  </div>
                </>
              )}
            </div>
            <br />
            <hr />
            <br />
          </>
        ))}
      </div>
    </section>
  );
};

const EducationDetails = ({ edu }) => (
	<>
	  <div className="text">
		{edu.title} <span>{edu.subtitle}</span>
	  </div>
  
	  {edu.description.map((para, idx) =>
		para.startsWith("-") ? (
		  <ul key={idx}>
			<li>{para.substring(1).trim()}</li>
		  </ul>
		) : (
		  <p key={idx}>{para}</p>
		)
	  )}
  
	  <br />
	  <div className="subtext">
		{Object.entries(edu.details).map(([key, value], idx) => (
		  <span key={idx} className="details-item">
			{key}: <span className="highlight">{value}</span>
		  </span>
		))}
	  </div>
  
	  <a href={edu.link} target="_blank" rel="noreferrer">
		{edu.linkText}
	  </a>
	</>
  );
	

export default Education;
