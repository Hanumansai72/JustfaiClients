import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Allprojects.css';

const filterTabs = ['All Projects', 'Active', 'Completed', 'Draft'];

const Allprojects = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://justfaibackend.vercel.app/api/clients/getprojects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data.projects || []);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const getProjectStatus = (project) => {
        if (!project.milestones || project.milestones.length === 0) return 'Draft';
        const allCompleted = project.milestones.every(m => m.status === 'completed' || m.status === 'Completed');
        if (allCompleted) return 'Completed';
        const hasInProgress = project.milestones.some(m => m.status === 'in-progress' || m.status === 'In Progress' || m.status === 'active' || m.status === 'Active');
        if (hasInProgress) return 'Active';
        return 'Draft';
    };

    const getProjectProgress = (project) => {
        if (!project.milestones || project.milestones.length === 0) return 0;
        const completed = project.milestones.filter(m => m.status === 'completed' || m.status === 'Completed').length;
        return Math.round((completed / project.milestones.length) * 100);
    };

    const getCurrentMilestone = (project) => {
        if (!project.milestones || project.milestones.length === 0) return 'No milestones';
        const inProgress = project.milestones.find(m => m.status === 'in-progress' || m.status === 'In Progress' || m.status === 'active' || m.status === 'Active');
        if (inProgress) return inProgress.title || inProgress.name || 'In Progress';
        const upcoming = project.milestones.find(m => m.status === 'upcoming' || m.status === 'Upcoming' || m.status === 'pending' || m.status === 'Pending');
        if (upcoming) return upcoming.title || upcoming.name || 'Upcoming';
        return 'All Complete';
    };

    const getNextPayment = (project) => {
        if (!project.milestones || project.milestones.length === 0) return '--';
        const unpaid = project.milestones.find(m => m.status !== 'completed' && m.status !== 'Completed');
        if (unpaid && unpaid.amount) return `$${unpaid.amount.toLocaleString()}`;
        return '$0.00';
    };

    const filteredProjects = activeFilter === 'All Projects'
        ? projects
        : projects.filter(p => getProjectStatus(p) === activeFilter);

    const getStatusClass = (status) => {
        switch (status) {
            case 'Active': return 'active';
            case 'Completed': return 'completed';
            case 'Draft': return 'draft';
            default: return '';
        }
    };

    const getProjectIcon = (project) => {
        const title = (project.title || project.name || '').toLowerCase();
        if (title.includes('design') || title.includes('brand')) return 'brand_family';
        if (title.includes('app') || title.includes('dev') || title.includes('code')) return 'code';
        if (title.includes('video') || title.includes('motion')) return 'movie';
        if (title.includes('market') || title.includes('content')) return 'article';
        return 'work';
    };

    const isCompleted = (status) => status === 'Completed';

    const formatDate = (dateStr) => {
        if (!dateStr) return '--';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    };

    return (
        <div className="allprojects-container">
            {/* Sidebar */}
            <aside className="allprojects-sidebar">
                <div className="sidebar-logo">
                    <div className="sidebar-logo-icon">
                        <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <h1>JustFAI</h1>
                </div>

                <nav className="sidebar-nav">
                    <a href="/dashboard" className="sidebar-nav-item">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Dashboard</span>
                    </a>
                    <a href="/all-projects" className="sidebar-nav-item active">
                        <span className="material-symbols-outlined">work</span>
                        <span>Projects</span>
                    </a>
                    <a href="/wallet" className="sidebar-nav-item">
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                        <span>Payments</span>
                    </a>
                    <a href="/browse" className="sidebar-nav-item">
                        <span className="material-symbols-outlined">group</span>
                        <span>Freelancers</span>
                    </a>
                    <a href="/" className="sidebar-nav-item">
                        <span className="material-symbols-outlined">bar_chart</span>
                        <span>Reports</span>
                    </a>
                </nav>

                <div className="sidebar-storage">
                    <div className="sidebar-storage-card">
                        <p className="sidebar-storage-label">Storage</p>
                        <div className="sidebar-storage-bar">
                            <div className="sidebar-storage-bar-fill"></div>
                        </div>
                        <p className="sidebar-storage-text">7.2 GB of 10 GB used</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="allprojects-main">
                {/* Header */}
                <header className="allprojects-header">
                    <div className="header-search">
                        <div className="header-search-wrapper">
                            <span className="material-symbols-outlined header-search-icon">search</span>
                            <input
                                className="header-search-input"
                                type="text"
                                placeholder="Search projects, freelancers..."
                            />
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="header-action-btn">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="header-action-btn">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                        <div className="header-avatar">
                            <img
                                alt="User Avatar"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBioY36k_a0qz4NVVy7f0k6My4Si5xTFRveW-5wFwXkV9xcDFyPgrqHctyGlFpXwayaQ9Mb8kn7qgMsIxmBzjpjDCrTD2D6NrXsOaYu4pH1uAeQGPFsNvTHBu89X6iew_wJoN7z2rWEVsB5VgjB1TgTryKyLIa2HWxZeHPEK1EbTZ-MuiXWNV-p3OFK13ZOOcC0KE1LVf2y4s0rP5IDrXHb8Rb7FCOcsQjZN9lmB8xU_LJJoW_InnSHoROHXFcX-zmDjDmzUpBppOYW"
                            />
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="allprojects-content">
                    {/* Title & New Project Button */}
                    <div className="content-title-section">
                        <div className="content-title">
                            <h2>All Projects</h2>
                            <p>Manage and track your high-end project milestones</p>
                        </div>
                        <button className="btn-new-project" onClick={() => navigate('/post-project')}>
                            <span className="material-symbols-outlined">add</span>
                            New Project
                        </button>
                    </div>

                    {/* Filter Tabs */}
                    <div className="filter-tabs">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab}
                                className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
                                onClick={() => setActiveFilter(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                        <div className="filter-divider"></div>
                        <button className="filter-tab filter-tab-with-icon">
                            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>filter_list</span>
                            More Filters
                        </button>
                    </div>

                    {/* Project Cards */}
                    <div className="project-cards">
                        {loading && (
                            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-slate-400)' }}>
                                Loading projects...
                            </div>
                        )}
                        {error && (
                            <div style={{ textAlign: 'center', padding: '2rem', color: '#ef4444' }}>
                                Error: {error}
                            </div>
                        )}
                        {!loading && !error && filteredProjects.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-slate-400)' }}>
                                No projects found.
                            </div>
                        )}
                        {!loading && !error && filteredProjects.map((project) => {
                            const status = getProjectStatus(project);
                            const progress = getProjectProgress(project);
                            return (
                                <div
                                    key={project._id}
                                    className={`project-card ${isCompleted(status) ? 'completed' : ''}`}
                                    onClick={() => navigate(`/project-details/${project._id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="project-card-inner">
                                        {/* Project Info */}
                                        <div className="project-info">
                                            <div className={`project-icon ${isCompleted(status) ? 'slate' : 'primary'}`}>
                                                <span className="material-symbols-outlined">{getProjectIcon(project)}</span>
                                            </div>
                                            <div>
                                                <h3 className="project-name">{project.title || project.name || 'Untitled Project'}</h3>
                                                <p className="project-person">
                                                    <span className="material-symbols-outlined">person</span>
                                                    {project.freelancer?.name || project.assignedTo || 'Unassigned'}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Milestone Progress */}
                                        <div className="project-milestone">
                                            <div className="milestone-header">
                                                <span className="milestone-label">Milestone: {getCurrentMilestone(project)}</span>
                                                <span className={`milestone-percent ${isCompleted(status) ? 'slate' : ''}`}>
                                                    {progress}%
                                                </span>
                                            </div>
                                            <div className={`milestone-bar ${isCompleted(status) ? 'slate' : 'primary'}`}>
                                                <div
                                                    className={`milestone-bar-fill ${isCompleted(status) ? 'slate' : 'primary'}`}
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Meta Info */}
                                        <div className="project-meta">
                                            <div className="meta-item">
                                                <p className="meta-label">Next Payment</p>
                                                <p className="meta-value">{getNextPayment(project)}</p>
                                            </div>
                                            <div className="meta-item">
                                                <p className="meta-label">Deadline</p>
                                                <p className="meta-value">{formatDate(project.deadline || project.endDate)}</p>
                                            </div>
                                            <div className="project-status">
                                                <span className={`status-badge ${getStatusClass(status)}`}>
                                                    {status}
                                                </span>
                                                <button className="btn-more" onClick={(e) => e.stopPropagation()}>
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Allprojects;
