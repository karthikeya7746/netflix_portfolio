import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

// Import your custom images
import certificationsImg from '../images/certifications-bg.jpg';
import contactImg from '../images/contact-bg.jpg';
import readingImg from '../images/reading-bg.jpg';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
  ],
  developer: [
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Certifications", imgSrc: certificationsImg, link: "/certifications" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
  ],
  adventurer: [
    { title: "Reading", imgSrc: readingImg, link: "/reading" },
    { title: "Certifications", imgSrc: certificationsImg, link: "/certifications" },
    { title: "Contact Me", imgSrc: contactImg, link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
