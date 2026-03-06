import React, { useState } from 'react';
import './Milestone.css';
import Footer from '../components/Footer';

const Milestone = () => {
    const [paymentReleased, setPaymentReleased] = useState(false);

    if (paymentReleased) {
        return (
            <div className="milestone-page bg-background-dark text-slate-100 min-h-screen flex items-center justify-center font-display overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grayscale">
                    <header className="border-b border-border-dark px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <div className="size-8 bg-primary/20 rounded-lg"></div>
                            <div className="h-4 w-48 bg-slate-800 rounded"></div>
                        </div>
                    </header>
                    <div className="flex h-full">
                        <aside className="w-64 border-r border-border-dark p-6 space-y-4">
                            <div className="h-4 w-full bg-slate-800 rounded"></div>
                            <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                        </aside>
                        <main className="flex-1 p-8">
                            <div className="w-full h-96 bg-card-dark rounded-2xl border border-border-dark"></div>
                        </main>
                    </div>
                </div>

                <div className="absolute inset-0 bg-black/60 z-10"></div>

                <div className="relative z-20 w-full max-w-2xl mx-auto px-6">
                    <div className="glass-lg rounded-[2rem] p-10 glow-purple-lg border-t-primary/50 relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="particle w-2 h-2 top-1/4 left-1/4 animate-ping opacity-40"></div>
                            <div className="particle w-1 h-1 top-1/3 right-1/4 animate-pulse"></div>
                            <div className="particle w-3 h-3 bottom-1/4 left-1/2 animate-bounce opacity-30"></div>
                            <div className="particle w-2 h-2 top-1/2 right-10 animate-pulse opacity-50"></div>
                        </div>

                        <div className="text-center space-y-6 relative z-10">
                            <div className="inline-flex items-center justify-center size-24 rounded-full bg-primary/20 border-2 border-primary glow-purple mb-2">
                                <span className="material-symbols-outlined text-5xl text-primary font-bold">check</span>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold tracking-tight glow-text-lg mb-2">Payment Released</h1>
                                <p className="text-slate-400 text-lg">Milestone 2 payment of <span className="text-white font-bold">$800.00</span> has been transferred to Alex.</p>
                            </div>
                        </div>

                        <div className="mt-12 space-y-8 border-t border-white/10 pt-10">
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Rate the Experience</h3>
                                <div className="flex gap-2">
                                    <span className="material-symbols-outlined text-4xl text-primary cursor-pointer fill-1">star</span>
                                    <span className="material-symbols-outlined text-4xl text-primary cursor-pointer fill-1">star</span>
                                    <span className="material-symbols-outlined text-4xl text-primary cursor-pointer fill-1">star</span>
                                    <span className="material-symbols-outlined text-4xl text-primary cursor-pointer fill-1">star</span>
                                    <span className="material-symbols-outlined text-4xl text-primary cursor-pointer fill-1">star</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-medium text-slate-300 ml-1">Write a Review (Optional)</label>
                                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px] placeholder:text-slate-600 resize-none" placeholder="Share your thoughts on the collaboration..."></textarea>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 bg-primary rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">trending_up</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white flex items-center gap-2">
                                            AI Impact Score
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase">+12.4</span>
                                        </h4>
                                        <p className="text-xs text-slate-400 mt-1">This project significantly boosted the freelancer's Trust Score.</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-primary italic">98.2</div>
                                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">New Global Rank</div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 pt-4">
                                <a href="/dashboard" className="w-full py-4 bg-primary hover:bg-primary/90 rounded-xl font-bold text-white shadow-lg glow-purple transition-all text-lg flex items-center justify-center gap-2 text-decoration-none">
                                    Back to Dashboard
                                    <span className="material-symbols-outlined">dashboard</span>
                                </a>
                                <button className="w-full py-3 border border-white/10 hover-bg-white-5 rounded-xl font-bold text-slate-300 transition-all text-sm">
                                    Share Experience
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                        Verified by JustFAI Trust Protocol • Transaction ID: #FAI-8829-XP0
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
            </div>
        );
    }

    return (
        <div className="milestone-page bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
            {/* Top Navigation Bar */}
            <header className="milestone-header">
                <div className="max-w-[1600px] mx-auto px-6 h-100 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white p-2">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">JustFAI</span>
                        </div>
                        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-400">
                            <a className="hover:text-primary transition-colors text-decoration-none text-slate-400" href="/post-project">Project: Modern SaaS Landing Page</a>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-slate-100">Milestone 2: Frontend Implementation</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider glow-purple">
                            Pending AI &amp; Client Review
                        </div>
                        <div class="flex items-center gap-4 border-l border-border-dark pl-6">
                            <button className="p-2 text-slate-400 hover-white transition-colors bg-transparent border-0">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="size-9 rounded-full bg-primary/20 border border-primary/30 overflow-hidden" style={{ width: '2.25rem', height: '2.25rem' }}>
                                <img className="w-100 h-100 object-cover" alt="User profile avatar portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2tfj_kDPH1RkrjDQaWdTLrayLNWQEc5_iy_Ix1MxYulhuL3L8m7OEyLbhZ2WVkhJCfCO60B4LEBlUNzn3QT5U4Pu4Uru-s4VdN7cGacPTaKCAFnVLVC59LTLM6HKVVYgaEUlXgTUIAMWXxxqN-5rb2mL8mCLABVFkRPjmUJ2Zb0WDHz_Tn55nwsciKzc5LOw9aw_IxApVt8TPwbgxZFv-f-NHLjHYXqZoWu8mezctC6HMWNejSPtLnvm7gkHNaTaFJQBBGMc9kI_2" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="milestone-main">
                {/* Left Sidebar: Deliverables */}
                <aside className="milestone-sidebar-left">
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Submitted Assets</h3>
                        <nav className="flex flex-col gap-1">
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-decoration-none" href="/">
                                <span className="material-symbols-outlined text-sm">folder_open</span>
                                <span className="text-sm">Source Code</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover-bg-white-5 text-slate-400 transition-colors text-decoration-none" href="/">
                                <span className="material-symbols-outlined text-sm">palette</span>
                                <span className="text-sm">Design System</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover-bg-white-5 text-slate-400 transition-colors text-decoration-none" href="/">
                                <span className="material-symbols-outlined text-sm">description</span>
                                <span className="text-sm">Documentation</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover-bg-white-5 text-slate-400 transition-colors text-decoration-none" href="/">
                                <span className="material-symbols-outlined text-sm">image</span>
                                <span className="text-sm">Static Assets</span>
                            </a>
                        </nav>
                    </div>
                    <div className="mt-auto p-4 rounded-xl border" style={{ background: 'linear-gradient(to bottom right, rgba(137, 89, 247, 0.05), transparent)', borderColor: 'rgba(137, 89, 247, 0.1)' }}>
                        <p className="text-xs text-slate-400 mb-2">Total Files</p>
                        <p className="text-2xl font-bold m-0">142</p>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                            <span className="text-[10px] font-bold text-primary uppercase">Scanned for Malware</span>
                        </div>
                    </div>
                </aside>

                {/* Center Panel: Review Area */}
                <section className="milestone-center">
                    <div className="max-w-4xl mx-auto space-y-8" style={{ maxWidth: '56rem' }}>
                        {/* Main Preview Area */}
                        <div className="relative glass-md rounded-2xl overflow-hidden aspect-video group">
                            <img className="w-100 h-100 object-cover opacity-80" alt="Dashboard interface screenshot with charts and data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR8YO-TtN29EqsfJiK4E1dhoiqa4C__NbL7INztf9C94-pBRAdFiL3IiM8QQGrVYUlsQMsyNT_8MIRznixFhYUrZN9fMAH5a5Ox7reqSQ9O3eqEao-8jBA4oQ0QuvV8bkIFBQaaWBDsUErvArF0qKZ2ZtVvmgk1rg-h0VeN4t8ghJ5AWTchci78_24ZvKhyUzlfswUDYWNswsbhU1A7gc_XsfzFb2OcUUMQDzSRFYPD1wVEK4KCUx61s87_ipsT5sDtCMDcNLVb2st" />
                            {/* AI Scan Overlay */}
                            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center" style={{ backgroundColor: 'rgba(137, 89, 247, 0.05)' }}>
                                <div className="w-full h-1 animate-pulse absolute top-1/2 -translate-y-1/2" style={{ background: 'linear-gradient(to right, transparent, var(--primary), transparent)' }}></div>
                            </div>

                            {/* AI Review Widget */}
                            <div className="absolute bottom-6 left-6 right-6 glass-md p-6 rounded-xl flex items-center justify-between border-l-4 border-l-primary shadow-2xl" style={{ borderLeftColor: 'var(--primary)' }}>
                                <div className="flex items-center gap-6">
                                    <div className="relative size-20" style={{ width: '5rem', height: '5rem' }}>
                                        <svg className="w-100 h-100 -rotate-90" viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
                                            <circle className="stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="2.5"></circle>
                                            <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset="6" strokeLinecap="round" strokeWidth="2.5"></circle>
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-xl font-extrabold text-white" style={{ fontSize: '1.25rem' }}>94%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white flex items-center gap-2 m-0 mt-1 mb-1">
                                            AI Quality Score
                                            <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                                        </h4>
                                        <p className="text-slate-400 text-sm m-0">Analysis complete. Recommendation: <span className="text-primary font-bold">Approve</span></p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="material-symbols-outlined text-emerald-500 text-sm" style={{ color: '#10b981' }}>check_circle</span>
                                        <span className="text-slate-300">Code Standards: Passed</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="material-symbols-outlined text-emerald-500 text-sm" style={{ color: '#10b981' }}>check_circle</span>
                                        <span className="text-slate-300">Punctuality: +2 Days</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="material-symbols-outlined text-emerald-500 text-sm" style={{ color: '#10b981' }}>check_circle</span>
                                        <span className="text-slate-300">Clean Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="material-symbols-outlined text-emerald-500 text-sm" style={{ color: '#10b981' }}>check_circle</span>
                                        <span className="text-slate-300">Requirements: 5/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Requirement Checklist */}
                        <div className="rounded-2xl border p-8" style={{ backgroundColor: 'var(--card-dark)', borderColor: 'var(--border-dark)' }}>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 m-0 mb-4">
                                <span className="material-symbols-outlined text-primary">task_alt</span>
                                Milestone Requirements
                            </h3>
                            <div className="space-y-4 d-flex flex-column gap-3">
                                <div className="flex items-start gap-4 p-4 rounded-xl border d-flex" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                    <div className="mt-1 size-5 rounded border flex items-center justify-center" style={{ width: '1.25rem', height: '1.25rem', borderColor: 'var(--primary)', backgroundColor: 'rgba(137, 89, 247, 0.2)' }}>
                                        <span className="material-symbols-outlined text-primary text-xs font-bold" style={{ fontSize: '0.75rem' }}>check</span>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold m-0 mb-1">Responsive Landing Page</h5>
                                        <p className="text-xs text-slate-500 m-0">Implement fully responsive layouts for mobile, tablet, and desktop viewports.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl border d-flex" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                    <div className="mt-1 size-5 rounded border flex items-center justify-center" style={{ width: '1.25rem', height: '1.25rem', borderColor: 'var(--primary)', backgroundColor: 'rgba(137, 89, 247, 0.2)' }}>
                                        <span className="material-symbols-outlined text-primary text-xs font-bold" style={{ fontSize: '0.75rem' }}>check</span>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold m-0 mb-1">Dark Mode Implementation</h5>
                                        <p className="text-xs text-slate-500 m-0">Seamless dark/light mode switching using Tailwind CSS variables.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl border d-flex" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                    <div className="mt-1 size-5 rounded border flex items-center justify-center" style={{ width: '1.25rem', height: '1.25rem', borderColor: 'var(--primary)', backgroundColor: 'rgba(137, 89, 247, 0.2)' }}>
                                        <span className="material-symbols-outlined text-primary text-xs font-bold" style={{ fontSize: '0.75rem' }}>check</span>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold m-0 mb-1">Interactive UI Elements</h5>
                                        <p className="text-xs text-slate-500 m-0">Animated buttons, hover states, and glassmorphism effects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Panel: Action Center */}
                <aside className="milestone-sidebar-right">
                    {/* Chat Thread */}
                    <div className="flex-1 flex flex-col overflow-hidden d-flex flex-column h-100">
                        <div className="p-4 border-bottom" style={{ borderColor: 'var(--border-dark)' }}>
                            <h3 className="text-sm font-bold flex items-center gap-2 m-0">
                                <span className="material-symbols-outlined text-primary text-lg">forum</span>
                                Review Comments
                            </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 flex-grow-1 d-flex flex-column gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 mb-2 d-flex">
                                    <img className="size-6 rounded-full" style={{ width: '1.5rem', height: '1.5rem' }} alt="Client avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATpBLj0SByQmllvolMlz-zq8jeT3IoHFuHTg9lMYMQDTpeIOHKBgaxmJioocrHNmabmHKj_9u1qiTdHmH1K0sStb5JGrRyx-hGfK9C2IPVY9Us5uREW52I-UkLF2QOqtp937Ldw2VnEYTKC4hXocY1k3F9il6To1vx49mAemiPlJRd5ByGoujuPejVIAeNUAwS_5MGqOgFGjrknkp0Dhb0RLswCNbR_0EpeQHNNzoJJ2xt08fL8kik7ppUs7oZ-sRUa3-9tDmBOHUB" />
                                    <span className="text-xs font-bold">Sarah (Client)</span>
                                    <span className="text-[10px] text-slate-500" style={{ fontSize: '0.625rem' }}>2h ago</span>
                                </div>
                                <div className="p-3 rounded-lg text-sm text-slate-300" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderTopLeftRadius: '0' }}>
                                    The animations look incredibly smooth. Did you use Framer Motion for these?
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 justify-end mb-2 d-flex justify-content-end">
                                    <span className="text-[10px] text-slate-500" style={{ fontSize: '0.625rem' }}>1h ago</span>
                                    <span className="text-xs font-bold">Alex (Freelancer)</span>
                                    <div className="size-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-white" style={{ width: '1.5rem', height: '1.5rem', fontSize: '0.625rem' }}>A</div>
                                </div>
                                <div className="p-3 rounded-lg text-sm text-slate-300 border" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.1)', borderTopRightRadius: '0' }}>
                                    Yes, I used Framer Motion with custom spring transitions for that high-end feel.
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-lg border d-flex" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                                <span className="material-symbols-outlined text-emerald-500 text-sm" style={{ color: '#10b981' }}>smart_toy</span>
                                <p className="m-0 font-medium" style={{ fontSize: '0.6875rem', color: '#10b981' }}>AI detected high code performance: 0.2s LCP</p>
                            </div>
                        </div>
                        <div className="p-4 mt-auto">
                            <div className="relative position-relative">
                                <input className="w-100 rounded-xl px-4 py-3 text-sm border focus:outline-none" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'var(--border-dark)', color: '#fff' }} placeholder="Type a message..." type="text" />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary bg-transparent border-0 position-absolute" style={{ right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}>
                                    <span className="material-symbols-outlined pt-1">send</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 border-top space-y-3 d-flex flex-column gap-3" style={{ borderColor: 'var(--border-dark)', backgroundColor: 'var(--card-dark)' }}>
                        <button onClick={() => setPaymentReleased(true)} className="w-100 py-3 bg-primary rounded-xl font-bold text-white shadow-lg glow-purple transition-all flex flex-col items-center justify-center leading-tight border-0 hover-bg-primary-dark">
                            <span className="mb-1">Approve &amp; Release</span>
                            <span className="text-xs font-medium opacity-80 mt-1" style={{ fontSize: '0.75rem' }}>$800.00 USD</span>
                        </button>
                        <button className="w-100 py-3 border rounded-xl font-bold text-primary transition-all text-sm bg-transparent" style={{ borderColor: 'rgba(139, 92, 246, 0.4)' }}>
                            Request Revision
                        </button>
                        <p className="text-center text-slate-500 m-0 px-2" style={{ fontSize: '0.625rem' }}>
                            By approving, you authorize the immediate release of funds from escrow to the freelancer.
                        </p>
                    </div>
                </aside>
            </main>
            <Footer />
        </div>
    );
};

export default Milestone;
