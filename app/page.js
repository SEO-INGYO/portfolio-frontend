"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from '@/components/About';
import Skills from '../components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="about" data-aos="fade-up">
        <About />
      </section>
      
      <section id="skills" data-aos="fade-right">
        <Skills />
      </section>

      <section id="projects" data-aos="fade-left">
        <Projects />
      </section>
      
      <section id="contact" data-aos="zoom-in">
        <Contact />
      </section>
    </div>
  );
}