import React from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiHtml5, SiCss3, SiMongodb, SiExpress, SiNextdotjs, SiFastapi, SiDjango, SiBootstrap, SiVercel, SiOpenai, SiHuggingface } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  FaJava: <FaJava />,
  FaPython: <FaPython />,
  FaNodeJs: <FaNodeJs />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  SiNextdotjs: <SiNextdotjs />,
  SiExpress: <SiExpress />,
  SiFastapi: <SiFastapi />,
  SiDjango: <SiDjango />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiBootstrap: <SiBootstrap />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  FaAws: <FaAws />,
  SiGooglecloud: <SiGooglecloud />,
  SiVercel: <SiVercel />,
  FaGitAlt: <FaGitAlt />,
  SiOpenai: <SiOpenai />,
  SiHuggingface: <SiHuggingface />,
};

const Skills: React.FC = () => {

  // Local skills data for Karthikeya Reddy
  const skillsData: Skill[] = [
    // Programming Languages
    { name: "Java", category: "Programming Languages", description: "Object-oriented programming, Spring Boot, Maven", icon: "FaJava" },
    { name: "Python", category: "Programming Languages", description: "Data structures, algorithms, FastAPI, Django", icon: "FaPython" },
    { name: "JavaScript", category: "Programming Languages", description: "ES6+, async programming, DOM manipulation", icon: "SiTypescript" },
    { name: "HTML", category: "Programming Languages", description: "Semantic markup, accessibility, responsive design", icon: "SiHtml5" },
    { name: "CSS", category: "Programming Languages", description: "Flexbox, Grid, animations, responsive design", icon: "SiCss3" },
    
    // Frontend Frameworks
    { name: "React.js", category: "Frontend Frameworks", description: "Hooks, state management, component lifecycle", icon: "FaReact" },
    { name: "Next.js", category: "Frontend Frameworks", description: "SSR, SSG, API routes, performance optimization", icon: "SiNextdotjs" },
    { name: "Bootstrap", category: "Frontend Frameworks", description: "Responsive design, component library", icon: "SiBootstrap" },
    
    // Backend Frameworks
    { name: "Node.js", category: "Backend Frameworks", description: "Event-driven architecture, npm ecosystem", icon: "FaNodeJs" },
    { name: "Express.js", category: "Backend Frameworks", description: "REST APIs, middleware, routing", icon: "SiExpress" },
    { name: "FastAPI", category: "Backend Frameworks", description: "High-performance APIs, automatic documentation", icon: "SiFastapi" },
    { name: "Django", category: "Backend Frameworks", description: "MVC pattern, ORM, admin interface", icon: "SiDjango" },
    
    // Databases
    { name: "MongoDB", category: "Databases", description: "NoSQL, document storage, aggregation", icon: "SiMongodb" },
    { name: "PostgreSQL", category: "Databases", description: "Relational database, complex queries", icon: "SiPostgresql" },
    { name: "MySQL", category: "Databases", description: "ACID compliance, indexing, optimization", icon: "SiMysql" },
    
    // DevOps & Cloud
    { name: "Docker", category: "DevOps & Cloud", description: "Containerization, multi-stage builds", icon: "FaDocker" },
    { name: "Kubernetes", category: "DevOps & Cloud", description: "Container orchestration, scaling", icon: "SiKubernetes" },
    { name: "AWS", category: "DevOps & Cloud", description: "Cloud services, EC2, S3, Lambda", icon: "FaAws" },
    { name: "Google Cloud", category: "DevOps & Cloud", description: "GCP services, deployment, monitoring", icon: "SiGooglecloud" },
    { name: "Vercel", category: "DevOps & Cloud", description: "Frontend deployment, edge functions", icon: "SiVercel" },
    
    // Tools & Version Control
    { name: "Git", category: "Tools & Version Control", description: "Version control, branching, collaboration", icon: "FaGitAlt" },
    
    // AI & Machine Learning
    { name: "LangChain", category: "AI & Machine Learning", description: "LLM applications, RAG, prompt engineering", icon: "SiOpenai" },
    { name: "Hugging Face", category: "AI & Machine Learning", description: "Transformers, model inference, embeddings", icon: "SiHuggingface" },
    { name: "Pinecone", category: "AI & Machine Learning", description: "Vector database, similarity search", icon: "SiOpenai" },
  ];

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
