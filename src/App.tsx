import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Settings,
  Power,
  Cpu,
  MapPin,
  ArrowRight,
  Code,
  Cloud,
  Shield,
  Database,
  CheckCircle2,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Menu
} from 'lucide-react';

// Utility: remove common indentation from template literals so ASCII art aligns
const dedent = (s: string) => {
  const lines = s.replace(/\r/g, '').split('\n');
  while (lines.length && lines[0].trim() === '') lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
  const indents = lines.filter(l => l.trim()).map(l => (l.match(/^(\s*)/) || ['', ''])[1].length);
  const minIndent = indents.length ? Math.min(...indents) : 0;
  return lines.map(l => l.slice(minIndent)).join('\n');
};

// --- Types ---

type Screen = 'HOME' | 'EXP' | 'SKILLS' | 'PROJ';

// Auto-scaling ASCII pre to fit container width (prevents horizontal scroll on mobile)
const AsciiPre = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
  const preRef = useRef<HTMLElement | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = preRef.current as HTMLElement | null;
    if (!el) return;
    const wrapper = el.parentElement as HTMLElement;

    const fit = () => {
      const parentW = wrapper ? wrapper.clientWidth : el.clientWidth;
      const scrollW = el.scrollWidth || el.clientWidth;
      const s = Math.min(1, parentW / scrollW);
      setScale(s);
    };

    fit();
    const onResize = () => fit();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [children]);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <pre
        ref={preRef as any}
        className={className}
        style={{ ...style, transform: `scale(${scale})`, transformOrigin: 'left top', display: 'block' }}
      >
        {children}
      </pre>
    </div>
  );
};

// --- Components ---

const Header = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (s: Screen) => {
    setScreen(s);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-2 bg-[#131313] border-b border-[#00F63E] shadow-[0_0_8px_rgba(0,246,62,0.3)]">
      <div className="flex items-center gap-3 text-lg font-bold text-[#00F63E] animate-pulse font-mono uppercase tracking-widest crt-glow">
        <svg width="28" height="20" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
          <rect x="1.5" y="1.5" width="61" height="45" rx="6" stroke="#00F63E" strokeWidth="3" fill="#131313" />
          <text x="10" y="34" fontFamily="monospace" fontSize="28" fill="#00F63E">&gt;_</text>
        </svg>
        PRIYANSHU ARYA
      </div>

      {/* desktop nav */}
      <nav className="hidden md:flex items-center gap-6 font-mono uppercase tracking-widest text-xs">
        {(['HOME', 'EXP', 'SKILLS', 'PROJ'] as Screen[]).map((s) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            className={`px-2 py-0.5 transition-colors duration-75 cursor-pointer ${currentScreen === s
              ? 'text-[#131313] bg-[#00F63E]'
              : 'text-[#00F63E] opacity-70 hover:opacity-100 hover:bg-[#00F63E] hover:text-[#131313]'
              }`}
          >
            {s}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {/* mobile menu button */}
        <button aria-label="menu" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#00F63E] p-1">
          <Menu size={18} />
        </button>

        <div className="hidden md:flex items-center gap-4 text-[#00F63E]">
          <Terminal size={16} className="cursor-pointer hover:bg-[#00F63E] hover:text-[#131313] p-0.5" />
          <Settings size={16} className="cursor-pointer hover:bg-[#00F63E] hover:text-[#131313] p-0.5" />
          <Power size={16} className="cursor-pointer hover:bg-[#00F63E] hover:text-[#131313] p-0.5" />
        </div>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <div className="absolute left-4 right-4 top-14 bg-[#0f0f0f] border border-[#00F63E] p-3 rounded-md shadow-lg md:hidden z-50">
          <div className="flex flex-col gap-2">
            {(['HOME', 'EXP', 'SKILLS', 'PROJ'] as Screen[]).map(s => (
              <button key={s} onClick={() => handleNav(s)} className={`text-left px-3 py-2 uppercase font-mono ${currentScreen === s ? 'bg-[#00F63E] text-[#131313]' : 'text-[#00F63E] hover:bg-[#00F63E]/10'}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="fixed bottom-0 w-full z-50 flex flex-row items-center justify-between px-6 py-1 bg-[#131313] bg-opacity-95 backdrop-blur-sm border-t border-[#00F63E]">
    <div className="font-mono text-[10px] uppercase text-[#00F63E]">
      (C) 2001-2026 PRIYANSHU_ARYA.SYS
    </div>
    <div className="flex gap-6 font-mono text-[10px] uppercase">
      <a href="https://github.com/priyanshuarya22" target="_blank" rel="noopener noreferrer" className="text-[#00F63E] opacity-60 hover:text-white hover:bg-[#00F63E]/20 px-2 transition-all">GITHUB</a>
      <a href="https://www.linkedin.com/in/priyanshuarya22/" target="_blank" rel="noopener noreferrer" className="text-[#00F63E] opacity-60 hover:text-white hover:bg-[#00F63E]/20 px-2 transition-all">LINKEDIN</a>
      <a href="#" className="text-[#00F63E] opacity-60 hover:text-white hover:bg-[#00F63E]/20 px-2 transition-all">REJECT_ALL</a>
    </div>
    <div className="hidden md:block text-[#00F63E] font-mono text-[10px] uppercase opacity-50">
      SECURE_CONNECTION: AES-256
    </div>
  </footer>
);

const Scanlines = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] scanlines opacity-20"></div>
);

// --- Screens ---

const HomeScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      {/* System Metadata */}
      <div className="mb-12 border-l-2 border-[#00F63E] pl-4 py-2 bg-[#1b1b1b]/50">
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] uppercase tracking-tighter opacity-80">
          <p><span className="text-white">[KERNEL]</span> V6.2.0-PORTFOLIO-STABLE</p>
          <p><span className="text-white">[BOOT]</span> SEQUENCE: SUCCESS</p>
          <p><span className="text-white">[USER]</span> PRIYANSHU_ARYA@AMZN_SDE_1</p>
          <p><span className="text-white">[LOC]</span> BENGALURU, KA, IN</p>
          <p><span className="text-white">[IP]</span> 127.0.0.1</p>
        </div>
      </div>

      {/* ASCII Hero */}
      <section className="mb-20 overflow-x-auto">
        <AsciiPre
          className="text-[#00F63E] crt-glow font-mono font-bold leading-none text-[0.6rem] md:text-[1rem] lg:text-[1.2rem] whitespace-pre"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace', lineHeight: 1 }}
        >
          {dedent(`
    ██████╗ ██████╗ ██╗██╗   ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗
    ██╔══██╗██╔══██╗██║╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝██║  ██║██║   ██║
    ██████╔╝██████╔╝██║ ╚████╔╝ ███████║██╔██╗ ██║███████╗███████║██║   ██║
    ██╔═══╝ ██╔══██╗██║  ╚██╔╝  ██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║
    ██║     ██║  ██║██║   ██║   ██║  ██║██║ ╚████║███████║██║  ██║╚██████╔╝
    ╚═╝     ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝
    `)}
        </AsciiPre>
        <div className="mt-4 flex items-center gap-4">
          <div className="h-[1px] flex-grow bg-[#00F63E]/30"></div>
          <p className="text-xs tracking-[0.3em] font-bold uppercase">IDENTIFIED: PRIYANSHU ARYA</p>
          <div className="h-[1px] w-12 bg-[#00F63E]"></div>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bio Card */}
        <div className="md:col-span-8 border border-[#00F63E] p-6 bg-[#0e0e0e] relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-[#00F63E] text-[#131313] px-3 py-1 text-[10px] font-bold uppercase">Profile_Manifest</div>
          <h2 className="text-2xl font-black mb-4 crt-glow flex items-center gap-2">
            <span className="text-white">&gt;</span> SDE 1 @ AMAZON
          </h2>
          <p className="text-sm leading-relaxed mb-6 opacity-90 max-w-2xl">
            Software Development Engineer specializing in scalable backend systems, cloud infrastructure, and machine learning. Architecting high-availability solutions within the Amazon ecosystem. Focused on efficiency, performance, and the "Ghost in the Machine" paradigm.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="border border-[#00F63E]/40 p-3 bg-[#1b1b1b] flex flex-col gap-1">
              <span className="text-[10px] opacity-60">SYSTEM_EXPERTISE</span>
              <span className="text-xs font-bold">BACKEND_SCALING</span>
            </div>
            <div className="border border-[#00F63E]/40 p-3 bg-[#1b1b1b] flex flex-col gap-1">
              <span className="text-[10px] opacity-60">CORE_INFRA</span>
              <span className="text-xs font-bold">AWS_CLOUD_NATIVE</span>
            </div>
            <div className="border border-[#00F63E]/40 p-3 bg-[#1b1b1b] flex flex-col gap-1">
              <span className="text-[10px] opacity-60">INTELLIGENCE</span>
              <span className="text-xs font-bold">ML_MODELS_V3</span>
            </div>
          </div>
        </div>

        {/* Visual Static */}
        <div className="md:col-span-4 border border-[#00F63E]/30 bg-[#2a2a2a] flex flex-col justify-center items-center p-4 relative grayscale contrast-125 overflow-hidden">
          <img
            src="/hacker.jpg"
            alt="Hacker aesthetic"
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
            <Cpu size={48} className="mb-4 crt-glow text-[#00F63E] pointer-events-none" />
            <span className="text-[10px] font-bold tracking-widest opacity-80 uppercase text-[#00F63E] pointer-events-none">SYNAPTIC_LINK_ACTIVE</span>
          </div>
        </div>

        {/* Terminal Status */}
        <div className="md:col-span-12 border border-[#00F63E] p-4 bg-[#0e0e0e] font-mono">
          <div className="flex items-center gap-2 text-xs mb-4 border-b border-[#00F63E]/20 pb-2">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
            <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            <span className="ml-2 opacity-50">root@priyanshu-arya-os:~</span>
          </div>
          <div className="space-y-1 text-xs">
            <p><span className="text-white">priyanshu@kernel:~$</span> fetch-system-status</p>
            <p className="text-[#00F63E]/70">Connecting to AWS Region: ap-south-1...</p>
            <p className="text-[#00F63E]/70">Initializing ML Pipelines [####################] 100%</p>
            <p className="text-[#00F63E]/70">Latency check: 14ms</p>
            <div className="flex items-center">
              <span className="text-white">priyanshu@kernel:~$</span>
              <span className="ml-2">exec initiate_contact</span>
              <span className="cursor-blink ml-1 w-2 h-4 bg-[#00F63E]"></span>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="md:col-span-4 border border-[#00F63E]/30 p-4 bg-[#1b1b1b]/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold opacity-60 uppercase">Node_Location</span>
            <MapPin size={14} className="text-[#00F63E]" />
          </div>
          <p className="text-lg font-bold crt-glow">BENGALURU</p>
          <p className="text-xs opacity-80 mb-4">Karnataka, India [12.9716° N, 77.5946° E]</p>
          <div className="w-full h-24 bg-[#353535] border border-[#00F63E]/20 overflow-hidden">
            <img
              src="/bangalore.jpg"
              alt="Bengaluru map"
              className="w-full h-full object-cover brightness-60 contrast-120"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="md:col-span-8 flex flex-col md:flex-row gap-4">
          <a
            href="mailto:priyanshuarya22@gmail.com"
            className="flex-1 bg-[#00F63E] text-[#131313] font-black py-4 px-6 flex items-center justify-between group hover:bg-white transition-all pixel-border cursor-pointer"
          >
            <span className="uppercase tracking-tighter">INITIATE_HANDSHAKE</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => setScreen('PROJ')}
            className="flex-1 border border-[#00F63E] text-[#00F63E] font-black py-4 px-6 flex items-center justify-between hover:bg-[#00F63E]/10 transition-all cursor-pointer"
          >
            <span className="uppercase tracking-tighter">[ VIEW_REPOS ]</span>
            <Code size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );

};

const ExperienceScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 pb-20 px-6 max-w-5xl mx-auto w-full"
  >
    <section className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase crt-glow">
            &gt; EXEC_LOG: EXPERIENCE
          </h1>
          <p className="text-sm opacity-60 mt-2 font-mono">TIMESTAMP: 2024-10-27_04:12:00_UTC</p>
        </div>
        <div className="text-xs font-mono border border-[#00F63E]/30 p-2 bg-[#00F63E]/5">
          STATUS: <span className="text-[#00F63E]">[ AUTHORIZED ]</span><br />
          USER: P_ARYA.SYS<br />
          DIR: /ROOT/CORE/HISTORY
        </div>
      </div>
      <div className="mt-4 select-none">
        <div className="w-full h-px bg-[#00F63E]/40" />
      </div>
    </section>

    <div className="space-y-0 relative">
      <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[#00F63E]/20"></div>

      {[
        {
          year: '2026',
          title: 'Amazon | SDE 1',
          period: 'FEB 2026 - PRESENT // BENGALURU',
          content: '> INITIALIZING SYSTEM...\n> ROLE_TYPE: FULL_STACK_ENGINEERING\n> CORE_SERVICES: PRIME_VIDEO',
          footer: '#_LOG_ENTRY_001_PENDING',
          active: true
        },
        {
          year: '2025',
          title: 'idto.ai | Founding Engineer',
          period: 'JULY 2025 - JAN 2026',
          description: 'Leading backend & AI integration for identity verification systems.',
          tags: ['PY_FASTAPI', 'AI_VISION', 'POSTGRESQL', 'AWS_LAMBDA']
        },
        {
          year: '2025',
          title: 'Newgen Software | SDE (T)',
          period: 'JAN 2025 - JUNE 2025',
          objective: 'Validating AI/ML models for enterprise-grade automation pipelines. Ensuring system integrity.'
        },
        {
          year: '2024',
          title: 'NIC, MeitY | Trainee',
          period: 'JUNE 2024 - AUG 2024',
          scope: 'Architecture development for web-based government applications. Focus on secure backend protocols.'
        },
        {
          year: '2023',
          title: 'Dendrite.ai | Developer Intern',
          period: 'FEB 2023 - MARCH 2023',
          task: 'Construction of ML pipelines optimized for anomaly detection in high-frequency data streams.'
        }
      ].map((exp, i) => (
        <div key={i} className="relative pl-12 pb-12 group">
          <div className={`absolute left-0 top-1 w-6 h-6 border-4 border-[#131313] flex items-center justify-center ${exp.active ? 'bg-[#00F63E]' : 'bg-[#00F63E]/20'}`}>
            <span className={`w-1.5 h-1.5 ${exp.active ? 'bg-[#131313]' : 'bg-[#00F63E]/50'}`}></span>
          </div>
          <div className="font-mono">
            <div className="flex flex-wrap items-center gap-x-4 mb-2">
              <span className={`${exp.active ? 'bg-[#00F63E] text-black' : 'bg-[#00F63E]/10 text-[#00F63E]/60 border border-[#00F63E]/20'} px-2 py-0.5 text-xs font-bold`}>
                [{exp.year}]
              </span>
              <h2 className={`text-xl font-bold uppercase crt-glow ${!exp.active && 'opacity-70'}`}>{exp.title}</h2>
              <span className="text-xs opacity-50 ml-auto md:ml-0 tracking-tighter">{exp.period}</span>
            </div>
            <div className={`p-4 border border-[#00F63E]/20 bg-[#0e0e0e]/50 hover:border-[#00F63E]/60 transition-colors`}>
              {exp.content && <pre className="text-sm leading-relaxed mb-3 opacity-80 whitespace-pre-wrap">{exp.content}</pre>}
              {exp.description && <p className="text-sm leading-relaxed mb-3"><span className="text-[#00F63E] opacity-60">DESCRIPTION:</span> {exp.description}</p>}
              {exp.objective && <p className="text-sm leading-relaxed opacity-70"><span className="text-[#00F63E]/60">OBJECTIVE:</span> {exp.objective}</p>}
              {exp.scope && <p className="text-sm leading-relaxed opacity-70"><span className="text-[#00F63E]/60">SCOPE:</span> {exp.scope}</p>}
              {exp.task && <p className="text-sm leading-relaxed opacity-70"><span className="text-[#00F63E]/60">TASK:</span> {exp.task}</p>}

              {exp.tags && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] uppercase mt-4">
                  {exp.tags.map(tag => (
                    <div key={tag} className="border border-[#00F63E]/10 px-2 py-1 bg-[#00F63E]/5">{tag}</div>
                  ))}
                </div>
              )}
              {exp.footer && <div className="text-xs opacity-40 italic mt-4 text-right">{exp.footer}</div>}
            </div>
          </div>
        </div>
      ))}

      <div className="relative pl-12 pt-4">
        <div className="font-mono text-[#00F63E] text-lg">
          <span>$ FETCH_MORE_DATA</span>
          <span className="ml-2 w-3 h-6 bg-[#00F63E] inline-block cursor-blink align-middle"></span>
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillsScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 pb-20 px-6 max-w-6xl mx-auto w-full"
  >
    <div className="mb-12">
      <AsciiPre
        className="text-[#00F63E] crt-glow font-mono font-bold leading-none text-[0.7rem] md:text-[0.95rem] lg:text-[1.05rem] whitespace-pre"
        style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace', lineHeight: 1 }}
      >
        {dedent(`
 ███████╗██╗   ██╗███████╗ ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ 
 ██╔════╝╚██╗ ██╔╝██╔════╝██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ 
 ███████╗ ╚████╔╝ ███████╗██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
 ╚════██║  ╚██╔╝  ╚════██║██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
 ███████║   ██║   ███████║╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
 ╚══════╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ 
 `)}
      </AsciiPre>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="bg-[#00F63E] text-black px-2">MODULE: SYSCONFIG_V2.0</span>
        <span className="opacity-50">LOCATION: /ROOT/USER/PRIYANSHU/CONFIG</span>
        <span className="cursor-blink">█</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-7 space-y-8">
        <section className="border border-[#00F63E]/30 p-4 relative">
          <div className="absolute -top-3 left-4 bg-[#131313] px-2 text-xs font-bold">[INFRASTRUCTURE]</div>
          <div className="flex items-start gap-4">
            <span className="text-3xl opacity-50">01</span>
            <div>
              <h3 className="text-lg font-bold mb-2">Cloud Systems & Architecture</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS_SOLUTIONS_ARCH', 'AWS_CLOUD_PRACTITIONER', 'NETWORKING_VPC'].map(s => (
                  <span key={s} className="border border-[#00F63E] px-2 py-0.5 text-xs hover:bg-[#00F63E] hover:text-black transition-all cursor-default">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border border-[#00F63E]/30 p-4 relative">
          <div className="absolute -top-3 left-4 bg-[#131313] px-2 text-xs font-bold">[ML_INTELLIGENCE]</div>
          <div className="flex items-start gap-4">
            <span className="text-3xl opacity-50">02</span>
            <div className="w-full">
              <h3 className="text-lg font-bold mb-4 underline decoration-[#00F63E]/30 underline-offset-4">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: '01', name: 'Machine Learning', sub: 'Supervised / Unsupervised Learning' },
                  { id: '02', name: 'Data Science', sub: 'Statistical Modeling & Analysis' },
                  { id: '03', name: 'Anomaly Detection', sub: 'Neural Pattern Recognition' }
                ].map(skill => (
                  <div key={skill.id} className="bg-[#1b1b1b] p-3 border-l-4 border-[#00F63E]">
                    <div className="text-xs opacity-60 mb-1">ALGORITHM_{skill.id}</div>
                    <div className="font-bold">{skill.name}</div>
                    <div className="text-[10px] mt-2 opacity-50 uppercase">{skill.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0e0e0e] p-4 font-mono text-[10px] border border-[#00F63E]/10">
          <div className="text-[#0d4508]"># system_check --verbose</div>
          <div>[OK] Kernel 5.15.0-generic verified</div>
          <div>[OK] ML_LIBS (TensorFlow, PyTorch, Scikit-learn) initialized</div>
          <div>[OK] Cloud_Connect (AWS_CLI) authenticated</div>
          <div className="text-[#00F63E] mt-2">&gt; system ready for deployment_</div>
        </section>
      </div>

      <div className="md:col-span-5 space-y-8">
        <section className="border border-[#00F63E]/30 p-4 relative">
          <div className="absolute -top-3 left-4 bg-[#131313] px-2 text-xs font-bold">[ACADEMIC_LOGS]</div>
          <div className="space-y-6">
            <div className="relative pl-4 border-l border-[#00F63E]/20">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#00F63E]"></div>
              <div className="text-[10px] text-[#0d4508] font-bold">DEC 2021 - JULY 2025</div>
              <h4 className="font-bold text-sm">IIIT Sonepat</h4>
              <div className="text-xs opacity-70">B.Tech, Information Technology</div>
              <div className="mt-2 flex items-center gap-2">
                <CheckCircle2 size={12} />
                <span className="text-[10px] uppercase">Credential: COMPLETED</span>
              </div>
            </div>
            <div className="relative pl-4 border-l border-[#00F63E]/20">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#00F63E]"></div>
              <div className="text-[10px] text-[#0d4508] font-bold">DEC 2020 - JAN 2024</div>
              <h4 className="font-bold text-sm">IIT Madras</h4>
              <div className="text-xs opacity-70">Diploma, Data Science & Programming</div>
              <div className="mt-2 flex items-center gap-2">
                <CheckCircle2 size={12} />
                <span className="text-[10px] uppercase">Credential: COMPLETED</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <div className="border border-[#00F63E]/30 p-3 aspect-square flex flex-col justify-between">
            <div className="text-[10px] opacity-50">SYS_UPTIME</div>
            <div className="text-2xl font-bold crt-glow">22.4k</div>
            <div className="text-[10px] uppercase">Hours coded</div>
          </div>
          <div className="border border-[#00F63E]/30 p-3 aspect-square flex flex-col justify-between">
            <div className="text-[10px] opacity-50">CERT_STATUS</div>
            <div className="text-2xl font-bold crt-glow">VALID</div>
            <div className="text-[10px] uppercase">AWS_RENEWAL: 2026</div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectsScreen = () => {
  const [repos, setRepos] = useState<any[] | null>(null);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [totalReposCount, setTotalReposCount] = useState<number | null>(null);
  const [contributionsCount, setContributionsCount] = useState<number | null>(null);
  const [lastCommitAgo, setLastCommitAgo] = useState<string | null>(null);

  useEffect(() => {
    setLoadingRepos(true);
    fetch('https://api.github.com/users/priyanshuarya22/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.map(r => ({
            id: r.id,
            title: r.name,
            desc: r.description || '',
            tags: r.language ? [String(r.language).toUpperCase()] : [],
            stars: r.stargazers_count ?? 0,
            forks: r.forks_count ?? 0,
            html_url: r.html_url,
            pushed_at: r.pushed_at || null
          })));
        } else {
          setRepos([]);
        }
      })
      .catch(() => setRepos([]))
      .finally(() => setLoadingRepos(false));

    // fetch user info and recent public events to derive contributions/last-commit
    fetch('https://api.github.com/users/priyanshuarya22')
      .then(r => r.json())
      .then(u => {
        if (u && typeof u.public_repos === 'number') setTotalReposCount(u.public_repos);
      })
      .catch(() => null);

    fetch('https://api.github.com/users/priyanshuarya22/events/public')
      .then(r => r.json())
      .then(events => {
        if (Array.isArray(events)) {
          // contributions proxy: sum commit counts from recent PushEvents
          const contribs = events.reduce((acc: number, ev: any) => {
            if (ev.type === 'PushEvent' && ev.payload && Array.isArray(ev.payload.commits)) {
              return acc + ev.payload.commits.length;
            }
            return acc;
          }, 0);
          setContributionsCount(contribs);

          // derive most recent commit timestamp from events
          const pushTimes = events.filter((e: any) => e.type === 'PushEvent' && e.created_at).map((e: any) => e.created_at);
          if (pushTimes.length) {
            const latest = pushTimes.sort().reverse()[0];
            setLastCommitAgo(timeAgo(new Date(latest)));
          }
        }
      })
      .catch(() => null);
  }, []);

  const iconFor = (lang: string | undefined) => {
    if (!lang) return <Code size={18} />;
    const l = lang.toLowerCase();
    if (l.includes('python')) return <Cloud size={18} />;
    if (l.includes('rust')) return <Shield size={18} />;
    if (l.includes('sql') || l.includes('postgres') || l.includes('db')) return <Database size={18} />;
    return <Code size={18} />;
  };

  function timeAgo(date: Date) {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const intervals: [number, string][] = [
      [31536000, 'yr'],
      [2592000, 'mo'],
      [86400, 'd'],
      [3600, 'h'],
      [60, 'm'],
      [1, 's']
    ];
    for (const [sec, label] of intervals) {
      const val = Math.floor(seconds / sec);
      if (val >= 1) return `${val}${label}_AGO`;
    }
    return 'just_now';
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 px-6 max-w-7xl mx-auto w-full"
    >
      <section className="mb-12">
        <pre className="text-[#00F63E] crt-glow font-mono font-bold leading-none text-[0.7rem] md:text-[0.95rem] lg:text-[1.05rem] whitespace-pre"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace', lineHeight: 1 }}
        >
          {dedent(`
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗ ████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝ ╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║         ██║   
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║         ██║   
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗    ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝    ╚═╝  
          `)}
        </pre>
        <div className="mt-4 flex items-center gap-2 mb-2">
          <span className="text-[#00F63E] font-bold">DIRECTORY:</span>
          <a
            href="https://github.com/priyanshuarya22"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2a2a2a] px-2 text-white max-w-full break-words break-all whitespace-normal hover:underline"
            title="Open GitHub profile"
          >/root/projects/github.com/priyanshuarya22</a>
        </div>
        <div className="h-px w-full bg-[#474747] opacity-20 mb-4"></div>
        <p className="text-[#c6c6c6] text-sm max-w-2xl">
          SYSTEM_LOG: Initializing repository grid... Fetching metadata for 12 active modules. Filtering by deployment status: [STABLE].
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingRepos && (
          <div className="col-span-full text-center text-[#00F63E]">Loading repositories...</div>
        )}
        {!loadingRepos && (!repos || repos.length === 0) && (
          <div className="col-span-full text-center text-[#00F63E]">No repositories found.</div>
        )}
        {!loadingRepos && repos && repos.map(repo => (
          <div key={repo.id} className="border border-[#00F63E] bg-[#0e0e0e] p-4 group hover:bg-[#00F63E]/5 transition-all shadow-[0_0_8px_rgba(0,246,62,0.1)]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-[#0d4508]">[{repo.id}]</span>
              <span className="text-[#00F63E]">{iconFor(repo.tags && repo.tags[0])}</span>
            </div>
            <h3 className="text-[#00F63E] font-bold mb-2 text-lg uppercase tracking-tight">{repo.title}</h3>
            <p className="text-xs text-[#c6c6c6] mb-6 leading-relaxed">{repo.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {(repo.tags || []).map((tag: string) => (
                <span key={tag} className="text-[10px] border border-[#00F63E] px-1 py-0.5">{tag}</span>
              ))}
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[#00F63E] pt-4 border-t border-[#474747]/30">
              <div className="flex gap-4">
                <span>STARS: {repo.stars}</span>
                <span>FORKS: {repo.forks}</span>
              </div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group-hover:translate-x-1 transition-transform cursor-pointer underline">VIEW_SRC -&gt;</a>
            </div>
          </div>
        ))}

        <div className="border border-dashed border-[#00F63E]/30 bg-transparent p-4 flex flex-col items-center justify-center opacity-50">
          <div className="w-8 h-8 border border-[#00F63E] flex items-center justify-center mb-2">+</div>
          <p className="text-[10px] font-mono tracking-widest uppercase">Initializing_New_Repo...</p>
          <p className="text-[10px] font-mono mt-1">EST_COMPLETION: Q3_2024</p>
        </div>
      </div>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'TOTAL_REPOS', val: (totalReposCount ?? (repos ? repos.length : null)) },
          { label: 'CONTRIBUTIONS', val: (contributionsCount ?? '—') },
          { label: 'SYS_UPTIME', val: '99.98%' },
          { label: 'LAST_COMMIT', val: (lastCommitAgo ?? '—') }
        ].map(stat => (
          <div key={stat.label} className="bg-[#1f1f1f] p-4 border-l-2 border-[#00F63E]">
            <div className="text-[10px] text-[#c6c6c6] mb-1">{stat.label}</div>
            <div className="text-xl font-bold text-[#00F63E]">{stat.val ?? '—'}</div>
          </div>
        ))}
      </section>

      <div className="mt-12 mb-8 text-center text-xs opacity-40">
        <span className="text-[#00F63E]">&gt;</span> sudo apt-get install more-projects
        <span className="inline-block w-2 h-4 bg-[#00F63E] align-middle ml-1 cursor-blink"></span>
      </div>
    </motion.div>
  );
}

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('HOME');

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#00F63E] selection:text-black">
      <Scanlines />
      <Header currentScreen={screen} setScreen={setScreen} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {screen === 'HOME' && <HomeScreen key="home" setScreen={setScreen} />}
          {screen === 'EXP' && <ExperienceScreen key="exp" />}
          {screen === 'SKILLS' && <SkillsScreen key="skills" />}
          {screen === 'PROJ' && <ProjectsScreen key="proj" />}
        </AnimatePresence>
      </main>

      <Footer />

      {/* CRT Overlay effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" style={{
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 4px, 3px 100%'
      }}></div>
    </div>
  );
}
