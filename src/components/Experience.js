import React from "react";
import pic1 from "../media/kotakcherry_logo.jpeg";
import vid1 from "../media/cherry.mp4";
import pic2 from "../media/barclaysLogo.png";
import pic3 from "../media/tcs.jpg";
import pic4 from "../media/twowaits.png";
import pic5 from "../media/ieo.jpg";
import pic6 from "../media/IC-KIET.jpg";

const experiences = [
  {
    company: "Kotak Cherry 🍒",
    role: "Backend Developer",
    location: "Mumbai (Remote)",
    duration: "December 2024 - Present",
    logo: pic1,
    video: vid1,
    responsibilities: [
      "Designed and maintained scalable microservices using Spring Boot.",
      "Enhanced database efficiency through query optimization and performance tuning in PostgreSQL.",
      "Implemented Kafka for real-time data streaming and event-driven architecture.",
      "Collaborated with cross-functional teams to build high-quality, maintainable backend solutions.",
      "Integrated security best practices to safeguard sensitive data and enhance system integrity.",
    ],
    link: "https://www.kotakcherry.com/",
  },
  {
    company: "Barclays Global Service Center",
    role: "Java Developer - Customer Digital and Data",
    location: "Pune",
    duration: "August 2022 - December 2024",
    logo: pic2,
    responsibilities: [
      "Developed full-stack applications using ReactJS, Java Spring Boot, and MySQL.",
      "Optimized system performance by refactoring legacy code and improving database queries.",
      "Automated key processes, reducing manual interventions and improving efficiency.",
      "Led API development and integrations, ensuring seamless connectivity across services.",
      "Enhanced security layers in the frontend, fixing critical vulnerabilities in the authentication process.",
    ],
    link: "https://www.barclays.in/global-service-centre/btci/",
  },
  {
    company: "TATA Consultancy Services",
    role: "Systems Engineer - Digital Cadre",
    location: "New Delhi",
    duration: "August 2021 - August 2022",
    logo: pic3,
    responsibilities: [
      "Developed and maintained web applications using ReactJS and Java.",
      "Worked closely with product managers to transition a multi-page web app into a single-page application.",
      "Collaborated with onshore and offshore teams to enhance range efficiency.",
      "Conducted code reviews and improved software quality by enforcing best practices.",
      "Implemented CI/CD pipelines using Jenkins, improving deployment speed and reliability.",
    ],
    link: "https://www.tcs.com/",
  },
  {
    company: "Tathastu by TwoWaits",
    role: "Web Development Mentor",
    location: "Remote",
    duration: "April 2021 - July 2021",
    logo: pic4,
    responsibilities: [
      "Mentored 100+ students in full-stack web development, focusing on the MERN stack.",
      "Conducted live coding sessions, hands-on workshops, and range-based learning modules.",
      "Hosted doubt-clearing sessions and technical webinars for better concept clarity.",
      "Guided students in building real-world categories and improving their problem-solving skills.",
      "Provided career advice and helped students with their final-year categories and internships.",
    ],
    link: "http://tathastu.twowaits.in/",
  },
  {
    company: "Innovatecraft (IEO MAKERS FABLAB PVT. LTD.)",
    role: "Full Stack Web Development Intern",
    location: "Remote",
    duration: "April 2020 - September 2020",
    logo: pic5,
    responsibilities: [
      "Developed full-stack applications using HTML, CSS, NodeJS, and MongoDB.",
      "Collaborated with designers and developers to create a user-friendly experience.",
      "Optimized backend API performance and improved database schema design.",
      "Worked on deployment strategies to ensure stable and scalable applications.",
      "Continued supporting and improving the platform after the internship ended.",
    ],
    link: "http://innovatecraft.com/",
  },
  {
    company: "Innovation Center, KIET Group of Institutions",
    role: "Student Teaching Assistant",
    location: "Ghaziabad",
    duration: "January 2020 - June 2020",
    logo: pic6,
    responsibilities: [
      "Trained over 75+ first-year students in web development fundamentals.",
      "Conducted hands-on coding sessions to teach best practices in programming.",
      "Organized live range demonstrations to provide practical exposure.",
      "Mentored students in choosing the right career path in software development.",
      "Assisted in structuring course content and improving the learning experience.",
    ],
    link: "https://www.kiet.edu/innovation-center",
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="max-width">
        <h2 className="title">Work Experience</h2>
        {experiences.map((exp, index) => (
          <>
            <div key={index} className="experience-content">
              {index % 2 === 0 ? (
                <>
                  <div className="column left">
                    {exp.video ? (
                      <video autoPlay loop muted className="video-left">
                        <source src={exp.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="image-left"
                      />
                    )}
                  </div>
                  <div className="column right">
                    <div className="text">
                      {exp.company} <br />
                      <span>({exp.role})</span>
                      <br />
                      <h4>
                        {exp.location} | {exp.duration}
                      </h4>
                    </div>
                    <ul>
                      {exp.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                    <a href={exp.link} target="_blank" rel="noreferrer">
                      Visit Company
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="column right">
                    <div className="text">
                      {exp.company} <br />
                      <span>({exp.role})</span>
                      <br />
                      <h4>
                        {exp.location} | {exp.duration}
                      </h4>
                    </div>
                    <ul>
                      {exp.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                    <a href={exp.link} target="_blank" rel="noreferrer">
                      Visit Company
                    </a>
                  </div>
                  <div className="column left">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="image-right"
                    />
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

export default Experience;
