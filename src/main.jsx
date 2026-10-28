import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Globe2, Layers3, Terminal, Sparkles, ExternalLink, Download,
  MapPin, Send, Braces, Server, GitBranch, CheckCircle2
} from 'lucide-react';
import './styles.css';

// Personal details and links live here so you can update them in one place.

const PROFILE = {
  name: 'Sachin Hipparge',
  firstName: 'Sachin',
  role: 'Full Stack Developer',
  email: 'sachinhipparge064@gmail.com',
  location: 'India',
  github: 'https://github.com/Sachin-Hipparge',
  linkedin: 'https://www.linkedin.com/in/sachin-hipparge/',
  resume: '/resume.pdf',
};


const projects = [
  {
    number: '01',
    title: 'Smart Library & Peer-to-Peer Book Exchange',
    category: 'FULL STACK · WEB APPLICATION',
    description: 'A library platform focused on organizing books and supporting peer-to-peer book discovery and exchange. Add the exact features and screenshots from your current implementation before publishing.',
    stack: ['JavaScript', 'Node.js', 'Express.js', 'MySQL'],
    visual: 'library',
    github: '',
    demo: '',
    status: 'FEATURED PROJECT',
  },
  {
    number: '02',
    title: 'Expense Tracker',
    category: 'FULL STACK · FINANCE APP',
    description: 'An expense management application with user authentication, expense creation and management, premium membership/payment flow, and password-reset email functionality. Confirm the final database and payment-provider setup before publishing.',
    stack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    visual: 'expense',
    github: 'https://github.com/Sachin-Hipparge/expense_tracker_signup',
    demo: 'http://13.200.243.68/login.html',
    status: 'FULL STACK PROJECT',
  },
  {
    number: '03',
    title: 'Real-Time Group Chat',
    category: 'REAL-TIME · COMMUNICATION',
    description: 'A real-time group chat application with chat rooms, user management, JWT-based authentication, AI-assisted message suggestions, and secure file uploads using AWS S3 pre-signed URLs.',
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'JWT', 'AWS S3', 'Gemini API'],
    visual: 'chat',
    github: 'https://github.com/Sachin-Hipparge/Group_Chat',
    demo: '',
    status: 'REAL-TIME PROJECT',
  },
  {
    number: '04',
    title: 'Salon Booking System',
    category: 'FULL STACK · BOOKING PLATFORM',
    description: 'A salon appointment platform with service and staff management, availability checks, appointment-overlap prevention, reviews, Razorpay payment verification, email confirmations, and scheduled reminders.',
    stack: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Razorpay'],
    visual: 'salon',
    github: 'https://github.com/Sachin-Hipparge/salon-booking-system',
    demo: 'http://13.126.8.126/',
    status: 'FULL STACK PROJECT',
  },
  {
    number: '05',
    title: 'RESTful CRUD API',
    category: 'BACKEND · REST API',
    description: 'A backend API project demonstrating create, read, update, and delete operations, Express routing, controller separation, request handling, and relational database operations.',
    stack: ['Node.js', 'Express.js', 'MySQL', 'REST API'],
    visual: 'api',
    github: '',
    demo: '',
    status: 'BACKEND PROJECT',
  },
];

const skills = [
  { icon: Code2, title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
  { icon: Server, title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { icon: Database, title: 'Database', items: ['MySQL', 'SQL', 'CRUD operations'] },
  { icon: GitBranch, title: 'Tools & workflow', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
];

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

function SectionHeading({ eyebrow, title, accent, note }) {
  return <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
    <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
    <h2>{title} <span>{accent}</span></h2>
    {note && <p>{note}</p>}
  </motion.div>;
}

function ProjectVisual({ type }) {
  return <div className={`project-visual ${type}`} aria-hidden="true">
    <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
    {type === 'library' && <div className="book-stack"><i /><i /><i /><i /><i /></div>}
    {type === 'api' && <div className="api-window"><div className="window-dots"><i/><i/><i/></div><code><b>GET</b> /api/projects<br/><b>POST</b> /api/users<br/><b>PATCH</b> /api/items/:id<br/><b>DELETE</b> /api/items/:id</code></div>}
    {type === 'expense' && <div className="mini-dashboard expense-dashboard"><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><strong>₹ EXPENSES</strong></div>}
    {type === 'chat' && <div className="chat-window"><div className="chat-head"><i/> TEAM ROOM <span>● LIVE</span></div><div className="chat-line"><i/> <span/></div><div className="chat-line right"><i/> <span/></div><div className="chat-line"><i/> <span/></div><div className="chat-input">Message the team… <b>↗</b></div></div>}
    {type === 'salon' && <div className="salon-window"><div className="salon-head">BOOK AN APPOINTMENT</div><div className="salon-days"><i>MON</i><i>TUE</i><i className="selected">WED</i><i>THU</i><i>FRI</i></div><div className="salon-slots"><i>10:00 AM</i><i className="selected">11:30 AM</i><i>02:00 PM</i><i>04:30 PM</i></div><div className="salon-confirm">CONFIRM BOOKING ↗</div></div>}
    <span className="visual-corner">{String(projectVisualNumber(type))} / SYSTEM</span>
  </div>;
}

function projectVisualNumber(type) {
  return ({ library: '01', expense: '02', chat: '03', salon: '04', api: '05' })[type] || '00';
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']];

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to homepage"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SACHIN<span> / PORTFOLIO</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}><span className="pulse-dot"/> OPEN TO OPPORTUNITIES <span className="availability-separator">/</span> {PROFILE.location.toUpperCase()}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .7 }}>Building digital<br/>experiences that<br/><span className="gradient-text">make an impact.</span></motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32 }}>Hey, I'm <strong>{PROFILE.firstName}</strong> — a Full Stack Developer focused on building useful web applications, reliable APIs, and thoughtful user experiences.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .42 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a>
            <a className="button button-ghost" href={PROFILE.resume} download><Download size={16}/> Download resume</a>
          </motion.div>
          <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><span/><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
          </motion.div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .8 }}>
          <div className="art-grid"/><div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-ring ring-c"/>
          <div className="core-card"><div className="core-top"><span>DEV_PROFILE.exe</span><span className="core-live"><i/> ONLINE</span></div><div className="code-avatar"><Braces size={68} strokeWidth={1.1}/></div><div className="core-name">{PROFILE.name}</div><div className="core-role">&lt; full_stack_developer /&gt;</div><div className="core-divider"/><div className="core-stats"><div><strong>01</strong><span>FOCUS</span></div><div><strong>∞</strong><span>CURIOSITY</span></div><div><strong>24/7</strong><span>LEARNING</span></div></div></div>
          <div className="float-chip chip-code"><Code2 size={16}/><span>Clean code</span></div><div className="float-chip chip-db"><Database size={16}/><span>SQL / APIs</span></div><div className="float-chip chip-spark"><Sparkles size={16}/><span>Always learning</span></div>
          <div className="art-coordinate coordinate-a">17° / 42°</div><div className="art-coordinate coordinate-b">SYSTEM READY</div>
        </motion.div>
        <a href="#about" className="scroll-cue"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <div className="ticker" aria-label="Technologies"><div className="ticker-track">{Array.from({length: 2}, (_, repeat) => <div className="ticker-set" key={repeat}>{['REACT', 'NODE.JS', 'EXPRESS', 'MYSQL', 'JAVASCRIPT', 'REST APIS', 'GIT & GITHUB'].map((t, i) => <span key={t}><i>✳</i>{t}</span>)}</div>)}</div></div>

      <section className="section-wrap about-section" id="about">
        <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title="Curious mind." accent="Builder's mindset." />
        <div className="about-grid">
          <motion.div className="about-lead" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><span className="quote-mark">“</span><p>I enjoy turning ideas into <em>working products</em> — from a clear interface to the logic and data that power it.</p></motion.div>
          <motion.div className="about-details" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><p>I'm an aspiring Full Stack Developer developing practical skills across frontend and backend technologies. I like understanding how the whole application fits together: what the user sees, how the server responds, and how data stays organized.</p><p>My portfolio highlights hands-on projects and a learning mindset. I'm looking for opportunities to contribute, collaborate with experienced developers, and keep growing by solving real problems.</p><div className="about-tags"><span><CheckCircle2 size={14}/> Problem solving</span><span><CheckCircle2 size={14}/> Continuous learning</span><span><CheckCircle2 size={14}/> Team collaboration</span></div></motion.div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <SectionHeading eyebrow="02 / MY TOOLKIT" title="Tools I use to" accent="build & ship." note="A growing toolkit for designing, developing, and improving web applications."/>
        <div className="skills-grid">{skills.map(({icon: Icon, title, items}, i) => <motion.article className="skill-card" key={title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} transition={{ delay: i * .07 }}><div className="skill-card-top"><span className="skill-icon"><Icon size={21}/></span><span className="skill-index">0{i+1}</span></div><h3>{title}</h3><div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-card-line"/></motion.article>)}</div>
        <p className="skills-note"><Sparkles size={15}/> Skills listed are a starting point — keep only technologies you can confidently discuss in an interview.</p>
      </section>

        <section className="section-wrap projects-section" id="projects">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects with" accent="purpose." note="A few examples of the problems I explore and the systems I build."/>
        <div className="projects-list">{projects.map((project, i) => <motion.article className="project-card" key={project.number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }} transition={{ delay: i * .08 }}>
          <ProjectVisual type={project.visual}/><div className="project-content"><div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(t => <span key={t}>{t}</span>)}</div><div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16}/> Source code <ArrowUpRight size={14}/>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live demo <ExternalLink size={14}/>
              </a>
            )}
          </div></div>
        </motion.article>)}</div>
        <div className="project-footnote"><span className="footnote-mark">i</span><p>Before sharing publicly, add repository links for projects that are missing them, confirm each description matches your implementation, and add live demo URLs only for deployed apps.</p></div>
      </section>

      <section className="section-wrap process-section">
        <div className="process-panel"><div className="process-copy"><div className="eyebrow"><span className="eyebrow-line"/>04 / HOW I WORK</div><h2>Learn fast.<br/><span className="gradient-text">Build thoughtfully.</span></h2><p>I value readable code, steady improvement, and understanding the why behind a solution — not just getting it to run.</p><a className="text-link" href="#contact">Let's build something useful <ArrowUpRight size={16}/></a></div><div className="process-steps">{[{n:'01',title:'Understand',desc:'Clarify the problem and the people using the product.'},{n:'02',title:'Build',desc:'Break the work into manageable, testable pieces.'},{n:'03',title:'Improve',desc:'Test, refine, document, and learn from feedback.'}].map(s=><div className="process-step" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.desc}</p></div><ArrowUpRight size={16}/></div>)}</div></div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-orb"/><div className="eyebrow"><span className="eyebrow-line"/>05 / YOUR NEXT TEAMMATE?</div><h2>Have a role in mind?<br/><span className="gradient-text">Let's connect.</span></h2><p className="contact-intro">I'm interested in internships, entry-level opportunities, and projects where I can learn, contribute, and grow.</p><a className="button button-primary contact-button" href={`mailto:${PROFILE.email}?subject=${encodeURIComponent('Full Stack Developer opportunity')}`}><Mail size={17}/> Get in touch <ArrowUpRight size={16}/></a>
        <div className="contact-grid"><a href={`mailto:${PROFILE.email}`}><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small><strong>{PROFILE.email}</strong></span><ArrowUpRight size={16}/></a><a href={PROFILE.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18}/></span><span><small>GITHUB</small><strong>Explore my repositories</strong></span><ArrowUpRight size={16}/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18}/></span><span><small>LINKEDIN</small><strong>Connect professionally</strong></span><ArrowUpRight size={16}/></a></div>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span></a><p>Designed & built with curiosity by <strong>{PROFILE.name}</strong>.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13}/></a><span className="footer-year">© {new Date().getFullYear()}</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
