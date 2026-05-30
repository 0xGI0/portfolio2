import React from 'react'

function ProjectCard({ src, link, h3, p }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Projekt: ${h3}`}>
            <img className="hover" src={src} alt={`Screenshot von ${h3}`} />
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
  );
}

export default ProjectCard;
