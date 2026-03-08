import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './projectdetails.css';

const Projectdetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://justfaibackend.vercel.app/api/getproject/${projectId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch project details');
                }
                const data = await response.json();
                setProject(data.project);
            } catch (err) {
                console.error('Error fetching project:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        if (projectId) {
            fetchProject();
        }
    }, [projectId]);

    const getMilestoneIcon = (status) => {
        const s = (status || '').toLowerCase();
        if (s === 'completed') return 'check';
        if (s === 'in-progress' || s === 'in progress' || s === 'active') return 'pending';
        return 'lock';
    };

    const getMilestoneStatus = (status) => {
        const s = (status || '').toLowerCase();
        if (s === 'completed') return 'completed';
        if (s === 'in-progress' || s === 'in progress' || s === 'active') return 'in-progress';
        return 'upcoming';
    };

    const getMilestoneBadgeText = (status) => {
        const s = getMilestoneStatus(status);
        switch (s) {
            case 'completed': return 'COMPLETED';
            case 'in-progress': return 'IN PROGRESS';
            case 'upcoming': return 'UPCOMING';
            default: return '';
        }
    };

    const getOverallProgress = () => {
        if (!project?.milestones || project.milestones.length === 0) return 0;
        const completed = project.milestones.filter(m => {
            const s = (m.status || '').toLowerCase();
            return s === 'completed';
        }).length;
        return Math.round((completed / project.milestones.length) * 100);
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '--';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    };

    const formatCurrency = (amount) => {
        if (!amount && amount !== 0) return '--';
        return `$${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const getCompletedMilestoneCount = () => {
        if (!project?.milestones) return '0 of 0';
        const completed = project.milestones.filter(m => (m.status || '').toLowerCase() === 'completed').length;
        return `${completed} of ${project.milestones.length} Complete`;
    };

    const getTotalBudget = () => {
        if (!project?.milestones || project.milestones.length === 0) return project?.budget || 0;
        return project.milestones.reduce((sum, m) => sum + (m.amount || 0), 0);
    };

    const getReleasedFunds = () => {
        if (!project?.milestones) return 0;
        return project.milestones
            .filter(m => (m.status || '').toLowerCase() === 'completed')
            .reduce((sum, m) => sum + (m.amount || 0), 0);
    };

    const getEscrowFunds = () => {
        if (!project?.milestones) return 0;
        return project.milestones
            .filter(m => {
                const s = (m.status || '').toLowerCase();
                return s === 'in-progress' || s === 'in progress' || s === 'active';
            })
            .reduce((sum, m) => sum + (m.amount || 0), 0);
    };

    if (loading) {
        return (
            <div className="pd-layout">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, color: 'var(--text-slate-400)' }}>
                    Loading project details...
                </div>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="pd-layout">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '1rem' }}>
                    <p style={{ color: '#ef4444' }}>{error || 'Project not found'}</p>
                    <button className="pd-btn-secondary" style={{ width: 'auto', padding: '0.5rem 1.5rem' }} onClick={() => navigate('/all-projects')}>
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    const totalBudget = getTotalBudget();
    const releasedFunds = getReleasedFunds();
    const escrowFunds = getEscrowFunds();
    const remainingBalance = totalBudget - releasedFunds - escrowFunds;

    return (
        <div className="pd-layout">
            {/* Navigation Bar */}
            <header className="pd-navbar">
                <div className="pd-navbar-brand">
                    <div className="pd-navbar-logo">
                        <span className="material-symbols-outlined filled-icon" style={{ fontSize: '1.875rem' }}>rocket_launch</span>
                        <h2>JustFAI</h2>
                    </div>
                    <nav className="pd-navbar-nav">
                        <a href="/dashboard">Dashboard</a>
                        <a href="/all-projects" className="active">Projects</a>
                        <a href="/workspace">Messages</a>
                        <a href="#">Settings</a>
                    </nav>
                </div>
                <div className="pd-navbar-actions">
                    <button className="pd-navbar-notif-btn">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div
                        className="pd-navbar-avatar"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTgRiSuNhFSWq5e_f9XUKSMVX0ekhoLCSOGtrVQMF7pmc9rsZWIrCHryABrJ1G9mCXynvq9bJeJM-_46-gziMMRPVnm93DnGMeTpH6bnyXBropUlcRD2ygpGlylLRjUSlkZkqehysFpgFTzMcLL091euFtVlZHW5-_5scUPF3Gd0cQdpaPs-ehNLDZfFFUZbeiQrgHt0rlkmpBkIrEXoFmIjSLsMVCr1tppLa_4BgKC3U0mzEMElrCj2wHIl0VtUB2616Sj1O6Uzox')`,
                        }}
                    ></div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pd-main">
                {/* Breadcrumbs */}
                <div className="pd-breadcrumbs">
                    <a href="/all-projects">Projects</a>
                    <span className="material-symbols-outlined">chevron_right</span>
                    <span className="current">{project.title || project.name || 'Project Details'}</span>
                </div>

                <div className="pd-grid">
                    {/* Left Content Area */}
                    <div className="pd-left-col">
                        {/* Project Header */}
                        <section className="pd-card">
                            <div className="pd-project-header-row">
                                <div>
                                    <h1 className="pd-project-title">{project.title || project.name || 'Untitled Project'}</h1>
                                    <p className="pd-project-desc">
                                        {project.description || 'No description provided.'}
                                    </p>
                                </div>
                                <div className="pd-project-budget-area">
                                    <span className="pd-status-badge">
                                        {getOverallProgress() === 100 ? 'Completed' : 'Active Development'}
                                    </span>
                                    <p className="pd-budget-amount">{formatCurrency(totalBudget)}</p>
                                    <p className="pd-budget-label">Total Project Budget</p>
                                </div>
                            </div>
                            <div className="pd-project-meta">
                                <div className="pd-meta-item">
                                    <p className="pd-meta-label">Start Date</p>
                                    <p className="pd-meta-value">{formatDate(project.startDate || project.createdAt)}</p>
                                </div>
                                <div className="pd-meta-item">
                                    <p className="pd-meta-label">Est. Delivery</p>
                                    <p className="pd-meta-value">{formatDate(project.deadline || project.endDate)}</p>
                                </div>
                                <div className="pd-meta-item">
                                    <p className="pd-meta-label">Milestones</p>
                                    <p className="pd-meta-value">{getCompletedMilestoneCount()}</p>
                                </div>
                                <div className="pd-meta-item">
                                    <p className="pd-meta-label">Escrow Status</p>
                                    <p className="pd-meta-value escrow-ok">
                                        <span className="material-symbols-outlined filled-icon">verified_user</span> Secured
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Milestone Roadmap */}
                        <section className="pd-card">
                            <h3 className="pd-section-title">
                                <span className="material-symbols-outlined">route</span> Milestone Roadmap
                            </h3>
                            <div className="pd-roadmap">
                                <div className="pd-roadmap-line"></div>
                                {project.milestones && project.milestones.length > 0 ? (
                                    project.milestones.map((ms, index) => {
                                        const msStatus = getMilestoneStatus(ms.status);
                                        const msProgress = ms.progress || (msStatus === 'completed' ? 100 : msStatus === 'in-progress' ? 50 : 0);
                                        return (
                                            <div className="pd-milestone" key={ms._id || index}>
                                                <div className={`pd-milestone-dot ${msStatus}`}>
                                                    <span className="material-symbols-outlined">{getMilestoneIcon(ms.status)}</span>
                                                </div>
                                                <div className={`pd-milestone-body ${msStatus}`}>
                                                    <div className={msStatus === 'upcoming' ? 'pd-upcoming-content' : ''}>
                                                        <div className="pd-milestone-header">
                                                            <div>
                                                                <h4 className="pd-milestone-name">{ms.title || ms.name || `Milestone ${index + 1}`}</h4>
                                                                <p className="pd-milestone-desc">{ms.description || 'No description'}</p>
                                                            </div>
                                                            <span className={`pd-milestone-badge ${msStatus}`}>
                                                                {getMilestoneBadgeText(ms.status)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {msStatus === 'in-progress' && (
                                                        <div className="pd-milestone-progress">
                                                            <div className="pd-milestone-progress-bar">
                                                                <div
                                                                    className="pd-milestone-progress-fill"
                                                                    style={{ width: `${msProgress}%` }}
                                                                ></div>
                                                            </div>
                                                            <span className="pd-milestone-progress-text">{msProgress}%</span>
                                                        </div>
                                                    )}
                                                    <div className="pd-milestone-footer">
                                                        <span>
                                                            {msStatus === 'upcoming'
                                                                ? `Estimated: ${formatCurrency(ms.amount)}`
                                                                : `Funded: ${formatCurrency(ms.amount)}${msStatus === 'in-progress' ? ' (Escrow)' : ''}`
                                                            }
                                                        </span>
                                                        {msStatus === 'completed' && ms.completedAt && (
                                                            <span>Released on {formatDate(ms.completedAt)}</span>
                                                        )}
                                                        {msStatus === 'in-progress' && (
                                                            <button>Review Deliverables</button>
                                                        )}
                                                        {msStatus === 'upcoming' && (
                                                            <button>Fund Milestone</button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p style={{ color: 'var(--text-slate-400)', textAlign: 'center' }}>No milestones added yet.</p>
                                )}
                            </div>
                        </section>

                        {/* Activity Log */}
                        <section className="pd-card">
                            <div className="pd-activity-header">
                                <h3>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>history</span> Activity Log
                                </h3>
                                <button>View All</button>
                            </div>
                            <div className="pd-activity-list">
                                {project.activities && project.activities.length > 0 ? (
                                    project.activities.map((act, index) => (
                                        <div className="pd-activity-item" key={act._id || index}>
                                            <div className="pd-activity-icon purple">
                                                <span className="material-symbols-outlined">info</span>
                                            </div>
                                            <div>
                                                <p className="pd-activity-text">{act.message || act.text || 'Activity recorded'}</p>
                                                <p className="pd-activity-time">{act.createdAt ? formatDate(act.createdAt) : '--'}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ color: 'var(--text-slate-400)', textAlign: 'center' }}>No activity yet.</p>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Area */}
                    <aside className="pd-right-col">
                        {/* Freelancer Profile Card */}
                        <div className="pd-card">
                            <p className="pd-contractor-label">Contractor</p>
                            <div className="pd-contractor-info">
                                <div
                                    className="pd-contractor-avatar"
                                    style={{
                                        backgroundImage: project.freelancer?.avatar
                                            ? `url('${project.freelancer.avatar}')`
                                            : `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM5afvvpY6yyM5t8cU6e19ELTIXm41gjktWvL4aIfn7SCZsSuqJgYjDvoE_w6aT3EpztwotBGqE0-UKgeabvv5HeVraYmEMaROljgup8t6QcjSd-33CKwRTldiWRjoSuNK6qpns1gXV3aO5x5isLtwle_mMittoePtjxjRDp7Tj70MDWDynW2Mf3I01_N2wea6EUklX6Adz-Z8fIclv0lLSpqWgTy2gfhN_Gl6XesNTaNqoQEbBTKO519QMbYedGXs1M_FGaD6lB0x')`,
                                    }}
                                ></div>
                                <div>
                                    <h3 className="pd-contractor-name">{project.freelancer?.name || 'Unassigned'}</h3>
                                    <p className="pd-contractor-role">{project.freelancer?.title || project.freelancer?.role || 'Freelancer'}</p>
                                    {project.freelancer?.rating && (
                                        <div className="pd-contractor-rating">
                                            <span className="material-symbols-outlined filled-icon">star</span>
                                            <span className="score">{project.freelancer.rating}</span>
                                            <span className="count">({project.freelancer.reviewCount || 0} reviews)</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="pd-contractor-actions">
                                <button className="pd-btn-primary">
                                    <span className="material-symbols-outlined">mail</span> Message Freelancer
                                </button>
                                <button className="pd-btn-secondary">
                                    <span className="material-symbols-outlined">schedule</span> Schedule Sync
                                </button>
                            </div>
                        </div>

                        {/* Escrow Details */}
                        <div className="pd-card">
                            <div className="pd-escrow-header">
                                <h4>Escrow Summary</h4>
                                <span className="material-symbols-outlined filled-icon">security</span>
                            </div>
                            <div className="pd-escrow-rows">
                                <div className="pd-escrow-row">
                                    <span className="label">Funds Secured</span>
                                    <span className="value">{formatCurrency(escrowFunds)}</span>
                                </div>
                                <div className="pd-escrow-row">
                                    <span className="label">Funds Released</span>
                                    <span className="value">{formatCurrency(releasedFunds)}</span>
                                </div>
                                <div className="pd-escrow-row">
                                    <span className="label">Remaining Balance</span>
                                    <span className="value">{formatCurrency(remainingBalance > 0 ? remainingBalance : 0)}</span>
                                </div>
                                <button className="pd-btn-add-funds">+ Add Project Funds</button>
                            </div>
                        </div>

                        {/* Project Files */}
                        <div className="pd-card">
                            <p className="pd-docs-label">Quick Documents</p>
                            <div className="pd-docs-list">
                                {project.documents && project.documents.length > 0 ? (
                                    project.documents.map((doc, index) => (
                                        <a href={doc.url || '#'} className="pd-doc-item" key={doc._id || index} target="_blank" rel="noopener noreferrer">
                                            <div className="pd-doc-item-left">
                                                <span className="material-symbols-outlined doc-icon">description</span>
                                                <span className="doc-name">{doc.name || doc.filename || `Document ${index + 1}`}</span>
                                            </div>
                                            <span className="material-symbols-outlined download-icon">download</span>
                                        </a>
                                    ))
                                ) : (
                                    <p style={{ color: 'var(--text-slate-400)', textAlign: 'center', fontSize: '0.875rem' }}>No documents uploaded.</p>
                                )}
                            </div>
                        </div>

                        {/* Help & Support */}
                        <div className="pd-help-card">
                            <h4>
                                <span className="material-symbols-outlined">help</span> Need Assistance?
                            </h4>
                            <p>Our support team is available 24/7 to help with escrow or contract disputes.</p>
                            <button className="pd-help-btn">Open Support Ticket</button>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Footer */}
            <footer className="pd-footer">
                <p>© 2023 JustFAI Platforms Inc. All funds are secured in FDIC-insured escrow accounts.</p>
            </footer>
        </div>
    );
};

export default Projectdetails;
