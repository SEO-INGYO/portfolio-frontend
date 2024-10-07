"use client";

import { useState } from 'react';

export default function Skills() {
  const [popupData, setPopupData] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: 'C', wikiLink: 'https://namu.wiki/w/C%20언어' },
        { name: 'C++', wikiLink: 'https://namu.wiki/w/C++' },
        { name: 'C#', wikiLink: 'https://namu.wiki/w/C%23' },
        { name: 'Java', wikiLink: 'https://namu.wiki/w/Java' },
        { name: 'Python', wikiLink: 'https://namu.wiki/w/Python' },
        { name: 'JavaScript', wikiLink: 'https://namu.wiki/w/JavaScript' }
      ]
    },
    {
      category: "Frontend Technologies",
      items: [
        { name: 'React', wikiLink: 'https://namu.wiki/w/React(라이브러리)' },
        { name: 'Vue.js', wikiLink: 'https://namu.wiki/w/Vue.js' },
        { name: 'Next.js', wikiLink: 'https://namu.wiki/w/Next.js' },
        { name: 'Nuxt.js', wikiLink: 'https://namu.wiki/w/Nuxt.js' },
        { name: 'Bootstrap', wikiLink: 'https://namu.wiki/w/Bootstrap(프레임워크)' },
        { name: 'Tailwind CSS', wikiLink: 'https://namu.wiki/w/Tailwind%20CSS' }
      ]
    },
    {
      category: "Backend Technologies",
      items: [
        { name: 'Node.js', wikiLink: 'https://namu.wiki/w/Node.js' },
        { name: 'Spring Boot', wikiLink: 'https://namu.wiki/w/Spring(프레임워크)' },
        { name: 'Express.js', wikiLink: 'https://namu.wiki/w/Express.js' },
        { name: 'ASP.NET', wikiLink: 'https://namu.wiki/w/ASP.NET' },
        { name: 'Django', wikiLink: 'https://namu.wiki/w/Django' },
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: 'Git', wikiLink: 'https://namu.wiki/w/Git' },
        { name: 'GitHub', wikiLink: 'https://namu.wiki/w/GitHub' },
        { name: 'GitLab', wikiLink: 'https://namu.wiki/w/GitLab' },
        { name: 'Docker', wikiLink: 'https://namu.wiki/w/Docker' }
      ]
    }
  ];

  const handleMouseOver = async (wikiLink, event) => {
    const { clientX, clientY } = event;
    
    const adjustedX = clientX - 100;
    const adjustedY = clientY - 100;

    setHoveredPosition({ x: adjustedX, y: adjustedY });
    setLoading(true);
    setPopupData(null);

    try {
      const response = await fetch(`/api/scrape?url=${encodeURIComponent(wikiLink)}`);
      const data = await response.json();
      setPopupData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setPopupData({ title: 'Error', description: 'Failed to load data' });
    } finally {
      setLoading(false);
    }
  };

  const handleMouseOut = () => {
    setPopupData(null);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((category) => (
        <div key={category.category} className="skills-category">
          <h3>{category.category}</h3>
          <div className="skills-grid">
            {category.items.map((skill) => (
              <a
                key={skill.name}
                href={skill.wikiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-card-link"
              >
                <div
                  className="skill-card"
                  onMouseOver={(event) => handleMouseOver(skill.wikiLink, event)}
                  onMouseOut={handleMouseOut}
                >
                  <h3>{skill.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
      {popupData && (
        <div
          className="popup"
          style={{ top: hoveredPosition.y, left: hoveredPosition.x }}
        >
          <h3>{popupData.title}</h3>
          <p>{popupData.description}</p>
          {popupData.image && <img src={popupData.image} alt="Preview" className="popup-image" />}
        </div>
      )}
      {loading && <div className="popup">Loading...</div>}
    </div>
  );
}