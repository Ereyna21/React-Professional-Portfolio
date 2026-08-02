import React from 'react';

const skillGroups = [
  {
    title: 'Technical Support & IT',
    description: 'Practical skills for diagnosing issues, assisting users, and documenting clear solutions.',
    skills: ['Technical Troubleshooting', 'Windows', 'Networking Fundamentals', 'IP Addressing', 'DNS & DHCP', 'Hardware Basics', 'Ticket Documentation', 'Remote Support'],
  },
  {
    title: 'Front-End Development',
    description: 'Responsive interfaces built with modern web standards and component-based development.',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Vite', 'Responsive Design', 'React Router'],
  },
  {
    title: 'Back-End & Data',
    description: 'Server-side applications, APIs, authentication, and relational and document databases.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'MySQL', 'MongoDB', 'Sequelize', 'Mongoose'],
  },
  {
    title: 'Tools & Workflow',
    description: 'Tools used to build, test, deploy, collaborate, and support customers effectively.',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Netlify', 'Render', 'Salesforce', 'Microsoft Teams', 'Slack'],
  },
  {
    title: 'Customer Experience',
    description: 'The human skills that turn technical knowledge into a dependable customer experience.',
    skills: ['Bilingual Support', 'Active Listening', 'De-escalation', 'Clear Communication', 'Problem Solving', 'Documentation', 'Adaptability', 'Time Management'],
  },
];

const Skills = () => (
  <main className="skills-page">
    <section className="page-heading">
      <p className="page-eyebrow">Capabilities</p>
      <h1>Skills built through training, projects, and real customer experience.</h1>
      <p>
        I combine technical foundations with the communication and ownership needed to support users, troubleshoot issues, and deliver practical solutions.
      </p>
    </section>

    <section className="skills-grid">
      {skillGroups.map((group) => (
        <article className="skill-group-card" key={group.title}>
          <h2>{group.title}</h2>
          <p>{group.description}</p>
          <div className="skill-list">
            {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </section>

    <section className="learning-banner">
      <div>
        <p className="section-label">Currently developing</p>
        <h2>CompTIA A+, AWS Cloud Practitioner, IP addressing, subnetting, and MySQL.</h2>
        <p>I believe strong technical careers are built through consistent learning and hands-on practice—not just a list of tools.</p>
      </div>
    </section>
  </main>
);

export default Skills;
