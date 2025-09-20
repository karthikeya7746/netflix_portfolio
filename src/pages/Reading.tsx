// Reading.tsx (Now Movies)

import React from 'react';
import './Reading.css';

// Using placeholder images for now - replace with actual movie poster URLs
const pursuitOfHappynessImg = "https://via.placeholder.com/300x400?text=Pursuit+of+Happyness";
const jerseyImg = "https://via.placeholder.com/300x400?text=Jersey";
const msDhoniImg = "https://via.placeholder.com/300x400?text=MS+Dhoni";
const shawshankImg = "https://via.placeholder.com/300x400?text=Shawshank+Redemption";

const movies = [
  {
    title: "The Pursuit of Happyness",
    director: "Gabriele Muccino",
    imgSrc: pursuitOfHappynessImg,
    description: "An inspiring true story about perseverance, determination, and never giving up on your dreams.",
  },
  {
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    imgSrc: jerseyImg,
    description: "A heartwarming tale of second chances, family bonds, and chasing your passion against all odds.",
  },
  {
    title: "MS Dhoni - The Untold Story",
    director: "Neeraj Pandey",
    imgSrc: msDhoniImg,
    description: "The incredible journey of India's most successful cricket captain, showing the power of hard work and leadership.",
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    imgSrc: shawshankImg,
    description: "A powerful tale of hope, friendship, and redemption that teaches us about perseverance and the human spirit.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">🎬 Movies That Shaped My Journey</h2>
      <p className="reading-intro">These films have influenced my perspectives, creativity, and understanding of storytelling.</p>
      <div className="books-grid">
        {movies.map((movie, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={movie.imgSrc} alt={movie.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{movie.title}</h3>
              <h4 className="book-author">Directed by {movie.director}</h4>
              <p className="book-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
