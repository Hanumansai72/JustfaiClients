import React from 'react';
import './Milestonedetails.css';
import Footer from '../components/Footer';

const files = [
    { icon: 'description', name: 'logo_primary.svg', type: 'Vector Graphic • 1.2MB' },
    { icon: 'palette', name: 'style_guide.pdf', type: 'Document • 4.8MB' },
    { icon: 'grid_view', name: 'asset_pack.zip', type: 'Archive • 15.4MB' },
];

const auditMetrics = [
    { label: 'Visual Consistency', value: '98%', width: '98%' },
    { label: 'Punctuality', value: '100%', width: '100%' },
];

const metadata = [
    { label: 'REVISIONS', value: '2 of 3' },
    { label: 'DURATION', value: '4 Days' },
    { label: 'CATEGORY', value: 'Creative' },
    { label: 'ESCROW', value: 'Released', color: '#10b981' },
];

const Milestonedetails = () => {
    return (
        <div className="msd-page">
            {/* Header */}
            <header className="msd-header">
                <div className="msd-header__inner">
                    <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                            <span className="material-symbols-outlined" style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--primary)' }}>rocket_launch</span>
                            <h1 className="m-0 fw-bold text-white" style={{ fontSize: '1.25rem', letterSpacing: '-0.025em' }}>JustFAI</h1>
                        </div>
                        <nav className="d-none d-md-flex gap-4">
                            <a className="msd-nav-link" href="/dashboard">Dashboard</a>
                            <a className="msd-nav-link msd-nav-link--active" href="/post-project">Active Projects</a>
                            <a className="msd-nav-link" href="/milestone-history">Archive</a>
                            <a className="msd-nav-link" href="/wallet">Financials</a>
                        </nav>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <div className="position-relative d-none d-sm-block">
                            <span className="material-symbols-outlined position-absolute" style={{ left: '0.75rem', top: '0.5rem', color: '#94a3b8', fontSize: '1.25rem' }}>search</span>
                            <input className="msd-search-input" placeholder="Search archive..." type="text" />
                        </div>
                        <button className="msd-icon-btn"><span className="material-symbols-outlined">notifications</span></button>
                        <button className="msd-icon-btn"><span className="material-symbols-outlined">settings</span></button>
                        <div className="rounded-circle overflow-hidden" style={{ width: '2rem', height: '2rem', backgroundColor: 'rgba(137, 91, 245, 0.3)', border: '1px solid rgba(137, 91, 245, 0.5)' }}>
                            <img alt="User Avatar" className="w-100 h-100" style={{ objectFit: 'cover' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjtQdbj-VtTcTW_NoYCMjKa3bv2Gc7b8dNs1cgFC8zIcN87vENbpxdFIxBQKdUVaPw1nVxE-pKGV3OlGFyJIR9t1Q-FgRPq7NDXtPGp2u4fY4suIgn49HzsExoGiIIGjQSHRz-QU-Ea4tQjGGGrrsFhRl_mavXLWVKNhrY6FNPVkyft2ljxmAjomNr85txBbvir7wzD5XrqhDyFGgMi1dC53MzjACPgAg2IX4z-QjbndXQEb7UmRj0tY-CAfSpOso7edXGZhveVuMH" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="msd-main">
                {/* Breadcrumbs & Title */}
                <div className="mb-4">
                    <nav className="msd-breadcrumb mb-3">
                        <a href="/milestone-history">Past Submissions</a>
                        <span className="material-symbols-outlined" style={{ fontSize: '0.75rem' }}>chevron_right</span>
                        <span className="text-white">Milestone 1: Branding &amp; Logo</span>
                    </nav>
                    <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
                        <div>
                            <h2 className="fw-bold text-white m-0 mb-1" style={{ fontSize: '1.875rem', letterSpacing: '-0.025em' }}>Milestone 1: Branding &amp; Logo</h2>
                            <p className="m-0" style={{ color: '#94a3b8' }}>ID: M1-LOGO-2023 • Project: Aurora AI SaaS Platform</p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <div className="msd-status-badge">
                                <span className="msd-status-dot">
                                    <span className="msd-status-dot__ping"></span>
                                    <span className="msd-status-dot__solid"></span>
                                </span>
                                APPROVED &amp; PAID
                            </div>
                            <button className="msd-export-btn">
                                <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>download</span>
                                Export Assets
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3-Column Grid */}
                <div className="row g-4">
                    {/* Left Column */}
                    <div className="col-lg-3">
                        <div className="d-flex flex-column gap-4">
                            {/* Verified Files */}
                            <div className="msd-card">
                                <h3 className="fw-bold m-0 mb-3 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>verified</span>
                                    Verified Files
                                </h3>
                                <div className="d-flex flex-column gap-2">
                                    {files.map((file, idx) => (
                                        <div key={idx} className="msd-file-item">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="material-symbols-outlined" style={{ color: '#94a3b8' }}>{file.icon}</span>
                                                <div>
                                                    <p className="m-0 fw-semibold" style={{ fontSize: '0.75rem', color: '#e2e8f0' }}>{file.name}</p>
                                                    <p className="m-0" style={{ fontSize: '0.625rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>{file.type}</p>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined msd-file-item__download">download</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Quality Audit */}
                            <div className="msd-card position-relative overflow-hidden">
                                <div className="position-absolute" style={{ top: 0, right: 0, padding: '0.75rem', opacity: 0.1 }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '3.75rem' }}>query_stats</span>
                                </div>
                                <h3 className="fw-bold m-0 mb-3 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>auto_awesome</span>
                                    AI Quality Audit
                                </h3>
                                <div className="d-flex align-items-baseline gap-1 mb-4">
                                    <span className="fw-bold" style={{ fontSize: '2.25rem', color: 'var(--primary)' }}>96</span>
                                    <span style={{ color: '#94a3b8', fontWeight: 500 }}>/100</span>
                                </div>
                                <div className="d-flex flex-column gap-3">
                                    {auditMetrics.map((metric, idx) => (
                                        <div key={idx}>
                                            <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.75rem' }}>
                                                <span style={{ color: '#cbd5e1' }}>{metric.label}</span>
                                                <span className="fw-bold" style={{ color: 'var(--primary)' }}>{metric.value}</span>
                                            </div>
                                            <div className="msd-progress">
                                                <div className="msd-progress__fill" style={{ width: metric.width }}></div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="pt-3 mt-3" style={{ borderTop: '1px solid rgba(137, 91, 245, 0.1)' }}>
                                        <p className="m-0 fst-italic" style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>"The submission matches the requested design language and technical specifications perfectly."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="col-lg-6">
                        <div className="d-flex flex-column gap-4">
                            {/* Preview */}
                            <div className="msd-glass-preview">
                                <div className="msd-glass-preview__overlay"></div>
                                <div className="msd-glass-preview__label">
                                    <p className="m-0 fw-bold text-uppercase mb-1" style={{ fontSize: '0.75rem', color: 'var(--primary)', letterSpacing: '0.1em' }}>Primary Asset Preview</p>
                                    <h4 className="m-0 fw-bold text-white" style={{ fontSize: '1.25rem' }}>Aurora Primary Logo Mark</h4>
                                </div>
                                <div className="msd-glass-preview__content">
                                    <div className="msd-glass-preview__icon-box">
                                        <span className="material-symbols-outlined" style={{ fontSize: '5rem', color: 'var(--primary)', fontWeight: 300 }}>token</span>
                                    </div>
                                </div>
                                <button className="msd-glass-preview__fullscreen">
                                    <span className="material-symbols-outlined">fullscreen</span>
                                </button>
                                <img alt="Abstract gradient background" className="msd-glass-preview__bg-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqC7GaKBw1DG3de0MrDIZNtXIu70abiLOg5x3tXO9A71g_yfnCHpsf4EXJ80V9d0Go3m-vvolK7Cy5KoSyxShQ16LlnaOa0KPqAw3AHLL7BgIsV6ua8SxkytT5SIASbS3w-r3HLqzPdXmnCzyLjMe39Izj-Ezf0pyWlfqVGZtrKlchJpsBbJRcW6oY6awF9gN2S0PcxWZDVrMq07_7b-wv1uy5F0f4B2UrrycjPpGd-uyOi0dTYP33gXw3452EFLVlBzkncNWkWv79" />
                            </div>

                            {/* Client Feedback */}
                            <div className="msd-card p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h3 className="fw-bold m-0 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>chat_bubble</span>
                                        Client Feedback Archive
                                    </h3>
                                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Oct 12, 2023</span>
                                </div>
                                <div className="d-flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="rounded-circle overflow-hidden" style={{ width: '2.5rem', height: '2.5rem', backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                                            <img alt="Client Logo" className="w-100 h-100" style={{ objectFit: 'cover' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeGz27-XL2Tb1fRslLlYFiHYr76fbEb3yS0pRWGA36Z39Wi6k7BA_JmE_EPCLCVI-S9aL8hmzfAlEcW_qQk4MtzGOfBrR30OstFBATQ-mdXsxmr7uE6WkBz_42eKJYeOn2_cHM4B-V4Q__--KThD-13GKO6isv5Et_lVgkzvuAXsGOXizu2-aEpFjISqkeAnO2rjzU-SMUwE3-MVXCbj0BK7YR58R7PS8wS4SrLNby9I9mI5IQRNINxIRzYVaLVumycGVIC62GIAxk" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex align-items-center gap-2 mb-1">
                                            <span className="fw-bold" style={{ fontSize: '0.875rem' }}>Marcus Thorne</span>
                                            <span className="rounded fw-bold text-uppercase" style={{ fontSize: '0.625rem', backgroundColor: 'rgba(137, 91, 245, 0.2)', color: 'var(--primary)', padding: '0.125rem 0.375rem' }}>Client</span>
                                        </div>
                                        <p className="m-0" style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: 1.6 }}>
                                            "The logo mark perfectly captures the essence of our platform. The symmetry in the 'A' and the gradient selection feels modern yet stable. Approved for final release and immediate payment."
                                        </p>
                                        <div className="d-flex align-items-center gap-3 mt-3">
                                            <button className="bg-transparent border-0 d-flex align-items-center gap-1 fw-bold" style={{ fontSize: '0.75rem', color: 'var(--primary)', cursor: 'pointer' }}>
                                                <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>thumb_up</span>
                                                Pinned by Auditor
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-3">
                        <div className="d-flex flex-column gap-4">
                            {/* Audit Trail */}
                            <div className="msd-card">
                                <h3 className="fw-bold m-0 mb-4 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>analytics</span>
                                    Audit Trail
                                </h3>
                                <div className="d-flex flex-column gap-4">
                                    <div className="msd-timeline-item">
                                        <div className="msd-timeline-dot msd-timeline-dot--active"></div>
                                        <p className="m-0 fw-bold text-uppercase mb-1" style={{ fontSize: '0.625rem', color: '#64748b', letterSpacing: '0.1em' }}>Payment Released</p>
                                        <p className="m-0 fw-bold" style={{ fontSize: '0.875rem' }}>$1,200.00 USD</p>
                                        <p className="m-0" style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Oct 14, 2023 • 14:32 UTC</p>
                                    </div>
                                    <div className="msd-timeline-item">
                                        <div className="msd-timeline-dot msd-timeline-dot--inactive"></div>
                                        <p className="m-0 fw-bold text-uppercase mb-1" style={{ fontSize: '0.625rem', color: '#64748b', letterSpacing: '0.1em' }}>TXID Signature</p>
                                        <p className="m-0 font-monospace" style={{ fontSize: '0.6875rem', color: 'var(--primary)' }}>0x4f2b9a7c...e81d</p>
                                        <p className="m-0" style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Verified on Immutable Ledger</p>
                                    </div>
                                    <div className="msd-timeline-item">
                                        <div className="msd-timeline-dot msd-timeline-dot--inactive"></div>
                                        <p className="m-0 fw-bold text-uppercase mb-1" style={{ fontSize: '0.625rem', color: '#64748b', letterSpacing: '0.1em' }}>Contract Status</p>
                                        <p className="m-0 fw-bold" style={{ fontSize: '0.875rem' }}>Finalized &amp; Archived</p>
                                    </div>
                                </div>
                            </div>

                            {/* IP Rights */}
                            <div className="msd-ip-card">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'rgba(137, 91, 245, 0.2)' }}>
                                        <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>gavel</span>
                                    </div>
                                    <div>
                                        <h3 className="m-0 fw-bold" style={{ fontSize: '0.875rem' }}>IP Rights Transfer</h3>
                                        <p className="m-0 fw-bold" style={{ fontSize: '0.6875rem', color: '#10b981' }}>CERTIFIED SECURE</p>
                                    </div>
                                </div>
                                <p className="m-0 mb-3" style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.6 }}>
                                    All Intellectual Property (IP) rights for the deliverables associated with Milestone 1 have been legally transferred from the contributor to the client as of the timestamp of payment release.
                                </p>
                                <a className="fw-bold" href="/" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'underline', textDecorationColor: 'rgba(137, 91, 245, 0.3)' }}>View Transfer Certificate</a>
                            </div>

                            {/* Metadata */}
                            <div className="msd-card">
                                <h3 className="m-0 mb-3 fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>Metadata</h3>
                                <div className="msd-metadata-grid">
                                    {metadata.map((item, idx) => (
                                        <div key={idx}>
                                            <p className="m-0 fw-bold" style={{ fontSize: '0.625rem', color: '#64748b' }}>{item.label}</p>
                                            <p className="m-0 fw-bold" style={{ fontSize: '0.875rem', color: item.color || '#f1f5f9' }}>{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Milestonedetails;
