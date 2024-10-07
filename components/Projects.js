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
      title: "농산물 유통정보 차트",
      description: "농산물 가격 관련 대용량 데이터를 활용한 REST API 를 개발하였습니다.",
      image: "/images/ongojishin.png",
      technologies: ["Java", "Spring Boot", "Mysql"],
      githubLink: null,
      liveLink: "https://ontwo.co.kr/ongo/marketprice"
    },
    {
      title: "OpenAI API",
      description: "OpenAI API 를 사용해보려고 Django 및 MariaDB 를 사용해서 개발한 프로젝트입니다. ChatGPT 와 유사한 화면으로 구성하였습니다.",
      image: "/images/measure.png",
      technologies: ["Python", "Django", "MariaDB"],
      githubLink: "https://github.com/SEO-INGYO/openai-api",
      liveLink: null
    },
    {
      title: "블로그 백오피스 및 REST API",
      description: "개인적으로 사용할 블로그를 위해서 개발한 게시판 관련 백오피스 및 REST API를 개발하였습니다.",
      image: "/images/measure.png",
      technologies: ["Java", "Spring Boot", "MariaDB"],
      githubLink: "https://github.com/SEO-INGYO/blog-backend",
      liveLink: "https://blog.rocd.site"
    },
    {
      title: "개인 블로그",
      description: "백엔드와 API 통신을 통해 게시글을 출력하고 보여주는 개인 블로그를 개발하였습니다.",
      image: "/images/measure.png",
      technologies: ["Python", "Django", "MariaDB"],
      githubLink: "https://github.com/SEO-INGYO/blog-frontend",
      liveLink: "https://blog.rocd.site"
    },
    {
      title: "JSON 키값 비교 스크립트",
      description: "비슷한 JSON 파일을 비교할 일이 생겨 두 개의 JSON 파일의 키쌍 값을 비교하는 스크립트를 짰습니다.",
      image: "/images/measure.png",
      technologies: ["Python"],
      githubLink: "https://github.com/SEO-INGYO/compare-script",
      liveLink: null
    },
    {
      title: "",
      description: "",
      image: "/images/measure.png",
      technologies: [""],
      githubLink: null,
      liveLink: null
    },
    {
      title: "",
      description: "",
      image: "/images/measure.png",
      technologies: [""],
      githubLink: null,
      liveLink: null
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
    const walk = (x - startX) * 1.5; // 드래그 속도 조절
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const scrollLeftHandler = () => {
    scrollRef.current.scrollLeft -= 300; // 화살표 클릭 시 왼쪽으로 300px 이동
  };

  const scrollRightHandler = () => {
    scrollRef.current.scrollLeft += 300; // 화살표 클릭 시 오른쪽으로 300px 이동
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <button className="scroll-btn left" onClick={scrollLeftHandler}>
          <FaArrowLeft />
        </button>
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
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
        <button className="scroll-btn right" onClick={scrollRightHandler}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}