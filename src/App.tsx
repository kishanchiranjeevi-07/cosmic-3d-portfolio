import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  Rocket,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Compass,
  Award,
  Terminal,
  Edit3,
  Plus,
  Trash2,
  Copy,
  Check,
  X,
  ChevronDown,
  Eye,
  Zap,
  ShieldCheck,
  Orbit,
  Sliders,
  Share2,
  BookOpen,
  Briefcase,
  User,
  Send
} from 'lucide-react';

// ============================================================================
// 1. CENTRAL EDITABLE PORTFOLIO DATA CONFIGURATION
// Edit values here directly OR use the "Edit Content" button in the top navbar!
// ============================================================================

export interface SkillItem {
  id: string;
  name: string;
  category:
    | 'Programming Languages'
    | 'Frontend'
    | 'Backend'
    | '3D Development'
    | 'UI/UX Design'
    | 'Developer Tools';
  level: number;
  orbitRadius: number;
  color: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  previewType: 'planet' | 'ai-neural' | 'analytics-cube' | 'supercar-Aero';
  accentColor: string;
  metrics: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: 'Education' | 'Project' | 'Learning' | 'Hackathon' | 'Certification';
  description: string;
  highlights: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    heroHeading: string;
    heroSubtitle: string;
    professionalTitle: string;
    location: string;
    avatarUrl: string;
    introduction: string;
    journey: string;
    educationSummary: string;
    interests: string[];
    goals: string;
    stats: { label: string; value: string }[];
  };
  socials: {
    email: string;
    github: string;
    linkedin: string;
    portfolioLiveUrl: string;
  };
  skills: SkillItem[];
  projects: ProjectItem[];
  timeline: TimelineItem[];
}

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'KISHAN CHIRANJEEVI',
    heroHeading: 'DESIGNING DIGITAL WORLDS',
    heroSubtitle: 'Creative web experiences, useful tools, and a little cosmic perspective.',
    professionalTitle: 'Developer • Digital Product Builder',
    location: 'India • Open to remote collaboration',
    avatarUrl: '',
    introduction:
      'I build thoughtful web experiences and practical digital products with React, TypeScript, and modern web tools. I enjoy bringing clear interfaces to life with motion and 3D.',
    journey:
      'My work moves between responsive frontend interfaces, product flows, and exploratory WebGL scenes. I like making complex ideas feel approachable through clear layouts and useful details.',
    educationSummary: 'Independent projects • React • TypeScript • Next.js • Three.js',
    interests: [
      'Real-Time 3D Graphics & Shaders',
      'Interactive WebGL Storytelling',
      'AI-Powered Developer Tools',
      'Thoughtful Interface Design',
      'Open-Source Engineering'
    ],
    goals:
      'To create useful digital products with clear interfaces, careful engineering, and memorable interactive details.',
    stats: [
      { label: 'Featured Projects', value: '5+' },
      { label: 'Core Stack', value: 'React + TS' },
      { label: 'Creative Layer', value: 'Three.js' },
      { label: 'Workflow', value: 'Build • Iterate' }
    ]
  },
  socials: {
    email: '',
    github: 'https://github.com/kishanchiranjeevi-07',
    linkedin: '',
    portfolioLiveUrl: 'https://kishanchiranjeevi-07.github.io/cosmic-3d-portfolio/'
  },
  skills: [
    {
      id: 'sk-1',
      name: 'TypeScript',
      category: 'Programming Languages',
      level: 95,
      orbitRadius: 1,
      color: '#38bdf8',
      description: 'Strict type-safe application architecture, generics, and scalable state models.'
    },
    {
      id: 'sk-2',
      name: 'JavaScript (ES6+)',
      category: 'Programming Languages',
      level: 96,
      orbitRadius: 1,
      color: '#fbbf24',
      description: 'Asynchronous patterns, Web Workers, Canvas APIs, and high-speed DOM orchestration.'
    },
    {
      id: 'sk-3',
      name: 'HTML5 & CSS3',
      category: 'Frontend',
      level: 98,
      orbitRadius: 1,
      color: '#f97316',
      description: 'Semantic accessibility, CSS Grid/Flexbox, custom properties, and hardware-accelerated keyframes.'
    },
    {
      id: 'sk-4',
      name: 'React 18',
      category: 'Frontend',
      level: 95,
      orbitRadius: 2,
      color: '#22d3ee',
      description: 'Custom hooks, concurrent rendering, context orchestration, and reusable component libraries.'
    },
    {
      id: 'sk-5',
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 96,
      orbitRadius: 2,
      color: '#38bdf8',
      description: 'Glassmorphic design systems, fluid responsive breakpoints, and custom theme tokens.'
    },
    {
      id: 'sk-6',
      name: 'Three.js & WebGL',
      category: '3D Development',
      level: 92,
      orbitRadius: 3,
      color: '#a855f7',
      description: 'Custom procedural textures, PBR lighting, instanced meshes, and scroll-synchronized camera rigs.'
    },
    {
      id: 'sk-7',
      name: 'React Three Fiber / GSAP',
      category: '3D Development',
      level: 90,
      orbitRadius: 3,
      color: '#c084fc',
      description: 'Declarative scene graphs, ScrollTrigger timelines, and physics-backed spring transitions.'
    },
    {
      id: 'sk-8',
      name: 'Node.js & REST APIs',
      category: 'Backend',
      level: 88,
      orbitRadius: 2,
      color: '#4ade80',
      description: 'Scalable microservices, authentication flows, and real-time WebSocket integrations.'
    },
    {
      id: 'sk-9',
      name: 'UI/UX & Interactive Motion',
      category: 'UI/UX Design',
      level: 91,
      orbitRadius: 2,
      color: '#f472b6',
      description: 'Spatial HUD design, micro-interactions, accessible contrast systems, and user journey mapping.'
    },
    {
      id: 'sk-10',
      name: 'Git & GitHub Workflows',
      category: 'Developer Tools',
      level: 94,
      orbitRadius: 1,
      color: '#94a3b8',
      description: 'Branching strategies, CI/CD pipelines, automated Vercel deployments, and code reviews.'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Cosmic 3D Portfolio',
      tagline: 'Cinematic WebGL Scrolling Developer Universe',
      description:
        'A scroll-driven portfolio with a procedural Three.js scene, page-linked camera movement, and an in-browser editor for updating profile content.',
      architecture:
        'React and TypeScript interface with a Three.js scene. Portfolio edits are saved in this browser using localStorage.',
      technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'WebGL'],
      githubUrl: 'https://github.com/kishanchiranjeevi-07/cosmic-3d-portfolio',
      demoUrl: 'https://kishanchiranjeevi-07.github.io/cosmic-3d-portfolio/',
      previewType: 'planet',
      accentColor: '#22d3ee',
      metrics: 'Scroll-linked 3D • Browser editor'
    },
    {
      id: 'proj-2',
      title: 'ResumeIQ — AI Resume Analyzer',
      tagline: 'A careful, evidence-based resume review workspace',
      description:
        'A responsive resume review workspace that extracts PDF and DOCX text, compares it with a target role, and returns structured feedback. It includes a clearly labeled local demo mode when analysis credentials are not configured.',
      architecture:
        'Next.js and TypeScript app with PDF/DOCX parsing, validated structured feedback, optional server-side OpenAI analysis, and browser-local history.',
      technologies: ['Next.js', 'React', 'TypeScript', 'PDF / DOCX', 'Zod'],
      githubUrl: 'https://github.com/kishanchiranjeevi-07/resumeiq-analyzer',
      demoUrl: 'https://resumeiq-analyzer-cduoa0ufz-kishan-5669.vercel.app/',
      previewType: 'ai-neural',
      accentColor: '#a855f7',
      metrics: 'PDF + DOCX • Demo mode available'
    },
    {
      id: 'proj-3',
      title: 'Easy Workflow',
      tagline: 'A developer command center for project health',
      description:
        'A responsive dashboard concept for keeping projects, tasks, progress, and project health in one place. The current frontend uses clearly marked sample data and adds projects to the current session.',
      architecture:
        'React, TypeScript, and Vite frontend with responsive navigation, project summaries, weekly progress, task views, and language breakdowns.',
      technologies: ['React', 'TypeScript', 'Vite', 'Dashboard UI'],
      githubUrl: 'https://github.com/kishanchiranjeevi-07/easy-workflow',
      demoUrl: 'https://easy-workflow-g7jx5er7c-kishan-5669.vercel.app/',
      previewType: 'analytics-cube',
      accentColor: '#34d399',
      metrics: 'React • TypeScript • Vite'
    },
    {
      id: 'proj-4',
      title: 'Finlytics Flow — Ledger Expense Tracker',
      tagline: 'A personal finance workspace with account-based cloud data',
      description:
        'A polished expense tracker with individual accounts, cloud-saved transactions, budgets, and goals. Its reports show income, expenses, balance, savings rate, and spending by category, with PDF and CSV export.',
      architecture:
        'Account-based sign-in with email/password or Google and user-scoped cloud data. The published app opens at its sign-in screen; each account keeps its own financial records.',
      technologies: ['Lovable', 'Cloud accounts', 'Finance dashboard', 'PDF / CSV export'],
      githubUrl: '',
      demoUrl: 'https://cozy-cash-flow-42.lovable.app/',
      previewType: 'analytics-cube',
      accentColor: '#34d399',
      metrics: 'Published • Sign-in required'
    },
    {
      id: 'proj-5',
      title: 'VELTOR X — 3D Supercar Showroom',
      tagline: 'An interactive showroom for fictional concept cars',
      description:
        'An immersive car concept gallery with eight fictional vehicles, 3D viewing controls, and live paint, wheel, environment, and lighting customization. Its matching flow helps visitors explore a car concept for their driving preferences.',
      architecture:
        'Interactive vehicle showroom and configurator with a guided “Find Your Match” flow. Vehicle imagery is AI-generated, and all specifications and prices are illustrative concept data.',
      technologies: ['Interactive 3D showroom', 'Live car customizer', 'AI-generated concept imagery'],
      githubUrl: '',
      demoUrl: '',
      previewType: 'supercar-Aero',
      accentColor: '#f97316',
      metrics: 'Concept experience • Not published'
    }
  ],
  timeline: [
    {
      id: 'tl-1',
      year: 'FEATURED PROJECT',
      title: 'ResumeIQ — AI Resume Analyzer',
      organization: 'Independent Project',
      category: 'Project',
      description:
        'A resume review workspace for parsing documents and producing structured, evidence-based feedback.',
      highlights: [
        'Built PDF and DOCX parsing flows with upload validation',
        'Added a clearly labeled demo provider when API credentials are absent',
        'Kept analysis history in the visitor’s browser'
      ]
    },
    {
      id: 'tl-2',
      year: 'FEATURED PROJECT',
      title: 'Easy Workflow',
      organization: 'Independent Project',
      category: 'Project',
      description:
        'A developer dashboard concept for organizing projects, tasks, and project health.',
      highlights: [
        'Built the current frontend phase with React, TypeScript, and Vite',
        'Designed responsive dashboard views for projects, tasks, and progress',
        'Marked sample metrics clearly while backend persistence remains future work'
      ]
    },
    {
      id: 'tl-3',
      year: 'FEATURED PROJECT',
      title: 'Finlytics Flow — Ledger Expense Tracker',
      organization: 'Independent Project',
      category: 'Project',
      description:
        'A personal finance workspace with individual sign-in, cloud-saved records, and a detailed reports page.',
      highlights: [
        'Added account-based access with email/password and Google sign-in',
        'Built reports for spending categories, balance, and savings rate',
        'Added PDF and CSV downloads for the report'
      ]
    },
    {
      id: 'tl-4',
      year: 'FEATURED PROJECT',
      title: 'VELTOR X — 3D Supercar Showroom',
      organization: 'Independent Project',
      category: 'Project',
      description:
        'An interactive digital showroom for AI-imagined concept vehicles and live customization.',
      highlights: [
        'Created a gallery of eight fictional concept cars with 3D viewing controls',
        'Added paint, wheel, environment, and lighting customization',
        'Clearly labels vehicle images, specifications, and prices as illustrative concepts'
      ]
    }
  ]
};

const PORTFOLIO_STORAGE_KEY = 'cosmic_portfolio_v4';
const PREVIOUS_PORTFOLIO_STORAGE_KEY = 'cosmic_portfolio_v3';

function loadPortfolioData(): PortfolioData {
  try {
    const current = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
    if (current) return JSON.parse(current) as PortfolioData;

    const previous =
      localStorage.getItem(PREVIOUS_PORTFOLIO_STORAGE_KEY) ??
      localStorage.getItem('cosmic_portfolio_v2');
    if (!previous) return INITIAL_PORTFOLIO_DATA;

    const saved = JSON.parse(previous) as Partial<PortfolioData>;
    if (!Array.isArray(saved.projects)) return INITIAL_PORTFOLIO_DATA;

    const projectIds = new Set(saved.projects.map((project) => project.id));
    const migratedProjects = saved.projects.map((project) => {
      const defaults = INITIAL_PORTFOLIO_DATA.projects.find(
        (defaultProject) => defaultProject.id === project.id
      );
      if (!defaults) return project;

      return {
        ...defaults,
        ...project,
        githubUrl: project.githubUrl || defaults.githubUrl,
        demoUrl: project.demoUrl || defaults.demoUrl
      };
    });
    const timeline = Array.isArray(saved.timeline) ? saved.timeline : [];
    const timelineIds = new Set(timeline.map((item) => item.id));

    return {
      ...INITIAL_PORTFOLIO_DATA,
      ...saved,
      profile: { ...INITIAL_PORTFOLIO_DATA.profile, ...saved.profile },
      socials: { ...INITIAL_PORTFOLIO_DATA.socials, ...saved.socials },
      skills: Array.isArray(saved.skills) ? saved.skills : INITIAL_PORTFOLIO_DATA.skills,
      projects: [
        ...migratedProjects,
        ...INITIAL_PORTFOLIO_DATA.projects.filter(
          (project) =>
            ['proj-4', 'proj-5'].includes(project.id) && !projectIds.has(project.id)
        )
      ],
      timeline: [
        ...timeline,
        ...INITIAL_PORTFOLIO_DATA.timeline.filter(
          (item) => ['tl-3', 'tl-4'].includes(item.id) && !timelineIds.has(item.id)
        )
      ]
    };
  } catch {
    return INITIAL_PORTFOLIO_DATA;
  }
}

// ============================================================================
// 2. PROCEDURAL PLANET & NEBULA TEXTURE GENERATORS (ZERO EXTERNAL URL FAILURES)
// ============================================================================

function createProceduralPlanetTextures() {
  const width = 1024;
  const height = 512;

  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = width;
  colorCanvas.height = height;
  const ctx = colorCanvas.getContext('2d')!;

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bumpCtx = bumpCanvas.getContext('2d')!;

  // Base deep oceanic & cosmic surface gradient
  const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
  baseGrad.addColorStop(0, '#0f172a');
  baseGrad.addColorStop(0.2, '#0c4a6e');
  baseGrad.addColorStop(0.5, '#0284c7');
  baseGrad.addColorStop(0.8, '#1e1b4b');
  baseGrad.addColorStop(1, '#090d16');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, width, height);

  bumpCtx.fillStyle = '#404040';
  bumpCtx.fillRect(0, 0, width, height);

  // Atmospheric & continental bands
  for (let i = 0; i < 180; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const rx = 30 + Math.random() * 140;
    const ry = 8 + Math.random() * 42;

    const palette = ['#38bdf8', '#818cf8', '#2dd4bf', '#1d4ed8', '#c084fc', '#0ea5e9'];
    const col = palette[i % palette.length];

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, (Math.random() - 0.5) * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = col;
    ctx.globalAlpha = 0.14 + Math.random() * 0.22;
    ctx.fill();
    ctx.restore();

    bumpCtx.save();
    bumpCtx.beginPath();
    bumpCtx.ellipse(x, y, rx * 0.9, ry * 0.9, 0, 0, Math.PI * 2);
    bumpCtx.fillStyle = i % 2 === 0 ? '#b0b0b0' : '#252525';
    bumpCtx.globalAlpha = 0.2;
    bumpCtx.fill();
    bumpCtx.restore();
  }

  // Glowing bioluminescent / tech-grid city veins on planet surface
  for (let j = 0; j < 95; j++) {
    const cx = Math.random() * width;
    const cy = height * 0.2 + Math.random() * (height * 0.6);
    const r = 1.5 + Math.random() * 4;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = j % 3 === 0 ? '#67e8f9' : '#e879f9';
    ctx.globalAlpha = 0.75;
    ctx.fill();
  }

  const colorTexture = new THREE.CanvasTexture(colorCanvas);
  colorTexture.wrapS = THREE.RepeatWrapping;
  colorTexture.wrapT = THREE.ClampToEdgeWrapping;

  const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.ClampToEdgeWrapping;

  return { colorTexture, bumpTexture };
}

// ============================================================================
// 3. MINI INTERACTIVE 3D PREVIEW CANVAS FOR PROJECT CARDS
// ============================================================================

const TARGET_FRAME_INTERVAL = 1000 / 120;

const ProjectMini3DCanvas: React.FC<{
  type: ProjectItem['previewType'];
  accentColor: string;
}> = ({ type, accentColor }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let frameId = 0;
    let nextFrameTime = 0;
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 190;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 4.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.innerHTML = '';
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const point = new THREE.PointLight(new THREE.Color(accentColor), 3.5, 15);
    point.position.set(3, 3, 4);
    scene.add(point);

    const group = new THREE.Group();
    scene.add(group);

    if (type === 'planet') {
      const geo = new THREE.SphereGeometry(1.05, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(accentColor),
        roughness: 0.35,
        metalness: 0.4,
        wireframe: false
      });
      const sphere = new THREE.Mesh(geo, mat);
      group.add(sphere);

      const ringGeo = new THREE.RingGeometry(1.35, 1.85, 48);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#c084fc'),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI * 0.42;
      group.add(ring);
    } else if (type === 'ai-neural') {
      const icoGeo = new THREE.IcosahedronGeometry(1.15, 1);
      const icoMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(accentColor),
        wireframe: true,
        emissive: new THREE.Color(accentColor),
        emissiveIntensity: 0.4
      });
      group.add(new THREE.Mesh(icoGeo, icoMat));

      const coreGeo = new THREE.OctahedronGeometry(0.65, 0);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
        metalness: 0.9
      });
      group.add(new THREE.Mesh(coreGeo, coreMat));
    } else if (type === 'analytics-cube') {
      const bars = [-0.9, -0.3, 0.3, 0.9];
      const heights = [0.9, 1.5, 1.15, 1.85];
      bars.forEach((bx, idx) => {
        const bGeo = new THREE.BoxGeometry(0.38, heights[idx], 0.38);
        const bMat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(accentColor),
          roughness: 0.25,
          metalness: 0.7
        });
        const bar = new THREE.Mesh(bGeo, bMat);
        bar.position.set(bx, heights[idx] / 2 - 0.85, 0);
        group.add(bar);
      });
      const ringGeo = new THREE.TorusGeometry(1.45, 0.03, 12, 48);
      const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(accentColor) });
      const torus = new THREE.Mesh(ringGeo, ringMat);
      torus.rotation.x = Math.PI / 2;
      torus.position.y = -0.85;
      group.add(torus);
    } else {
      // supercar-Aero futuristic speed form
      const bodyGeo = new THREE.ConeGeometry(0.85, 2.4, 6);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(accentColor),
        roughness: 0.15,
        metalness: 0.85
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.rotation.z = -Math.PI / 2;
      group.add(body);

      const haloGeo = new THREE.TorusGeometry(1.25, 0.04, 16, 48);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.65
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.y = Math.PI / 3;
      group.add(halo);
    }

    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      if (nextFrameTime && time + 0.5 < nextFrameTime) return;
      if (!nextFrameTime || time - nextFrameTime > TARGET_FRAME_INTERVAL * 2) {
        nextFrameTime = time;
      }
      nextFrameTime += TARGET_FRAME_INTERVAL;
      group.rotation.y += 0.012;
      group.rotation.x = Math.sin(Date.now() * 0.0015) * 0.2;
      renderer.render(scene, camera);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, [type, accentColor]);

  return <div ref={mountRef} className="w-full h-44 rounded-xl overflow-hidden" />;
};

// ============================================================================
// 4. MAIN APPLICATION COMPONENT
// ============================================================================

export function App() {
  // Portfolio Data State (persisted in localStorage so user edits stay live)
  const [data, setData] = useState<PortfolioData>(() => {
    return loadPortfolioData();
  });

  useEffect(() => {
    try {
      localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Ignore storage quota errors
    }
  }, [data]);

  // Active Scene & Scroll Telemetry
  const [activeScene, setActiveScene] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [renderFps, setRenderFps] = useState<number>(0);
  const displayedProgressRef = useRef(-1);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [webglReady, setWebglReady] = useState<boolean>(true);

  // Interactive Filters & Modals
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const [highlightedSkill, setHighlightedSkill] = useState<SkillItem | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [customizerTab, setCustomizerTab] = useState<
    'profile' | 'projects' | 'skills' | 'timeline' | 'export'
  >('profile');
  const [isLaunchKitOpen, setIsLaunchKitOpen] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Project / Opportunity Inquiry',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'ready'>('idle');

  // Refs for Main Three.js Universe Canvas
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollTargetRef = useRef<number>(0);
  const mouseTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const reducedMotionRef = useRef(reducedMotion);

  useEffect(() => {
    reducedMotionRef.current = reducedMotion;
  }, [reducedMotion]);

  // Copy Helper
  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const updateProfileField = <K extends keyof PortfolioData['profile'],>(
    key: K,
    value: PortfolioData['profile'][K]
  ) => {
    setData((current) => ({
      ...current,
      profile: { ...current.profile, [key]: value }
    }));
  };

  const updateProject = (id: string, changes: Partial<ProjectItem>) => {
    setData((current) => ({
      ...current,
      projects: current.projects.map((project) =>
        project.id === id ? { ...project, ...changes } : project
      )
    }));
  };

  const updateSkill = (id: string, changes: Partial<SkillItem>) => {
    setData((current) => ({
      ...current,
      skills: current.skills.map((skill) =>
        skill.id === id ? { ...skill, ...changes } : skill
      )
    }));
  };

  const updateTimelineItem = (id: string, changes: Partial<TimelineItem>) => {
    setData((current) => ({
      ...current,
      timeline: current.timeline.map((item) =>
        item.id === id ? { ...item, ...changes } : item
      )
    }));
  };

  const downloadPortfolioBackup = () => {
    const backup = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(backup);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importPortfolioBackup = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const imported = JSON.parse(await file.text()) as PortfolioData;
      if (
        !imported.profile ||
        !imported.socials ||
        !Array.isArray(imported.projects) ||
        !Array.isArray(imported.skills) ||
        !Array.isArray(imported.timeline)
      ) {
        throw new Error('Invalid portfolio backup');
      }
      setData(imported);
      setCopiedKey('import-json');
      setTimeout(() => setCopiedKey(null), 2200);
    } catch {
      window.alert('That file is not a valid portfolio JSON backup.');
    } finally {
      event.target.value = '';
    }
  };

  const importProfilePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') return;
      const image = new Image();
      image.onload = () => {
        const maxSide = 640;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext('2d');
        if (!context) return;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        updateProfileField('avatarUrl', canvas.toDataURL('image/jpeg', 0.82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  // ==========================================================================
  // 5. FULL-SCREEN 3D COSMIC ENVIRONMENT & 6-SCENE SCROLL CHOREOGRAPHY
  // ==========================================================================
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    let animationFrameId = 0;
    let currentPixelRatio = 1;
    let lastFrameTime = 0;
    let nextFrameTime = 0;
    let sampleStartTime = 0;
    let sampleFrames = 0;
    let renderer: THREE.WebGLRenderer;

    const isLowPowerDevice =
      window.matchMedia('(max-width: 767px)').matches ||
      (navigator.hardwareConcurrency || 8) <= 4;
    const maxPixelRatio = Math.min(
      window.devicePixelRatio || 1,
      isLowPowerDevice ? 1.1 : 1.5
    );
    const minPixelRatio = Math.min(maxPixelRatio, isLowPowerDevice ? 0.85 : 1);

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isLowPowerDevice && (window.devicePixelRatio || 1) <= 1.25,
        alpha: false,
        powerPreference: 'high-performance',
        stencil: false
      });
      currentPixelRatio = maxPixelRatio;
      renderer.setPixelRatio(currentPixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      container.innerHTML = '';
      container.appendChild(renderer.domElement);
    } catch {
      setWebglReady(false);
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#02040a');
    scene.fog = new THREE.FogExp2('#02040a', 0.012);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );
    camera.position.set(0, 0.8, 13);

    // --- LIGHTING RIG ---
    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xe0f2fe, 3.2);
    sunLight.position.set(18, 12, 16);
    scene.add(sunLight);

    const violetRimLight = new THREE.PointLight(0xa855f7, 6, 45);
    violetRimLight.position.set(-12, -6, 4);
    scene.add(violetRimLight);

    const cyanPortalLight = new THREE.PointLight(0x22d3ee, 7, 50);
    cyanPortalLight.position.set(0, 0, -28);
    scene.add(cyanPortalLight);

    // --- 1. HERO REALISTIC ROTATING PLANET + ATMOSPHERE + RING ---
    const planetGroup = new THREE.Group();
    planetGroup.position.set(3.2, 0.2, 0);
    scene.add(planetGroup);

    const { colorTexture, bumpTexture } = createProceduralPlanetTextures();
    const planetGeo = new THREE.SphereGeometry(3.2, 64, 64);
    const planetMat = new THREE.MeshStandardMaterial({
      map: colorTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.08,
      roughness: 0.55,
      metalness: 0.25
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetGroup.add(planetMesh);

    // Cloud / Atmospheric Scattering Halo Layer
    const atmoGeo = new THREE.SphereGeometry(3.38, 64, 64);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.16,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    planetGroup.add(atmoMesh);

    // Outer Planetary Ring System
    const ringGeo = new THREE.RingGeometry(4.2, 6.6, 96);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.3,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.48,
      roughness: 0.4
    });
    const planetaryRing = new THREE.Mesh(ringGeo, ringMat);
    planetaryRing.rotation.x = Math.PI * 0.42;
    planetaryRing.rotation.y = -0.22;
    planetGroup.add(planetaryRing);

    // --- 2. MULTI-LAYERED STARFIELD (3 DEPTH LAYERS) ---
    const createStarLayer = (count: number, size: number, colorHex: number, spread: number) => {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.7;
        positions[i * 3 + 2] = -Math.random() * 140 + 25;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color: colorHex,
        size,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });
      return new THREE.Points(geo, mat);
    };

    const starsNear = createStarLayer(900, 0.16, 0x67e8f9, 120);
    const starsMid = createStarLayer(1600, 0.1, 0xffffff, 180);
    const starsFar = createStarLayer(2200, 0.07, 0xc084fc, 240);
    scene.add(starsNear, starsMid, starsFar);

    // --- 3. INSTANCED ASTEROID BELT & FLOATING SPACE DEBRIS ---
    const asteroidCount = 160;
    const asteroidGeo = new THREE.DodecahedronGeometry(0.14, 0);
    const asteroidMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.8,
      metalness: 0.3
    });
    const asteroidInstanced = new THREE.InstancedMesh(
      asteroidGeo,
      asteroidMat,
      asteroidCount
    );
    const dummy = new THREE.Object3D();
    for (let i = 0; i < asteroidCount; i++) {
      const angle = (i / asteroidCount) * Math.PI * 2;
      const radius = 5.2 + Math.random() * 2.4;
      dummy.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 0.55,
        Math.sin(angle) * radius
      );
      dummy.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      const scale = 0.4 + Math.random() * 1.4;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      asteroidInstanced.setMatrixAt(i, dummy.matrix);
    }
    asteroidInstanced.rotation.z = 0.25;
    asteroidInstanced.rotation.x = 0.2;
    planetGroup.add(asteroidInstanced);

    // --- 4. SCENE 3: 3D SKILL CONSTELLATION HOLOGRAPHIC CORE ---
    const constellationGroup = new THREE.Group();
    constellationGroup.position.set(-2.5, -0.5, -18);
    scene.add(constellationGroup);

    const holoWireGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const holoWireMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const holoCore = new THREE.Mesh(holoWireGeo, holoWireMat);
    constellationGroup.add(holoCore);

    // Orbital Skill Nodes in 3D space
    for (let i = 0; i < 12; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x38bdf8 : 0xc084fc
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const phi = Math.acos(-1 + (2 * i) / 12);
      const theta = Math.sqrt(12 * Math.PI) * phi;
      nodeMesh.position.setFromSphericalCoords(2.6, phi, theta);
      constellationGroup.add(nodeMesh);
    }

    // --- 5. SCENE 4: GLOWING HYPERSPACE PORTAL (PROJECT GALAXY GATEWAY) ---
    const portalGroup = new THREE.Group();
    portalGroup.position.set(0, 0, -34);
    scene.add(portalGroup);

    const portalTorusGeo = new THREE.TorusGeometry(3.8, 0.12, 24, 96);
    const portalTorusMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      blending: THREE.AdditiveBlending
    });
    const portalRing1 = new THREE.Mesh(portalTorusGeo, portalTorusMat);
    portalGroup.add(portalRing1);

    const portalRing2Geo = new THREE.TorusGeometry(4.3, 0.05, 16, 96);
    const portalRing2Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      blending: THREE.AdditiveBlending
    });
    const portalRing2 = new THREE.Mesh(portalRing2Geo, portalRing2Mat);
    portalGroup.add(portalRing2);

    // --- 6. SCENE 5: FUTURISTIC ORBITAL SPACE STATION (EXPERIENCE TIMELINE) ---
    const stationGroup = new THREE.Group();
    stationGroup.position.set(2.2, 0.4, -50);
    scene.add(stationGroup);

    for (let r = 0; r < 3; r++) {
      const stGeo = new THREE.TorusGeometry(2.2 + r * 0.9, 0.06, 16, 64);
      const stMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        emissive: r % 2 === 0 ? 0x38bdf8 : 0x818cf8,
        emissiveIntensity: 0.45,
        metalness: 0.85,
        roughness: 0.2
      });
      const stRing = new THREE.Mesh(stGeo, stMat);
      stRing.rotation.x = r * 0.6;
      stRing.rotation.y = r * 0.4;
      stationGroup.add(stRing);
    }

    // --- 7. SCENE 6: CONTACT HORIZON EXOPLANET ---
    const horizonPlanetGroup = new THREE.Group();
    horizonPlanetGroup.position.set(0, -6.8, -68);
    scene.add(horizonPlanetGroup);

    const horizonGeo = new THREE.SphereGeometry(6.2, 64, 64);
    const horizonMat = new THREE.MeshStandardMaterial({
      map: colorTexture,
      roughness: 0.4,
      metalness: 0.3,
      emissive: 0x0c4a6e,
      emissiveIntensity: 0.35
    });
    const horizonPlanet = new THREE.Mesh(horizonGeo, horizonMat);
    horizonPlanetGroup.add(horizonPlanet);

    const horizonHaloGeo = new THREE.SphereGeometry(6.55, 64, 64);
    const horizonHaloMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.22,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    horizonPlanetGroup.add(new THREE.Mesh(horizonHaloGeo, horizonHaloMat));

    // --- SCROLL & MOUSE PARALLAX LISTENERS ---
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const currentProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      scrollTargetRef.current = currentProgress;
      if (
        Math.abs(currentProgress - displayedProgressRef.current) >= 0.015 ||
        currentProgress === 0 ||
        currentProgress === 1
      ) {
        displayedProgressRef.current = currentProgress;
        setScrollProgress(currentProgress);
      }

      const sceneIndex = Math.min(Math.floor(currentProgress * 6) + 1, 6);
      setActiveScene(sceneIndex);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseTargetRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseTargetRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    let animate: FrameRequestCallback;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastFrameTime = 0;
        nextFrameTime = 0;
        sampleStartTime = 0;
        sampleFrames = 0;
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    handleScroll();

    // --- 6-SCENE CAMERA WAYPOINTS ---
    let smoothScroll = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;

    animate = (time: number) => {
      if (document.hidden) return;
      animationFrameId = requestAnimationFrame(animate);
      if (nextFrameTime && time + 0.5 < nextFrameTime) return;
      if (!nextFrameTime || time - nextFrameTime > TARGET_FRAME_INTERVAL * 2) {
        nextFrameTime = time;
      }
      nextFrameTime += TARGET_FRAME_INTERVAL;
      sampleFrames += 1;

      const delta = lastFrameTime
        ? Math.min((time - lastFrameTime) / (1000 / 60), 2)
        : 1;
      lastFrameTime = time;

      if (!sampleStartTime) sampleStartTime = time;
      if (time - sampleStartTime >= 2000) {
        const measuredFps = (sampleFrames * 1000) / (time - sampleStartTime);
        setRenderFps(Math.min(Math.round(measuredFps), 120));
        let nextPixelRatio = currentPixelRatio;
        if (measuredFps < 50 && currentPixelRatio > minPixelRatio) {
          nextPixelRatio = Math.max(minPixelRatio, currentPixelRatio * 0.85);
        } else if (measuredFps > 72 && currentPixelRatio < maxPixelRatio) {
          nextPixelRatio = Math.min(maxPixelRatio, currentPixelRatio * 1.08);
        }
        if (nextPixelRatio !== currentPixelRatio) {
          currentPixelRatio = nextPixelRatio;
          renderer.setPixelRatio(currentPixelRatio);
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
        sampleStartTime = time;
        sampleFrames = 0;
      }

      const motionIsReduced = reducedMotionRef.current;
      const lerpBase = motionIsReduced ? 0.15 : 0.055;
      const lerpFactor = 1 - Math.pow(1 - lerpBase, delta);
      smoothScroll += (scrollTargetRef.current - smoothScroll) * lerpFactor;
      const mouseLerp = 1 - Math.pow(1 - 0.06, delta);
      smoothMouseX += (mouseTargetRef.current.x - smoothMouseX) * mouseLerp;
      smoothMouseY += (mouseTargetRef.current.y - smoothMouseY) * mouseLerp;

      // Continuous cosmic rotation
      const rotSpeed = (motionIsReduced ? 0.0008 : 0.0028) * delta;
      planetMesh.rotation.y += rotSpeed;
      planetaryRing.rotation.z -= rotSpeed * 0.6;
      asteroidInstanced.rotation.y += rotSpeed * 0.9;

      holoCore.rotation.y += rotSpeed * 1.6;
      holoCore.rotation.x += rotSpeed;

      portalRing1.rotation.z += rotSpeed * 3.5;
      portalRing2.rotation.z -= rotSpeed * 2.5;

      stationGroup.rotation.y += rotSpeed * 1.4;
      stationGroup.rotation.z += rotSpeed * 0.7;

      horizonPlanet.rotation.y += rotSpeed * 0.8;

      starsNear.rotation.z += rotSpeed * 0.12;
      starsMid.rotation.z -= rotSpeed * 0.06;

      // Scroll-Driven Camera Journey across Z: +13 down to -56
      const targetZ = 13 - smoothScroll * 69;
      const targetX =
        Math.sin(smoothScroll * Math.PI * 3) * 2.1 +
        smoothMouseX * (motionIsReduced ? 0.2 : 0.85);
      const targetY =
        Math.cos(smoothScroll * Math.PI * 2) * 0.65 +
        smoothMouseY * (motionIsReduced ? 0.15 : 0.55);

      camera.position.set(targetX, targetY, targetZ);
      camera.lookAt(
        targetX * 0.35,
        targetY * 0.35,
        targetZ - 12
      );

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      scene.traverse((object) => {
        if ('geometry' in object && object.geometry instanceof THREE.BufferGeometry) {
          object.geometry.dispose();
        }
        if ('material' in object) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      colorTexture.dispose();
      bumpTexture.dispose();
      renderer.dispose();
    };
  }, []);

  // Filter Skills
  const skillCategories = [
    'All',
    'Programming Languages',
    'Frontend',
    'Backend',
    '3D Development',
    'UI/UX Design',
    'Developer Tools'
  ];

  const filteredSkills =
    selectedSkillCategory === 'All'
      ? data.skills
      : data.skills.filter((s) => s.category === selectedSkillCategory);

  // Smooth Section Scroll Helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate Ready-to-Use LinkedIn Announcement & Config Export
  const linkedInPostTemplate = `🚀 Excited to share my newest creative engineering project: COSMIC DEVELOPER — an interactive 3D scrolling developer portfolio!

I built an immersive digital universe that blends Three.js WebGL storytelling with a clean, fast developer portfolio architecture.

✨ Key Engineering Highlights:
• Procedural 3D Planet & Atmospheric Scattering with multi-depth starfields & instanced asteroid belts
• 6-Scene Scroll-Synchronized Camera Choreography (Cosmic Intro → Planetary Ring → Skill Constellation → Project Galaxy → Space Station Timeline → Contact Horizon)
• Interactive 3D Project Cards with real-time WebGL mini-previews
• Built-in Live Content Customizer to add/update projects & skills anytime

🌐 Live Portfolio: ${data.socials.portfolioLiveUrl}
💻 GitHub Repository: ${data.socials.github}

Would love your feedback on the 3D transitions and UI experience!

#React #ThreeJS #TypeScript #WebGL #CreativeDeveloper #FrontendEngineering #Portfolio #WebDevelopment`;

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* ====================================================================
          FIXED 3D COSMIC WEBGL CANVAS BACKGROUND
      ==================================================================== */}
      <div
        ref={canvasContainerRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* WebGL Fallback Gradient if hardware acceleration is disabled */}
      {!webglReady && (
        <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-950/50 via-slate-950 to-black pointer-events-none" />
      )}

      {/* Subtle Vignette & HUD Scanline Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,4,10,0.78)_100%)]" />

      {/* ====================================================================
          TOP NAVIGATION BAR + LIVE CUSTOMIZER & GITHUB KIT TRIGGERS
      ==================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('scene-hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <Orbit className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-sm font-black tracking-wider bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent block">
                COSMIC DEVELOPER
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest block">
                SCENE 0{activeScene} / 06 • {Math.round(scrollProgress * 100)}% ORBIT
                {renderFps > 0 && <span className="text-emerald-300"> • {renderFps} FPS</span>}
              </span>
            </div>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1">
            {[
              { label: '01 Intro', id: 'scene-hero', idx: 1 },
              { label: '02 About', id: 'scene-about', idx: 2 },
              { label: '03 Skills', id: 'scene-skills', idx: 3 },
              { label: '04 Projects', id: 'scene-projects', idx: 4 },
              { label: '05 Timeline', id: 'scene-timeline', idx: 5 },
              { label: '06 Contact', id: 'scene-contact', idx: 6 }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSection(nav.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeScene === nav.idx
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls: Edit Content Anytime & GitHub/LinkedIn Launch Kit */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              title="Toggle 3D Camera Motion Sensitivity"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              {reducedMotion ? 'Low Motion' : 'Full 3D'}
            </button>

            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-500/30 transition shadow-sm shadow-cyan-500/10"
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-300" />
              <span>Edit Content</span>
            </button>

            <button
              onClick={() => setIsLaunchKitOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold hover:opacity-95 transition shadow-md shadow-cyan-500/20"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub & LinkedIn Kit</span>
            </button>
          </div>
        </div>

        {/* Scroll Progress Laser Line */}
        <div className="h-[2px] w-full bg-slate-900">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </header>

      {/* ====================================================================
          RIGHT SIDE FLOATING TELEMETRY HUD (QUICK SCENE JUMPER)
      ==================================================================== */}
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3 bg-slate-950/60 backdrop-blur-md border border-white/10 p-2 rounded-full">
        {[
          { idx: 1, id: 'scene-hero', name: 'Cosmic Intro' },
          { idx: 2, id: 'scene-about', name: 'Hologram Bio' },
          { idx: 3, id: 'scene-skills', name: 'Skill Orbit' },
          { idx: 4, id: 'scene-projects', name: 'Project Galaxy' },
          { idx: 5, id: 'scene-timeline', name: 'Space Station' },
          { idx: 6, id: 'scene-contact', name: 'Contact Horizon' }
        ].map((s) => (
          <button
            key={s.idx}
            onClick={() => scrollToSection(s.id)}
            title={`Jump to Scene ${s.idx}: ${s.name}`}
            className={`w-3 h-3 rounded-full transition-all ${
              activeScene === s.idx
                ? 'bg-cyan-400 scale-125 shadow-[0_0_12px_#22d3ee]'
                : 'bg-slate-700 hover:bg-slate-400'
            }`}
          />
        ))}
      </aside>

      {/* ====================================================================
          MAIN SCROLLABLE STORYTELLING CONTENT (SCENES 1 TO 6)
      ==================================================================== */}
      <main className="relative z-10">
        {/* ------------------------------------------------------------------
            SCENE 1: THE COSMIC INTRO (HERO SECTION)
        ------------------------------------------------------------------ */}
        <section
          id="scene-hero"
          className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="max-w-3xl space-y-6">
            {/* Telemetry Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>INTERACTIVE 3D WEBGL PORTFOLIO • {data.profile.name}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                {data.profile.heroHeading}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
              {data.profile.heroSubtitle}
            </p>

            {/* Professional Title Pill */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="px-4 py-1.5 rounded-lg bg-purple-500/15 border border-purple-400/30 text-purple-200 font-mono text-sm">
                {data.profile.professionalTitle}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                {data.profile.location}
              </span>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('scene-about')}
                className="px-7 py-4 rounded-xl font-bold text-sm tracking-wider bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-600 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                EXPLORE MY UNIVERSE
              </button>

              <button
                onClick={() => scrollToSection('scene-projects')}
                className="px-7 py-4 rounded-xl font-bold text-sm tracking-wider bg-slate-900/80 hover:bg-slate-800/90 text-white border border-cyan-400/40 hover:border-cyan-300 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                VIEW MY PROJECTS
              </button>

              <button
                onClick={() => setIsCustomizerOpen(true)}
                className="px-4 py-4 rounded-xl text-xs font-mono text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/30 bg-slate-950/60 backdrop-blur-md transition flex items-center gap-2"
              >
                <Sliders className="w-4 h-4 text-purple-400" />
                Customize Portfolio
              </button>
            </div>

            {/* Quick Social Bar */}
            <div className="pt-6 flex items-center gap-5 text-slate-400">
              {data.socials.github && (
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition flex items-center gap-1.5 text-xs font-mono"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
              {data.socials.linkedin && (
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 transition flex items-center gap-1.5 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              )}
              {data.socials.email && (
                <a
                  href={`mailto:${data.socials.email}`}
                  className="hover:text-cyan-300 transition flex items-center gap-1.5 text-xs font-mono"
                >
                  <Mail className="w-4 h-4" /> {data.socials.email}
                </a>
              )}
            </div>

            {/* Scroll Indicator */}
            <div className="pt-10 flex items-center gap-3 text-xs font-mono text-slate-400">
              <div className="w-6 h-10 rounded-full border border-cyan-400/40 flex items-start justify-center p-1">
                <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
              </div>
              <span>SCROLL TO TRAVEL THROUGH PLANETARY RINGS</span>
              <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            SCENE 2: JOURNEY THROUGH SPACE (HOLOGRAPHIC ABOUT SECTION)
        ------------------------------------------------------------------ */}
        <section
          id="scene-about"
          className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="w-full space-y-10">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block">
                  // SCENE 02 • PLANETARY RING TRANSIT
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
                  HOLOGRAPHIC COMMANDER PROFILE
                </h2>
              </div>
              <button
                onClick={() => {
                  setCustomizerTab('profile');
                  setIsCustomizerOpen(true);
                }}
                className="self-start sm:self-auto px-3.5 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/15 text-cyan-300 flex items-center gap-1.5 transition"
              >
                <Edit3 className="w-3.5 h-3.5" /> Edit Bio & Stats
              </button>
            </div>

            {/* Holographic Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Avatar & Telemetry Card */}
              <div className="lg:col-span-4 rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-cyan-500/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.08)]">
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-5">
                  <div className="relative w-32 h-32 mx-auto sm:mx-0 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20">
                    {data.profile.avatarUrl ? (
                      <img
                        src={data.profile.avatarUrl}
                        alt={data.profile.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400/25 via-slate-900 to-purple-500/30 text-4xl font-black text-cyan-100"
                        aria-label={`${data.profile.name} initials`}
                      >
                        {data.profile.name
                          .split(/\s+/)
                          .map((part) => part[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-1.5 right-2 text-[10px] font-mono bg-cyan-500/90 text-slate-950 font-bold px-1.5 py-0.5 rounded">
                      ONLINE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{data.profile.name}</h3>
                    <p className="text-sm text-cyan-300 font-mono mt-0.5">
                      {data.profile.professionalTitle}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      Education & Credentials
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {data.profile.educationSummary}
                    </p>
                  </div>
                </div>

                {/* Animated Stat Counters */}
                <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10">
                  {data.profile.stats.map((st, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                        {st.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Narrative, Journey, Goals & Interests */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2 rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-white/10 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                    <User className="w-4 h-4" /> Mission Introduction
                  </div>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    {data.profile.introduction}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-white/10 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider">
                    <Terminal className="w-4 h-4" /> Developer Journey
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {data.profile.journey}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-white/10 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                    <Zap className="w-4 h-4" /> Engineering Goals
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {data.profile.goals}
                  </p>
                </div>

                <div className="sm:col-span-2 rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-white/10 p-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Core Focus Areas & Interests
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {data.profile.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-400/30 text-cyan-200"
                      >
                        ✦ {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            SCENE 3: THE SKILL CONSTELLATION (INTERACTIVE SKILLS SECTION)
        ------------------------------------------------------------------ */}
        <section
          id="scene-skills"
          className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="w-full space-y-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block">
                  // SCENE 03 • INTERACTIVE SKILL CONSTELLATION
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
                  TECHNICAL ORBIT & ARSENAL
                </h2>
              </div>
              <button
                onClick={() => {
                  setCustomizerTab('skills');
                  setIsCustomizerOpen(true);
                }}
                className="self-start sm:self-auto px-3.5 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/15 text-purple-300 flex items-center gap-1.5 transition"
              >
                <Plus className="w-3.5 h-3.5" /> Add / Edit Skills
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSkillCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedSkillCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-cyan-400/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Interactive Constellation Radar + Skill Node Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Interactive SVG Orbital Constellation Map */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 p-6 flex flex-col items-center justify-center relative">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                  Click or Hover Any Orbital Node
                </div>

                <svg viewBox="0 0 320 320" className="w-full max-w-[300px] h-auto">
                  {/* Orbital Rings */}
                  <circle
                    cx="160"
                    cy="160"
                    r="48"
                    fill="none"
                    stroke="rgba(56,189,248,0.22)"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="92"
                    fill="none"
                    stroke="rgba(168,85,247,0.22)"
                    strokeDasharray="5 5"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="134"
                    fill="none"
                    stroke="rgba(56,189,248,0.18)"
                  />

                  {/* Connecting Constellation Lines */}
                  {data.skills.map((sk, idx) => {
                    const angle = (idx / data.skills.length) * Math.PI * 2;
                    const rad = sk.orbitRadius === 1 ? 48 : sk.orbitRadius === 2 ? 92 : 134;
                    const x = 160 + Math.cos(angle) * rad;
                    const y = 160 + Math.sin(angle) * rad;
                    const nextSk = data.skills[(idx + 1) % data.skills.length];
                    const nextAngle = ((idx + 1) / data.skills.length) * Math.PI * 2;
                    const nextRad =
                      nextSk.orbitRadius === 1 ? 48 : nextSk.orbitRadius === 2 ? 92 : 134;
                    const nx = 160 + Math.cos(nextAngle) * nextRad;
                    const ny = 160 + Math.sin(nextAngle) * nextRad;

                    return (
                      <g key={sk.id}>
                        <line
                          x1={x}
                          y1={y}
                          x2={nx}
                          y2={ny}
                          stroke="rgba(34,211,238,0.22)"
                          strokeWidth="1"
                        />
                        <line
                          x1="160"
                          y1="160"
                          x2={x}
                          y2={y}
                          stroke="rgba(168,85,247,0.15)"
                          strokeWidth="1"
                        />
                      </g>
                    );
                  })}

                  {/* Core Sun */}
                  <circle cx="160" cy="160" r="14" fill="#22d3ee" />
                  <circle
                    cx="160"
                    cy="160"
                    r="22"
                    fill="none"
                    stroke="#22d3ee"
                    strokeOpacity="0.4"
                  />

                  {/* Interactive Skill Nodes */}
                  {data.skills.map((sk, idx) => {
                    const angle = (idx / data.skills.length) * Math.PI * 2;
                    const rad = sk.orbitRadius === 1 ? 48 : sk.orbitRadius === 2 ? 92 : 134;
                    const x = 160 + Math.cos(angle) * rad;
                    const y = 160 + Math.sin(angle) * rad;
                    const isSelected = highlightedSkill?.id === sk.id;

                    return (
                      <g
                        key={sk.id}
                        className="cursor-pointer"
                        onClick={() => setHighlightedSkill(sk)}
                        onMouseEnter={() => setHighlightedSkill(sk)}
                      >
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? 10 : 6.5}
                          fill={sk.color}
                        />
                        <text
                          x={x}
                          y={y - 11}
                          textAnchor="middle"
                          fill="#e2e8f0"
                          fontSize="8.5"
                          fontFamily="monospace"
                        >
                          {sk.name.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Active Node Telemetry Box */}
                <div className="w-full mt-4 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30">
                  {highlightedSkill ? (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-300 text-sm">
                          {highlightedSkill.name}
                        </span>
                        <span className="text-xs font-mono text-purple-300">
                          {highlightedSkill.level}% Mastery
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">
                        {highlightedSkill.description}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 font-mono text-center">
                      Hover or tap any node in the constellation to inspect telemetry.
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Skill Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.id}
                    onMouseEnter={() => setHighlightedSkill(skill)}
                    className={`p-5 rounded-2xl bg-slate-950/75 backdrop-blur-xl border transition-all cursor-pointer ${
                      highlightedSkill?.id === skill.id
                        ? 'border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.18)] -translate-y-0.5'
                        : 'border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: skill.color,
                            boxShadow: `0 0 10px ${skill.color}`
                          }}
                        />
                        <h3 className="font-bold text-white text-base">{skill.name}</h3>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 mb-2">
                      {skill.category}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {skill.description}
                    </p>

                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            SCENE 4: THE PROJECT GALAXY (3D PROJECT SHOWCASE)
        ------------------------------------------------------------------ */}
        <section
          id="scene-projects"
          className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="w-full space-y-10">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block">
                  // SCENE 04 • HYPERSPACE PORTAL & PROJECT GALAXY
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
                  FEATURED 3D PROJECT SHOWCASE
                </h2>
              </div>
              <button
                onClick={() => {
                  setCustomizerTab('projects');
                  setIsCustomizerOpen(true);
                }}
                className="self-start sm:self-auto px-3.5 py-2 rounded-lg text-xs font-mono bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-200 flex items-center gap-1.5 transition"
              >
                <Plus className="w-3.5 h-3.5" /> Add / Replace Projects
              </button>
            </div>

            {/* 3D Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
                >
                  <div>
                    {/* Interactive Live 3D WebGL Mini-Scene Header */}
                    <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950 border-b border-white/10 p-3">
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 border border-white/15 text-cyan-300">
                          0{index + 1} • LIVE 3D MODEL
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-950/80 text-slate-300 border border-white/10">
                          {project.metrics}
                        </span>
                      </div>

                      <ProjectMini3DCanvas
                        type={project.previewType}
                        accentColor={project.accentColor}
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-purple-300 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-cyan-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Buttons */}
                  <div className="px-6 pb-6 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/15 border border-white/15 text-white flex items-center gap-1.5 transition"
                        >
                          <Github className="w-3.5 h-3.5" /> GitHub Repo
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-2 rounded-lg text-xs font-mono bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-200 flex items-center gap-1.5 transition"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xs font-mono text-purple-300 hover:text-purple-200 underline underline-offset-4"
                    >
                      Inspect Architecture →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            SCENE 5: THE EXPERIENCE TIMELINE (ORBITAL SPACE STATION)
        ------------------------------------------------------------------ */}
        <section
          id="scene-timeline"
          className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="w-full space-y-10">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block">
                  // SCENE 05 • ORBITAL SPACE STATION LOGS
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">
                  EXPERIENCE & LEARNING TIMELINE
                </h2>
              </div>
              <button
                onClick={() => {
                  setCustomizerTab('timeline');
                  setIsCustomizerOpen(true);
                }}
                className="self-start sm:self-auto px-3.5 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/15 text-cyan-300 flex items-center gap-1.5 transition"
              >
                <Plus className="w-3.5 h-3.5" /> Add Milestone
              </button>
            </div>

            {/* Vertical Animated Timeline */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-10">
              {data.timeline.map((item) => (
                <div
                  key={item.id}
                  className="relative group rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 p-6 transition-all"
                >
                  {/* Glowing Timeline Node */}
                  <div className="absolute -left-[33px] sm:-left-[49px] top-7 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_15px_#22d3ee]" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/15 border border-purple-400/30 text-purple-200">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5">
                    {item.highlights.map((hl, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-0.5">▹</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            SCENE 6: THE CONTACT UNIVERSE (HORIZON EXOPLANET)
        ------------------------------------------------------------------ */}
        <section
          id="scene-contact"
          className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="w-full space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block">
                // SCENE 06 • EXOPLANET HORIZON TRANSMISSION
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                LET&apos;S BUILD SOMETHING EXTRAORDINARY
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Open to interesting product ideas, engineering conversations, and creative web collaborations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Direct Channels Card */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 p-6 space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Direct Subspace Channels
                </h3>

                <div className="space-y-3">
                  {data.socials.email && <a
                    href={`mailto:${data.socials.email}`}
                    className="p-4 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 flex items-center justify-between transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-xs font-mono text-slate-400">Email Address</div>
                        <div className="text-sm font-medium text-white group-hover:text-cyan-300">
                          {data.socials.email}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-300" />
                  </a>}

                  <a
                    href={data.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 flex items-center justify-between transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-xs font-mono text-slate-400">GitHub Profile</div>
                        <div className="text-sm font-medium text-white group-hover:text-cyan-300 truncate max-w-[210px]">
                          {data.socials.github}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-300" />
                  </a>

                  {data.socials.linkedin && <a
                    href={data.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 flex items-center justify-between transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-sky-400" />
                      <div>
                        <div className="text-xs font-mono text-slate-400">LinkedIn Network</div>
                        <div className="text-sm font-medium text-white group-hover:text-cyan-300 truncate max-w-[210px]">
                          {data.socials.linkedin}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-300" />
                  </a>}
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-200 space-y-2">
                  <div className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    Ready for GitHub & LinkedIn Showcase
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Open the published GitHub Pages link, repository details, and a draft LinkedIn launch post.
                  </p>
                  <button
                    onClick={() => setIsLaunchKitOpen(true)}
                    className="w-full py-2 rounded-lg font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition"
                  >
                    Open GitHub & LinkedIn Launch Kit
                  </button>
                </div>
              </div>

              {/* Interactive Transmission Composer */}
              <div className="lg:col-span-7 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 space-y-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-purple-400" />
                  Send Direct Transmission
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactStatus('ready');
                    if (!data.socials.email) return;
                    const mailtoLink = `mailto:${data.socials.email}?subject=${encodeURIComponent(
                      `${contactForm.subject} — from ${contactForm.name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`
                    )}`;
                    window.open(mailtoLink, '_blank');
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      MESSAGE PAYLOAD
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hello! I'd love to discuss an engineering role or 3D web project..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 hover:opacity-95 transition flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {data.socials.email ? 'Launch Email Client' : 'Add Contact Email First'}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          `From: ${contactForm.name} (${contactForm.email})\nSubject: ${contactForm.subject}\n\n${contactForm.message}`,
                          'contact-copy'
                        )
                      }
                      className="px-4 py-3 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 flex items-center gap-1.5 transition"
                    >
                      {copiedKey === 'contact-copy' ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" /> Copied Message!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> Copy Formatted Message
                        </>
                      )}
                    </button>
                  </div>

                  {contactStatus === 'ready' && (
                    <p className="text-xs font-mono text-emerald-400">
                      {data.socials.email
                        ? '✓ Your default mail client was opened with your pre-filled message.'
                        : 'Add your email in Edit Content → Profile & Links to enable the email button.'}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 backdrop-blur-md py-8 px-4 text-center text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {data.profile.name} • COSMIC DEVELOPER 3D PORTFOLIO
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="text-cyan-400 hover:underline"
            >
              Edit Portfolio Data
            </button>
            <button
              onClick={() => setIsLaunchKitOpen(true)}
              className="text-purple-400 hover:underline"
            >
              Share & Publish Guide
            </button>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MODAL 1: PROJECT ARCHITECTURE DETAILS MODAL
      ==================================================================== */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-2xl w-full rounded-2xl bg-slate-950 border border-cyan-400/40 p-6 sm:p-8 space-y-5 relative shadow-2xl">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              PROJECT ARCHITECTURE SPECIFICATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {activeProjectModal.title}
            </h3>
            <p className="text-sm font-mono text-purple-300">
              {activeProjectModal.tagline}
            </p>

            <ProjectMini3DCanvas
              type={activeProjectModal.previewType}
              accentColor={activeProjectModal.accentColor}
            />

            <div className="space-y-3 text-sm text-slate-300">
              <p>{activeProjectModal.description}</p>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <div className="text-xs font-mono text-cyan-300 uppercase mb-1">
                  Technical Architecture & Performance
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeProjectModal.architecture}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeProjectModal.technologies.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-400/30 text-cyan-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/20 text-white flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> View Source on GitHub
                </a>
              )}
              {activeProjectModal.demoUrl && (
                <a
                  href={activeProjectModal.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-mono bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Open Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 2: LIVE CONTENT CUSTOMIZER (REPLACE OR ADD ITEMS ANYTIME)
      ==================================================================== */}
      {isCustomizerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-2xl bg-slate-950 border-l border-white/15 h-full flex flex-col justify-between overflow-hidden">
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/70">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-cyan-400" />
                  Live Portfolio Content Customizer
                </h3>
                <p className="text-xs text-slate-400">
                  Edit your details or add new projects, skills, and timeline items right now.
                </p>
              </div>
              <button
                onClick={() => setIsCustomizerOpen(false)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-slate-900/40 px-4 pt-2 gap-2 overflow-x-auto">
              {[
                { id: 'profile', label: '1. Profile & Links' },
                { id: 'projects', label: '2. 3D Projects' },
                { id: 'skills', label: '3. Skills' },
                { id: 'timeline', label: '4. Timeline' },
                { id: 'export', label: '5. Backup & Restore' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setCustomizerTab(t.id as typeof customizerTab)}
                  className={`px-3.5 py-2 text-xs font-mono border-b-2 whitespace-nowrap transition ${
                    customizerTab === t.id
                      ? 'border-cyan-400 text-cyan-300 font-bold'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content Area */}
            <div className="p-6 overflow-y-auto flex-1 space-y-5">
              {customizerTab === 'profile' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={data.profile.name}
                      onChange={(e) =>
                        setData({
                          ...data,
                          profile: { ...data.profile, name: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Professional Title
                    </label>
                    <input
                      type="text"
                      value={data.profile.professionalTitle}
                      onChange={(e) =>
                        setData({
                          ...data,
                          profile: {
                            ...data.profile,
                            professionalTitle: e.target.value
                          }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        Hero Heading
                      </label>
                      <input
                        type="text"
                        value={data.profile.heroHeading}
                        onChange={(e) => updateProfileField('heroHeading', e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        Location / Availability
                      </label>
                      <input
                        type="text"
                        value={data.profile.location}
                        onChange={(e) => updateProfileField('location', e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Hero Subtitle
                    </label>
                    <textarea
                      rows={2}
                      value={data.profile.heroSubtitle}
                      onChange={(e) => updateProfileField('heroSubtitle', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Profile Photo URL (optional)
                    </label>
                    <input
                      type="text"
                      value={data.profile.avatarUrl}
                      onChange={(e) =>
                        setData({
                          ...data,
                          profile: { ...data.profile, avatarUrl: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                    <label className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-cyan-200 cursor-pointer hover:bg-white/10">
                      <Plus className="w-3.5 h-3.5" /> Upload a photo from this device
                      <input
                        type="file"
                        accept="image/*"
                        onChange={importProfilePhoto}
                        className="sr-only"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      About Introduction
                    </label>
                    <textarea
                      rows={3}
                      value={data.profile.introduction}
                      onChange={(e) =>
                        setData({
                          ...data,
                          profile: { ...data.profile, introduction: e.target.value }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Education Summary
                    </label>
                    <input
                      type="text"
                      value={data.profile.educationSummary}
                      onChange={(e) =>
                        setData({
                          ...data,
                          profile: {
                            ...data.profile,
                            educationSummary: e.target.value
                          }
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Your Journey
                    </label>
                    <textarea
                      rows={3}
                      value={data.profile.journey}
                      onChange={(e) => updateProfileField('journey', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Goals
                    </label>
                    <textarea
                      rows={2}
                      value={data.profile.goals}
                      onChange={(e) => updateProfileField('goals', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Interests (separate with commas)
                    </label>
                    <textarea
                      rows={2}
                      value={data.profile.interests.join(', ')}
                      onChange={(e) =>
                        updateProfileField(
                          'interests',
                          e.target.value
                            .split(',')
                            .map((interest) => interest.trim())
                            .filter(Boolean)
                        )
                      }
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-white/15 text-sm text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono text-slate-400">
                        Profile Stats
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          updateProfileField('stats', [
                            ...data.profile.stats,
                            { label: 'New Stat', value: 'Add value' }
                          ])
                        }
                        className="text-xs text-cyan-300 hover:text-white"
                      >
                        + Add Stat
                      </button>
                    </div>
                    {data.profile.stats.map((stat, idx) => (
                      <div key={`${idx}-${stat.label}`} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                        <input
                          aria-label="Stat label"
                          value={stat.label}
                          onChange={(e) => {
                            const next = [...data.profile.stats];
                            next[idx] = { ...stat, label: e.target.value };
                            updateProfileField('stats', next);
                          }}
                          className="min-w-0 px-3 py-2 rounded-lg bg-slate-900 border border-white/15 text-xs text-white"
                        />
                        <input
                          aria-label="Stat value"
                          value={stat.value}
                          onChange={(e) => {
                            const next = [...data.profile.stats];
                            next[idx] = { ...stat, value: e.target.value };
                            updateProfileField('stats', next);
                          }}
                          className="min-w-0 px-3 py-2 rounded-lg bg-slate-900 border border-white/15 text-xs text-white"
                        />
                        <button
                          type="button"
                          aria-label="Remove stat"
                          onClick={() =>
                            updateProfileField(
                              'stats',
                              data.profile.stats.filter((_, statIndex) => statIndex !== idx)
                            )
                          }
                          className="p-2 rounded bg-rose-500/20 text-rose-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        Email
                      </label>
                      <input
                        type="text"
                        value={data.socials.email}
                        onChange={(e) =>
                          setData({
                            ...data,
                            socials: { ...data.socials, email: e.target.value }
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/15 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        GitHub URL
                      </label>
                      <input
                        type="text"
                        value={data.socials.github}
                        onChange={(e) =>
                          setData({
                            ...data,
                            socials: { ...data.socials, github: e.target.value }
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/15 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        LinkedIn URL
                      </label>
                      <input
                        type="text"
                        value={data.socials.linkedin}
                        onChange={(e) =>
                          setData({
                            ...data,
                            socials: { ...data.socials, linkedin: e.target.value }
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/15 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {customizerTab === 'projects' && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      const newProj: ProjectItem = {
                        id: `proj-${Date.now()}`,
                        title: 'New 3D Web Project',
                        tagline: 'Interactive Full-Stack Experience',
                        description:
                          'Describe your project problem, solution, and impact here.',
                        architecture: 'React + TypeScript + Three.js modular architecture.',
                        technologies: ['React', 'TypeScript', 'Three.js'],
                        githubUrl: 'https://github.com/kishanchiranjeevi-07',
                        demoUrl: '',
                        previewType: 'planet',
                        accentColor: '#38bdf8',
                        metrics: 'Add a project highlight'
                      };
                      setData({ ...data, projects: [newProj, ...data.projects] });
                    }}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> + Add New 3D Project Card
                  </button>

                  {data.projects.map((p, idx) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={p.title}
                          onChange={(e) => {
                            const next = [...data.projects];
                            next[idx] = { ...p, title: e.target.value };
                            setData({ ...data, projects: next });
                          }}
                          className="font-bold text-white bg-slate-950 px-3 py-1.5 rounded border border-white/15 text-sm w-2/3"
                        />
                        <button
                          onClick={() =>
                            setData({
                              ...data,
                              projects: data.projects.filter((item) => item.id !== p.id)
                            })
                          }
                          className="p-1.5 rounded bg-rose-500/20 text-rose-300 hover:bg-rose-500/30"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <input
                        type="text"
                        aria-label="Project tagline"
                        placeholder="Short project tagline"
                        value={p.tagline}
                        onChange={(e) => updateProject(p.id, { tagline: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-slate-950 border border-white/15 text-xs text-cyan-200"
                      />

                      <textarea
                        rows={2}
                        aria-label="Project description"
                        value={p.description}
                        onChange={(e) => {
                          const next = [...data.projects];
                          next[idx] = { ...p, description: e.target.value };
                          setData({ ...data, projects: next });
                        }}
                        className="w-full px-3 py-1.5 rounded bg-slate-950 border border-white/15 text-xs text-slate-200"
                      />

                      <textarea
                        rows={2}
                        aria-label="Project architecture"
                        placeholder="How you built it"
                        value={p.architecture}
                        onChange={(e) => updateProject(p.id, { architecture: e.target.value })}
                        className="w-full px-3 py-1.5 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                      />

                      <textarea
                        rows={2}
                        aria-label="Project technologies"
                        placeholder="Technologies, separated by commas"
                        value={p.technologies.join(', ')}
                        onChange={(e) =>
                          updateProject(p.id, {
                            technologies: e.target.value
                              .split(',')
                              .map((technology) => technology.trim())
                              .filter(Boolean)
                          })
                        }
                        className="w-full px-3 py-1.5 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                      />

                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="GitHub URL"
                          value={p.githubUrl}
                          onChange={(e) => {
                            const next = [...data.projects];
                            next[idx] = { ...p, githubUrl: e.target.value };
                            setData({ ...data, projects: next });
                          }}
                          className="px-2.5 py-1.5 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                        />
                        <input
                          type="text"
                          placeholder="Live Demo URL"
                          value={p.demoUrl}
                          onChange={(e) => {
                            const next = [...data.projects];
                            next[idx] = { ...p, demoUrl: e.target.value };
                            setData({ ...data, projects: next });
                          }}
                          className="px-2.5 py-1.5 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                        />
                      </div>

                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <input
                          type="text"
                          aria-label="Project highlight"
                          placeholder="Short metric or highlight"
                          value={p.metrics}
                          onChange={(e) => updateProject(p.id, { metrics: e.target.value })}
                          className="min-w-0 px-2.5 py-1.5 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                        />
                        <label className="px-2.5 py-1 rounded bg-slate-950 border border-white/15 text-xs text-slate-400 flex items-center gap-2">
                          Accent
                          <input
                            type="color"
                            aria-label="Project accent color"
                            value={p.accentColor}
                            onChange={(e) => updateProject(p.id, { accentColor: e.target.value })}
                            className="w-7 h-7 bg-transparent border-0"
                          />
                        </label>
                      </div>

                      <select
                        aria-label="Project 3D preview type"
                        value={p.previewType}
                        onChange={(e) =>
                          updateProject(p.id, {
                            previewType: e.target.value as ProjectItem['previewType']
                          })
                        }
                        className="w-full px-2.5 py-2 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                      >
                        <option value="planet">Planet</option>
                        <option value="ai-neural">AI Neural</option>
                        <option value="analytics-cube">Analytics Cube</option>
                        <option value="supercar-Aero">Supercar</option>
                      </select>
                    </div>
                  ))}
                </div>
              )}

              {customizerTab === 'skills' && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      const newSkill: SkillItem = {
                        id: `sk-${Date.now()}`,
                        name: 'New Technology',
                        category: 'Frontend',
                        level: 90,
                        orbitRadius: 2,
                        color: '#22d3ee',
                        description: 'Core production skill and architectural tooling.'
                      };
                      setData({ ...data, skills: [newSkill, ...data.skills] });
                    }}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-purple-500 text-white hover:bg-purple-400 transition flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> + Add New Skill Node
                  </button>

                  {data.skills.map((sk, idx) => (
                    <div
                      key={sk.id}
                      className="p-3.5 rounded-xl bg-slate-900 border border-white/10 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                      <input
                        type="text"
                        value={sk.name}
                        onChange={(e) => {
                          const next = [...data.skills];
                          next[idx] = { ...sk, name: e.target.value };
                          setData({ ...data, skills: next });
                        }}
                        className="px-3 py-1 rounded bg-slate-950 border border-white/15 text-xs text-white"
                      />
                      <input
                        type="number"
                        min={10}
                        max={100}
                        value={sk.level}
                        onChange={(e) => {
                          const next = [...data.skills];
                          next[idx] = { ...sk, level: Number(e.target.value) };
                          setData({ ...data, skills: next });
                        }}
                        className="w-16 px-2 py-1 rounded bg-slate-950 border border-white/15 text-xs text-cyan-300"
                      />
                      <button
                        onClick={() =>
                          setData({
                            ...data,
                            skills: data.skills.filter((s) => s.id !== sk.id)
                          })
                        }
                        className="p-1.5 rounded bg-rose-500/20 text-rose-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      </div>
                    <div className="grid grid-cols-[1fr_auto_auto] gap-2">
                      <select
                        aria-label="Skill category"
                        value={sk.category}
                        onChange={(e) =>
                          updateSkill(sk.id, {
                            category: e.target.value as SkillItem['category']
                          })
                        }
                        className="min-w-0 px-2.5 py-2 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                      >
                        <option>Programming Languages</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>3D Development</option>
                        <option>UI/UX Design</option>
                        <option>Developer Tools</option>
                      </select>
                      <label className="px-2 py-1 rounded bg-slate-950 border border-white/15 text-[10px] text-slate-400 flex items-center gap-1.5">
                        Orbit
                        <input
                          type="number"
                          min={1}
                          max={5}
                          aria-label="Skill orbit radius"
                          value={sk.orbitRadius}
                          onChange={(e) => updateSkill(sk.id, { orbitRadius: Number(e.target.value) })}
                          className="w-10 bg-transparent text-xs text-cyan-300 outline-none"
                        />
                      </label>
                      <input
                        type="color"
                        aria-label="Skill node color"
                        value={sk.color}
                        onChange={(e) => updateSkill(sk.id, { color: e.target.value })}
                        className="w-10 h-9 p-1 rounded bg-slate-950 border border-white/15"
                      />
                    </div>
                    <textarea
                      rows={2}
                      aria-label="Skill description"
                      placeholder="Skill description"
                      value={sk.description}
                      onChange={(e) => updateSkill(sk.id, { description: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                    />
                    </div>
                  ))}
                </div>
              )}

              {customizerTab === 'timeline' && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      const newTl: TimelineItem = {
                        id: `tl-${Date.now()}`,
                        year: 'YOUR DATE',
                        title: 'New Timeline Item',
                        organization: 'Organization or Project',
                        category: 'Project',
                        description: 'Add a short description.',
                        highlights: ['Add a highlight']
                      };
                      setData({ ...data, timeline: [newTl, ...data.timeline] });
                    }}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> + Add Timeline Milestone
                  </button>

                  {data.timeline.map((tl, idx) => (
                    <div
                      key={tl.id}
                      className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={tl.title}
                          onChange={(e) => {
                            const next = [...data.timeline];
                            next[idx] = { ...tl, title: e.target.value };
                            setData({ ...data, timeline: next });
                          }}
                          className="px-3 py-1 rounded bg-slate-950 border border-white/15 text-xs text-white font-bold w-2/3"
                        />
                        <button
                          onClick={() =>
                            setData({
                              ...data,
                              timeline: data.timeline.filter((item) => item.id !== tl.id)
                            })
                          }
                          className="p-1.5 rounded bg-rose-500/20 text-rose-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={tl.description}
                        onChange={(e) => {
                          const next = [...data.timeline];
                          next[idx] = { ...tl, description: e.target.value };
                          setData({ ...data, timeline: next });
                        }}
                        className="w-full px-3 py-1.5 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          type="text"
                          aria-label="Timeline date"
                          placeholder="Date or period"
                          value={tl.year}
                          onChange={(e) => updateTimelineItem(tl.id, { year: e.target.value })}
                          className="w-full px-3 py-2 rounded bg-slate-950 border border-white/15 text-xs text-cyan-300"
                        />
                        <input
                          type="text"
                          aria-label="Timeline organization"
                          placeholder="Organization or project"
                          value={tl.organization}
                          onChange={(e) => updateTimelineItem(tl.id, { organization: e.target.value })}
                          className="w-full px-3 py-2 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                        />
                      </div>
                      <select
                        aria-label="Timeline category"
                        value={tl.category}
                        onChange={(e) =>
                          updateTimelineItem(tl.id, {
                            category: e.target.value as TimelineItem['category']
                          })
                        }
                        className="w-full px-3 py-2 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                      >
                        <option>Project</option>
                        <option>Education</option>
                        <option>Learning</option>
                        <option>Hackathon</option>
                        <option>Certification</option>
                      </select>
                      <textarea
                        rows={2}
                        aria-label="Timeline highlights"
                        placeholder="Highlights, separated by commas"
                        value={tl.highlights.join(', ')}
                        onChange={(e) =>
                          updateTimelineItem(tl.id, {
                            highlights: e.target.value
                              .split(',')
                              .map((highlight) => highlight.trim())
                              .filter(Boolean)
                          })
                        }
                        className="w-full px-3 py-2 rounded bg-slate-950 border border-white/15 text-xs text-slate-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {customizerTab === 'export' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Changes update the page and save automatically in this browser. Download a JSON backup to move your content to another browser. Browser edits stay local; publishing a new version for everyone still requires updating the GitHub site.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={downloadPortfolioBackup}
                      className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 flex items-center justify-center gap-2"
                    >
                      <Copy className="w-4 h-4" /> Download JSON Backup
                    </button>
                    <label className="w-full py-3 rounded-xl font-bold text-xs bg-white/10 border border-white/15 text-white flex items-center justify-center gap-2 cursor-pointer hover:bg-white/15">
                      <Plus className="w-4 h-4" />
                      {copiedKey === 'import-json' ? 'Backup Restored' : 'Restore JSON Backup'}
                      <input
                        type="file"
                        accept="application/json,.json"
                        onChange={importPortfolioBackup}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-900 border border-white/10 text-[11px] font-mono text-cyan-200 overflow-x-auto max-h-80">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-white/10 bg-slate-900/70 flex items-center justify-between">
              <button
                onClick={() => {
                  setData(INITIAL_PORTFOLIO_DATA);
                  localStorage.removeItem(PORTFOLIO_STORAGE_KEY);
                  localStorage.removeItem(PREVIOUS_PORTFOLIO_STORAGE_KEY);
                  localStorage.removeItem('cosmic_portfolio_v2');
                  localStorage.removeItem('cosmic_portfolio_v1');
                }}
                className="text-xs font-mono text-rose-400 hover:underline"
              >
                Reset to Default Demo Data
              </button>
              <button
                onClick={() => setIsCustomizerOpen(false)}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-cyan-400 text-slate-950"
              >
                Done & View Live
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 3: VS CODE, GITHUB UPLOAD, VERCEL & LINKEDIN LAUNCH KIT
      ==================================================================== */}
      {isLaunchKitOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-[90vh] rounded-2xl bg-slate-950 border border-cyan-400/40 flex flex-col overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">
                  Portfolio Share & Publish Kit
                </h3>
              </div>
              <button
                onClick={() => setIsLaunchKitOpen(false)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              {/* Step 1: Local preview */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                    STEP 1 • OPEN A LOCAL PREVIEW
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `npm install\nnpm run dev`,
                        'vscode-cmd'
                      )
                    }
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-cyan-300 flex items-center gap-1"
                  >
                    {copiedKey === 'vscode-cmd' ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Commands
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 rounded-lg bg-black/70 text-xs font-mono text-slate-200 overflow-x-auto">
{`npm install
npm run dev

# To edit content without code, open the site and choose Edit Content.`}
                </pre>
              </div>

              {/* Step 2: GitHub source */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                    STEP 2 • GITHUB SOURCE REPOSITORY
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `https://github.com/kishanchiranjeevi-07/cosmic-3d-portfolio`,
                        'git-cmd'
                      )
                    }
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-purple-300 flex items-center gap-1"
                  >
                    {copiedKey === 'git-cmd' ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Repository Link
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-300">
                  The source code is published at{' '}
                  <a
                    href="https://github.com/kishanchiranjeevi-07/cosmic-3d-portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 underline"
                  >
                    github.com/kishanchiranjeevi-07/cosmic-3d-portfolio
                  </a>
                  . The repository includes a workflow that builds and deploys the portfolio when changes are pushed to <code>main</code>.
                </p>
                <pre className="p-3 rounded-lg bg-black/70 text-xs font-mono text-slate-200 overflow-x-auto">
{`git clone https://github.com/kishanchiranjeevi-07/cosmic-3d-portfolio.git
cd cosmic-3d-portfolio`}
                </pre>
              </div>

              {/* Step 3: GitHub Pages */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">
                  STEP 3 • LIVE GITHUB PAGES SITE
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The live portfolio URL is{' '}
                  <a
                    href={data.socials.portfolioLiveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 underline"
                  >
                    {data.socials.portfolioLiveUrl}
                  </a>
                  . In repository Settings → Pages, choose GitHub Actions as the source if needed. The workflow publishes each successful <code>main</code> build.
                </p>
              </div>

              {/* Step 4: LinkedIn Launch Announcement */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                    STEP 4 • READY-TO-POST LINKEDIN SHOWCASE ANNOUNCEMENT
                  </span>
                  <button
                    onClick={() => copyToClipboard(linkedInPostTemplate, 'linkedin-post')}
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-sky-300 flex items-center gap-1"
                  >
                    {copiedKey === 'linkedin-post' ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied Post
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy LinkedIn Post
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 rounded-lg bg-black/70 text-xs font-mono text-slate-200 whitespace-pre-wrap">
                  {linkedInPostTemplate}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
