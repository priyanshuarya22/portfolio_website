import React from 'react';
import { motion } from 'framer-motion';
import AsciiPre from '../components/AsciiPre';
import { dedent } from '../lib/utils';
import { CheckCircle2 } from 'lucide-react';

const SkillsScreen = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-20 px-6 max-w-6xl mx-auto w-full"
    >
        <div className="mb-12">
            <AsciiPre
                className="text-primary-green crt-glow font-mono font-bold leading-none text-[0.7rem] md:text-[0.95rem] lg:text-[1.05rem] whitespace-pre"
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
                <span className="bg-primary-green text-black px-2">MODULE: SYSCONFIG_V2.0</span>
                <span className="opacity-50">LOCATION: /ROOT/USER/PRIYANSHU/CONFIG</span>
                <span className="cursor-blink">█</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-8">
                <section className="border border-primary-green/30 p-4 relative">
                    <div className="absolute -top-3 left-4 bg-bg-dark px-2 text-xs font-bold">[INFRASTRUCTURE]</div>
                    <div className="flex items-start gap-4">
                        <span className="text-3xl opacity-50">01</span>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Cloud Systems & Architecture</h3>
                            <div className="flex flex-wrap gap-2">
                                {['AWS_SOLUTIONS_ARCH', 'AWS_CLOUD_PRACTITIONER', 'NETWORKING_VPC'].map(s => (
                                    <span key={s} className="border border-primary-green px-2 py-0.5 text-xs hover:bg-primary-green hover:text-black transition-all cursor-default">{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border border-primary-green/30 p-4 relative">
                    <div className="absolute -top-3 left-4 bg-bg-dark px-2 text-xs font-bold">[ML_INTELLIGENCE]</div>
                    <div className="flex items-start gap-4">
                        <span className="text-3xl opacity-50">02</span>
                        <div className="w-full">
                            <h3 className="text-lg font-bold mb-4 underline decoration-primary-green/30 underline-offset-4">Core Competencies</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { id: '01', name: 'Machine Learning', sub: 'Supervised / Unsupervised Learning' },
                                    { id: '02', name: 'Data Science', sub: 'Statistical Modeling & Analysis' },
                                    { id: '03', name: 'Anomaly Detection', sub: 'Neural Pattern Recognition' }
                                ].map(skill => (
                                    <div key={skill.id} className="bg-[#1b1b1b] p-3 border-l-4 border-primary-green">
                                        <div className="text-xs opacity-60 mb-1">ALGORITHM_{skill.id}</div>
                                        <div className="font-bold">{skill.name}</div>
                                        <div className="text-[10px] mt-2 opacity-50 uppercase">{skill.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0e0e0e] p-4 font-mono text-[10px] border border-primary-green/10">
                    <div className="text-[#0d4508]"># system_check --verbose</div>
                    <div>[OK] Kernel 5.15.0-generic verified</div>
                    <div>[OK] ML_LIBS (TensorFlow, PyTorch, Scikit-learn) initialized</div>
                    <div>[OK] Cloud_Connect (AWS_CLI) authenticated</div>
                    <div className="text-primary-green mt-2">&gt; system ready for deployment_</div>
                </section>
            </div>

            <div className="md:col-span-5 space-y-8">
                <section className="border border-primary-green/30 p-4 relative">
                    <div className="absolute -top-3 left-4 bg-bg-dark px-2 text-xs font-bold">[ACADEMIC_LOGS]</div>
                    <div className="space-y-6">
                        <div className="relative pl-4 border-l border-primary-green/20">
                            <div className="absolute -left-1.25 top-0 w-2 h-2 bg-primary-green"></div>
                            <div className="text-[10px] text-[#0d4508] font-bold">DEC 2021 - JULY 2025</div>
                            <h4 className="font-bold text-sm">IIIT Sonepat</h4>
                            <div className="text-xs opacity-70">B.Tech, Information Technology</div>
                            <div className="mt-2 flex items-center gap-2">
                                <CheckCircle2 size={12} />
                                <span className="text-[10px] uppercase">Credential: COMPLETED</span>
                            </div>
                        </div>
                        <div className="relative pl-4 border-l border-primary-green/20">
                            <div className="absolute -left-1.25 top-0 w-2 h-2 bg-primary-green"></div>
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
                    <div className="border border-primary-green/30 p-3 aspect-square flex flex-col justify-between">
                        <div className="text-[10px] opacity-50">SYS_UPTIME</div>
                        <div className="text-2xl font-bold crt-glow">22.4k</div>
                        <div className="text-[10px] uppercase">Hours coded</div>
                    </div>
                    <div className="border border-primary-green/30 p-3 aspect-square flex flex-col justify-between">
                        <div className="text-[10px] opacity-50">CERT_STATUS</div>
                        <div className="text-2xl font-bold crt-glow">VALID</div>
                        <div className="text-[10px] uppercase">AWS_RENEWAL: 2026</div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default SkillsScreen;
