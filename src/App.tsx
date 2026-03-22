/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  ChevronLeft
} from 'lucide-react';

// --- Types ---

type Screen = 'HOME' | 'EXP' | 'SKILLS' | 'PROJ';

// --- Components ---

const Header = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => (
  <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-2 bg-[#131313] border-b border-[#00F63E] shadow-[0_0_8px_rgba(0,246,62,0.3)]">
    <div className="text-lg font-bold text-[#00F63E] animate-pulse font-mono uppercase tracking-widest crt-glow">
      PRIYANSHU_ARYA_OS_V1.0.4
    </div>
    <nav className="hidden md:flex items-center gap-6 font-mono uppercase tracking-widest text-xs">
      {(['HOME', 'EXP', 'SKILLS', 'PROJ'] as Screen[]).map((s) => (
        <button
          key={s}
          onClick={() => setScreen(s)}
          className={`px-2 py-0.5 transition-colors duration-75 cursor-pointer ${
            currentScreen === s 
              ? 'text-[#131313] bg-[#00F63E]' 
              : 'text-[#00F63E] opacity-70 hover:opacity-100 hover:bg-[#00F63E] hover:text-[#131313]'
          }`}
        >
          {s}
        </button>
      ))}
    </nav>
    <div className="flex items-center gap-4 text-[#00F63E]">
      <Terminal size={16} className="cursor-pointer hover:bg-[#00F63E] hover:text-[#131313] p-0.5" />
      <Settings size={16} className="cursor-pointer hover:bg-[#00F63E] hover:text-[#131313] p-0.5" />
      <Power size={16} className="cursor-pointer hover:bg-[#00F63E] hover:text-[#131313] p-0.5" />
    </div>
  </header>
);

const Footer = () => (
  <footer className="fixed bottom-0 w-full z-50 flex flex-row items-center justify-between px-6 py-1 bg-[#131313] bg-opacity-95 backdrop-blur-sm border-t border-[#00F63E]">
    <div className="font-mono text-[10px] uppercase text-[#00F63E]">
      (C) 1998-2024 PRIYANSHU_ARYA.SYS
    </div>
    <div className="flex gap-6 font-mono text-[10px] uppercase">
      <a href="https://github.com/priyanshuarya22" target="_blank" rel="noopener noreferrer" className="text-[#00F63E] opacity-60 hover:text-white hover:bg-[#00F63E]/20 px-2 transition-all">GITHUB</a>
      <a href="#" className="text-[#00F63E] opacity-60 hover:text-white hover:bg-[#00F63E]/20 px-2 transition-all">LINKEDIN</a>
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

const HomeScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
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
      <pre className="text-[#00F63E] crt-glow font-bold leading-none text-[0.6rem] md:text-[1rem] lg:text-[1.2rem] whitespace-pre">
{`██████╗ ██████╗ ██╗██╗   ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗
██╔══██╗██╔══██╗██║╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝██║  ██║██║   ██║
██████╔╝██████╔╝██║ ╚████╔╝ ███████║██╔██╗ ██║███████╗███████║██║   ██║
██╔═══╝ ██╔══██╗██║  ╚██╔╝  ██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║
██║     ██║  ██║██║   ██║   ██║  ██║██║ ╚████║███████║██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝`}
      </pre>
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
          src="https://picsum.photos/seed/cyber/400/400?blur=2" 
          alt="Cybernetic aesthetic" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <Cpu size={48} className="mb-4 crt-glow text-[#00F63E]" />
          <span className="text-[10px] font-bold tracking-widest opacity-80 uppercase text-[#00F63E]">SYNAPTIC_LINK_ACTIVE</span>
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
            src="https://picsum.photos/seed/bengaluru/400/200?grayscale" 
            alt="Location Map" 
            className="w-full h-full object-cover brightness-50 contrast-150"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="md:col-span-8 flex flex-col md:flex-row gap-4">
        <button 
          onClick={() => setScreen('PROJ')}
          className="flex-1 bg-[#00F63E] text-[#131313] font-black py-4 px-6 flex items-center justify-between group hover:bg-white transition-all pixel-border cursor-pointer"
        >
          <span className="uppercase tracking-tighter">Initiate_Handshake</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
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
          STATUS: <span className="text-[#00F63E]">[ AUTHORIZED ]</span><br/>
          USER: P_ARYA.SYS<br/>
          DIR: /ROOT/CORE/HISTORY
        </div>
      </div>
      <div className="mt-4 text-[#00F63E]/40 select-none">
        ========================================================================================
      </div>
    </section>

    <div className="space-y-0 relative">
      <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[#00F63E]/20"></div>
      
      {[
        {
          year: '2026',
          title: 'Amazon | SDE 1',
          period: 'FEB 2026 - PRESENT // BENGALURU',
          content: '> INITIALIZING SYSTEM...\n> ROLE_TYPE: FULL_STACK_ENGINEERING\n> CORE_SERVICES: RETAIL_INFRASTRUCTURE',
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
    <div className="mb-12 crt-glow">
      <pre className="text-[0.5rem] leading-[0.6rem] md:text-xs md:leading-tight">
{` ██████╗██╗   ██╗███████╗ ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ 
██╔════╝╚██╗ ██╔╝██╔════╝██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ 
╚█████╗  ╚████╔╝ ███████╗██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
 ╚═══██╗  ╚██╔╝  ╚════██║██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
██████╔╝   ██║   ███████║╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
╚═════╝    ╚═╝   ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ `}
      </pre>
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
              <div className="mt-2 h-1 w-full bg-[#2a2a2a] overflow-hidden">
                <div className="h-full bg-[#00F63E] w-[85%]"></div>
              </div>
              <div className="text-[8px] mt-1 text-right">PROGRESS: 85%</div>
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

const ProjectsScreen = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="pt-24 pb-20 px-6 max-w-7xl mx-auto w-full"
  >
    <section className="mb-12">
      <pre className="text-[10px] md:text-xs leading-none text-[#00F63E] opacity-80 mb-6">
{`  _____  _____   ____       _ ______ _____ _______ _____ 
 |  __ \\|  __ \\ / __ \\     | |  ____/ ____|__   __/ ____|
 | |__) | |__) | |  | |    | | |__ | |       | | | (___  
 |  ___/|  _  /| |  | |_   | |  __|| |       | |  \\___ \\ 
 | |    | | \\ \\| |__| | |__| | |___| |____   | |  ____) |
 |_|    |_|  \\_\\\\____/ \\____/|______\\_____|  |_| |_____/ `}
      </pre>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#00F63E] font-bold">DIRECTORY:</span>
        <span className="bg-[#2a2a2a] px-2 text-white">/root/projects/github.com/priyanshuarya22</span>
      </div>
      <div className="h-px w-full bg-[#474747] opacity-20 mb-4"></div>
      <p className="text-[#c6c6c6] text-sm max-w-2xl">
        SYSTEM_LOG: Initializing repository grid... Fetching metadata for 12 active modules. Filtering by deployment status: [STABLE].
      </p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          id: '001',
          icon: <Cloud size={18} />,
          title: 'cloud-anomaly-detector',
          desc: 'Real-time traffic analysis engine utilizing machine learning to identify DDoS patterns in AWS VPC logs.',
          tags: ['PYTHON', 'AWS_LAMBDA', 'TERRAFORM'],
          stars: 124,
          forks: 42
        },
        {
          id: '002',
          icon: <ChevronRight size={18} />,
          title: 'distributed-task-queue',
          desc: 'Low-latency message broker system designed for high-concurrency microservices orchestration.',
          tags: ['GO', 'REDIS', 'GRPC'],
          stars: 89,
          forks: 15
        },
        {
          id: '003',
          icon: <Code size={18} />,
          title: 'serverless-api-gateway',
          desc: 'Custom implementation of a lightweight API gateway with dynamic rate limiting and auth injection.',
          tags: ['NODEJS', 'DYNAMODB', 'K8S'],
          stars: 215,
          forks: 67
        },
        {
          id: '004',
          icon: <Shield size={18} />,
          title: 'zero-trust-proxy',
          desc: 'Identity-aware proxy for securing internal dashboard access without a traditional VPN.',
          tags: ['RUST', 'OAUTH2', 'DOCKER'],
          stars: 56,
          forks: 8
        },
        {
          id: '005',
          icon: <Database size={18} />,
          title: 'ledger-blockchain-core',
          desc: 'Experimental PoW blockchain implementation to demonstrate consensus algorithms.',
          tags: ['C++', 'OPENSSL'],
          stars: 312,
          forks: 110
        }
      ].map(proj => (
        <div key={proj.id} className="border border-[#00F63E] bg-[#0e0e0e] p-4 group hover:bg-[#00F63E]/5 transition-all shadow-[0_0_8px_rgba(0,246,62,0.1)]">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs text-[#0d4508]">[{proj.id}]</span>
            <span className="text-[#00F63E]">{proj.icon}</span>
          </div>
          <h3 className="text-[#00F63E] font-bold mb-2 text-lg uppercase tracking-tight">{proj.title}</h3>
          <p className="text-xs text-[#c6c6c6] mb-6 leading-relaxed">{proj.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {proj.tags.map(tag => (
              <span key={tag} className="text-[10px] border border-[#00F63E] px-1 py-0.5">{tag}</span>
            ))}
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#00F63E] pt-4 border-t border-[#474747]/30">
            <div className="flex gap-4">
              <span>STARS: {proj.stars}</span>
              <span>FORKS: {proj.forks}</span>
            </div>
            <span className="group-hover:translate-x-1 transition-transform cursor-pointer underline">VIEW_SRC -&gt;</span>
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
        { label: 'TOTAL_REPOS', val: '048' },
        { label: 'CONTRIBUTIONS', val: '1,204' },
        { label: 'SYS_UPTIME', val: '99.98%' },
        { label: 'LAST_COMMIT', val: '2H_AGO' }
      ].map(stat => (
        <div key={stat.label} className="bg-[#1f1f1f] p-4 border-l-2 border-[#00F63E]">
          <div className="text-[10px] text-[#c6c6c6] mb-1">{stat.label}</div>
          <div className="text-xl font-bold text-[#00F63E]">{stat.val}</div>
        </div>
      ))}
    </section>

    <div className="mt-12 mb-8 text-center text-xs opacity-40">
      <span className="text-[#00F63E]">&gt;</span> sudo apt-get install more-projects
      <span className="inline-block w-2 h-4 bg-[#00F63E] align-middle ml-1 cursor-blink"></span>
    </div>
  </motion.div>
);

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
