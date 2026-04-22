import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Brain,
  Code2,
  Database,
  Zap,
  Award,
  Users,
  Trophy,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const PROFILE = {
  name: "SREELAKSHMI V",
  role: "AI & Data Science Specialist",
  tagline: "Crafting intelligent systems at the intersection of AI, ML, and full-stack engineering.",
  about: "AI & Data Science postgraduate specializing in designing and deploying machine learning systems and scalable web applications. Experienced in implementing deep learning models, architecting backend services, and optimizing data-driven workflows.",
  contact: {
    email: "sreelakshmiv009@gmail.com",
    phone: "+91 8590823632",
    github: "https://github.com/SreelakshmiV7",
    linkedin: "https://www.linkedin.com/in/sreelakshmi-v-377041247/",
  },
};

const SKILLS = [
  {
    category: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    items: ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn", "NLP", "CNN", "RNN", "LSTM"],
  },
  {
    category: "Web Development",
    icon: <Code2 className="h-6 w-6" />,
    items: ["React.js", "Flask", "Node.js", "Express", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Databases & Backend",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Firebase", "JWT", "FastAPI"],
  },
  {
    category: "Cloud & Tools",
    icon: <Zap className="h-6 w-6" />,
    items: ["Microsoft Azure AD", "Git", "GitHub", "Docker", "Jupyter", "Google Colab", "Power Automate"],
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "Codevocado",
    period: "Sep 2025 - Dec 2025",
    location: "Remote / On-site",
    highlights: [
      "Engineered full-stack features using Flask, React, and MySQL with seamless REST API integration",
      "Optimized backend queries and UI rendering, reducing response latency by ~25%",
      "Contributed to production-ready web application development and deployment",
    ],
    tech: ["Flask", "React", "MySQL", "REST APIs", "Tailwind CSS"],
  },
  {
    role: "Web Developer Intern",
    company: "Infosys Springboard",
    period: "Dec 2024 - Feb 2025",
    location: "Online",
    highlights: [
      "Architected blockchain-inspired trade finance system with SHA-256 document verification",
      "Designed FastAPI-based backend with PostgreSQL and JWT authentication",
      "Implemented secure transaction processing and comprehensive audit trail tracking",
    ],
    tech: ["FastAPI", "PostgreSQL", "JWT", "Blockchain", "Python"],
  },
];

const PROJECTS = [
  {
    id: 1,
    name: "Campus Automation Platform",
    category: "Systems",
    year: "2026",
    status: "Ongoing",
    team: "7 members",
    impact: "80% manual work reduction",
    summary: "A unified internal institutional system designed to streamline academic, administrative, and event-related workflows through modular automation and structured governance.",
    description: "Engineered core modules including AutoCertify for bulk certificate generation, AutoMailer for automated institutional communication, and an AI-Assisted Report Generator for standardized event documentation.",
    highlights: [
      "Modular automation architecture",
      "80% manual work reduction with AutoCertify",
      "Real-time automated communications",
      "AI-powered report generation",
    ],
    tech: ["Python (Flask)", "MongoDB", "Microsoft Azure AD", "Microsoft Graph API", "SharePoint", "Power Automate"],
    link: "#",
  },
  {
    id: 2,
    name: "SIGNIFY",
    category: "AI",
    year: "2025",
    status: "Completed",
    team: "5 members",
    impact: "85-90% accuracy",
    summary: "A website to help learn Indian Sign Language through interactive games, quizzes, and real-time sign language detection using CNN models.",
    description: "Developed a real-time Indian Sign Language detection system achieving 85-90% accuracy through optimized CNN inference and comprehensive learning modules.",
    highlights: [
      "Real-time ISL detection with 85-90% accuracy",
      "CNN-based gesture recognition",
      "Interactive learning modules with gamification",
      "OpenCV-optimized video streaming",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "React", "JavaScript"],
    link: "#",
  },
  {
    id: 3,
    name: "Trade Finance Blockchain Explorer",
    category: "Web",
    year: "2025",
    status: "Completed",
    team: "1 member",
    impact: "Tamper-proof verification",
    summary: "A platform offering transparent, tamper-evident tracking of trade finance artifacts with SHA-256 hashing and comprehensive audit trails.",
    description: "Engineered a trade finance tracking platform with SHA-256 hashing for secure document verification, ledger explorer for transaction tracking, and FastAPI backend.",
    highlights: [
      "SHA-256 based document verification",
      "Ledger explorer for lifecycle tracking",
      "FastAPI backend with PostgreSQL",
      "JWT authentication",
    ],
    tech: ["Python", "FastAPI", "React.js", "PostgreSQL", "JWT", "Tailwind CSS"],
    link: "#",
  },
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (AI & Data Science)",
    school: "Amrita Vishwa Vidyapeetham",
    year: "Jun 2025 - Present",
    gpa: "CGPA - 8.73",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Amrita Vishwa Vidyapeetham",
    year: "Jun 2022 - Jun 2025",
    gpa: "CGPA - 8.43",
  },
  {
    degree: "Senior Secondary Education (Science Stream)",
    school: "Central Board of Secondary Education",
    year: "2021 - 2022",
    gpa: "72%",
  },
  {
    degree: "Secondary Education",
    school: "Central Board of Secondary Education",
    year: "2019 - 2020",
    gpa: "86%",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Lead & Innovation Coordinator",
    organization: "IIC (Institution''s Innovation Council)",
    period: "2024 - Present",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Research Panelist",
    organization: "ISMER 2026 - AI Hallucination Research",
    period: "2026",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "National-Level Athlete",
    organization: "Kerala Throwball Team",
    period: "2016 - 2023",
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    title: "NCC Cadet Corporal",
    organization: "3 (K) Air Squadron NCC, Kochi",
    period: "2020 - 2022",
    icon: <Users className="h-5 w-5" />,
  },
];

const CERTIFICATIONS = [
  { name: "Python Foundation", issuer: "Infosys Springboard", year: 2025 },
  { name: "Computational Problem Solving", issuer: "Infosys Springboard", year: 2024 },
  { name: "Hackerrank Python (Basic)", issuer: "Hackerrank", year: 2025 },
  { name: "IoT Platforms Overview", issuer: "Infosys", year: 2026 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ThemeToggle = ({ theme, toggle }) => (
  <button
    onClick={toggle}
    aria-label="Toggle theme"
    className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 backdrop-blur-xl transition-all duration-300 hover:bg-white/80 dark:border-white/20 dark:bg-neutral-900/70 dark:hover:bg-neutral-800/80"
  >
    <AnimatePresence mode="wait" initial={false}>
      {theme === "dark" ? (
        <motion.div key="sun" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
          <Sun className="h-5 w-5 text-amber-500" />
        </motion.div>
      ) : (
        <motion.div key="moon" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
          <Moon className="h-5 w-5 text-slate-700" />
        </motion.div>
      )}
    </AnimatePresence>
  </button>
);

const GlassCard = ({ children, className = "", hover = true }) => (
  <motion.div
    whileHover={hover ? { y: -4 } : undefined}
    transition={{ duration: 0.3 }}
    className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 dark:bg-white/[0.03] dark:border-white/10 light:border-black/5 light:bg-white/40 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
    {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 dark:text-emerald-400">{eyebrow}</p>}
    <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>
    {description && <p className="mt-4 text-lg leading-relaxed opacity-70">{description}</p>}
  </motion.div>
);

const SkillBadge = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -2 }}
    className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-500/5 dark:text-emerald-300"
  >
    {skill}
  </motion.div>
);

const ProjectCard = ({ project, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    onClick={() => onSelect(project)}
    className="group cursor-pointer"
  >
    <GlassCard hover className="h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">{project.category}</span>
          <h3 className="mt-4 text-xl font-black">{project.name}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-emerald-500 opacity-0 transition-all group-hover:opacity-100" />
      </div>
      <p className="flex-grow text-sm leading-relaxed opacity-70">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((tech) => (
          <span key={tech} className="text-[11px] font-semibold uppercase tracking-wider opacity-50">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs opacity-50">
        <span>{project.year}</span>
        <span>{project.impact}</span>
      </div>
    </GlassCard>
  </motion.div>
);

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <GlassCard>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-xl font-black">{exp.role}</h3>
          <p className="text-emerald-600 dark:text-emerald-400 font-semibold">{exp.company}</p>
        </div>
        <span className="whitespace-nowrap text-sm opacity-50">{exp.period}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {exp.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 opacity-70">
            <span className="text-emerald-500 flex-shrink-0 mt-0.5">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {exp.tech.map((tech) => (
          <span key={tech} className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold dark:bg-white/5">
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  </motion.div>
);

const AchievementCard = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <GlassCard className="flex items-start gap-4">
      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300 flex-shrink-0">
        {achievement.icon}
      </div>
      <div className="flex-grow">
        <h3 className="font-bold">{achievement.title}</h3>
        <p className="text-sm opacity-70">{achievement.organization}</p>
        <p className="text-xs opacity-50 mt-1">{achievement.period}</p>
      </div>
    </GlassCard>
  </motion.div>
);

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));
  
  const filteredProjects = selectedCategory === "All" ? PROJECTS : PROJECTS.filter(p => p.category === selectedCategory);
  const categories = ["All", ...new Set(PROJECTS.map(p => p.category))];

  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500 light:bg-slate-50 light:text-slate-900 dark:bg-[#0a0a0a] dark:text-white">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 dark:bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <ThemeToggle theme={theme} toggle={toggleTheme} />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative px-6 py-24 sm:px-10 md:py-32 lg:py-40 max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute animate-ping h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                AI & Data Science Specialist
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
                {PROFILE.name.split(" ")[0]}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">{PROFILE.name.split(" ")[1]}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-75">{PROFILE.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href={`mailto:${PROFILE.contact.email}`}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold backdrop-blur-sm hover:border-white/40 transition-all"
                >
                  View Work
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
                {[
                  { label: "Projects", value: "3+" },
                  { label: "Internships", value: "2" },
                  { label: "Impact", value: "80%+" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl sm:text-3xl font-black text-emerald-500">{stat.value}</p>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-50 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-2xl"></div>
              <GlassCard hover={false} className="relative overflow-hidden">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <Brain className="h-16 w-16 mx-auto mb-4 opacity-30" />
                    <p className="text-sm font-semibold opacity-40">AI & ML Specialist</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="About"
            title="Bridging AI with Product Impact"
            description="With a foundation in machine learning and full-stack development, I specialize in building intelligent systems that solve real-world problems."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Deep Learning", desc: "CNN, RNN, LSTM architectures for real-time systems", icon: <Brain className="h-5 w-5" /> },
              { title: "Full-Stack Dev", desc: "React, Flask, Node.js for scalable applications", icon: <Code2 className="h-5 w-5" /> },
              { title: "Data Engineering", desc: "PostgreSQL, MongoDB, analytics pipeline design", icon: <Database className="h-5 w-5" /> },
              { title: "Cloud Systems", desc: "Azure AD, Power Automate, API architecture", icon: <Zap className="h-5 w-5" /> },
              { title: "Research", desc: "AI hallucinations, model optimization, validation", icon: <BookOpen className="h-5 w-5" /> },
              { title: "Leadership", desc: "Innovation coordination, team mentoring, hackathons", icon: <Users className="h-5 w-5" /> },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlassCard className="h-full">
                  <div className="inline-flex rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-7xl mx-auto">
          <SectionHeading eyebrow="Skills" title="Technical Toolkit" description="Comprehensive expertise across AI, full-stack development, and cloud platforms." />

          <motion.div className="mt-12 grid gap-8 md:grid-cols-2" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {SKILLS.map((skill, idx) => (
              <motion.div key={idx} variants={item}>
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((s, i) => (
                      <SkillBadge key={i} skill={s} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-7xl mx-auto">
          <SectionHeading eyebrow="Experience" title="Professional Journey" description="Internships at cutting-edge companies, building AI systems and scalable web applications." />

          <motion.div className="mt-12 grid gap-6 lg:gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {EXPERIENCE.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} index={idx} />
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-7xl mx-auto">
          <SectionHeading eyebrow="Projects" title="Featured Work" description="AI-powered learning systems, institutional automation, and blockchain solutions." />

          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-lg px-4 py-2 font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white dark:bg-emerald-500"
                    : "border border-white/20 hover:border-white/40 backdrop-blur-sm"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-7xl mx-auto">
          <SectionHeading eyebrow="Education" title="Academic Excellence" description="Strong academic foundation with focus on AI, Machine Learning, and Computer Science." />

          <motion.div className="mt-12 grid gap-4 md:grid-cols-2" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {EDUCATION.map((edu, idx) => (
              <motion.div key={idx} variants={item}>
                <GlassCard>
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <p className="mt-2 text-emerald-600 dark:text-emerald-400 font-semibold">{edu.school}</p>
                  <div className="mt-4 flex items-center justify-between text-sm opacity-70">
                    <span>{edu.year}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{edu.gpa}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-7xl mx-auto">
          <SectionHeading eyebrow="Leadership" title="Beyond the Code" description="Achievements in research, athletics, innovation, and community service." />

          <motion.div className="mt-12 grid gap-6 md:grid-cols-2" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {ACHIEVEMENTS.map((achievement, idx) => (
              <AchievementCard key={idx} achievement={achievement} index={idx} />
            ))}
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-7xl mx-auto">
          <SectionHeading eyebrow="Credentials" title="Certifications" description="Professional certifications in AI, Python, and problem-solving." />

          <motion.div className="mt-12 grid gap-4 sm:grid-cols-2" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div key={idx} variants={item}>
                <GlassCard>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="mt-2 text-sm opacity-70">{cert.issuer}</p>
                  <p className="mt-2 text-xs opacity-50">{cert.year}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-20 sm:px-10 lg:py-28 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl sm:text-5xl font-black">Let''s Build Something Amazing</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-70">
              I''m always interested in hearing about new projects and innovative opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.a
                href={`mailto:${PROFILE.contact.email}`}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 font-bold text-white transition-all hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </motion.a>
              <motion.a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-bold backdrop-blur-sm hover:border-white/40 transition-all"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </motion.a>
              <motion.a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-bold backdrop-blur-sm hover:border-white/40 transition-all"
              >
                <Github className="h-5 w-5" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 px-6 py-12 sm:px-10 text-center text-sm opacity-50">
        <p>© 2025 Sreelakshmi V. All rights reserved. Crafted with React, Tailwind, and Framer Motion.</p>
      </footer>
    </div>
  );
}