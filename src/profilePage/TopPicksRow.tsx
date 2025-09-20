import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaBook } from 'react-icons/fa';

// Import your custom images
import workPermitImg from '../images/work-permit-bg.jpg';
import skillsImg from '../images/skills-bg.jpg';
import experienceImg from '../images/experience-bg.jpg';
import certificationsImg from '../images/certifications-bg.jpg';
import projectsImg from '../images/projects-bg.jpg';
import contactImg from '../images/contact-bg.jpg';
import readingImg from '../images/reading-bg.jpg';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: workPermitImg, icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: skillsImg, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: experienceImg, icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: certificationsImg, icon: <FaCertificate />, route: "/certifications" },
    { title: "Projects", imgSrc: projectsImg, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Reading", imgSrc: readingImg, route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: contactImg, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: skillsImg, route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: projectsImg, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: certificationsImg, route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: experienceImg, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Reading", imgSrc: readingImg, route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: contactImg, route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Contact Me", imgSrc: contactImg, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: projectsImg, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: experienceImg, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: certificationsImg, route: "/certifications", icon: <FaCertificate /> },
    { title: "Reading", imgSrc: readingImg, route: "/reading", icon: <FaBook /> },
  ],
  adventurer: [
    { title: "Projects", imgSrc: projectsImg, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: readingImg, route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: contactImg, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: certificationsImg, route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
