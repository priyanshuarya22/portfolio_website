import React from 'react';
import { motion } from 'framer-motion';

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
                <div className="text-xs font-mono border border-primary-green/30 p-2 bg-primary-green/5">
                    STATUS: <span className="text-primary-green">[ AUTHORIZED ]</span><br />
                    USER: P_ARYA.SYS<br />
                    DIR: /ROOT/CORE/HISTORY
                </div>
            </div>
            <div className="mt-4 select-none">
                <div className="w-full h-px bg-primary-green/40" />
            </div>
        </section>

        <div className="space-y-0 relative">
            <div className="absolute left-2.75 top-4 bottom-4 w-px bg-primary-green/20"></div>

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
                    <div className={`absolute left-0 top-1 w-6 h-6 border-4 border-bg-dark flex items-center justify-center ${exp.active ? 'bg-primary-green' : 'bg-primary-green/20'}`}>
                        <span className={`w-1.5 h-1.5 ${exp.active ? 'bg-bg-dark' : 'bg-primary-green/50'}`}></span>
                    </div>
                    <div className="font-mono">
                        <div className="flex flex-wrap items-center gap-x-4 mb-2">
                            <span className={`${exp.active ? 'bg-primary-green text-black' : 'bg-primary-green/10 text-primary-green/60 border border-primary-green/20'} px-2 py-0.5 text-xs font-bold`}>
                                [{exp.year}]
                            </span>
                            <h2 className={`text-xl font-bold uppercase crt-glow ${!exp.active && 'opacity-70'}`}>{exp.title}</h2>
                            <span className="text-xs opacity-50 ml-auto md:ml-0 tracking-tighter">{exp.period}</span>
                        </div>
                        <div className={`p-4 border border-primary-green/20 bg-[#0e0e0e]/50 hover:border-primary-green/60 transition-colors`}>
                            {exp.content && <pre className="text-sm leading-relaxed mb-3 opacity-80 whitespace-pre-wrap">{exp.content}</pre>}
                            {exp.description && <p className="text-sm leading-relaxed mb-3"><span className="text-primary-green opacity-60">DESCRIPTION:</span> {exp.description}</p>}
                            {exp.objective && <p className="text-sm leading-relaxed opacity-70"><span className="text-primary-green/60">OBJECTIVE:</span> {exp.objective}</p>}
                            {exp.scope && <p className="text-sm leading-relaxed opacity-70"><span className="text-primary-green/60">SCOPE:</span> {exp.scope}</p>}
                            {exp.task && <p className="text-sm leading-relaxed opacity-70"><span className="text-primary-green/60">TASK:</span> {exp.task}</p>}

                            {exp.tags && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] uppercase mt-4">
                                    {exp.tags.map(tag => (
                                        <div key={tag} className="border border-primary-green/10 px-2 py-1 bg-primary-green/5">{tag}</div>
                                    ))}
                                </div>
                            )}
                            {exp.footer && <div className="text-xs opacity-40 italic mt-4 text-right">{exp.footer}</div>}
                        </div>
                    </div>
                </div>
            ))}

            <div className="relative pl-12 pt-4">
                <div className="font-mono text-primary-green text-lg">
                    <span>$ FETCH_MORE_DATA</span>
                    <span className="ml-2 w-3 h-6 bg-primary-green inline-block cursor-blink align-middle"></span>
                </div>
            </div>
        </div>
    </motion.div>
);

export default ExperienceScreen;
