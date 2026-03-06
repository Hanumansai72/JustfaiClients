import React, { useState } from 'react';
import './Postproject.css';
import Footer from '../components/Footer';

/* ── Static data ── */
const STEPS = ['Title & Category', 'Description', 'Milestones', 'Review'];

const CATEGORIES = [
    'Development & IT',
    'Design & Creative',
    'AI & Machine Learning',
    'Marketing & Sales',
    'Writing & Translation',
];

const AI_SUGGESTIONS = [
    'Wallet connection (MetaMask, WalletConnect) support.',
    'Real-time price feed via Chainlink or CoinGecko API.',
    'Gas tracking and historical transaction visualization.',
];

/* ── Milestone row component (Step 3) ── */
const MilestoneRow = ({ ms, index, onChange, onDelete }) => {
    const update = (field, val) => onChange(index, { ...ms, [field]: val });
    return (
        <div className="milestone-row">
            <div className="milestone-row__grid">
                <div className="ms-field">
                    <label className="ms-label">Milestone Title</label>
                    <input className="ms-input" type="text" placeholder="e.g. Frontend Development"
                        value={ms.title} onChange={e => update('title', e.target.value)} />
                </div>
                <div className="ms-field">
                    <label className="ms-label">Due Date</label>
                    <input className="ms-input" type="date"
                        value={ms.dueDate} onChange={e => update('dueDate', e.target.value)} />
                </div>
                <div className="ms-field">
                    <label className="ms-label">Amount (USD)</label>
                    <div className="ms-amount-wrap">
                        <span className="ms-dollar">$</span>
                        <input className="ms-input ms-input--amount" type="number" placeholder="0.00"
                            value={ms.amount} onChange={e => update('amount', e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="milestone-row__footer">
                <label className="escrow-toggle">
                    <div className="toggle-track">
                        <input type="checkbox" className="toggle-input"
                            checked={ms.escrow} onChange={e => update('escrow', e.target.checked)} />
                        <span className="toggle-thumb" />
                    </div>
                    <span className="escrow-label">
                        Smart Escrow
                        <span className="material-symbols-outlined escrow-info" title="Funds governed by AI smart contract">info</span>
                    </span>
                </label>
                <button className="ms-delete-btn" onClick={() => onDelete(index)}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    );
};

/* ── Main component ── */
const Postproject = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [agreed, setAgreed] = useState(false);
    const [launched, setLaunched] = useState(false);

    /* Step 1 & 2 state */
    const [title, setTitle] = useState('Next-Gen AI Interface Design');
    const [category, setCategory] = useState('Design & Creative');
    const [description, setDescription] = useState(
        'A comprehensive design system for a decentralized AI platform focusing on high-end SaaS aesthetics, dark-mode optimization, and glassmorphic UI components. The scope includes 12 core screens and a full component library.'
    );

    /* Step 3 milestones */
    const [milestones, setMilestones] = useState([
        { title: 'Discovery & Moodboard', dueDate: '2024-11-01', amount: '800', escrow: true },
        { title: 'UI/UX Design Phase', dueDate: '2024-11-20', amount: '2400', escrow: true },
        { title: 'Component Library', dueDate: '2024-12-05', amount: '1200', escrow: true },
        { title: 'Final Handover', dueDate: '2024-12-20', amount: '600', escrow: true },
    ]);

    const addMilestone = () => setMilestones(p => [...p, { title: '', dueDate: '', amount: '', escrow: false }]);
    const updateMilestone = (i, upd) => setMilestones(p => p.map((m, idx) => idx === i ? upd : m));
    const deleteMilestone = (i) => setMilestones(p => p.filter((_, idx) => idx !== i));

    /* Budget calculations */
    const milestoneTotal = milestones.reduce((s, m) => s + (parseFloat(m.amount) || 0), 0);
    const platformFee = +(milestoneTotal * 0.03).toFixed(2);
    const securityFee = 25;
    const grandTotal = milestoneTotal + platformFee + securityFee;
    const fmt = (n) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const escrowCount = milestones.filter(m => m.escrow).length;
    const draftCount = milestones.filter(m => !m.escrow).length;
    const progressPct = [25, 50, 75, 100][currentStep];

    /* Stepper circle state */
    const getState = (i) => i < currentStep ? 'complete' : i === currentStep ? 'active' : 'inactive';

    /* ── Launch handler ── */
    const handleLaunch = () => setLaunched(true);

    return (
        <>
            <div className="pp-wrapper">

                {/* ── Navbar ── */}
                <header className="pp-nav">
                    <div className="pp-nav__brand">
                        <div className="pp-nav__icon">
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <h2 className="pp-nav__name">JustFAI</h2>
                    </div>
                    <div className="pp-nav__links">
                        <a href="/browse">Find Work</a>
                        <a href="/ai-assistant">Hire Talent</a>
                        <a href="/dashboard">My Projects</a>
                    </div>
                    <div className="pp-nav__actions">
                        <button className="pp-nav__profile-btn">Profile</button>
                        <div
                            className="pp-nav__avatar"
                            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4bHKIyQyt4aKtuFaK6fpqgPa_XwlIj7MlEJej0HlDvc6Is2Gi5XAyFHBY3wKMdHqL-PgZL5hAQyYsgUHaUIlMzjzS0oZ_Qzp4tDIiUf7nf8hRwD9DkkMlpCGIVi271m1VrVuqcNBvIkp9dI2U3wHmsUz2Piskxt1LmR7eo4OSkDxD_MN8ONOXGVmUh2RVnxnhp3KYTnhtvRuOyzdmvM3msfX4-kEqw-dXbyhfTYNKjzVFGbwD7qtiaf5giz-ISSXKJJdL9DUki-3y")` }}
                        />
                    </div>
                </header>

                {/* ── Main ── */}
                <main className="pp-main">
                    <div className="pp-content" style={{ maxWidth: currentStep === 3 ? '80rem' : '64rem' }}>

                        {/* Breadcrumb (step 4 only) */}
                        {currentStep === 3 && (
                            <div className="rl-breadcrumb">
                                <a href="/post-project">Projects</a>
                                <div className="text-secondary-custom mx-2">/</div>
                                <a href="/post-project">New Project</a>
                                <span>/</span>
                                <span className="rl-breadcrumb__active">Review &amp; Launch</span>
                            </div>
                        )}

                        {/* Heading */}
                        <div className="pp-heading">
                            <h1>{currentStep === 3 ? 'Review & Launch' : 'Post a Project'}</h1>
                            <p>
                                {currentStep === 3
                                    ? 'Step 4: Finalize your AI-refined project roadmap and security terms.'
                                    : currentStep === 2
                                        ? 'Define your milestones and review before launching.'
                                        : "Let's bring your vision to life with AI-assisted creation."}
                            </p>
                        </div>

                        {/* ── Stepper (hidden on step 4) ── */}
                        {currentStep < 3 && (
                            <div className="pp-stepper">
                                {STEPS.map((label, i) => {
                                    const state = getState(i);
                                    return (
                                        <React.Fragment key={label}>
                                            <div className="step">
                                                <div className={`step__circle step__circle--${state}`}>
                                                    {state === 'complete'
                                                        ? <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>check</span>
                                                        : i + 1}
                                                </div>
                                                <span className={`step__label ${state === 'inactive' ? 'step__label--inactive' : 'step__label--active'}`}>
                                                    {label}
                                                </span>
                                            </div>
                                            {i < STEPS.length - 1 && (
                                                <div className={`step-line ${i < currentStep ? 'step-line--active' : 'step-line--inactive'}`} />
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        )}

                        {/* ════════ STEP 1 & 2: Title / Description ════════ */}
                        {currentStep < 2 && (
                            <div className="pp-grid">
                                <div>
                                    <div className="pp-form-card">
                                        <div className="form-section">
                                            <div className="field-group">
                                                <label className="field-label">Project Title</label>
                                                <input className="pp-input" type="text"
                                                    placeholder="e.g. Build a Web3 Dashboard for Token Analytics"
                                                    value={title} onChange={e => setTitle(e.target.value)} />
                                            </div>
                                            <div className="field-group">
                                                <label className="field-label">Category</label>
                                                <div className="select-wrap">
                                                    <select className="pp-select" value={category} onChange={e => setCategory(e.target.value)}>
                                                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                                    </select>
                                                    <span className="material-symbols-outlined">expand_more</span>
                                                </div>
                                            </div>
                                            <div className="field-group">
                                                <div className="desc-label-row">
                                                    <label className="field-label" style={{ marginBottom: 0 }}>Project Description</label>
                                                    <span className="ai-badge">
                                                        <span className="material-symbols-outlined">auto_awesome</span>
                                                        AI Enhanced
                                                    </span>
                                                </div>
                                                <div className="desc-wrap">
                                                    <div className="desc-glow" />
                                                    <textarea className="pp-textarea" rows={6}
                                                        placeholder="Describe your project goals, technical requirements, and target audience..."
                                                        value={description} onChange={e => setDescription(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-nav">
                                        <button className="btn-back" onClick={() => setCurrentStep(s => Math.max(0, s - 1))} disabled={currentStep === 0}>
                                            <span className="material-symbols-outlined">arrow_back</span>
                                            Back
                                        </button>
                                        <button className="btn-continue" onClick={() => setCurrentStep(s => s + 1)}>
                                            Continue to Milestones
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>

                                {/* AI sidebar */}
                                <div className="ai-sidebar">
                                    <div className="ai-panel">
                                        <div className="ai-panel__header">
                                            <div className="ai-panel__icon">
                                                <span className="material-symbols-outlined">auto_awesome</span>
                                            </div>
                                            <div>
                                                <p className="ai-panel__title">AI Assistant</p>
                                                <p className="ai-panel__sub">Real-time analysis</p>
                                            </div>
                                        </div>
                                        <div className="ai-panel__body">
                                            <div className="ai-suggestions">
                                                <p>I noticed you're building a <span>Web3 Dashboard</span>. Here are some suggested requirements:</p>
                                                <div className="ai-suggestion-list">
                                                    {AI_SUGGESTIONS.map((s, i) => (
                                                        <div key={i} className="ai-suggestion-item">
                                                            <span className="material-symbols-outlined">add_circle</span>
                                                            <p>{s}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="ai-templates">
                                                <p className="ai-templates__label">Templates</p>
                                                <button className="ai-template-btn">
                                                    <span>Fullstack SaaS Template</span>
                                                    <span className="material-symbols-outlined">bolt</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="ai-panel__footer">
                                            <div className="ai-status">
                                                <div className="ai-status__dot" />
                                                <span className="ai-status__text">Analyzing input...</span>
                                            </div>
                                            <button className="ai-settings-btn">Settings</button>
                                        </div>
                                    </div>
                                    <div className="context-card">
                                        <div className="context-card__header">
                                            <span className="material-symbols-outlined">info</span>
                                            <h4>Why this matters?</h4>
                                        </div>
                                        <p>Clear titles and specific categories help our matching engine find the most qualified freelancers. High-quality descriptions receive 3x more relevant proposals.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ════════ STEP 3: Milestones ════════ */}
                        {currentStep === 2 && (
                            <div className="pp-grid">
                                <div>
                                    <div className="pp-form-card">
                                        <div className="ms-card-header">
                                            <h3 className="ms-card-title">Project Milestones</h3>
                                            <button className="ms-add-btn" onClick={addMilestone}>
                                                <span className="material-symbols-outlined">add_circle</span>
                                                Add Milestone
                                            </button>
                                        </div>
                                        <div className="milestone-list">
                                            {milestones.map((ms, i) => (
                                                <MilestoneRow key={i} ms={ms} index={i} onChange={updateMilestone} onDelete={deleteMilestone} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-nav">
                                        <button className="btn-back" onClick={() => setCurrentStep(s => s - 1)}>
                                            <span className="material-symbols-outlined">arrow_back</span>
                                            Back to Description
                                        </button>
                                        <button className="btn-continue" onClick={() => setCurrentStep(s => s + 1)}>
                                            Continue to Review
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Step 3 sidebar */}
                                <div className="ai-sidebar">
                                    <div className="ai-panel budget-panel">
                                        <div className="ai-panel__header">
                                            <span className="material-symbols-outlined budget-icon">account_balance_wallet</span>
                                            <h3 className="budget-panel__title">Budget Summary</h3>
                                        </div>
                                        <div className="budget-body">
                                            <div className="budget-row"><span>Escrow Milestones</span><span>{escrowCount}</span></div>
                                            <div className="budget-row"><span>Draft Milestones</span><span>{draftCount}</span></div>
                                            <div className="budget-total">
                                                <span>Total Budget</span>
                                                <span className="budget-total__value">${fmt(milestoneTotal)}</span>
                                            </div>
                                            <div className="escrow-protection">
                                                <div className="escrow-protection__header">
                                                    <span className="material-symbols-outlined">verified_user</span>
                                                    <span>Escrow Protection</span>
                                                </div>
                                                <p>Your funds are protected. Release payment only when you approve the deliverables.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="context-card market-card">
                                        <div className="market-card__header">
                                            <div className="market-icon-wrap">
                                                <span className="material-symbols-outlined">psychology</span>
                                            </div>
                                            <div>
                                                <h4>AI Market Insights</h4>
                                                <p className="market-card__sub">Price Analysis</p>
                                            </div>
                                        </div>
                                        <div className="market-body">
                                            <p className="market-desc">Based on <strong>Web3 Dashboards</strong> with similar complexity:</p>
                                            <div className="market-range-box">
                                                <div className="market-range-row"><span>Market Range</span><span>$2,500 – $6,000</span></div>
                                                <div className="market-bar"><div className="market-bar__fill" style={{ width: '30%' }} /></div>
                                                <p className="market-warning">Your current budget is below market average for this scope.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ════════ STEP 4: Review & Launch ════════ */}
                        {currentStep === 3 && (
                            <>
                                <div className="rl-grid">

                                    {/* ── Project Details ── */}
                                    <div className="rl-card">
                                        <h3 className="rl-section-title">
                                            <span className="material-symbols-outlined">description</span>
                                            Project Details
                                        </h3>
                                        <div className="rl-details">
                                            <div className="rl-detail-row">
                                                <p className="rl-detail-label">Project Title</p>
                                                <p className="rl-detail-value">{title || 'Next-Gen AI Interface Design'}</p>
                                            </div>
                                            <div className="rl-divider" />
                                            <div className="rl-detail-row">
                                                <p className="rl-detail-label">Category</p>
                                                <p className="rl-detail-value">{category}</p>
                                            </div>
                                            <div className="rl-divider" />
                                            <div className="rl-detail-row">
                                                <p className="rl-detail-label rl-detail-label--ai">
                                                    <span className="material-symbols-outlined">auto_awesome</span>
                                                    AI-Refined Description
                                                </p>
                                                <p className="rl-detail-desc">{description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── Milestone Roadmap ── */}
                                    <div className="rl-card rl-roadmap-card">
                                        <h3 className="rl-section-title">
                                            <span className="material-symbols-outlined">map</span>
                                            Milestone Roadmap
                                        </h3>
                                        <div className="roadmap-timeline">
                                            {milestones.map((ms, i) => (
                                                <div key={i} className="roadmap-step">
                                                    <div className={`roadmap-step__dot ${i === 0 ? 'roadmap-step__dot--done' : 'roadmap-step__dot--pending'}`}>
                                                        {i === 0
                                                            ? <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: '#fff' }}>check</span>
                                                            : <span className="roadmap-step__num">0{i + 1}</span>}
                                                    </div>
                                                    <div className="roadmap-step__body">
                                                        <p className="roadmap-step__name">{ms.title || `Milestone ${i + 1}`}</p>
                                                        <div className="roadmap-step__meta">
                                                            <span className="roadmap-step__amount">${fmt(parseFloat(ms.amount) || 0)}</span>
                                                            {ms.escrow && (
                                                                <span className="roadmap-step__badge">Escrow Protected</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ── Final Budget Summary ── */}
                                    <div className="rl-budget-card">
                                        <h3 className="rl-budget-title">Final Budget Summary</h3>
                                        <div className="rl-budget-rows">
                                            <div className="rl-budget-row">
                                                <span>Milestone Total</span>
                                                <span>${fmt(milestoneTotal)}</span>
                                            </div>
                                            <div className="rl-budget-row">
                                                <span>Platform Fee (3%)</span>
                                                <span>${fmt(platformFee)}</span>
                                            </div>
                                            <div className="rl-budget-row">
                                                <span>Security Audit Fee</span>
                                                <span>${fmt(securityFee)}</span>
                                            </div>
                                            <div className="rl-budget-divider" />
                                            <div className="rl-budget-total">
                                                <span>Total Amount</span>
                                                <span>${fmt(grandTotal)}</span>
                                            </div>
                                        </div>
                                        <button className="rl-launch-btn" onClick={handleLaunch}>
                                            Sign &amp; Launch Project
                                            <span className="material-symbols-outlined">rocket_launch</span>
                                        </button>
                                        <p className="rl-launch-disclaimer">
                                            By launching, you agree to the JustFAI Smart Contract Governance and Dispute Resolution policy.
                                        </p>
                                    </div>
                                </div>

                                {/* ── Smart Contract Terms ── */}
                                <div className="rl-terms">
                                    <label className="rl-terms__label">
                                        <div className="rl-checkbox-wrap">
                                            <input
                                                type="checkbox"
                                                className="rl-checkbox"
                                                checked={agreed}
                                                onChange={e => setAgreed(e.target.checked)}
                                            />
                                            <span className="material-symbols-outlined rl-check-icon">check</span>
                                        </div>
                                        <div>
                                            <p className="rl-terms__title">Smart Contract Terms Compliance</p>
                                            <p className="rl-terms__desc">
                                                I acknowledge that this project will be governed by a programmatic smart contract on the network. Funds are held in decentralized escrow and released automatically upon milestone approval.
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                {/* ── Back / Save Draft ── */}
                                <div className="rl-actions">
                                    <button className="btn-back" onClick={() => setCurrentStep(s => s - 1)}>
                                        <span className="material-symbols-outlined">arrow_back</span>
                                        Back to Edit
                                    </button>
                                    <span className="rl-divider-bar">|</span>
                                    <button className="btn-back">
                                        <span className="material-symbols-outlined">save</span>
                                        Save Draft
                                    </button>
                                </div>
                            </>
                        )}

                    </div>
                </main>

                {/* ── Footer ── */}
                <footer className="pp-footer">
                    {currentStep === 3 ? (
                        <div className="rl-footer">
                            <div className="rl-footer__enc">
                                <span className="material-symbols-outlined">shield</span>
                                <span>End-to-End Encrypted &amp; AI Audited</span>
                            </div>
                            <div className="rl-footer__links">
                                <a href="/dashboard">Privacy Policy</a>
                                <a href="/dashboard">Terms of Service</a>
                                <a href="/dashboard">Developer API</a>
                            </div>
                            <div className="rl-footer__copy">© 2024 JustFAI Protocol</div>
                        </div>
                    ) : (
                        <div className="pp-footer__inner">
                            <div className="progress-section">
                                <div className="progress-section__row">
                                    <span className="progress-section__label">Setup Progress</span>
                                    <span className="progress-section__pct">{progressPct}% Complete</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-bar__fill" style={{ width: `${progressPct}%` }} />
                                </div>
                            </div>
                            <div className="draft-info">
                                <div className="draft-info__text">
                                    <p className="draft-info__title">Draft Saved</p>
                                    <p className="draft-info__sub">10 seconds ago</p>
                                </div>
                                <div className="draft-info__icon">
                                    <span className="material-symbols-outlined">cloud_done</span>
                                </div>
                            </div>
                        </div>
                    )}
                </footer>
                <Footer />

            </div>

            {/* ══════════ SUCCESS MODAL ══════════ */}
            {
                launched && (
                    <div className="success-overlay">
                        {/* Background orbs */}
                        <div className="success-orb success-orb--1" />
                        <div className="success-orb success-orb--2" />

                        {/* Confetti layer */}
                        <div className="confetti-layer">
                            <div className="confetti-dot" style={{ background: 'rgba(137,90,246,0.4)', transform: 'rotate(12deg)', top: '10%', left: '15%' }} />
                            <div className="confetti-dot" style={{ background: 'rgba(236,72,153,0.4)', transform: 'rotate(-45deg)', top: '20%', right: '20%' }} />
                            <div className="confetti-dot" style={{ background: 'rgba(137,90,246,0.3)', transform: 'rotate(90deg)', top: '60%', left: '10%' }} />
                            <div className="confetti-dot" style={{ background: 'rgba(244,114,182,0.3)', transform: 'rotate(12deg)', bottom: '15%', right: '15%' }} />
                            <div className="confetti-dot" style={{ background: 'rgba(137,90,246,0.5)', transform: 'rotate(-12deg)', top: '40%', right: '5%' }} />
                            <div className="confetti-dot" style={{ background: 'rgba(219,39,119,0.2)', top: '80%', left: '25%' }} />
                        </div>

                        {/* Glass card */}
                        <div className="success-card">
                            {/* Icon */}
                            <div className="success-icon-wrap">
                                <div className="success-icon-glow" />
                                <div className="success-icon">
                                    <span className="material-icons">check</span>
                                </div>
                            </div>

                            <h1>Project Successfully Launched!</h1>
                            <p>Your project is now live and secured by AI-driven smart contracts. Freelancers can now submit proposals.</p>

                            {/* Contract info */}
                            <div className="success-info-box">
                                <div>
                                    <p className="success-info-label">Smart Contract Address</p>
                                    <div className="success-contract-row">
                                        <span className="success-contract-addr">0x7a...4f2e</span>
                                        <button className="success-copy-btn" title="Copy address">
                                            <span className="material-icons">content_copy</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="success-info-label">Funds Locked in Escrow</p>
                                    <p className="success-amount">
                                        {fmt(milestoneTotal)}
                                        <span>USDC</span>
                                    </p>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="success-actions">
                                <a href="/dashboard" className="success-btn-primary">
                                    <span className="material-icons">dashboard</span>
                                    Go to Dashboard
                                </a>
                                <a href="/proposal" className="success-btn-outline">
                                    <span className="material-icons">visibility</span>
                                    View Project Listing
                                </a>
                            </div>

                            {/* Verified */}
                            <p className="success-verified">
                                <span className="material-icons">verified_user</span>
                                Transaction verified on the Ethereum Layer 2 network
                            </p>

                            {/* Viewers pill */}
                            <div className="success-viewers">
                                <div className="success-avatars">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy0HjnGvEfcCNHj7Awar7TE11YArdxWsk0C41CixaaBVVGmxwR-koNdPRkfSWAPigc676V7n8unzHcgYJ64m5tsJrrWt1oET0p8KzQvdA0ySR6CnVwZHdvkjScWHq1Xr1sr6HvvXvg7XmPLILSE7j9_DC60W4yMo9e53LFqrOa-Z5haJZVVTpQ7T6JMwpRKexEOIYn8W52re-ePyEW0JGjnfwsBTAXo7khx3JV3dLhmpz-63QiOity18zBZq1kGlWgoNYhBwxp3e40" alt="User 1" />
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAapfj_HFoOciDhXnPFaWQJ6Emmwwc9WnqZnpU080iFDIBIttsvua7tTnp0IDZftkQXyNz8PgIjdiSogAbR0Y1Mkcm3_hzwZRLtp4XcH5CEZP2RkCuohd1AUcXn2aRLKxkK1rpJ4Wqbmcwrq-WTFNYyxtKrn8tobunSe5ysO47T5ovFUdew29pL7Oc4k-ZpTy_ELORZcW8gjoR55KI1RSx7XkUHBTgw85QJ9DEI-tl-TPRXPc-JBgwBJriigkD4SIBxnTHunjwGZmSt" alt="User 2" />
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPLzTkMuEEE5JzXG-vwmh2lQgVwcr3PS5oT1rA2lZHjtmBZ1LeCzs7m53V9Vkh9mv2MpERk5noMFsPnc45BNju3kxeTiM9Hu8rnLyQB1nO2cOX2NdsXMmB0V9AwdQqzGBGVbTAfdabhQ7SoDo7Y_lzropFLZcq7olheMpk4j0EduEqBbk2JtQo7SNQ4NqGOtIjZU2upzWCpSG3bpt57Ccmmn4s__-Nu10WTK3O_LoSi2nI5bqcucCzysXyh4T71TJtreEmU87ksyVG" alt="User 3" />
                                </div>
                                <p>12+ qualified experts already viewing your post</p>
                            </div>
                        </div>
                    </div>
                )}

        </>
    );
};

export default Postproject;
