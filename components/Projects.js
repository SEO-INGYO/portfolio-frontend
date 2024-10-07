"use client";

import { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Projects() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      title: "Quest Task Management",
      description: "사용자가 다양한 과제를 수행하고 경험치를 통해 레벨을 올리는 과제 관리 웹사이트입니다.",
      image: "/images/quest.png",
      technologies: ["C#", "ASP.NET", "MSSQL", "Visual Studio"],
      githubLink: "https://github.com/SEO-INGYO/quest_website-assignment",
      liveLink: null,
      duration: "2021년 3분기 - 2021년 4분기"
    },
    {
      title: "Restaurant Locator",
      description: "알고리즘 과제로, 가장 가까운 식당을 계산하고 지도에 표시하는 기능을 개발한 프로젝트입니다.",
      image: "/images/restaurant.png",
      technologies: ["Python", "Jupyter Notebook"],
      githubLink: "https://github.com/SEO-INGYO/nearby_restaurant_marker-assignment",
      liveLink: null,
      duration: "2021년 3분기 - 2021년 4분기"
    },
    {
      title: "Smart Plant Pot",
      description: "아두이노와 라즈베리 파이를 활용해 원격으로 제어할 수 있는 스마트 화분을 개발한 IoT 프로젝트입니다.",
      image: "/images/plant.png",
      technologies: ["Java", "Python", "MariaDB", "Android Studio"],
      githubLink: "https://github.com/SEO-INGYO/pet_plant-assignment",
      liveLink: null,
      duration: "2022년 1분기 - 2022년 2분기"
    },
    {
      title: "Agriculture Data Chart",
      description: "대용량 농산물 가격 데이터를 사용해 REST API를 개발하고, 데이터를 시각화한 프로젝트입니다.",
      image: "/images/ongojishin.png",
      technologies: ["Java", "Spring Boot", "MySQL", "IntelliJ"],
      githubLink: null,
      liveLink: "https://ontwo.co.kr/ongo/marketprice",
      duration: "2023년 4분기 - 2024년 1분기"
    },
    {
      title: "OpenAI API Integration",
      description: "OpenAI API를 Django와 MariaDB로 구현해 ChatGPT와 유사한 UI를 개발한 프로젝트입니다.",
      image: "/images/openai.png",
      technologies: ["Python", "Django", "MariaDB", "Visual Studio Code"],
      githubLink: "https://github.com/SEO-INGYO/openai-api",
      liveLink: null,
      duration: "2024년 2분기 - "
    },
    {
      title: "Blog Backend & REST API",
      description: "개인 블로그를 위한 백엔드 및 게시판 REST API를 개발한 프로젝트입니다.",
      image: "/images/backoffice.png",
      technologies: ["Java", "Spring Boot", "MariaDB", "Visual Studio Code"],
      githubLink: "https://github.com/SEO-INGYO/blog-backend",
      liveLink: null,
      duration: "2024년 3분기 - "
    },
    {
      title: "Personal Blog Frontend",
      description: "API를 통해 게시글을 불러와 표시하는 블로그 프론트엔드 프로젝트입니다.",
      image: "/images/blog.png",
      technologies: ["Typescript", "Vue", "Nuxt.js", "Visual Studio Code"],
      githubLink: "https://github.com/SEO-INGYO/blog-frontend",
      liveLink: "https://blog.rocd.site",
      duration: "2024년 3분기 - "
    },
    {
      title: "JSON Key Comparison Script",
      description: "Python으로 두 JSON 파일의 키 값을 비교하는 스크립트를 작성한 프로젝트입니다.",
      image: "/images/compare.png",
      technologies: ["Python", "Visual Studio Code"],
      githubLink: "https://github.com/SEO-INGYO/compare-script",
      liveLink: null,
      duration: "2024년 3분기"
    }
  ];

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const scrollLeftHandler = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRightHandler = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <FaArrowLeft className="scroll-btn left" onClick={scrollLeftHandler} />
        <div
          className="projects-scroll"
          ref={scrollRef}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={`${project.title} 이미지`} className="project-image" />
              <h3>{project.title || "Project Title"}</h3>
              <p>{project.description || "프로젝트 설명을 여기에 입력하세요."}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <FaArrowRight className="scroll-btn right" onClick={scrollRightHandler} />
      </div>
    </div>
  );
}