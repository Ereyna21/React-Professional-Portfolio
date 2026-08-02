import React from 'react';
import Project from '../components/Project';
import noteTakerImage from '../assets/image.png';
import translationAppImage from '../assets/image2.png';
import travelAppImage from '../assets/image3.png';
import workDaySchedulerImage from '../assets/image4.png';
import weatherDashboardImage from '../assets/image5.png';
import justAnotherTextEditorImage from '../assets/image6.png';

const projects = [
  {
    title: 'Note Taker',
    description: 'A full-stack note application that lets users create, save, review, and delete notes through an Express-powered back end.',
    image: noteTakerImage,
    technologies: ['JavaScript', 'Node.js', 'Express'],
    available: false,
  },
  {
    title: 'Translation App',
    description: 'A collaborative front-end application that helps users translate text and work across multiple languages.',
    image: translationAppImage,
    url: 'https://johndennis2.github.io/translateAPP/',
    technologies: ['JavaScript', 'APIs', 'Responsive UI'],
    available: true,
  },
  {
    title: 'Travel Planner',
    description: 'A collaborative full-stack travel application designed to help users organize and manage trip information in one place.',
    image: travelAppImage,
    technologies: ['JavaScript', 'Node.js', 'Full Stack'],
    available: false,
  },
  {
    title: 'Work Day Scheduler',
    description: 'A browser-based daily planner with time-block status styling and local storage so scheduled tasks persist between visits.',
    image: workDaySchedulerImage,
    url: 'https://ereyna21.github.io/Work-Day-Scheduler/',
    technologies: ['JavaScript', 'Day.js', 'Local Storage'],
    available: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather search dashboard that retrieves current conditions and forecast information for user-selected cities.',
    image: weatherDashboardImage,
    url: 'https://ereyna21.github.io/Weather-Dashboard/',
    technologies: ['JavaScript', 'Weather API', 'Local Storage'],
    available: true,
  },
  {
    title: 'Just Another Text Editor',
    description: 'An installable progressive web application for creating and saving text with offline-friendly browser storage.',
    image: justAnotherTextEditorImage,
    technologies: ['PWA', 'IndexedDB', 'Webpack'],
    available: false,
  },
];

const Work = () => {
  return (
    <main className="projects-page">
      <header className="page-heading">
        <p className="page-eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p>
          A collection of web applications built while developing my skills across
          front-end development, APIs, back-end services, databases, and progressive web apps.
        </p>
      </header>

      <section className="projects-grid" aria-label="Portfolio projects">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
};

export default Work;
