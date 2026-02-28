import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const data = {
  name: "Sachin Yadav",
  title: "Backend & AI Engineer",
  subtitle:
    "B.Tech CS & AI student at PSIT Kanpur, building secure digital twin systems, intelligent NLP pipelines, and scalable backend APIs. Passionate about system design, AI engineering, and production-ready backend architecture.",
  location: "Kanpur, UP",
  email: "2k23.csai2310567@gmail.com",
  phone: "6386835013",
  linkedin: "https://linkedin.com/in/sachin-yadav-007814270",
  github: "https://github.com/sachinyadav",

  stack: [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Python", icon: "🐍" },
    { name: "Hibernate", icon: "🗄️" },
    { name: "SQL", icon: "🗄️" },
  ],

  about:
    "I'm a B.Tech Computer Science & AI student at Pranveer Singh Institute of Technology, Kanpur (2023–2027). I specialize in building secure and intelligent systems — from Secure Digital Twins powered by Agentic AI to ML-powered NLP pipelines integrated with Spring Boot.\n\nMy focus is on backend engineering, AI system integration, API architecture, and building scalable real-world systems using Java and Python.",

  highlights: [
    {
      title: "Secure Digital Twin Systems",
      desc: "Designed and implemented a secure digital twin integrated with Agentic AI for autonomous monitoring and intelligent decision-making."
    },
    {
      title: "ML + NLP Engineering",
      desc: "Built ML-powered NLP pipelines in both Java and Python, integrated with REST APIs."
    },
    {
      title: "Production-Ready Backend",
      desc: "Designed scalable backend systems using Spring Boot, Hibernate, and layered architecture."
    },
  ],

  skills: {
    Languages: ["Java", "Python", "Spring Boot", "SQL"],
    "AI & ML": ["Machine Learning", "NLP", "NLP Pipeline", "Python ML Models"],
    Backend: ["Spring Boot", "Hibernate", "JPA", "REST APIs", "Microservices Architecture"],
    Frontend: ["React"],
    Concepts: ["Data Structures & Algorithms", "System Design", "Digital Twins", "Agentic AI"],
    Tools: ["IntelliJ", "VS Code", "GitHub", "Postman", "Maven", "Git", "Cursor", "STS"]
  },

  projects: [
    {
      title: "Secure Digital Twin with Agentic AI",
      desc:
        "Major semester project integrating Spring Boot backend with a Python-based Agentic AI engine for real-time monitoring, secure synchronization, and autonomous decision-making. Implemented secure REST APIs and intelligent adaptive response system.",
      tags: ["SPRING BOOT", "PYTHON", "AGENTIC AI", "SECURITY"],
      badge: "MAJOR PROJECT",
      color: "#00d4ff",
      year: "2026",
      repo: "https://github.com/sachinyadav/secure-digital-twin",
      demo: ""
    },
    {
      title: "ML-Based NLP System (Java + Spring)",
      desc:
        "Developed an ML-powered NLP pipeline using Java and Python, integrated with Spring Boot REST APIs for text classification, processing, and intelligent response generation.",
      tags: ["JAVA", "NLP", "ML", "SPRING BOOT", "API"],
      badge: "AI PROJECT",
      color: "#a855f7",
      year: "2025",
      repo: "https://github.com/sachinyadav/nlp-ml-spring",
      demo: ""
    },
    {
      title: "Spring Boot Quiz Application (Deployed)",
      desc:
        "Built and deployed a full-stack Quiz Application using Spring Boot, Hibernate, and REST APIs with clean layered architecture. Designed for scalable backend performance and real-world usage.",
      tags: ["JAVA", "SPRING BOOT", "HIBERNATE", "REST API"],
      badge: "DEPLOYED",
      color: "#00d4ff",
      year: "2025",
      repo: "https://github.com/sachinyadav/quiz-app",
      demo: "https://quiz-app-live-url.com"
    },
    {
      title: "AR Indoor Navigation System",
      desc:
        "Implemented indoor navigation using sensor fusion techniques (accelerometer, gyroscope, magnetometer) for dead reckoning in GPS-denied environments.",
      tags: ["AR", "SENSOR FUSION", "ANDROID"],
      badge: "",
      color: "#a855f7",
      year: "2025",
      repo: "https://github.com/sachinyadav/ar-navigation",
      demo: ""
    },
    {
      title: "Portfolio Website",
      desc:
        "Personal portfolio built using React and Three.js featuring 3D animations, particle systems, and interactive UI components.",
      tags: ["REACT", "THREE.JS"],
      badge: "",
      color: "#00d4ff",
      year: "2025",
      repo: "https://github.com/sachinyadav/portfolio",
      demo: "https://your-portfolio-live-url.com"
    }
  ],

  certifications: [
    { name: "Oracle OCI Foundations Associate", issuer: "Oracle", year: "Jan 2025", color: "#00d4ff", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=64632B35A6315F452D1A778A991130E4E77BE3C238B30183293F788BCE9A393A" },
    { name: "Data Science Certification", issuer: "Cisco", year: "2024", color: "#a855f7", link: "https://www.credly.com/badges/e4f6c5d1-5b21-49b5-a849-3276a25f76bb/public" }
  ],

  education: [
    { degree: "B.Tech — Computer Science & AI (CGPA: 7.78)", school: "PSIT, Kanpur", year: "2023 – 2027" },
    { degree: "Intermediate (12th) — 86%", school: "South City Public School", year: "2023" },
    { degree: "Matriculation (10th) — 92%", school: "South City Public School", year: "2021" }
  ],
};

// ── Three.js Particle Background ──────────────────────────────────────────────
function ParticleCanvas() {
  const mountRef = useRef(null);
  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = window.innerWidth, H = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
    camera.position.z = 80;
    const count = 1800;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 300;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 200;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 200;
      const cyan = Math.random() > 0.6;
      colors[i * 3] = cyan ? 0 : 0.66;
      colors[i * 3 + 1] = cyan ? 0.83 : 0.33;
      colors[i * 3 + 2] = cyan ? 1 : 1;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particles = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.6, vertexColors: true, transparent: true, opacity: 0.7 }));
    scene.add(particles);
    const lineVerts = [];
    for (let i = 0; i < 120; i++) {
      const a = Math.floor(Math.random() * count), b = Math.floor(Math.random() * count);
      lineVerts.push(pos[a * 3], pos[a * 3 + 1], pos[a * 3 + 2], pos[b * 3], pos[b * 3 + 1], pos[b * 3 + 2]);
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(lineVerts), 3));
    scene.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.04 })));
    let mx = 0, my = 0;
    const onMouse = (e) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = -(e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener("mousemove", onMouse);
    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      particles.rotation.y += 0.0005; particles.rotation.x += 0.0002;
      camera.position.x += (mx * 8 - camera.position.x) * 0.04;
      camera.position.y += (my * 5 - camera.position.y) * 0.04;
      renderer.render(scene, camera);
    };
    animate();
    const onResize = () => { renderer.setSize(window.innerWidth, window.innerHeight); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(id); window.removeEventListener("mousemove", onMouse); window.removeEventListener("resize", onResize); renderer.dispose(); if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />;
}

// ── 3D Avatar with real photo + orbiting rings ────────────────────────────────
function Avatar3D() {
  const mountRef = useRef(null);
  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = el.clientWidth || 400, H = el.clientHeight || 400;
    if (W <= 0 || H <= 0) return;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 5.5;

    const loader = new THREE.TextureLoader();
    loader.load('/Sachin_Photo_Flowers.jpeg', (texture) => {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.2), new THREE.MeshBasicMaterial({ map: texture, transparent: false, side: THREE.FrontSide }));
      plane.name = "photo"; scene.add(plane);
      const border = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.68, 3.28, 0.01)), new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.9 }));
      border.name = "border"; scene.add(border);
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.025, 16, 120), new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.6 }));
    ring1.rotation.x = Math.PI / 3; scene.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.018, 16, 120), new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.4 }));
    ring2.rotation.x = -Math.PI / 5; ring2.rotation.y = Math.PI / 4; scene.add(ring2);
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.012, 16, 120), new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.2 }));
    ring3.rotation.x = Math.PI / 6; ring3.rotation.y = -Math.PI / 3; scene.add(ring3);

    const dotPos = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      const theta = Math.random() * Math.PI * 2, phi = Math.acos(2 * Math.random() - 1), r = 3.0 + Math.random() * 0.6;
      dotPos[i * 3] = r * Math.sin(phi) * Math.cos(theta); dotPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); dotPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPos, 3));
    const dots = new THREE.Points(dotGeo, new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.055, transparent: true, opacity: 0.8 }));
    scene.add(dots);

    const orbitSpheres = [0x00d4ff, 0xa855f7, 0x00d4ff].map((c, i) => {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16), new THREE.MeshBasicMaterial({ color: c }));
      s.userData = { angle: (i / 3) * Math.PI * 2, radius: 2.2 + i * 0.15, speed: 0.8 + i * 0.3 };
      scene.add(s); return s;
    });

    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const l1 = new THREE.PointLight(0x00d4ff, 1.5, 15); l1.position.set(4, 4, 4); scene.add(l1);
    const l2 = new THREE.PointLight(0xa855f7, 1, 15); l2.position.set(-4, -3, 3); scene.add(l2);

    let mx = 0, my = 0;
    const onMouse = (e) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = -(e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener("mousemove", onMouse);
    let id;
    const clock = new THREE.Clock();
    const animate = () => {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      ["photo", "border"].forEach(name => {
        const obj = scene.getObjectByName(name);
        if (obj) { obj.rotation.y = mx * 0.18; obj.rotation.x = my * 0.12; obj.position.y = Math.sin(t * 0.7) * 0.06; }
      });
      ring1.rotation.z = t * 0.35; ring2.rotation.z = -t * 0.22; ring3.rotation.z = t * 0.15;
      dots.rotation.y = t * 0.12; dots.rotation.x = t * 0.08;
      orbitSpheres.forEach(s => {
        s.userData.angle += s.userData.speed * 0.01;
        s.position.x = Math.cos(s.userData.angle) * s.userData.radius;
        s.position.y = Math.sin(s.userData.angle * 0.7) * 1.2;
        s.position.z = Math.sin(s.userData.angle) * s.userData.radius * 0.5;
      });
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(id); window.removeEventListener("mousemove", onMouse); renderer.dispose(); if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} style={{ width: "100%", height: "100%", borderRadius: 16 }} />;
}

// ── 3D Tilt Project Card ──────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const onMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width, cy = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (cy - 0.5) * -22, y: (cx - 0.5) * 22 }); setGlow({ x: cx * 100, y: cy * 100 });
  };
  const onLeave = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };
  return (
    <div ref={cardRef} onMouseMove={onMove} onMouseEnter={() => setHovered(true)} onMouseLeave={onLeave}
      style={{ background: "#0d1117", border: `1px solid ${hovered ? project.color + "55" : "rgba(255,255,255,0.06)"}`, borderRadius: 16, padding: 24, position: "relative", overflow: "hidden", cursor: "pointer", transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.04 : 1})`, transition: hovered ? "transform 0.05s, border-color 0.3s, box-shadow 0.3s" : "transform 0.5s ease, border-color 0.3s, box-shadow 0.3s", boxShadow: hovered ? `0 20px 60px ${project.color}22, 0 0 0 1px ${project.color}22` : "0 4px 20px rgba(0,0,0,0.4)", transformStyle: "preserve-3d" }}>
      {hovered && <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${project.color}18 0%, transparent 60%)` }} />}
      {project.badge && <div style={{ position: "absolute", top: 14, right: 14, background: `${project.color}18`, border: `1px solid ${project.color}55`, color: project.color, fontSize: 9, padding: "3px 8px", borderRadius: 4, letterSpacing: 1.5 }}>{project.badge}</div>}
      <div style={{ fontSize: 32, marginBottom: 12, filter: `drop-shadow(0 0 8px ${project.color}88)` }}>{["⬡", "◈", "⬢", "◉", "⬟", "◆"][index % 6]}</div>
      <div style={{ color: "#8899aa", fontSize: 10, letterSpacing: 1, marginBottom: 8 }}>{project.year}</div>
      <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 14, margin: "0 0 10px", lineHeight: 1.4 }}>{project.title}</h3>
      <p style={{ color: "#8899aa", fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {project.tags.map(t => <span key={t} style={{ background: "rgba(255,255,255,0.04)", color: "#8899aa", fontSize: 10, padding: "3px 8px", borderRadius: 3, letterSpacing: 1 }}>{t}</span>)}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              background: project.color,
              border: "none",
              color: "#090d13",
              fontSize: 11,
              padding: "6px 14px",
              borderRadius: 6,
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: 700
            }}
          >
            🚀 Live Demo
          </a>
        )}

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "transparent",
            border: `1px solid ${project.color}44`,
            color: project.color,
            fontSize: 11,
            padding: "6px 14px",
            borderRadius: 6,
            cursor: "pointer",
            textDecoration: "none"
          }}
        >
          &lt;/&gt; GitHub
        </a>
      </div>
    </div>
  );
}

// ── Main Portfolio ─────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => { setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const handleSend = async (e) => {
    e.preventDefault();
    // Uncomment when Spring Boot is ready:
    // await fetch("http://localhost:8080/api/contact", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(form) });
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const filters = ["All", "Hardware", "AR/Sensors", "Research", "Backend"];

  return (
    <div style={{ background: "#090d13", color: "#e2e8f0", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #090d13; }
        ::-webkit-scrollbar-thumb { background: #00d4ff44; border-radius: 4px; }
        input::placeholder, textarea::placeholder { color: #445566; }
        input:focus, textarea:focus { outline: none; border-color: rgba(0,212,255,0.4) !important; }
        .nav-link:hover { color: #00d4ff !important; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:0.6; transform: scale(1); } 50% { opacity:1; transform: scale(1.05); } }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .cert-card:hover { border-color: rgba(0,212,255,0.4) !important; transform: translateY(-3px); }
        .edu-item:hover { border-left-color: #00d4ff !important; }
        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .about-grid { flex-direction: column !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .contact-grid { flex-direction: column !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      <ParticleCanvas />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", background: scrolled ? "rgba(9,13,19,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "none", transition: "all 0.3s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#00d4ff", fontSize: 16 }}>▣</span>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, letterSpacing: 1 }}>Sachin.dev</span>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 32 }}>
          {["home", "about", "projects", "contact"].map(s => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, letterSpacing: 1.5, color: active === s ? "#00d4ff" : "#8899aa", transition: "color 0.2s", textTransform: "capitalize" }}>{s}</button>
          ))}
        </div>
        <a href="/cv5thsem.pdf" download style={{ background: "#00d4ff", color: "#090d13", border: "none", borderRadius: 6, padding: "8px 22px", fontWeight: 800, cursor: "pointer", fontSize: 12, letterSpacing: 1, textDecoration: "none" }}>↓ Resume</a>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 48px 60px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="hero-grid fade-up" style={{ display: "flex", alignItems: "center", gap: 64, width: "100%" }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#00d4ff", fontSize: 11, letterSpacing: 4, marginBottom: 20 }}>BASED IN {data.location.toUpperCase()}</div>
            <h1 style={{ fontSize: "clamp(38px, 5vw, 66px)", fontWeight: 900, lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>
              {data.name}<br />
              <span style={{ color: "#00d4ff", textShadow: "0 0 40px rgba(0,212,255,0.4)", fontSize: "clamp(26px, 3.2vw, 46px)" }}>{data.title}</span>
            </h1>
            <p style={{ color: "#8899aa", fontSize: 14, lineHeight: 1.8, marginBottom: 36, maxWidth: 460 }}>{data.subtitle}</p>
            {/* Quick stats */}
            <div style={{ display: "flex", gap: 28, marginBottom: 36, flexWrap: "wrap" }}>
              {[
                { val: "6+", label: "Projects" },
                { val: "2", label: "Certifications" },
                { val: "7.78", label: " CGPA" }
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ color: "#00d4ff", fontSize: 22, fontWeight: 900 }}>{s.val}</div>
                  <div style={{ color: "#8899aa", fontSize: 10, letterSpacing: 1 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <button onClick={() => scrollTo("projects")} style={{ background: "#00d4ff", color: "#090d13", border: "none", borderRadius: 8, padding: "13px 30px", fontWeight: 800, cursor: "pointer", fontSize: 13, boxShadow: "0 0 24px rgba(0,212,255,0.4)" }}>View Projects</button>
              <button onClick={() => scrollTo("contact")} style={{ background: "transparent", color: "#e2e8f0", border: "1px solid rgba(226,232,240,0.2)", borderRadius: 8, padding: "13px 30px", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Contact Me</button>
            </div>
          </div>
          <div style={{ flex: 1, maxWidth: 420, height: 460, position: "relative" }}>
            <div style={{ position: "absolute", inset: -2, background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)", borderRadius: "50%", animation: "pulse 3s ease-in-out infinite" }} />
            <Avatar3D />
          </div>
        </div>
      </section>

      {/* STACK STRIP */}
      <div style={{ borderTop: "1px solid rgba(0,212,255,0.08)", borderBottom: "1px solid rgba(0,212,255,0.08)", padding: "40px 48px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ color: "#8899aa", fontSize: 10, letterSpacing: 5, marginBottom: 28 }}>CORE TECH STACK</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
          {data.stack.map(s => (
            <div key={s.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ width: 52, height: 52, background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{s.icon}</div>
              <span style={{ fontSize: 11, color: "#8899aa", letterSpacing: 1 }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 48px", position: "relative", zIndex: 1 }}>
        <div className="about-grid" style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 30, fontWeight: 900, color: "#fff", marginBottom: 14 }}>About Me</h2>
            <div style={{ width: 44, height: 3, background: "#00d4ff", borderRadius: 2, marginBottom: 26, boxShadow: "0 0 12px rgba(0,212,255,0.6)" }} />
            {data.about.split("\n\n").map((p, i) => <p key={i} style={{ color: "#8899aa", fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}>{p}</p>)}
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginTop: 32, marginBottom: 18 }}>🎓 Education</h3>
            {data.education.map((e, i) => (
              <div key={i} className="edu-item" style={{ borderLeft: "2px solid rgba(0,212,255,0.2)", paddingLeft: 16, marginBottom: 16, transition: "border-left-color 0.3s" }}>
                <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 13 }}>{e.degree}</div>
                <div style={{ color: "#8899aa", fontSize: 12 }}>{e.school} · {e.year}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)", borderRadius: 16, padding: 32, marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ color: "#00d4ff" }}>✦</span>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>What I Do Best</span>
              </div>
              {data.highlights.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 22 }}>
                  <span style={{ color: "#00d4ff", flexShrink: 0, marginTop: 2 }}>◈</span>
                  <div>
                    <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{h.title}</div>
                    <div style={{ color: "#8899aa", fontSize: 12, lineHeight: 1.6 }}>{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 16 }}>🏆 Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {data.certifications.map((c, i) => (
                <div key={i} className="cert-card"
                  onClick={() => c.link && window.open(c.link, '_blank')}
                  style={{ background: "#0d1117", border: `1px solid ${c.color}22`, borderRadius: 10, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.3s", cursor: c.link ? "pointer" : "default" }}>
                  <div>
                    <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 13 }}>{c.name}</div>
                    <div style={{ color: "#8899aa", fontSize: 11, marginTop: 3 }}>{c.issuer}</div>
                  </div>
                  <span style={{ color: c.color, fontSize: 11, background: `${c.color}15`, padding: "3px 10px", borderRadius: 4 }}>{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ background: "rgba(0,212,255,0.02)", borderTop: "1px solid rgba(0,212,255,0.06)", borderBottom: "1px solid rgba(0,212,255,0.06)", padding: "70px 48px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
            <span style={{ color: "#00d4ff", fontSize: 20 }}>▤</span>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "#fff" }}>Technical Skills</h2>
          </div>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {Object.entries(data.skills).map(([cat, tags]) => (
              <div key={cat}>
                <div style={{ color: "#00d4ff", fontSize: 10, letterSpacing: 2.5, marginBottom: 16 }}>{cat.toUpperCase()}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {tags.map(t => <span key={t} style={{ background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.18)", color: "#8899aa", fontSize: 12, padding: "5px 13px", borderRadius: 5 }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 48px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Projects & Research</h2>
        <p style={{ color: "#8899aa", fontSize: 14, marginBottom: 32, lineHeight: 1.7 }}>
          Building secure backend systems, AI-driven platforms, and production-ready architectures using Java, Spring Boot, and Machine Learning.
        </p>
        <div style={{ display: "flex", gap: 10, marginBottom: 44, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${filter === f ? "rgba(0,212,255,0.4)" : "rgba(255,255,255,0.08)"}`, color: filter === f ? "#00d4ff" : "#8899aa", padding: "8px 20px", borderRadius: 8, cursor: "pointer", fontSize: 12 }}>{f}</button>
          ))}
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {data.projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 48px", position: "relative", zIndex: 1 }}>
        <div className="contact-grid" style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <span style={{ color: "#00d4ff", fontSize: 18 }}>◎</span>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#fff" }}>Get in Touch</h2>
            </div>
            <p style={{ color: "#8899aa", fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
              Whether it's a collaboration, internship opportunity, or just a chat about tech — my inbox is always open!
            </p>
            {[
              { icon: "📍", text: data.location, color: "#00d4ff" },
              { icon: "📧", text: data.email, color: "#00d4ff" },
              { icon: "📱", text: data.phone, color: "#a855f7" },
              { icon: "●", text: "Open to internships & collaborations", color: "#a855f7" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ color: item.color }}>{item.icon}</span>
                <span style={{ color: "#8899aa", fontSize: 13 }}>{item.text}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
              <a href={data.github} target="_blank" rel="noreferrer" style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>GitHub ↗</a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)", color: "#a855f7", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>LinkedIn ↗</a>
            </div>
          </div>
          <form onSubmit={handleSend} style={{ flex: 1.5, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "12px 16px", color: "#e2e8f0", fontSize: 13, fontFamily: "inherit" }} />
              <input placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required type="email" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "12px 16px", color: "#e2e8f0", fontSize: 13, fontFamily: "inherit" }} />
            </div>
            <input placeholder="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "12px 16px", color: "#e2e8f0", fontSize: 13, fontFamily: "inherit" }} />
            <textarea placeholder="Tell me about your project or opportunity..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "12px 16px", color: "#e2e8f0", fontSize: 13, fontFamily: "inherit", height: 130, resize: "vertical" }} />
            <button type="submit" style={{ background: sent ? "#28c840" : "#a855f7", color: "#fff", border: "none", borderRadius: 8, padding: "14px 32px", fontWeight: 800, cursor: "pointer", fontSize: 13, alignSelf: "flex-start", boxShadow: `0 0 24px ${sent ? "rgba(40,200,64,0.4)" : "rgba(168,85,247,0.4)"}`, transition: "all 0.3s" }}>
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
        <span style={{ color: "#8899aa", fontSize: 12 }}>&lt;/&gt; Sachin Yadav · PSIT Kanpur · © 2025</span>
        <div style={{ display: "flex", gap: 28 }}>
          <a href={data.github} target="_blank" rel="noreferrer" style={{ color: "#8899aa", textDecoration: "none", fontSize: 13 }}>GitHub</a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: "#8899aa", textDecoration: "none", fontSize: 13 }}>LinkedIn</a>
          <a href={`mailto:${data.email}`} style={{ color: "#8899aa", textDecoration: "none", fontSize: 13 }}>Email</a>
        </div>
      </footer>
    </div>
  );
}
