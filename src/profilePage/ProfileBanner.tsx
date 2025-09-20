import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {

  // Local data for Karthikeya Reddy
  const bannerData: ProfileBannerType = {
    backgroundImage: { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    headline: "Hi, I'm Karthikeya Reddy",
    resumeLink: { url: "https://docs.google.com/document/d/1zHqzI8dCvtcvV0wJ6Yx0fGFFjWy9weRZ/edit?usp=drive_link&ouid=116070357811884877919&rtpof=true&sd=true" },
    linkedinLink: "https://www.linkedin.com/in/karthikeyareddy77/",
    profileSummary: "I'm a Master's student in Computer Science at NC State University, passionate about building scalable full-stack applications and AI-driven solutions. With hands-on experience in the MERN stack, cloud deployment, and Generative AI (LangChain, Pinecone, Hugging Face), I enjoy creating impactful projects that combine strong engineering principles with modern AI."
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
