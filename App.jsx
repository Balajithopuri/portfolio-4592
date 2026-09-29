import "./App.css";

function App() {
  const projects = [
    {
      title: "Vignan University Student Registration",
      description:
        "A student registration portal designed for collecting student details such as personal information, course, department, qualification, address and registration details.",
      tech: "HTML • CSS • JavaScript",
      link: "https://studentregistraion.netlify.app/",
    },
    {
      title: "ShopEase – Online Shopping Website",
      description:
        "An e-commerce website with product search, shopping cart, product categories and a modern shopping interface.",
      tech: "HTML • CSS • JavaScript",
      link: "https://shopbuyzone.netlify.app/",
    },
    {
      title: "Ganesh Chaturthi Website",
      description:
        "A web project created with a Ganesh Chaturthi theme and festive-focused website design.",
      tech: "HTML • CSS • JavaScript",
      link: "https://ganesh-chaturthi-website.netlify.app/",
    },
  ];

  const certificates = [
    {
      title: "South Zone Kho-Kho (Men)",
      description:
        "Participated in the South Zone Kho-Kho (Men) event organized by Davangere University, Davangere, Karnataka.",
      date: "26 March 2026 – 29 March 2026",
      image: "/certificates/south-zone-kho-kho.jpg",
    },
    {
      title: "Vignan Bala Mahotsav 2026",
      description:
        "Certificate for successful execution of LEAD FOR TEAM EVENT (KHO-KHO) at Vignan Bala Mahotsav 2026.",
      date: "31 January 2026 – 2 February 2026",
      image: "/certificates/bala-mahotsav.jpg",
    },
    {
      title: "Certificate of Appreciation",
      description:
        "Recognized as Chief Coordinator for Sports for the successful execution of Vignan's Consortium of Designers and Engineers 2026.",
      date: "2026",
      image: "/certificates/chief-coordinator-sports.jpg",
    },
  ];

  const skills = ["HTML", "CSS", "JavaScript", "Python"];

  return (
    <div className="portfolio">

      {/* AI BACKGROUND */}
      <div className="ai-background">
        <div className="grid"></div>
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>

        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
        <span className="particle p6"></span>
        <span className="particle p7"></span>
        <span className="particle p8"></span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>&lt;</span> BSB <span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">

          <div className="hero-tag">
            ✨ Welcome to my portfolio
          </div>

          <h1>
            Thopuri Chandra
            <br />
            <span>Siva Balaji</span>
          </h1>

          <h2>
            B.Tech CSE Student <span>•</span> Web Developer
          </h2>

          <p>
            Passionate about creating modern websites, learning new
            technologies and building innovative digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/explore"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-glow">
            <div className="profile-circle">
              <span>BSB</span>
            </div>
          </div>

          <h3>Computer Science</h3>
          <p>Developer • Learner • Creator</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-title">
          <span>01.</span>
          <h2>About Me</h2>
        </div>

        <div className="about-card">
          <div className="about-icon">👨‍💻</div>

          <div>
            <h3>Hello, I'm Siva Balaji</h3>

            <p>
              I am a 3rd year B.Tech Computer Science and Engineering student
              at Vignan University. I am interested in web development,
              programming and creating useful digital solutions.
            </p>

            <p>
              I enjoy working with HTML, CSS, JavaScript and Python and
              continuously improving my technical and problem-solving skills.
            </p>

            <div className="about-details">
              <div>
                <strong>University</strong>
                <span>Vignan University</span>
              </div>

              <div>
                <strong>Degree</strong>
                <span>B.Tech CSE</span>
              </div>

              <div>
                <strong>Year</strong>
                <span>3rd Year</span>
              </div>

              <div>
                <strong>CGPA</strong>
                <span>7.5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-title">
          <span>02.</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <div className="skill-number">
                0{index + 1}
              </div>

              <div className="skill-icon">
                {skill === "HTML" && "🌐"}
                {skill === "CSS" && "🎨"}
                {skill === "JavaScript" && "⚡"}
                {skill === "Python" && "🐍"}
              </div>

              <h3>{skill}</h3>

              <div className="skill-line">
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-title">
          <span>03.</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div className="education-year">
            2024 - Present
          </div>

          <div className="education-content">
            <h3>Bachelor of Technology – Computer Science & Engineering</h3>

            <h4>Vignan University</h4>

            <p>
              Currently pursuing B.Tech in Computer Science and Engineering.
            </p>

            <div className="cgpa">
              <span>Current CGPA</span>
              <strong>7.5</strong>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-title">
          <span>04.</span>
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>

              <div className="project-top">
                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-code">
                  &lt;/&gt;
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                Visit Project ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <div className="section-title">
          <span>05.</span>
          <h2>Achievements & Certificates</h2>
        </div>

        <div className="certificate-grid">

          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.title}>

              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                />
              </div>

              <div className="certificate-content">
                <div className="certificate-badge">
                  🏆 Certificate
                </div>

                <h3>{certificate.title}</h3>

                <p>{certificate.description}</p>

                <span className="certificate-date">
                  📅 {certificate.date}
                </span>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-btn"
                >
                  View Certificate ↗
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="section-title">
          <span>06.</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Let's Connect</h3>

            <p>
              Interested in working together or discussing a project?
              Feel free to contact me.
            </p>

            <div className="contact-item">
              <span>📧</span>
              <div>
                <small>Email</small>
                <a href="mailto:bhanubalaji727@gmail.com">
                  bhanubalaji727@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>📱</span>
              <div>
                <small>Phone</small>
                <a href="tel:9391525890">
                  9391525890
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <small>Location</small>
                <p>Guntur</p>
              </div>
            </div>

          </div>

          <div className="contact-card">

            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>
              <span className="terminal-green">const</span>{" "}
              contact = {"{"}
            </p>

            <p>
              &nbsp;&nbsp;email:{" "}
              <span className="terminal-yellow">
                "bhanubalaji727@gmail.com"
              </span>
            </p>

            <p>
              &nbsp;&nbsp;phone:{" "}
              <span className="terminal-yellow">
                "9391525890"
              </span>
            </p>

            <p>
              &nbsp;&nbsp;location:{" "}
              <span className="terminal-yellow">
                "Guntur"
              </span>
            </p>

            <p>
              {"}"};
            </p>

            <a
              href="mailto:bhanubalaji727@gmail.com"
              className="email-btn"
            >
              Send Me an Email →
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          &lt;BSB /&gt;
        </div>

        <p>
          Designed & Built by Thopuri Chandra Siva Balaji
        </p>

        <p className="footer-copy">
          © 2026 All Rights Reserved
        </p>
      </footer>

    </div>
  );
}

export default App;