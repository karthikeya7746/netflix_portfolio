import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import { FaTimes as CloseIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

const WorkExperience: React.FC = () => {
  const [selectedInfo, setSelectedInfo] = useState<{type: 'work' | 'education', index: number} | null>(null);

  // Detailed experience and education information
  const detailedInfo = {
    work: {
      1: { // Tailcurrent Technologies
        title: "🏥 Tailcurrent Technologies – Software Engineering Intern",
        whatBuilt: "I helped develop a care management system for elderly residents in care homes. The system allowed caregivers to create personalized health plans for each resident (diet, medicines, exercise), track their daily health data from wearables like smartwatches, and keep families updated in real time.",
        challengesSolved: [
          "Care homes often struggled with slow communication between caregivers and families. I fixed this by building a real-time alert system so families got instant updates if something went wrong.",
          "Elderly users needed something very simple to use, so I designed a user-friendly interface with large buttons, clear navigation, and simple dashboards.",
          "Keeping data secure was important. I worked with PostgreSQL to ensure sensitive health records were stored safely."
        ],
        impact: [
          "Caregivers and families started responding 40% faster in emergencies because of the new alert system.",
          "Automated test scripts I built reduced the time needed for testing by 20%, which made deployment cycles faster.",
          "By creating reusable components, the system became easier to maintain, and the user experience improved by around 30%."
        ]
      },
      2: { // InternPe
        title: "🌐 InternPe – Web Developer Intern",
        whatBuilt: "I created responsive websites that worked smoothly across laptops, tablets, and phones. These included landing pages, dashboards, and interactive forms.",
        challengesSolved: [
          "Many pages weren't mobile-friendly, so I made them cross-browser and mobile compatible.",
          "I integrated the frontend with REST APIs so data (like user details or products) loaded dynamically instead of refreshing the whole page."
        ],
        impact: [
          "Improved page load speed and responsiveness by 25%.",
          "Delivered cleaner, modern-looking web pages that helped the project look professional.",
          "Worked with a GitHub-based team, which taught me about collaboration and version control."
        ]
      }
    },
    education: {
      1: { // NC State University
        title: "🎓 North Carolina State University – Master of Computer Science",
        gpa: "GPA: 3.7/4.0",
        period: "Aug 2024 - May 2026",
        courses: [
          "Software Engineering - Advanced software design patterns and architecture",
          "Algorithms and Data Structures - Advanced algorithmic problem solving",
          "DevOps - Docker, Kubernetes, CI/CD pipelines, cloud deployment",
          "Automated Learning & Data Analysis - Machine learning algorithms and data science",
          "Foundations in Data Science - Statistical analysis and data visualization",
          "Neural Networks - Deep learning and artificial neural networks",
          "Computer Networks - Network protocols, security, and distributed systems"
        ],
        focus: "Specializing in AI/ML, Full-Stack Development, and Cloud Computing"
      },
      2: { // GRIET
        title: "🎓 Gokaraju Rangaraju Institute of Engineering and Technology – B.Tech CSE",
        gpa: "GPA: 9.1/10",
        period: "Aug 2020 - June 2024",
        courses: [
          "Computer Science Fundamentals - Core programming concepts and theory",
          "Programming Languages - C++, Java, Python, JavaScript",
          "Data Structures and Algorithms - Problem-solving and optimization techniques",
          "Database Management Systems - SQL, database design, and optimization",
          "Software Engineering - Software development lifecycle and methodologies",
          "Web Development - Frontend and backend web technologies",
          "Computer Networks - Network architecture and protocols",
          "Operating Systems - System programming and resource management"
        ],
        focus: "Strong foundation in programming, software development, and computer science principles"
      }
    }
  };

  // Local timeline data for Karthikeya Reddy
  const timeLineData: TimelineItem[] = [
    {
      timelineType: 'education',
      name: 'North Carolina State University',
      title: 'Master of Computer Science',
      techStack: 'Software Engineering, Algorithms and Data Structures, DevOps, Automated Learning & Data Analysis, Foundations in Data Science, Neural Networks, Computer Networks',
      summaryPoints: ['GPA: 3.7/4.0', 'Aug 2024 - May 2026'],
      dateRange: 'Aug 2024 - May 2026'
    },
    {
      timelineType: 'work',
      name: 'Tailcurrent Technologies Pvt.Ltd',
      title: 'Software Engineering Intern',
      techStack: 'React.js, Node.js, PostgreSQL, JavaScript, HTML, CSS, REST APIs, Git, WebSocket',
      summaryPoints: [
        'Developed a care management system for elderly residents enabling personalized health plans, wearable device integration, and real-time family updates',
        'Built real-time alert system solving slow caregiver-family communication, achieving 40% faster emergency response times',
        'Designed user-friendly interface with large buttons and clear navigation specifically for elderly users with accessibility needs',
        'Implemented secure PostgreSQL database architecture ensuring sensitive health records protection and data integrity',
        'Created automated test scripts reducing testing time by 20% and built reusable components improving system maintainability by 30%'
      ],
      dateRange: 'Sep 2023 - Nov 2023'
    },
    {
      timelineType: 'work',
      name: 'InternPe',
      title: 'Web Developer Intern',
      techStack: 'HTML5, CSS3, JavaScript (ES6+), REST APIs, GitHub, Responsive Design, Cross-browser Compatibility',
      summaryPoints: [
        'Created responsive websites including landing pages, dashboards, and interactive forms working seamlessly across laptops, tablets, and phones',
        'Solved mobile compatibility issues by implementing cross-browser and mobile-friendly design principles',
        'Integrated frontend with REST APIs enabling dynamic data loading (user details, products) without full page refreshes',
        'Improved page load speed and responsiveness by 25% through performance optimization techniques',
        'Delivered modern, professional-looking web pages and gained experience in GitHub-based team collaboration and version control'
      ],
      dateRange: 'Mar 2023 - May 2023'
    },
    {
      timelineType: 'education',
      name: 'Gokaraju Rangaraju Institute of Engineering and Technology',
      title: 'Bachelor of Technology, Computer Science and Engineering',
      techStack: 'Computer Science Fundamentals, Programming, Data Structures, Algorithms',
      summaryPoints: ['GPA: 9.1/10', 'Aug 2020 - June 2024'],
      dateRange: 'Aug 2020 - June 2024'
    }
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff', cursor: 'pointer' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff', cursor: 'pointer' }
                : { background: 'rgb(255, 224, 230)', color: '#fff', cursor: 'pointer' } // Lighter red for education
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div 
                style={{ color: 'black' }}
                onClick={() => {
                  // Calculate work experience index correctly
                  const workIndex = timeLineData.slice(0, index + 1).filter(item => item.timelineType === 'work').length;
                  setSelectedInfo({type: 'work', index: workIndex});
                }}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
                <p style={{ color: '#e50914', fontWeight: 'bold', marginTop: '10px' }}>
                  👆 Click to view detailed experience
                </p>
              </div>
            ) : (
              <div 
                style={{ color: 'black' }}
                onClick={() => {
                  // Calculate education index correctly
                  const educationIndex = timeLineData.slice(0, index + 1).filter(item => item.timelineType === 'education').length;
                  setSelectedInfo({type: 'education', index: educationIndex});
                }}
              >
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints.join(' | ')}</p>
                <p style={{ color: '#e50914', fontWeight: 'bold', marginTop: '10px' }}>
                  👆 Click to view courses
                </p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>

      {/* Detailed Information Modal */}
      {selectedInfo && detailedInfo[selectedInfo.type] && detailedInfo[selectedInfo.type][selectedInfo.index as keyof typeof detailedInfo[typeof selectedInfo.type]] && (
        <div className="experience-modal-overlay" onClick={() => setSelectedInfo(null)}>
          <div className="experience-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{detailedInfo[selectedInfo.type][selectedInfo.index as keyof typeof detailedInfo[typeof selectedInfo.type]].title}</h2>
              <button 
                className="close-button" 
                onClick={() => setSelectedInfo(null)}
              >
                <CloseIcon />
              </button>
            </div>
            
            <div className="modal-content">
              {selectedInfo.type === 'work' ? (
                // Work Experience Content
                <>
                  <div className="section">
                    <h3>👉 What you built:</h3>
                    <p>{detailedInfo.work[selectedInfo.index as keyof typeof detailedInfo.work].whatBuilt}</p>
                  </div>

                  <div className="section">
                    <h3>👉 Challenges solved:</h3>
                    <ul>
                      {detailedInfo.work[selectedInfo.index as keyof typeof detailedInfo.work].challengesSolved.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="section">
                    <h3>👉 Impact (results):</h3>
                    <ul>
                      {detailedInfo.work[selectedInfo.index as keyof typeof detailedInfo.work].impact.map((impact, index) => (
                        <li key={index}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                // Education Content
                <>
                  <div className="section">
                    <h3>📊 Academic Performance:</h3>
                    <p><strong>{detailedInfo.education[selectedInfo.index as keyof typeof detailedInfo.education].gpa}</strong> | {detailedInfo.education[selectedInfo.index as keyof typeof detailedInfo.education].period}</p>
                  </div>

                  <div className="section">
                    <h3>🎯 Focus Area:</h3>
                    <p>{detailedInfo.education[selectedInfo.index as keyof typeof detailedInfo.education].focus}</p>
                  </div>

                  <div className="section">
                    <h3>📚 Courses Taken:</h3>
                    <ul>
                      {detailedInfo.education[selectedInfo.index as keyof typeof detailedInfo.education].courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkExperience;
