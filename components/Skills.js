"use client";

import { useState } from 'react';

export default function Skills() {
  const [popupData, setPopupData] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 });

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: 'C', wikiLink: 'https://ko.wikipedia.org/wiki/C_(프로그래밍_언어)' },
        { name: 'C++', wikiLink: 'https://ko.wikipedia.org/wiki/C%2B%2B' },
        { name: 'C#', wikiLink: 'https://ko.wikipedia.org/wiki/C_샤프' },
        { name: 'Java', wikiLink: 'https://ko.wikipedia.org/wiki/자바_(프로그래밍_언어)' },
        { name: 'Python', wikiLink: 'https://ko.wikipedia.org/wiki/파이썬' },
        { name: 'JavaScript', wikiLink: 'https://ko.wikipedia.org/wiki/자바스크립트' }
      ]
    },
    {
      category: "Frontend Technologies",
      items: [
        { name: 'React', wikiLink: 'https://ko.wikipedia.org/wiki/리액트_(자바스크립트_라이브러리)' },
        { name: 'Vue.js', wikiLink: 'https://ko.wikipedia.org/wiki/Vue.js' },
        { name: 'Next.js', wikiLink: 'https://ko.wikipedia.org/wiki/Next.js' },
        { name: 'Nuxt.js', wikiLink: 'https://ko.wikipedia.org/wiki/Nuxt.js' },
        { name: 'Bootstrap', wikiLink: 'https://ko.wikipedia.org/wiki/부트스트랩_(프론트엔드_프레임워크)' },
      ]
    },
    {
      category: "Backend Technologies",
      items: [
        { name: 'Node.js', wikiLink: 'https://ko.wikipedia.org/wiki/Node.js' },
        { name: 'Spring Boot', wikiLink: 'https://ko.wikipedia.org/wiki/스프링_프레임워크' },
        { name: 'Express.js', wikiLink: 'https://ko.wikipedia.org/wiki/Express.js' },
        { name: 'ASP.NET', wikiLink: 'https://ko.wikipedia.org/wiki/ASP.NET' },
        { name: 'Django', wikiLink: 'https://ko.wikipedia.org/wiki/장고_(웹_프레임워크)' },
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: 'Git', wikiLink: 'https://ko.wikipedia.org/wiki/깃_(소프트웨어)' },
        { name: 'GitHub', wikiLink: 'https://ko.wikipedia.org/wiki/깃허브' },
        { name: 'GitLab', wikiLink: 'https://ko.wikipedia.org/wiki/깃랩' },
        { name: 'Docker', wikiLink: 'https://ko.wikipedia.org/wiki/도커_(소프트웨어)' }
      ]
    }
  ];

  const handleMouseOver = async (wikiLink, event) => {
    const { clientX, clientY } = event;
    
    const adjustedX = clientX - 100;
    const adjustedY = clientY - 100;

    setHoveredPosition({ x: adjustedX, y: adjustedY });
    setPopupData(null);

    try {
      const response = await fetch(`/api/scrape?url=${encodeURIComponent(wikiLink)}`);
      const data = await response.json();
      setPopupData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setPopupData({ title: 'Error', description: 'Failed to load data' });
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
    </div>
  );
}
