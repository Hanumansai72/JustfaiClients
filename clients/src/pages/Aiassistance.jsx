import React, { useState } from 'react';
import './Aiassistance.css';

/* ── Talent data ── */
const talents = [
    {
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqGUZTl0baeM1TdrREYlw62DpWrgnE8V326NXec220gWR8XP_amlI7TDpamMjeUXFAPxXlU0DBIyjSZmcBNCGQ7A1GE8os1rgZ9-Wa3lQgTsfwnKDlBr2XaORT4LFA-6Pu38ubGkwReU0s48PL5rGyaB5d_dMnu0e6nMY9-5E0DpEAUiK120q2ZVxYBODAfZlZ6z5Q-s7Ig-q2uAQi6R4gkhOWwIkxMMWtsYjVVGQNHs1dBOsufHZrp84YTrt96HqmmU4KxT-LcbQS',
        name: 'Alex Rivera', role: 'Senior Mobile Architect', match: '98%',
        stars: ['star', 'star', 'star', 'star', 'star'], rating: '5.0 (124 reviews)',
        tags: ['React Native', 'TypeScript', 'FinTech'],
    },
    {
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNZZBrP2UOv20RqN14Kb-_CC8EJwyYox6SpAITTSGnz4pEC8MCSc0isVLRazskuiSiOMMxdcULziPgPxaDeS0KtX2HRbU3217YeHHplw9lPmWey3nkxSt_kfSuQA9x8MBMFbwEb9PDrWfRxmfP97V-frl--fndvH5qoLcvi_3GlcuB5gF5nqaKhMLqHgE3SVNGtx1KUx-7NfwCwyu6yz_uYhyzmbDUUvwXnMoZbdDdZ1VswIgQG576Lsi_bS0hYBQBxJars5sZV8J7',
        name: 'Sarah Chen', role: 'Product & UI Specialist', match: '96%',
        stars: ['star', 'star', 'star', 'star', 'star_half'], rating: '4.9 (89 reviews)',
        tags: ['UX/UI', 'Figma', 'Design Ops'],
    },
    {
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2_VAYvC2QXV82c6l7F9CRo7YejGpxpjgucc6nD2KWWmZW3selA-Rd-TQd45ybZPrby_sHAxwI-t0FCUIsELjLpCstKeNPuBC95-T1E8MmETqGWi6EPQ3AO2ANnENHSiVVB6xLjogIR94Xjb4Ej_VhGD1TP359Q4Ux1RJtBGy9cmVeLRRkEzlpd2mtJho96va6ZQS_eWFDDfq-bN91sf5QiXwsnAR9oYbfu__-IE5EKQvBk0v85v0O2E-AB9R8aeSw38rI1iC7HBrR',
        name: 'Marcus Webb', role: 'Security & Backend Dev', match: '94%',
        stars: ['star', 'star', 'star', 'star', 'star'], rating: '5.0 (42 reviews)',
        tags: ['Go', 'Node.js', 'Security'],
    },
];

/* ── Recommendation data ── */
const recommendations = [
    { label: 'Team Structure', text: 'Add a dedicated QA engineer for biometrics testing in week 4.' },
    { label: 'Cost Optimization', text: 'Using Expo over CLI will save ~40 developer hours in setup.' },
    { label: 'Compliance', text: 'Ensure GDPR-ready backend hooks for user data encryption.' },
];

/* ─────────────────────────────
   Sub-components
───────────────────────────── */
const TalentCard = ({ avatar, name, role, match, stars, rating, tags }) => (
    <div className="talent-card">
        <div className="talent-card__header">
            <div className="talent-card__avatar-wrap">
                <img src={avatar} alt={name} className="talent-card__avatar" />
                <div className="talent-card__match">{match}</div>
            </div>
            <div>
                <p className="talent-card__name">{name}</p>
                <p className="talent-card__role">{role}</p>
                <div className="talent-card__stars">
                    {stars.map((s, i) => (
                        <span key={i} className="material-icons">{s}</span>
                    ))}
                    <span>{rating}</span>
                </div>
            </div>
        </div>

        <div className="talent-card__tags">
            {tags.map(t => <span key={t} className="talent-tag">{t}</span>)}
        </div>

        <button className="talent-card__btn">Invite to Project</button>
    </div>
);

/* ─────────────────────────────
   Main Component
───────────────────────────── */
const Aiassistance = () => {
    const [query, setQuery] = useState('Building a high-performance FinTech mobile app in React Native');

    return (
        <>
            {/* ── Navbar ── */}
            <nav className="ai-nav">
                <div className="ai-nav__inner">
                    {/* Brand */}
                    <div className="ai-nav__brand">
                        <div className="ai-nav__logo">
                            <span className="material-icons">auto_awesome</span>
                        </div>
                        <span className="ai-nav__title">
                            GENESIS<span className="text-primary">AI</span>
                        </span>
                    </div>

                    {/* Nav links */}
                    <div className="ai-nav__links">
                        <a href="/">Dashboard</a>
                        <a href="/" className="nav-active">Hiring Center</a>
                        <a href="/">Projects</a>
                        <a href="/">Messages</a>
                    </div>

                    {/* Actions */}
                    <div className="ai-nav__actions">
                        <button className="ai-nav__notif">
                            <span className="material-icons">notifications</span>
                        </button>
                        <div className="ai-nav__avatar-wrap">
                            <img
                                className="ai-nav__avatar"
                                alt="User Profile"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4iihyyY6i946ewCbaORkf_4TV9xcvOX84U43PIccjRCpDxTUTlrPmYYL9XR11Q0pxgLMsIg9pb--CiobFTkmVvTOSP_u2KFMhwaWpDrwlLV-YFMtqkvepxM-BayCqYr0RydVCOsZdI6OCvvgcDLyTUIgZlLzXnq0DZ8x5Su3si4u98DH9g0j-OdrqxiDU8wn0qIToWgkdSXhW2FxW-TI-B4G2jTZ6BfwSNP32YiSIh_kXRToNOQQB3PWT-yawgVJV8IhKDTsPzzUx"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Main ── */}
            <main className="ai-main">

                {/* ── Hero ── */}
                <section className="ai-hero">
                    <div className="ai-hero__bg" />

                    {/* Brain visual */}
                    <div className="ai-brain">
                        <div className="ai-brain__glow" />
                        <div className="ai-brain__ring1">
                            <div className="ai-brain__ring2">
                                <div className="ai-brain__core">
                                    <span className="material-icons">psychology</span>
                                </div>
                            </div>
                        </div>
                        <div className="ai-node ai-node--1" />
                        <div className="ai-node ai-node--2" />
                    </div>

                    {/* Text + Search */}
                    <div className="ai-hero__content">
                        <h1 className="ai-hero__title">AI Hiring Assistant</h1>

                        <div className="ai-search-wrap">
                            <div className="ai-search-glow" />
                            <div className="ai-search-box">
                                <span className="material-icons">search</span>
                                <input
                                    type="text"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    placeholder="What are you looking to build?"
                                />
                                <button className="ai-search-btn">Command</button>
                            </div>
                        </div>

                        <div className="ai-tags">
                            {['Full-stack', 'Blockchain', 'UX Audit'].map(tag => (
                                <span key={tag} className="ai-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Main Grid ── */}
                <div className="ai-grid">

                    {/* ── Left: Talent Shortlist ── */}
                    <div>
                        <div className="talent-header">
                            <h2>Talent Shortlist</h2>
                            <a href="/">View All Matches</a>
                        </div>
                        <div className="talent-list">
                            {talents.map((t, i) => <TalentCard key={i} {...t} />)}
                        </div>
                    </div>

                    {/* ── Right: Scope + Insights ── */}
                    <div className="right-col">

                        {/* Project Scope */}
                        <div className="glow-card">
                            <div className="scope-header">
                                <div className="scope-header__left">
                                    <div className="scope-icon">
                                        <span className="material-icons">description</span>
                                    </div>
                                    <div>
                                        <p className="scope-header__title">Project Scope Draft</p>
                                        <p className="scope-header__sub">AI Drafting in progress...</p>
                                    </div>
                                </div>
                                <div className="scope-header__actions">
                                    <button className="scope-edit-btn">
                                        <span className="material-icons">edit</span>
                                    </button>
                                    <button className="scope-approve-btn">Approve Scope</button>
                                </div>
                            </div>

                            <div className="scope-code">
                                <div className="scope-code__watermark">
                                    <span className="material-icons">code</span>
                                </div>
                                <p className="scope-code__comment">{'// Project: FinTech High-Performance Mobile App'}</p>
                                <p className="scope-code__objective">
                                    <em>Objective:</em> Develop a secure, low-latency cross-platform application for real-time asset tracking and transaction management.
                                </p>
                                <h4>Core Requirements:</h4>
                                <ul>
                                    <li>React Native with Expo Managed Workflow</li>
                                    <li>Integration with Web3.js for blockchain ledger access</li>
                                    <li>Biometric authentication (FaceID/Fingerprint)</li>
                                    <li>Advanced charting with Victory Native</li>
                                    <li>Real-time push notifications via Firebase</li>
                                </ul>
                                <h4>Technical Stack:</h4>
                                <div className="scope-code__stack">
                                    {['#react-native', '#typescript', '#redux-toolkit', '#nodejs'].map(s => (
                                        <span key={s}>{s}</span>
                                    ))}
                                </div>
                                <span className="cursor-blink" />
                            </div>
                        </div>

                        {/* Market Insights */}
                        <div className="insights-grid">
                            {/* Market Rates */}
                            <div className="glass-panel">
                                <h3 className="insight-title">
                                    <span className="material-icons">analytics</span>
                                    Market Rates
                                </h3>
                                <div className="rate-row">
                                    <div>
                                        <p className="rate-label">React Native Dev</p>
                                        <p className="rate-value">$75 - $110<small> /hr</small></p>
                                    </div>
                                    <div className="rate-trend">
                                        <span className="material-icons">trending_up</span>
                                        +4.2%
                                    </div>
                                </div>
                                {/* SVG Sparkline */}
                                <svg className="sparkline" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#895af6" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#895af6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,20 L10,15 L20,18 L30,12 L40,14 L50,8 L60,10 L70,5 L80,7 L90,2 L100,4" fill="none" stroke="#895af6" strokeWidth="2" />
                                    <path d="M0,20 L10,15 L20,18 L30,12 L40,14 L50,8 L60,10 L70,5 L80,7 L90,2 L100,4 L100,20 Z" fill="url(#grad)" opacity="0.1" />
                                </svg>
                                <p className="rate-avg">Global Average: $88.50/hr</p>
                            </div>

                            {/* Duration Estimate */}
                            <div className="glass-panel">
                                <h3 className="insight-title">
                                    <span className="material-icons">timer</span>
                                    Duration Est.
                                </h3>
                                <p className="duration-big">4-6<span>Weeks</span></p>
                                <p className="duration-sub">Estimated MVP completion time</p>
                                <div className="phase-label">
                                    <span>Phase 1: Discovery</span><span>10%</span>
                                </div>
                                <div className="phase-bar">
                                    <div className="phase-bar__fill" />
                                </div>
                                <p className="phase-confidence">Confidence Score: High (92%)</p>
                            </div>
                        </div>

                        {/* Strategic Recommendations */}
                        <div className="rec-card">
                            <h3 className="rec-title">
                                <span className="material-icons">lightbulb</span>
                                AI Strategic Recommendations
                            </h3>
                            <div className="rec-grid">
                                {recommendations.map((r, i) => (
                                    <div key={i} className="rec-item">
                                        <p className="rec-item__label">{r.label}</p>
                                        <p className="rec-item__text">{r.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* ── Footer ── */}
            <footer className="ai-footer">
                <div className="ai-footer__inner">
                    <div className="ai-footer__brand">
                        <div className="ai-footer__logo">
                            <span className="material-icons">auto_awesome</span>
                        </div>
                        <span className="ai-footer__title">
                            GENESIS<span className="text-primary">AI</span>
                        </span>
                    </div>
                    <p className="ai-footer__copy">© 2024 Genesis AI Marketplace. Powered by Advanced Neural Logic.</p>
                    <div className="ai-footer__links">
                        <a href="/">API Docs</a>
                        <a href="/">Privacy</a>
                        <a href="/">Support</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Aiassistance;
