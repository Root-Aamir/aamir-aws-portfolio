import './App.css'

const services = [
  {
    title: 'Business Website Development',
    desc: 'Modern, mobile-friendly websites for local businesses, startups, freelancers, and personal brands.'
  },
  {
    title: 'React Website Fixing',
    desc: 'Bug fixes, responsive layout fixes, routing issues, image errors, and frontend improvements.'
  },
  {
    title: 'AWS Amplify Deployment',
    desc: 'Deploy React websites on AWS Amplify with GitHub-based continuous deployment.'
  },
  {
    title: 'Hosting & Domain Setup',
    desc: 'Domain connection, hosting setup, SSL, basic SEO setup, and launch support.'
  },
  {
    title: 'Basic Website Security Setup',
    desc: 'MFA, IAM basics, security checklist, safe deployment practices, and account protection.'
  },
  {
    title: 'Website Maintenance',
    desc: 'Content updates, performance checks, broken link fixes, and monthly website support.'
  }
]

const projects = [
  {
    title: 'ApexZero',
    tag: 'Cybersecurity Platform',
    desc: 'A cybersecurity and trading education platform focused on blogs, services, legal pages, and monetization-ready structure.'
  },
  {
    title: 'Forex Strategy Store',
    tag: 'React Website',
    desc: 'A premium React-based trading strategy store concept with responsive product cards and modern UI.'
  },
  {
    title: 'AWS Portfolio Deployment',
    tag: 'Cloud Deployment',
    desc: 'A React portfolio prepared for deployment on AWS Amplify with GitHub continuous deployment workflow.'
  }
]

const skills = [
  'React',
  'JavaScript',
  'HTML/CSS',
  'Git & GitHub',
  'AWS IAM',
  'AWS Amplify',
  'Responsive Design',
  'Freelancing',
  'Python',
  'Basic Cybersecurity'
]

const profiles = [
  {
    name: 'Fiverr',
    title: 'Freelance Services Profile',
    desc: 'Available for business websites, React fixes, AWS deployment, hosting setup, Python automation, and web development projects.',
    link: 'https://www.fiverr.com/red_zone_rz',
    cta: 'View Fiverr'
  },
  {
    name: 'GitHub',
    title: 'Code & Projects',
    desc: 'Public repositories, React projects, AWS deployment practice, cybersecurity learning, and web development work.',
    link: 'https://github.com/Root-Aamir',
    cta: 'View GitHub'
  },
  {
    name: 'HackerOne',
    title: 'Security Research Profile',
    desc: 'Ethical security research learning profile for responsible vulnerability reporting and cybersecurity practice.',
    link: 'https://hackerone.com/rootaamir?type=user',
    cta: 'View HackerOne'
  }
]

function App() {
  return (
    <main className="page">
      <header className="header">
        <nav className="navbar">
          <a className="brand" href="#">
            Aamir<span>Cloud</span>
          </a>

          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#profiles">Profiles</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="badge">
            Freelance Full Stack Developer â€¢ AWS Deployment â€¢ Cybersecurity-Aware Websites
          </p>

          <h1>
            I build professional freelance websites, cloud deployments, and secure business web solutions.
          </h1>

          <p className="heroText">
            I help businesses launch fast, responsive, and professional websites using React,
            GitHub, and AWS Amplify. My focus is clean design, reliable deployment,
            freelance-ready service delivery, and practical security basics.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="#contact">Work With Me</a>
            <a className="btn secondary" href="#projects">View Projects</a>
          </div>

          <div className="heroInfo">
            <span>Available for freelance work</span>
            <span>React + AWS deployment</span>
            <span>Business website setup</span>
          </div>
        </div>

        <div className="heroCard">
          <p className="cardLabel">Professional Setup</p>
          <h3>Freelance + Cloud Ready</h3>

          <div className="checkList">
            <p>? Fiverr freelance profile</p>
            <p>? GitHub project portfolio</p>
            <p>? AWS IAM and MFA setup</p>
            <p>? HackerOne security learning profile</p>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div>
          <h2>React</h2>
          <p>Frontend websites</p>
        </div>
        <div>
          <h2>AWS</h2>
          <p>Cloud deployment</p>
        </div>
        <div>
          <h2>GitHub</h2>
          <p>Auto deployment</p>
        </div>
        <div>
          <h2>Freelance</h2>
          <p>Client services</p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Services</p>
          <h2>What I Can Build For Clients</h2>
          <p>
            Practical web development, freelance, hosting, and cloud deployment services
            for businesses, creators, and startups.
          </p>
        </div>

        <div className="grid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Projects</p>
          <h2>Selected Work</h2>
          <p>
            Portfolio projects showing my web development, deployment,
            and cybersecurity-aware learning.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section split">
        <div>
          <p className="eyebrow">Skills</p>
          <h2>Tools & Technologies</h2>
          <p>
            I am building my skillset around web development, freelancing,
            cloud deployment, and secure application setup.
          </p>
        </div>

        <div className="skillBox">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="profiles" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Professional Profiles</p>
          <h2>Freelance, Code & Security Research</h2>
          <p>
            My public profiles for freelance services, development projects,
            and ethical cybersecurity learning.
          </p>
        </div>

        <div className="profileGrid">
          {profiles.map((profile) => (
            <a className="profileCard" href={profile.link} target="_blank" rel="noreferrer" key={profile.name}>
              <span>{profile.name}</span>
              <h3>{profile.title}</h3>
              <p>{profile.desc}</p>
              <strong>{profile.cta} ?</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section process">
        <div className="sectionHeader">
          <p className="eyebrow">Process</p>
          <h2>How I Work</h2>
        </div>

        <div className="processGrid">
          <div>
            <strong>01</strong>
            <h3>Plan</h3>
            <p>Understand business needs, pages, design style, target audience, and required features.</p>
          </div>
          <div>
            <strong>02</strong>
            <h3>Build</h3>
            <p>Create a responsive website using clean React components, professional UI, and clear content.</p>
          </div>
          <div>
            <strong>03</strong>
            <h3>Deploy</h3>
            <p>Push to GitHub and deploy on AWS Amplify with continuous deployment workflow.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Letâ€™s build your website professionally.</h2>
          <p>
            I am available for freelance projects, business websites, React fixes,
            hosting setup, AWS Amplify deployment, and basic website security setup.
          </p>

          <div className="contactActions">
            <a className="contactButton primaryContact" href="mailto:aamirakram252003@gmail.com">
              Email Me
            </a>
            <a className="contactButton secondaryContact" href="https://www.fiverr.com/red_zone_rz" target="_blank" rel="noreferrer">
              Hire on Fiverr
            </a>
          </div>
        </div>

        <div className="contactCard">
          <p><strong>Name:</strong> Aamir Akram</p>
          <p><strong>Role:</strong> Freelance Full Stack Developer & AWS Cloud Learner</p>
          <p><strong>Email:</strong> <a href="mailto:aamirakram252003@gmail.com">aamirakram252003@gmail.com</a></p>
          <p><strong>Fiverr:</strong> <a href="https://www.fiverr.com/red_zone_rz" target="_blank" rel="noreferrer">fiverr.com/red_zone_rz</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Root-Aamir" target="_blank" rel="noreferrer">github.com/Root-Aamir</a></p>
          <p><strong>Location:</strong> India</p>
          <p><strong>Services:</strong> Freelance websites, React fixes, AWS deployment, hosting setup, basic security setup</p>
          <p className="availability"><span></span> Available for freelance projects</p>
        </div>
      </section>
    </main>
  )
}

export default App
