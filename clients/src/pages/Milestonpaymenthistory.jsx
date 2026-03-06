import React from 'react';
import './Milestonpaymenthistory.css';
import Footer from '../components/Footer';

const milestones = [
    {
        title: 'Milestone 4: Final QA & Launch',
        phase: 'Phase 4',
        date: 'Oct 24, 2023',
        amount: '$1,200.00 Paid',
        score: '98%',
    },
    {
        title: 'Milestone 3: Backend Integration',
        phase: 'Phase 3',
        date: 'Oct 12, 2023',
        amount: '$2,500.00 Paid',
        score: '94%',
    },
    {
        title: 'Milestone 2: Frontend Implementation',
        phase: 'Phase 2',
        date: 'Sep 28, 2023',
        amount: '$1,800.00 Paid',
        score: '96%',
    },
    {
        title: 'Milestone 1: UI/UX Architecture',
        phase: 'Phase 1',
        date: 'Sep 15, 2023',
        amount: '$1,500.00 Paid',
        score: '99%',
    },
];

const techStack = ['React.js', 'Tailwind CSS', 'Node.js', 'TypeScript', 'PostgreSQL'];

const Milestonpaymenthistory = () => {
    return (
        <div className="mph-page">
            {/* Header */}
            <header className="mph-header">
                <div className="d-flex align-items-center justify-content-between px-4 h-100" style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                            <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '2rem', height: '2rem', backgroundColor: 'var(--primary)' }}>
                                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>auto_awesome</span>
                            </div>
                            <span className="fw-bold text-white" style={{ fontSize: '1.25rem', letterSpacing: '-0.025em' }}>JustFAI</span>
                        </div>
                        <div className="d-none d-md-flex align-items-center gap-1 text-slate-400" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                            <a className="text-decoration-none" href="/post-project" style={{ color: '#94a3b8' }}>Projects</a>
                            <span className="material-symbols-outlined" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>chevron_right</span>
                            <span className="text-white">Modern SaaS Landing Page</span>
                            <span className="material-symbols-outlined" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>chevron_right</span>
                            <span style={{ color: '#94a3b8' }}>Archive</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <span className="mph-completed-badge">Project Completed</span>
                        <div className="d-flex align-items-center gap-3 ps-4" style={{ borderLeft: '1px solid var(--border-dark)' }}>
                            <button className="bg-transparent border-0 p-2" style={{ color: '#94a3b8', cursor: 'pointer' }}>
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="rounded-circle overflow-hidden" style={{ width: '2.25rem', height: '2.25rem', backgroundColor: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                                <img alt="User avatar" className="w-100 h-100" style={{ objectFit: 'cover' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2tfj_kDPH1RkrjDQaWdTLrayLNWQEc5_iy_Ix1MxYulhuL3L8m7OEyLbhZ2WVkhJCfCO60B4LEBlUNzn3QT5U4Pu4Uru-s4VdN7cGacPTaKCAFnVLVC59LTLM6HKVVYgaEUlXgTUIAMWXxxqN-5rb2mL8mCLABVFkRPjmUJ2Zb0WDHz_Tn55nwsciKzc5LOw9aw_IxApVt8TPwbgxZFv-f-NHLjHYXqZoWu8mezctC6HMWNejSPtLnvm7gkHNaTaFJQBBGMc9kI_2" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="mph-main">
                {/* Center: Milestone List */}
                <section className="mph-center mph-scrollbar">
                    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                        {/* Page Header */}
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <h1 className="fw-bold mb-2" style={{ fontSize: '1.5rem' }}>Project History &amp; Completion Archive</h1>
                                <p className="m-0" style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Comprehensive record of all validated milestones and deliveries.</p>
                            </div>
                            <button className="mph-export-btn">
                                <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>download</span>
                                Export Full Report
                            </button>
                        </div>

                        {/* Milestone Cards */}
                        <div className="d-flex flex-column gap-3">
                            {milestones.map((ms, idx) => (
                                <div key={idx} className="mph-card">
                                    <div className="mph-card__icon">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <div className="mph-card__body">
                                        <div className="d-flex align-items-center mb-1">
                                            <h3 className="mph-card__title">{ms.title}</h3>
                                            <span className="mph-card__phase">{ms.phase}</span>
                                        </div>
                                        <div className="mph-card__meta">
                                            <span>
                                                <span className="material-symbols-outlined" style={{ fontSize: '0.75rem' }}>calendar_today</span>
                                                {ms.date}
                                            </span>
                                            <span>
                                                <span className="material-symbols-outlined" style={{ fontSize: '0.75rem' }}>payments</span>
                                                {ms.amount}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mph-card__actions">
                                        <div className="text-center">
                                            <div className="mph-card__score-label">AI Quality Score</div>
                                            <div className="mph-card__score-value">
                                                <span className="fw-bold text-white" style={{ fontSize: '1.125rem' }}>{ms.score}</span>
                                                <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', color: '#10b981' }}>verified</span>
                                            </div>
                                        </div>
                                        <a href="/milestone-details" className="mph-card__view-btn">
                                            View Deliverables
                                            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Right Sidebar: Analytics */}
                <aside className="mph-sidebar mph-scrollbar">
                    <div className="p-4 border-bottom" style={{ borderColor: 'var(--border-dark)' }}>
                        <h3 className="fw-bold d-flex align-items-center gap-2 m-0 mb-1" style={{ fontSize: '0.875rem' }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.125rem' }}>analytics</span>
                            Project Analytics
                        </h3>
                        <p className="m-0" style={{ fontSize: '0.6875rem', color: '#64748b', fontWeight: 500 }}>REAL-TIME PERFORMANCE METRICS</p>
                    </div>

                    <div className="p-4 d-flex flex-column gap-4">
                        {/* Total Duration */}
                        <div className="mph-stat-card">
                            <div className="mph-stat-card__label">
                                <span>Total Duration</span>
                                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>schedule</span>
                            </div>
                            <div className="d-flex align-items-baseline gap-1">
                                <span className="mph-stat-card__value">42</span>
                                <span className="mph-stat-card__sub">Days</span>
                            </div>
                            <div className="mph-progress-bar">
                                <div className="mph-progress-bar__fill" style={{ width: '84%' }}></div>
                            </div>
                            <p className="m-0 mt-2 fst-italic" style={{ fontSize: '0.625rem', color: '#64748b' }}>Finished 4 days ahead of schedule</p>
                        </div>

                        {/* Total Spent */}
                        <div className="mph-stat-card">
                            <div className="mph-stat-card__label">
                                <span>Total Spent</span>
                                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '0.875rem' }}>account_balance_wallet</span>
                            </div>
                            <div className="d-flex align-items-baseline gap-1">
                                <span className="mph-stat-card__sub">$</span>
                                <span className="mph-stat-card__value">7,000</span>
                                <span className="mph-stat-card__sub">.00</span>
                            </div>
                            <div className="mph-budget-bars">
                                <div className="mph-budget-bar mph-budget-bar--filled"></div>
                                <div className="mph-budget-bar mph-budget-bar--filled"></div>
                                <div className="mph-budget-bar mph-budget-bar--filled"></div>
                                <div className="mph-budget-bar mph-budget-bar--empty"></div>
                            </div>
                            <p className="m-0 mt-2" style={{ fontSize: '0.625rem', color: '#64748b' }}>Budget Utilization: 88%</p>
                        </div>

                        {/* AI Efficiency Rating */}
                        <div className="mph-ai-card">
                            <div className="mph-ai-card__watermark">
                                <span className="material-symbols-outlined" style={{ fontSize: '3.75rem' }}>bolt</span>
                            </div>
                            <div style={{ position: 'relative', zIndex: 10 }}>
                                <span className="d-block mb-3" style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>AI Efficiency Rating</span>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="mph-ai-card__grade-circle">
                                        <span className="mph-ai-card__grade-text">A+</span>
                                    </div>
                                    <div className="text-end">
                                        <div className="fw-bold text-white" style={{ fontSize: '1.5rem' }}>96.8%</div>
                                        <div style={{ fontSize: '0.625rem', color: 'var(--primary)', fontWeight: 700 }}>TOP 3% OF PLATFORM</div>
                                    </div>
                                </div>
                                <p className="m-0" style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.6' }}>
                                    Freelancer exhibited exceptional response times and zero requirement deviations across all milestones.
                                </p>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="d-flex flex-column gap-2">
                            <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Verified Tech Stack</span>
                            <div className="d-flex flex-wrap gap-2">
                                {techStack.map((tech, idx) => (
                                    <span key={idx} className="mph-tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Button */}
                    <div className="mt-auto p-4 border-top" style={{ borderColor: 'var(--border-dark)' }}>
                        <button className="mph-contract-btn">
                            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>description</span>
                            Contract Metadata
                        </button>
                    </div>
                </aside>
            </main>
            <Footer />
        </div>
    );
};

export default Milestonpaymenthistory;
