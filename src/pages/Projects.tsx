import React from "react";
import "./Projects.css";
import type { Project } from "../types";

// import images from src/images
import movieImg from "../images/movie-ticket-booking.png";
import roleFitImg from "../images/role-fit.png";
import wolfImg from "../images/wolf-jobs.png";
import todoImg from "../images/todo-list-placeholder.png";

// Placeholder for Movie Recommendation System
const movieRecImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY2N2ZmIi8+PHRleHQgeD0iMjAwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCBCbGFjayIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjkwMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TW92aWUgUmVjb21tZW5kYXRpb24gU3lzdGVtPC90ZXh0Pjwvc3ZnPg==";


// Local data for Karthikeya Reddy's projects
const projectsData: Project[] = [
  {
    title: "AI-Powered Role Fit Evaluator",
    description:
      "Compares a resume and a Job Description to produce a fit score and an evidence-backed gap table. Creates tailored bullets and a cover letter. Includes an evidence panel and exports results as Markdown/JSON. Productionized with streaming responses, telemetry-based latency tracking, and a Dockerized demo.",
    techUsed: ["Next.js", "FastAPI/Express", "LangChain", "Hugging Face", "Pinecone", "MongoDB"],
    image: { url: roleFitImg },
    githubUrl: "https://github.com/karthikeya7746/role-fit-evaluator",
  },
  {
    title: "Movie Ticket Booking System",
    description:
      "A full-stack MERN application for booking movie tickets with real-time seat selection, role-based authentication, and an intuitive admin dashboard. Features include secure JWT authentication, interactive seat selection, booking history, ticket cancellation, and Stripe payment integration. Deployed on Vercel with MongoDB Atlas.",
    techUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Vercel"],
    image: { url: movieImg },
    githubUrl: "https://github.com/karthikeya7746/Movie_ticket_booking_system",
  },
  {
    title: "WolfJobs - Job Matching Platform",
    description:
      "A comprehensive job portal connecting students with recruiters for full-time, part-time, co-op, and internship roles. Features resume parsing, skill-based job matching, advanced filters, job bookmarking, interview scheduling, and real-time application status tracking. Built with TypeScript and includes database security with password hashing.",
    techUsed: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Docker", "Kubernetes"],
    image: { url: wolfImg },
    githubUrl: "https://github.com/karthikeya7746/WolfJobs",
  },
  {
    title: "Movie Recommendation System",
    description:
      "An intelligent movie recommendation system that suggests personalized movie recommendations based on user's favorite movie input. Uses machine learning algorithms with cosine similarity to analyze and compare movie features including genres, keywords, tagline, cast, and director. Built with Flask web framework and deployed with a clean, interactive user interface.",
    techUsed: ["Python", "Flask", "scikit-learn", "pandas", "NumPy", "NLTK", "HTML", "CSS"],
    image: { url: movieRecImg },
    githubUrl: "https://github.com/karthikeya7746/Movie_Recommendation_System",
  },
  {
    title: "ToDo List App",
    description:
      "A simple and interactive ToDo List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to create, read, update, and delete tasks seamlessly. Features include persistent storage using MongoDB, responsive UI for better user experience, and full CRUD operations for task management.",
    techUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS", "Git", "Postman"],
    image: { url: todoImg },
    githubUrl: "https://github.com/karthikeya7746/ToDo_List",
  },
];

export default function Projects() {
  const handleProjectClick = (e: React.MouseEvent, githubUrl: string | undefined) => {
    if (!githubUrl) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // Try window.open first, fallback to window.location if blocked
    const newWindow = window.open(githubUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked, fallback to same window
      window.location.href = githubUrl;
    }
  };

  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((p, idx) => (
          <article 
            key={p.title ?? idx} 
            className="project-card"
            onClick={(e) => handleProjectClick(e, p.githubUrl)}
            style={{ cursor: p.githubUrl ? 'pointer' : 'default' }}
            role={p.githubUrl ? 'link' : undefined}
            tabIndex={p.githubUrl ? 0 : undefined}
            onKeyDown={(e) => {
              if (p.githubUrl && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                handleProjectClick(e as any, p.githubUrl);
              }
            }}
          >
            {p.image?.url && <img src={p.image.url} alt={p.title} className="project-image" />}
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            {p.techUsed?.length ? (
              <div className="project-tech">{p.techUsed.join(" • ")}</div>
            ) : null}
            {p.githubUrl && (
              <div className="github-link">🔗 View on GitHub</div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
