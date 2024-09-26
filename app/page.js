import React from 'react';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <section id="about">
      </section>
      
      <section id="skills">
        <h1>Skills</h1>
        <Skills />
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <div>
          <h2>Portfolio Website</h2>
          <p>A personal portfolio to showcase my skills and projects.</p>
          <p><strong>Technologies:</strong> Next.js, React, CSS</p>
          <a href="https://github.com/my-portfolio" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        
        <div>
          <h2>E-commerce App</h2>
          <p>An online store for selling products.</p>
          <p><strong>Technologies:</strong> Node.js, MongoDB, React</p>
          <a href="https://github.com/my-ecommerce" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </section>
      
      <section id="contact">
        <h1>Contact Me</h1>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}