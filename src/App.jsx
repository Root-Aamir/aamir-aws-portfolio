import './App.css'

const services = [
  'Business Website Development',
  'React Website Fixing',
  'AWS Amplify Deployment',
  'GitHub Auto Deployment',
  'Basic Website Security Setup',
  'Hosting & Domain Setup'
]

const projects = [
  {
    title: 'ApexZero',
    desc: 'Cybersecurity and trading education platform with blog, services, and monetization setup.'
  },
  {
    title: 'Forex Strategy Store',
    desc: 'Premium trading strategy store concept built with React, modern UI, and responsive design.'
  },
  {
    title: 'AWS Portfolio Deployment',
    desc: 'React portfolio deployed on AWS Amplify with GitHub based continuous deployment.'
  }
]

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">Aamir<span>Cloud</span></div>
        <div className="navlinks">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="tag">Full Stack Developer | AWS Deployment | Secure Websites</p>
        <h1>I build modern business websites and deploy them professionally on AWS.</h1>
        <p className="heroText">
          I help businesses create fast, mobile-friendly websites with React, GitHub deployment,
          AWS hosting setup, contact forms, WhatsApp integration, and basic security practices.
        </p>

        <div className="buttons">
          <a className="btn primary" href="#contact">Hire Me</a>
          <a className="btn secondary" href="#projects">View Projects</a>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>AWS</h2>
          <p>IAM, MFA, Budget Alerts, Amplify</p>
        </div>
        <div>
          <h2>React</h2>
          <p>Modern frontend websites</p>
        </div>
        <div>
          <h2>Security</h2>
          <p>Basic secure setup and best practices</p>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <p className="sub">
          Services I can offer to clients and small businesses.
        </p>

        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service}>
              <h3>{service}</h3>
              <p>
                Clean, professional, mobile-friendly setup focused on speed,
                trust, and client business growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="sub">
          Portfolio projects showing my web development and cloud deployment skills.
        </p>

        <div className="grid">
          {projects.map((project) => (
            <div className="card project" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section awsBox">
        <h2>AWS Setup Proof</h2>
        <p>
          I configured AWS account security using root MFA, IAM admin user with MFA,
          billing budget alert, and safe cloud account practices.
        </p>

        <ul>
          <li>Root MFA enabled</li>
          <li>IAM admin user created</li>
          <li>Budget alert configured</li>
          <li>Ready for AWS Amplify deployment</li>
        </ul>
      </section>

      <section id="contact" className="section contact">
        <h2>Let’s Build Your Website</h2>
        <p>
          Need a business website, React fix, or AWS deployment? I can help you launch it.
        </p>

        <div className="contactBox">
          <p><strong>Name:</strong> Aamir Akram</p>
          <p><strong>Role:</strong> Full Stack Developer & AWS Cloud Learner</p>
          <p><strong>Service:</strong> Business websites, React fixes, AWS deployment</p>
        </div>
      </section>
    </main>
  )
}

export default App
