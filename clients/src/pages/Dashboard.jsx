import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="mb-5">
                    <div className="bg-primary-custom rounded-3 d-flex align-items-center justify-content-center text-white" style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'var(--primary)' }}>
                        <span className="material-symbols-outlined fs-4">auto_awesome</span>
                    </div>
                </div>
                <nav className="d-flex flex-column gap-3 w-100 flex-grow-1 px-2">
                    <a href="/dashboard" className="sidebar-link active" title="Dashboard">
                        <span className="material-icons">dashboard</span>
                    </a>
                    <a href="/post-project" className="sidebar-link" title="Projects">
                        <span className="material-icons">account_tree</span>
                    </a>
                    <a href="/wallet" className="sidebar-link" title="Payments">
                        <span className="material-icons">account_balance_wallet</span>
                    </a>
                    <a href="/workspace" className="sidebar-link" title="Messages">
                        <span className="material-icons">chat_bubble</span>
                    </a>
                    <a href="/ai-assistant" className="sidebar-link" title="AI Analytics">
                        <span className="material-icons">query_stats</span>
                    </a>
                </nav>
                <div className="mt-auto d-flex flex-column gap-3 align-items-center mb-3">
                    <a href="/dashboard" className="sidebar-link" title="Settings">
                        <span className="material-symbols-outlined">settings</span>
                    </a>
                    <div className="rounded-circle border border-primary border-opacity-25 overflow-hidden" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzU-DxblO7ZKL5YhyhoUt0AgCEHvGklEYGL555oVprOTvm7M-JtoVIKoR3W_n4s1woFNZ0d9hndW99B5KMFRzi9sVZUpPb7bcSEy6R8XvPx6AkK82fmWzthLvc2HDxWYNr60Hs4GZFA-LpMnH2LzDJwVfkdxAKPZZyGcEGgO6kgDyu-DHldUNNNWFZlfZ4ZOyP7UagqQChEUjMywE_mOzf8kp5SFuBMzmDwOiFQAknNZ7xyx0FUtv6c9-HPOw0kdzhmiPbh5GtbzYD" alt="User" className="w-100 h-100 object-fit-cover" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="d-flex align-items-center gap-4">
                        <div className="d-flex flex-column">
                            <span className="small text-white text-opacity-75 text-uppercase fw-bold ls-wider" style={{ letterSpacing: '0.1em', fontSize: '0.75rem' }}>Wallet Status</span>
                            <div className="d-flex align-items-center gap-2">
                                <h1 className="h4 fw-bold text-white mb-0">$12,840.45</h1>
                                <span className="badge bg-success bg-opacity-25 text-success text-uppercase fw-bold" style={{ fontSize: '0.625rem' }}>Verified</span>
                            </div>
                        </div>
                        <div className="d-none d-md-block bg-white bg-opacity-10" style={{ height: '2.5rem', width: '1px' }}></div>
                        <div className="d-none d-lg-flex flex-column">
                            <span className="small text-white text-opacity-75" style={{ fontSize: '0.75rem' }}>Next payout expected</span>
                            <span className="small fw-medium text-white">Oct 24, 2023 • $3,200.00</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-translucent d-flex align-items-center gap-2 rounded-3 py-2 px-3">
                            <span className="material-symbols-outlined fs-6">history</span>
                            Transactions
                        </button>
                        <button className="btn btn-accent d-flex align-items-center gap-2 rounded-3 py-2 px-3">
                            <span className="material-symbols-outlined fs-6">add_circle</span>
                            Quick Deposit
                        </button>
                        <div className="position-relative ms-2 rounded-3 d-flex align-items-center justify-content-center text-white bg-black bg-opacity-25" style={{ width: '2.5rem', height: '2.5rem', cursor: 'pointer' }}>
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="position-absolute top-0 end-0 translate-middle p-1 bg-accent border border-2 border-primary rounded-circle" style={{ marginTop: '0.5rem', marginRight: '0.5rem' }}></span>
                        </div>
                    </div>
                </header>

                <div className="p-4 p-md-5 container-fluid" style={{ maxWidth: '80rem' }}>
                    {/* Title & Actions */}
                    <div className="d-flex align-items-end justify-content-between mb-4">
                        <div>
                            <h2 className="h2 fw-bold mb-1">Client Workspace</h2>
                            <p className="text-slate-500 mb-0">AI-Powered SaaS Platform Management</p>
                        </div>
                        <div className="d-flex gap-2 small fw-medium text-slate-400">
                            <span className="px-3 py-1 bg-primary bg-opacity-10 border border-primary border-opacity-25 text-accent rounded-pill">Active Session</span>
                            <span className="px-3 py-1 bg-dark border border-secondary border-opacity-25 rounded-pill">API: Stable</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <section className="row g-4 mb-5">
                        <div className="col-md-6 col-lg-3">
                            <div className="glass-card glass-card-hover p-4 h-100 d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="icon-box icon-box-primary">
                                        <span className="material-symbols-outlined">work</span>
                                    </div>
                                    <span className="text-success small fw-bold d-flex align-items-center gap-1">
                                        <span className="material-symbols-outlined fs-6">trending_up</span> +20%
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <p className="text-slate-400 small fw-medium mb-1">Active Jobs</p>
                                    <h3 className="h2 fw-bold mb-0">12</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="glass-card glass-card-hover p-4 h-100 d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="icon-box icon-box-amber">
                                        <span className="material-symbols-outlined">rate_review</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-slate-400 small fw-medium mb-1">Pending Reviews</p>
                                    <h3 className="h2 fw-bold mb-0">05</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="glass-card glass-card-hover p-4 h-100 d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="icon-box icon-box-blue">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <span className="text-slate-500 small fw-bold text-uppercase ls-wider" style={{ letterSpacing: '0.1em' }}>MTD</span>
                                </div>
                                <div className="mt-4">
                                    <p className="text-slate-400 small fw-medium mb-1">Total Spend</p>
                                    <h3 className="h2 fw-bold mb-0">$45,210</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="glass-card glass-card-hover p-4 h-100 d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="icon-box icon-box-emerald">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-slate-400 small fw-medium mb-1">Escrow Balance</p>
                                    <h3 className="h2 fw-bold mb-0">$3,100</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Milestone Feed */}
                    <section className="d-flex flex-column gap-4 mb-5">
                        <div className="d-flex align-items-center justify-content-between">
                            <h3 className="h5 fw-bold d-flex align-items-center gap-2">
                                <span className="material-symbols-outlined text-accent">reorder</span>
                                Milestone Feed
                            </h3>
                            <button className="btn btn-link text-accent text-decoration-none fw-semibold small">View All Schedule</button>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            {/* Milestone 1 */}
                            <div className="glass-card p-4 border-start border-4 border-accent" style={{ borderLeftColor: 'var(--accent) !important' }}>
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 border border-white border-opacity-10 bg-dark" style={{ width: '3rem', height: '3rem' }}>
                                            <span className="material-symbols-outlined text-slate-400">api</span>
                                        </div>
                                        <div>
                                            <h4 className="h6 fw-bold mb-1">API Integration (Phase 2)</h4>
                                            <p className="small text-slate-500 mb-0">Service Micro-components & Authentication Flow</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end gap-1">
                                        <span className="text-accent small fw-bold text-uppercase ls-wider" style={{ fontSize: '0.75rem' }}>Due in 2 days</span>
                                        <span className="text-slate-400 small fw-medium">Developer: Alex Rivera</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between small mb-2">
                                        <span className="text-slate-400 fw-medium">Progress</span>
                                        <span className="text-accent fw-bold">65%</span>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar-custom bg-accent" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Milestone 2 */}
                            <div className="glass-card p-4 border-start border-4 border-primary" style={{ borderLeftColor: 'var(--primary) !important' }}>
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 border border-white border-opacity-10 bg-dark" style={{ width: '3rem', height: '3rem' }}>
                                            <span className="material-symbols-outlined text-slate-400">palette</span>
                                        </div>
                                        <div>
                                            <h4 className="h6 fw-bold mb-1">UI/UX Design - Client Portal V2</h4>
                                            <p className="small text-slate-500 mb-0">Figma Prototype & Asset Handoff</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end gap-1">
                                        <span className="text-primary-custom small fw-bold text-uppercase ls-wider" style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>Due in 5 days</span>
                                        <span className="text-slate-400 small fw-medium">Designer: Sarah Chen</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between small mb-2">
                                        <span className="text-slate-400 fw-medium">Progress</span>
                                        <span className="text-primary-custom fw-bold" style={{ color: 'var(--primary)' }}>32%</span>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar-custom bg-primary-custom" style={{ width: '32%', backgroundColor: 'var(--primary)' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Milestone 3 */}
                            <div className="glass-card p-4 border-start border-4 border-success opacity-75" style={{ borderLeftColor: '#10b981 !important' }}>
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 border border-success border-opacity-25 bg-success bg-opacity-10" style={{ width: '3rem', height: '3rem' }}>
                                            <span className="material-symbols-outlined text-success">check_circle</span>
                                        </div>
                                        <div>
                                            <h4 className="h6 fw-bold mb-1 text-slate-400 text-decoration-line-through">Security Audit Report</h4>
                                            <p className="small text-slate-500 mb-0">Penetration testing & Vulnerability patch log</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end gap-1">
                                        <span className="text-success small fw-bold text-uppercase ls-wider" style={{ fontSize: '0.75rem' }}>Completed</span>
                                        <span className="text-slate-500 small fw-medium">Auditor: SecurAI Labs</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between small mb-2">
                                        <span className="text-slate-400 fw-medium">Progress</span>
                                        <span className="text-success fw-bold">100%</span>
                                    </div>
                                    <div className="progress-container bg-success bg-opacity-10">
                                        <div className="progress-bar-custom bg-success" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Project Hubs */}
                    <section className="mb-5">
                        <h3 className="small fw-bold text-slate-500 text-uppercase ls-wider mb-3" style={{ letterSpacing: '0.1em' }}>Active Project Hubs</h3>
                        <div className="d-flex flex-wrap gap-3">
                            <div className="project-hub">
                                <div className="rounded-2 d-flex align-items-center justify-content-center bg-primary bg-opacity-25 text-primary-custom" style={{ width: '2rem', height: '2rem', color: '#818cf8', backgroundColor: 'rgba(99, 102, 241, 0.2)' }}>
                                    <span className="material-symbols-outlined fs-6">rocket_launch</span>
                                </div>
                                <span className="small fw-semibold">Alpha SaaS v1.2</span>
                                <span className="material-symbols-outlined fs-6 text-slate-500">open_in_new</span>
                            </div>

                            <div className="project-hub">
                                <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ width: '2rem', height: '2rem', color: '#e879f9', backgroundColor: 'rgba(217, 70, 239, 0.2)' }}>
                                    <span className="material-symbols-outlined fs-6">auto_stories</span>
                                </div>
                                <span className="small fw-semibold">Brand Guidelines</span>
                                <span className="material-symbols-outlined fs-6 text-slate-500">open_in_new</span>
                            </div>

                            <div className="project-hub">
                                <div className="rounded-2 d-flex align-items-center justify-content-center" style={{ width: '2rem', height: '2rem', color: '#22d3ee', backgroundColor: 'rgba(6, 182, 212, 0.2)' }}>
                                    <span className="material-symbols-outlined fs-6">monitoring</span>
                                </div>
                                <span className="small fw-semibold">SEO Dashboard</span>
                                <span className="material-symbols-outlined fs-6 text-slate-500">open_in_new</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
