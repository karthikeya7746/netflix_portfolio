import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

import profilePic from '../images/karthikeya-profile.jpg';

const ContactMe: React.FC = () => {

  // Local data for Karthikeya Reddy
  const userData: IContactMe = {
    profilePicture: { url: profilePic },
    name: "Karthikeya Reddy",
    title: "Software Engineer",
    summary: "I'm a Master's student in Computer Science at NC State University, passionate about building scalable full-stack applications and AI-driven solutions. With hands-on experience in the MERN stack, cloud deployment, and Generative AI (LangChain, Pinecone, Hugging Face), I enjoy creating impactful projects that combine strong engineering principles with modern AI.",
    companyUniversity: "NC State University",
    linkedinLink: "https://www.linkedin.com/in/karthikeyareddy77/",
    email: "karthikeya.7746@gmail.com",
    phoneNumber: "+1 9195213775"
  };

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={userData.profilePicture.url} alt="Karthikeya Reddy" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData?.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
