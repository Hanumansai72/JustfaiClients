import React, { useState } from 'react';
import './Proposal.css';

/* ─── AI Match Score Circle ─── */
const MatchCircle = ({ percent }) => {
    const r = 28;
    const circ = 2 * Math.PI * r; // ≈175.9
    const offset = circ - (percent / 100) * circ;
    return (
        <div className="match-circle">
            <svg viewBox="0 0 64 64">
                <circle cx="32" cy="32" r={r} fill="transparent" stroke="var(--border-dark)" strokeWidth="4" />
                <circle
                    cx="32" cy="32" r={r}
                    fill="transparent"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeDasharray={circ}
                    strokeDashoffset={offset}
                />
            </svg>
            <div className="match-circle__label">
                <span className="match-circle__pct">{percent}%</span>
                <span className="match-circle__text">Match</span>
            </div>
        </div>
    );
};

/* ─── AI Insight Overlay ─── */
const AiOverlay = ({ insights }) => (
    <div className="ai-overlay">
        <div className="ai-overlay__title">
            <span className="material-icons">psychology</span>
            <h4>AI Quick Insight</h4>
        </div>
        <ul className="ai-insights">
            {insights.map((item, i) => (
                <li key={i} className="ai-insight">
                    <span className="material-icons" style={{ color: item.color }}>{item.icon}</span>
                    <p className={item.bold ? 'bold' : ''}>{item.text}</p>
                </li>
            ))}
        </ul>
    </div>
);

/* ─── Proposal Card ─── */
const ProposalCard = ({ avatar, name, trust, role, matchPct, budget, duration, snippet, aiInsights }) => (
    <div className="proposal-card">
        <div className="card-body">
            {/* Header */}
            <div className="card-header">
                <div className="freelancer-info">
                    <div className="avatar-wrap">
                        <img src={avatar} alt={name} />
                        <span className="verified-badge">
                            <span className="material-icons">verified</span>
                        </span>
                    </div>
                    <div>
                        <h3 className="freelancer-name">
                            {name}
                            <span className="trust-badge">{trust} Trust</span>
                        </h3>
                        <p className="freelancer-role">{role}</p>
                    </div>
                </div>
                <MatchCircle percent={matchPct} />
            </div>

            {/* Budget / Duration */}
            <div className="stats-grid">
                <div className="stats-box">
                    <p className="stats-box__label">Proposed Budget</p>
                    <p className="stats-box__value">{budget}</p>
                </div>
                <div className="stats-box">
                    <p className="stats-box__label">Est. Duration</p>
                    <p className="stats-box__value">{duration}</p>
                </div>
            </div>

            {/* Cover letter */}
            <div className="cover-section">
                <p className="cover-section__label">Cover Letter Snippet</p>
                <p className="cover-section__text">"{snippet}"</p>
            </div>

            {/* Actions */}
            <div className="card-actions">
                <button className="btn-view">View Full Proposal</button>
                <button className="btn-icon btn-icon--primary">
                    <span className="material-icons">bookmark_border</span>
                </button>
                <button className="btn-icon btn-icon--muted">
                    <span className="material-icons">mail_outline</span>
                </button>
            </div>
        </div>

        {/* AI hover overlay */}
        <AiOverlay insights={aiInsights} />
    </div>
);

/* ─── Proposal Data ─── */
const proposals = [
    {
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG5HTBHno1oLlDyZr3TnrDl6eupQ2H0voGcpW2UCtN7Vu3YA3RQoWWBgMbsjmPp2gm0I_0vDhiYMz3BzAfc7yijC-l_OIHn7cz7jNcbtWRm-UQLKLS-hQFJGkDc3XW0TJ7ty_4Es9I8DS6ceg8eGbuhseERuzbo0q6Rgg7wU9-jlU8-j4W99xLXqnU7s5yxmfHhySND6vb3CzElQDc5BwnmiTFmASb8EWLOrDMyu4vPLcBUnmqzzgihdKA4UmhlE8SrX6_DY1ZaoCC',
        name: 'Sarah Jenkins', trust: '98%', role: 'Senior UI Designer • 8+ years',
        matchPct: 92, budget: '$4,200', duration: '3 Weeks',
        snippet: "I've worked on similar fintech UI projects and helped increase conversion by 35% through user-centric redesign patterns...",
        aiInsights: [
            { icon: 'check_circle', color: '#10b981', text: 'Expertise matches your "Tailwind" & "UX Strategy" requirements perfectly.' },
            { icon: 'check_circle', color: '#10b981', text: 'Has successfully completed 4 similar fintech projects this year.' },
            { icon: 'lightbulb', color: 'var(--primary)', text: "Suggestion: Their budget is 5% higher than your range, but quality of work is exceptional.", bold: true },
        ],
    },
    {
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF2sa7J6kREPiT1LpOwyeSPePmeBb_RmBliZosdSo52ilG8IAF9GXaw2aeepEB19ZhPKcPokSWmi4WiNWtl48OLGE_5BVF-6ipVmnrlOGNpNvZRPvccrmRupRUwEH6dGF956ztubrMmsdWBRP0aNZ2X9AYLN_kTa1iF_nibILFrRvPLQla80c__1x8q0K9Ew3oTMlJe-vqj7CdSoVDHPsjhZ_L8-CwDEhqQciK9aD3mucvewyks-OW9NeDaC2cEtFjBzt0HDDENTzr',
        name: 'Marcus Chen', trust: '94%', role: 'Full Stack Engineer • 5+ years',
        matchPct: 80, budget: '$3,850', duration: '4 Weeks',
        snippet: "I specialize in scalable e-commerce backends. My previous work with Shopify API integrations makes me a great fit for...",
        aiInsights: [
            { icon: 'check_circle', color: '#10b981', text: 'Budget matches exactly with your allocation.' },
            { icon: 'report_problem', color: '#f59e0b', text: 'Lower experience in front-end design compared to others.' },
            { icon: 'lightbulb', color: 'var(--primary)', text: 'Suggestion: Hire Marcus if technical implementation is priority over visual polish.', bold: true },
        ],
    },
    {
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-c6cBZxgQc_WTEdEdrqrmoN4Y9Lz18yjMh0H9YG3RVtT6gZiT8QA-UIUl3kNocnwnS7KXpMMmBI9dwFy9cFmjxEJMfIlXDAy6YaX4V9B0i5mWkdNxX5PE_J7C0b_xY8k8OhNoOdNNsA-NTVumBKpb-OrWnwAxX0rFpzs-nQidqyPnkVNS6jpZTaACzHuoSxcbHzdMadqKMGjRqlWF9FTSkNibacHAXgi2uQ0rJ2XxEaGy4aGTZdMD8kTU5cwkPQXNelZti31kHMl1',
        name: 'Elena Kovic', trust: '100%', role: 'Creative Director • 12+ years',
        matchPct: 95, budget: '$5,500', duration: '2 Weeks',
        snippet: "I can deliver high-fidelity interactive prototypes in just 10 days. My portfolio includes top-tier fashion brands where UX is...",
        aiInsights: [
            { icon: 'check_circle', color: '#10b981', text: 'Fastest delivery time among all applicants.' },
            { icon: 'check_circle', color: '#10b981', text: 'Perfect track record with 50+ 5-star reviews.' },
            { icon: 'lightbulb', color: 'var(--primary)', text: 'Suggestion: Premium choice for high-speed, high-quality requirements.', bold: true },
        ],
    },
];

/* ─── Main Page ─── */
const Proposal = () => {
    const [activeTab, setActiveTab] = useState('All Proposals');
    const tabs = ['All Proposals', 'Shortlisted', 'Interviewing', 'Archived'];

    return (
        <div className="proposal-layout">

            {/* ── Sidebar ── */}
            <aside className="p-sidebar">
                <div className="p-sidebar__brand">
                    <span className="material-icons" style={{ fontSize: '1.75rem' }}>auto_awesome</span>
                    AI-Lancer
                </div>

                <nav className="p-sidebar__nav">
                    {[
                        { icon: 'dashboard', label: 'Dashboard', href: '/dashboard' },
                        { icon: 'add_circle_outline', label: 'Post Project', href: '/post-project' },
                        { icon: 'description', label: 'Proposals', badge: '12', active: true, href: '/proposal' },
                        { icon: 'chat_bubble_outline', label: 'Messages', href: '/workspace' },
                        { icon: 'analytics', label: 'Reports', href: '/dashboard' },
                    ].map(({ icon, label, badge, active, href }) => (
                        <a key={label} href={href} className={`p-nav-link${active ? ' p-nav-link--active' : ''}`}>
                            <span className="material-icons">{icon}</span>
                            <span>{label}</span>
                            {badge && <span className="p-nav-link__badge">{badge}</span>}
                        </a>
                    ))}
                </nav>

                <div className="p-sidebar__footer">
                    <div className="upgrade-box">
                        <p className="upgrade-box__label">Pro Plan</p>
                        <p className="upgrade-box__desc">Get unlimited AI screenings and priority support.</p>
                        <button className="upgrade-box__btn">Upgrade Now</button>
                    </div>
                </div>
            </aside>

            {/* ── Main ── */}
            <main className="p-main">
                {/* Navbar */}
                <header className="p-navbar">
                    <div className="p-search">
                        <span className="material-icons">search</span>
                        <input className="p-search__input" type="text" placeholder="Search proposals..." />
                    </div>

                    <div className="p-navbar__right">
                        <div className="notif">
                            <span className="material-icons">notifications_none</span>
                            <span className="notif__dot" />
                        </div>
                        <div className="p-user">
                            <div style={{ textAlign: 'right' }}>
                                <p className="p-user__name">Alex Johnson</p>
                                <p className="p-user__role">Startup Founder</p>
                            </div>
                            <img
                                className="p-user__avatar"
                                alt="Avatar"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLFn-6IVnfM4pMU3dz-vJ9FO1pzxKoISP1zR00IjUm0lOlSUeNb71iyWmoeYxwEYAzJ40NpdkR6AM2AGa8pBjx2W5DDmBVs8-IEcj8CBU9UZzN2bHAymBqZcSxEO34WGrz4jQrSViqTR4tLrhTFdlaEC8IelZHTcjy4tkKZi2yd4MITZS11kD-OSquXdesiEtExORYAoc0Azx6schxDBl6OZPmlDTBZqBChvqCW3zFRA3uKkH_3HImsoDlu9bmFxfolphfbb4y0o3o"
                            />
                        </div>
                    </div>
                </header>

                {/* Scroll area */}
                <div className="p-scroll">
                    {/* Page header */}
                    <div className="p-page-header">
                        <div>
                            <div className="breadcrumb">
                                <span>Projects</span>
                                <span className="material-icons">chevron_right</span>
                                <span className="breadcrumb__active">E-commerce UI/UX Redesign</span>
                            </div>
                            <h1 className="p-title">Proposal Review</h1>
                            <p className="p-subtitle">Reviewing 24 active proposals for your recent project posting.</p>
                        </div>

                        <div className="filter-tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    className={`filter-tab${activeTab === tab ? ' filter-tab--active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="proposals-grid">
                        {proposals.map((p, i) => <ProposalCard key={i} {...p} />)}
                    </div>

                    {/* Pagination */}
                    <div className="pagination-row">
                        <p>Showing <strong>3</strong> of 24 Proposals</p>
                        <div className="pagination-btns">
                            <button className="pag-btn">Previous</button>
                            <button className="pag-btn">Next</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* ── Right Panel ── */}
            <aside className="p-right-panel">
                <h2 className="panel-title">Project Overview</h2>

                <div className="panel-section">
                    {/* Market Stats */}
                    <div className="panel-card">
                        <p className="panel-section-label">Market Stats</p>
                        <div className="stat-row"><span className="label">Avg. Bid</span><span className="value">$4,120</span></div>
                        <div className="stat-row"><span className="label">Top Match Score</span><span className="value value--primary">95%</span></div>
                        <div className="stat-row"><span className="label">Avg. Timeline</span><span className="value">22 Days</span></div>
                    </div>

                    {/* AI Recommendation */}
                    <div className="panel-card--primary">
                        <div className="ai-rec-header">
                            <span className="material-icons">auto_graph</span>
                            <h4>AI Recommendation</h4>
                        </div>
                        <p className="ai-rec-desc">
                            Based on your requirements, <strong>Sarah Jenkins</strong> offers the best balance between quality and cost efficiency for a Fintech product.
                        </p>
                        <button className="ai-rec-btn">View AI Detailed Comparison</button>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <p className="panel-section-label">Recent Activity</p>
                        <div className="activity-list">
                            {[
                                { icon: 'chat', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', text: <>New message from <strong>Sarah</strong></>, time: '2 minutes ago' },
                                { icon: 'auto_fix_high', color: 'var(--primary)', bg: 'rgba(137,90,246,0.1)', text: 'AI just analyzed 5 new bids', time: '1 hour ago' },
                                { icon: 'check_circle', color: '#10b981', bg: 'rgba(16,185,129,0.1)', text: <>Profile verified: <strong>Elena K.</strong></>, time: '3 hours ago' },
                            ].map((item, i) => (
                                <div key={i} className="activity-item">
                                    <div className="activity-icon" style={{ background: item.bg }}>
                                        <span className="material-icons" style={{ color: item.color }}>{item.icon}</span>
                                    </div>
                                    <div>
                                        <p className="activity-text">{item.text}</p>
                                        <p className="activity-time">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    );
};

export default Proposal;
