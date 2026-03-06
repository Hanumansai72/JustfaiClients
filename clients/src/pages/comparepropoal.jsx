import React from 'react';
import './comparepropoal.css';
import Footer from '../components/Footer';

const APPLICANTS = [
    {
        id: 1,
        name: 'Alex Rivera',
        role: 'Senior Full-Stack',
        match: '98% Match',
        rate: '$85/hr',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8bKDZ7H6yZ7niAoma6xiHFIoUxASzfR4gjdcDxrZMcYmx4lJFFmGFhC33xETr2lo5pbZTK6b2OOAt773XthaabQ5GyJ4vMtTyH13mSJOBLbrEh79Ttd56F-c5VNlKbfd6Hv53vQw2BB2BuEPl8DsvLMirP6KiyT_IGRztPqFh3qUFpkw5c7PumSJLGZ2WPcyTLVkX4KuS4VktpKChgLcv3MEprLMMnGbzlbpeQLPyLu4wBTlSirA-NpEEc301IBGGlqLl4yRvdX8W',
        modalImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlkY3rMaga_1NyHm0PhwEx6OwD5fqcTCMSF-7_TulIKKFNsnSl6flewN_CakDjfTtUM4OHMjogL9uucCmkprutIpJkLz6MWovMC_6kZEI0df1Kg54iPr8N-MLbx-w4Z2yhIuaMCsMj16hRk0TETYP7ZC9YBDnOPQQt76n8UQ685-Ldf5ksW6HYEo_YB-ONMwV-hPeJHTUJg_dOOyo-_vQJT3i1LHv3RSRBOgGTrrPlV2r4zKoZw_FpD9JiVyFiV4zU5px4kgicVH5K',
        title: 'Top Rated Developer • 142 Jobs',
        trustScore: '9.9',
        portfolio: '4.9',
        analysis: (<>Alex matches <span className="highlight">100%</span> of your tech stack requirements. Past projects include 3 similar fintech apps. Estimated delivery is <span className="highlight">15% faster</span> than average.</>),
        budget: '$4,200',
        rank: 1,
        isPrimary: true,
    },
    {
        id: 2,
        name: 'Jordan Smith',
        role: 'UI/UX Designer',
        match: '94% Match',
        rate: '$70/hr',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARoJ_UtK18JQtdXBVUjsHA_Ova2apiXXZq7mtwpcUPZI5eGlFSX4LM4LuHXiydzVTT4RByHGm-GDio7Qcw_gmWwiNZffTZllYcTnh-ZgwpUmFcnBxSHn3Z9Q5DEEg_-eiU4Eyr3KIBupU9J3jBH2X9OYgihE1gcIzFkS7ptRkcF0J54dSRgzoIHNVxkcO0JYsU79XqM9Lbv8HREHr4f-NQZaKqCOdDTNgAjfiR_XB5ljWE4t_fY9WlRJmJ7_CWPMKU-arZOlP1Td9S',
        modalImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3wwbzgAOho6ltmrO_NXCyDRJphQ8p8FtQ0vqTHnvKuzRK2BPHQREnGhXUduX3ooKmZ462FI124y-0mGnM7TmJZ-bEcwWFWnh5zjxT4J_O3Io6ciTLRUgistLiaUYI7tumihUetZxlje2VHZ9wMZz-ITMW5b1Mroxdj8Ud4ALEd2RuZ-O8qz2yCqHYoUC0DY2TYUiofBNtYuofqwKtk6scJ1x3jM6scnIdg_4oxcsm_ZsbU7tGmRKHYH3dHUdhEE04ERioUF0mgrww',
        title: 'Expert Product Lead • 89 Jobs',
        trustScore: '9.4',
        portfolio: '4.7',
        analysis: (<>Jordan offers exceptional UI/UX expertise but has <span className="neutral">limited experience</span> in the specific backend frameworks you requested. Excellent for a design-first approach.</>),
        budget: '$3,500',
        rank: null,
        isPrimary: false,
    },
    {
        id: 3,
        name: 'Michael Chen',
        role: 'DevOps Lead',
        match: '89% Match',
        rate: '$95/hr',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVl13zQgLKgrOiufOjhh3pR-JLvLxibD0jEDA0BpW4a3huIyuFD8fTNPIGDiB5rKKuqEcCx1fZDDVMU4Y_c7r324WqpKKEp3fa67JsrTa3bV9ybZrDpLEUMcwVweVawPYZtBlBNzBxawgBMOgty2N-vf-B4khJT2Y8EAHpZ4fSh9MKJ86gSxsJdEoxO_oguVw7G1_QDme3Y32t_syxDMtStSsoknsQMqzDdceBR-9l4AYkREa5jXl9N5878RyJKxNPrwSoar25nFv',
        modalImg: null,
        rank: null,
        isPrimary: false,
    },
];

/* Helper: badge variant */
const badgeVariant = (i) => i === 0 ? 'active' : i === 1 ? 'medium' : 'inactive';

const Comparepropoal = () => {


    return (
        <div className="cp-shell">
            {/* ── Navbar ── */}
            <header className="cp-nav">
                <div className="cp-nav__left">
                    <div className="cp-nav__brand">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        <h2>AI Marketplace</h2>
                    </div>
                    <nav className="cp-nav__links">
                        <a href="/dashboard">Dashboard</a>
                        <a href="/post-project" className="active">Projects</a>
                        <a href="/workspace">Messages</a>
                        <a href="/browse">Talent</a>
                    </nav>
                </div>
                <div className="cp-nav__right">
                    <div className="cp-nav__search-wrap">
                        <span className="material-symbols-outlined">search</span>
                        <input className="cp-nav__search" type="text" placeholder="Search freelancers..." />
                    </div>
                    <button className="cp-nav__notif">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div className="cp-nav__avatar-wrap">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiusPNdHwbEKM7Yrb08MyUKIu2fR4Ichp-4SS7nj3pzqENrfJlq5Kaf61cWqkvp3PJmg9gSkRFtH7r7negZTjy6hmdADTTbN-D15CrxMg4ISY-nIr5craoMAuYPZ8sAsBDJV4w22sTEaydMvAh2kqaumzC4oHGyEKrAMsrdHNq-6gCVy5L9EAZb0k7UcmEKXwzclSKGEJO8CNvOPjhPm3nuvNJMsJH2DORzV19uvJYnuQ4jvDZifye3fWiu6c6--lhn1MN5ZkPki86"
                            alt="avatar"
                        />
                    </div>
                </div>
            </header>

            {/* ── Main ── */}
            <main className="cp-main">
                {/* Sidebar */}
                <aside className="cp-sidebar">
                    <div className="cp-sidebar__head">
                        <h3>Applicants</h3>
                        <p>Project Alpha: AI Integration</p>
                    </div>
                    <div className="cp-sidebar__list">
                        {APPLICANTS.map((a, i) => {
                            const variant = badgeVariant(i);
                            const isActive = i === 0;
                            return (
                                <div
                                    key={a.id}
                                    className={`applicant-card applicant-card--${isActive ? 'active' : i === 2 ? 'dimmed' : 'inactive'}`}
                                    onClick={() => { }}
                                >
                                    <div className="applicant-card__top">
                                        <div className="applicant-card__thumb">
                                            <img src={a.img} alt={a.name} />
                                        </div>
                                        <div className="applicant-card__info">
                                            <p className="applicant-card__name">{a.name}</p>
                                            <p className="applicant-card__role">{a.role}</p>
                                        </div>
                                    </div>
                                    <div className="applicant-card__footer">
                                        <span className={`match-badge match-badge--${variant}`}>{a.match}</span>
                                        <span className={`applicant-card__rate--${isActive ? 'active' : 'inactive'}`}>{a.rate}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cp-sidebar__footer">
                        <button className="ai-report-btn">
                            <span className="material-symbols-outlined">auto_fix</span>
                            AI Analysis Report
                        </button>
                    </div>
                </aside>

                {/* Content */}
                <section className="cp-content">
                    <div className="cp-content__head">
                        <div>
                            <h1>Compare Proposals</h1>
                            <p>Reviewing side-by-side candidates for "Project Alpha Mobile App"</p>
                        </div>
                        <div className="cp-content__actions">
                            <button className="btn-share">
                                <span className="material-symbols-outlined">share</span>
                                Share
                            </button>
                            <button className="btn-ai-compare">
                                <span className="material-symbols-outlined">auto_awesome</span>
                                Compare AI Data
                            </button>
                        </div>
                    </div>

                    {/* Comparison cards */}
                    <div className="compare-grid">
                        {/* Card 1 — Alex (Primary) */}
                        <div className="candidate-card candidate-card--primary">
                            <span className="rank-badge">RANK #1</span>
                            <div className="candidate-card__header">
                                <div className="candidate-card__avatar candidate-card__avatar--primary">
                                    <img src={APPLICANTS[0].modalImg} alt="Alex Rivera" />
                                </div>
                                <h3 className="candidate-card__name">Alex Rivera</h3>
                                <p className="candidate-card__title candidate-card__title--primary">Top Rated Developer • 142 Jobs</p>
                            </div>
                            <div className="candidate-card__body">
                                <div className="stat-grid">
                                    <div className="stat-box">
                                        <p className="stat-box__label">Trust Score</p>
                                        <div className="stat-box__value">
                                            <span className="stat-box__num">9.9</span>
                                            <span className="material-symbols-outlined stat-icon--green">verified</span>
                                        </div>
                                    </div>
                                    <div className="stat-box">
                                        <p className="stat-box__label">Portfolio</p>
                                        <div className="stat-box__value">
                                            <span className="stat-box__num">4.9</span>
                                            <span className="material-symbols-outlined stat-icon--yellow">star</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ai-analysis">
                                    <h4>
                                        <span className="material-symbols-outlined ai-icon--primary">psychology</span>
                                        AI Suitability Analysis
                                    </h4>
                                    <div className="ai-analysis__box ai-analysis__box--primary">
                                        <p>{APPLICANTS[0].analysis}</p>
                                    </div>
                                </div>
                                <div className="candidate-actions">
                                    <div className="budget-row-display">
                                        <span>Proposed Budget:</span>
                                        <span>$4,200</span>
                                    </div>
                                    <div className="candidate-btns">
                                        <button className="btn-hire btn-hire--primary">
                                            <span className="material-symbols-outlined">check_circle</span>
                                            Hire Now
                                        </button>
                                        <button className="btn-chat">
                                            <span className="material-symbols-outlined">chat_bubble</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 — Jordan (Secondary) */}
                        <div className="candidate-card candidate-card--secondary">
                            <div className="candidate-card__header">
                                <div className="candidate-card__avatar candidate-card__avatar--secondary">
                                    <img src={APPLICANTS[1].modalImg} alt="Jordan Smith" />
                                </div>
                                <h3 className="candidate-card__name">Jordan Smith</h3>
                                <p className="candidate-card__title candidate-card__title--secondary">Expert Product Lead • 89 Jobs</p>
                            </div>
                            <div className="candidate-card__body">
                                <div className="stat-grid">
                                    <div className="stat-box">
                                        <p className="stat-box__label">Trust Score</p>
                                        <div className="stat-box__value">
                                            <span className="stat-box__num">9.4</span>
                                            <span className="material-symbols-outlined stat-icon--green">verified</span>
                                        </div>
                                    </div>
                                    <div className="stat-box">
                                        <p className="stat-box__label">Portfolio</p>
                                        <div className="stat-box__value">
                                            <span className="stat-box__num">4.7</span>
                                            <span className="material-symbols-outlined stat-icon--yellow">star</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ai-analysis">
                                    <h4>
                                        <span className="material-symbols-outlined ai-icon--secondary">psychology</span>
                                        AI Suitability Analysis
                                    </h4>
                                    <div className="ai-analysis__box ai-analysis__box--secondary">
                                        <p>{APPLICANTS[1].analysis}</p>
                                    </div>
                                </div>
                                <div className="candidate-actions">
                                    <div className="budget-row-display">
                                        <span>Proposed Budget:</span>
                                        <span>$3,500</span>
                                    </div>
                                    <div className="candidate-btns">
                                        <button className="btn-hire">
                                            <span className="material-symbols-outlined">check_circle</span>
                                            Hire Now
                                        </button>
                                        <button className="btn-chat">
                                            <span className="material-symbols-outlined">chat_bubble</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Summary Bar */}
                    <div className="ai-summary-bar">
                        <div className="ai-summary-bar__icon">
                            <span className="material-symbols-outlined">lightbulb</span>
                        </div>
                        <div>
                            <h4>AI Comparison Summary</h4>
                            <p>Alex Rivera is the recommended candidate for this specific project based on his higher match score in technical architecture and faster turnaround history.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Comparepropoal;
