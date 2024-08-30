import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img
    align="right"
    src="https://octodex.github.com/images/welcometocat.png"
    alt="Welcome Octocat"
    width="200"
    class="octocat"
  />
      <h1>Hi, I am Lut Lat Aung 👋</h1>
      
      <p>Web Developer | Designer | Programmer</p>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
      <p>🤔 I'm currently studying at Assumption University of Thailand</p>
      <p>✨ I study: HTML, CSS, Javascript, React</p>        
      </p>

      <h3>📊 My Github Stats</h3>
      <img
            width="440px"
            src="https://github-readme-stats.vercel.app/api?username=Lut-Lat-Aung&show_icons=true&theme=onedark"
            alt="GitHub Stats"
          />
          <img
            width="385px"
            src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=Lut-Lat-Aung&layout=compact&theme=onedark"
            alt="Top Languages"
          />
          <img
            width="500px"
            src="https://github-readme-activity-graph.vercel.app/graph?username=Lut-Lat-Aung&theme=github"
            alt="Activity Graph"
          />
          <img
            width="440px"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Lut-Lat-Aung&theme=onedark"
            alt="Streak Stats"
          />
          <img
            width="375px"
            src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=Lut-Lat-Aung&layout=compact&theme=onedark"
            alt="Top Languages"
          />
          <img
            src="https://raw.githubusercontent.com/Lut-Lat-Aung/Lut-Lat-Aung/output/github-contribution-grid-snake.svg"
            alt="Snake animation"
            style={{ maxWidth: '100%' }}
          />
          
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {/* Replace with dynamic project rendering */}
        <div className="project-item">Project 1</div>
        <div className="project-item">Project 2</div>
        <div className="project-item">Project 3</div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <ul>
        <li>Job Title - Company (Year)</li>
        <li>Job Title - Company (Year)</li>
        <li>Job Title - Company (Year)</li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-bar">
        <div className="skill" style={{ width: '90%' }}>HTML/CSS - 90%</div>
      </div>
      <div className="skill-bar">
        <div className="skill" style={{ width: '80%' }}>JavaScript - 80%</div>
      </div>
      <div className="skill-bar">
        <div className="skill" style={{ width: '75%' }}>React - 75%</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default App;
