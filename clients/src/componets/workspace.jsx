import React from 'react';
import './Workspace.css';

const Workspace = () => {
    return (
        <div className="workspace-container">
            {/* 1. Slim Sidebar */}
            <aside className="slim-sidebar">
                <div className="bg-primary rounded-3 d-flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'var(--primary)' }}>
                    <span className="material-icons text-white">bolt</span>
                </div>
                <nav className="d-flex flex-column gap-4">
                    <button className="sidebar-icon-btn active"><span className="material-icons">chat_bubble</span></button>
                    <button className="sidebar-icon-btn"><span className="material-icons">group</span></button>
                    <button className="sidebar-icon-btn"><span className="material-icons">folder</span></button>
                    <button className="sidebar-icon-btn"><span className="material-icons">settings</span></button>
                </nav>
                <div className="mt-auto">
                    <img className="rounded-circle border border-primary border-opacity-25" style={{ width: '2.5rem', height: '2.5rem', objectFit: 'cover' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUCcjJUzqcqTVzY366QBOxDQsnse4eol0vcQGFQAW-Ab1QV7fDq_acnkqoVH8Jf3iV9ycxXnKiG9LBFSJoMB55UeqHPMXl8SHsyJ9KYg9bz5n49L1-uzplRg5uiCreBAGMSJmTj3-yrdAdzwsrUeefiLel8yvedujIG0_fcCpuLr_sv5tJRNFbQl82WoSdgq6AWYZEE_6TLzF_mU_l79t24gv_KE4piKv1zRbdZJ1K0CZH4tBQiHlAE7fefdkb1Nl-EVGVlFRjRKe5" alt="User Profile" />
                </div>
            </aside>

            {/* 2. Conversation List Panel */}
            <div className="conversation-panel">
                <div className="search-container">
                    <h1 className="h5 fw-bold mb-3">Messages</h1>
                    <div className="position-relative">
                        <span className="material-icons position-absolute top-50 start-0 translate-middle-y ms-3 text-neutral-muted" style={{ fontSize: '1.2rem' }}>search</span>
                        <input className="search-input" placeholder="Search freelancers..." type="text" />
                    </div>
                </div>
                <div className="overflow-auto custom-scrollbar px-2 pb-2">
                    {/* Active Conversation */}
                    <div className="conversation-item active">
                        <div className="position-relative flex-shrink-0">
                            <img className="rounded-circle object-fit-cover" style={{ width: '3rem', height: '3rem' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbV9cHl-0Qbv2PH9SBVAI6DvvR7QYFjr0L1epK76s-B_hYpRhi-NS6cQup2_fFV6UI5N2Np2dr3cjTVGhPNw-yAbPywv8awPz785rMhgCqesLJHSbB-VXz9CPzPa1IBS_2fqGGgwVMXMV44TIbkX64lxelPlL1hz7CQpXjpPVL1RcpKM8Y9cSwYLouH6iUpb8Q-wpgzxyJI9ivdR0K5eHpTWZ04OE3MbNHqk8wC8En86LRcLX_BuNcMi2QgDgTOkxnfBHe6NZjf8F0" alt="Alex Rivera" />
                            <span className="position-absolute bottom-0 end-0 bg-success border border-dark rounded-circle" style={{ width: '0.75rem', height: '0.75rem', backgroundColor: 'var(--accent-green) !important' }}></span>
                        </div>
                        <div className="flex-grow-1 min-width-0">
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="h6 fw-bold mb-0 text-truncate">Alex Rivera</h3>
                                <span className="small text-neutral-muted" style={{ fontSize: '0.65rem' }}>2m ago</span>
                            </div>
                            <p className="small text-neutral-muted text-truncate mb-0 mt-1" style={{ fontSize: '0.75rem' }}>The AI model training is complete. Check the results.</p>
                        </div>
                    </div>

                    {/* Other Conversations */}
                    <div className="conversation-item">
                        <div className="position-relative flex-shrink-0">
                            <img className="rounded-circle object-fit-cover" style={{ width: '3rem', height: '3rem' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsU-NAl0CXYwPAeDclICIxfeN8rXgzbdpPxNWX0yc91ID6q0rsy_ENjgat4ToWhaeH6AzmhluZGOxLAMgUhCHpzFjnd-nLmZMvyZss-7xDJ02I-M8ohoGetE76x3wssTG2qjuYkAfyXkSgy4XmrlPV891kpksfQJj81LMCxOzXK2btPPJ6E0Yi0e8uhRokQOtmPgBtUjlyQIBl2j3Le4N3qhlXn3pqPqBsHaiqJRjxazl001eHmFL8B-H21i48OKz6ZdctpilIzfCi" alt="Sarah Chen" />
                        </div>
                        <div className="flex-grow-1 min-width-0">
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="h6 fw-bold mb-0 text-truncate">Sarah Chen</h3>
                                <span className="small text-neutral-muted" style={{ fontSize: '0.65rem' }}>1h ago</span>
                            </div>
                            <p className="small text-neutral-muted text-truncate mb-0 mt-1" style={{ fontSize: '0.75rem' }}>I've updated the UI components library.</p>
                        </div>
                    </div>

                    <div className="conversation-item">
                        <div className="position-relative flex-shrink-0">
                            <img className="rounded-circle object-fit-cover" style={{ width: '3rem', height: '3rem' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXRooPfNfFYdtPzkqg7T9RUglu3gSSoaBeAa_I6ftjCjkVPDSamBanKXmcklGk7cRZBMgJfgJDBuYwJlzVhEnKLGQwSw2MGGjblaDa9jD5ptGDei6D71VDEV-t1UkTfLoeygMEnYH4E8phKKi-AWkxcfRlqmuttHhNHbGyqVdCIirSzc5j1WCYz19VBqhIb0ksMbWX6Swa-Vo5sP9ZniDUoe9Z8AbA_gmzkmcytrhAgPagS4qRO_P9eRLWA_xrB6u3K4qmalGsa6gT" alt="Marcus Thorne" />
                        </div>
                        <div className="flex-grow-1 min-width-0">
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="h6 fw-bold mb-0 text-truncate">Marcus Thorne</h3>
                                <span className="small text-neutral-muted" style={{ fontSize: '0.65rem' }}>4h ago</span>
                            </div>
                            <p className="small text-neutral-muted text-truncate mb-0 mt-1" style={{ fontSize: '0.75rem' }}>Can we hop on a quick call for the API specs?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Main Chat Area */}
            <main className="chat-main">
                {/* Header */}
                <header className="glass-header">
                    <div className="d-flex align-items-center gap-3">
                        <div className="position-relative">
                            <img className="rounded-circle object-fit-cover" style={{ width: '2.5rem', height: '2.5rem' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvoqeSPmt8IVN9R6ZZMlv2N3PstXOKTKiHCHe01ECGdK4rGnS41g-HOkxN7PqHrrz7PkFD73PnrnRCPYj5kyDgC4sizFDiZifLPVk20djFngBYfRzp-J2xzDCEM9EkZdqUwHhlNF01Pdxaa_Z2TFmkvh88ysTIiqEA2PeESQjZMTNMfFeIxo9pXQvO49Gced1AVcfEN1EWBqHfT5o4CnYCNN3wTfvtzK1umMzaChdHWl7LQ6diK1L4ACEBdopRfzZSTAfnLMAvCZZS" alt="Alex Rivera" />
                        </div>
                        <div>
                            <div className="d-flex align-items-center gap-2">
                                <h2 className="h6 fw-bold mb-0">Alex Rivera</h2>
                                <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 rounded-pill" style={{ fontSize: '0.6rem' }}>VERIFIED</span>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-1">
                                <div className="d-flex align-items-center gap-1 text-accent-green">
                                    <span className="material-icons" style={{ fontSize: '0.75rem' }}>verified_user</span>
                                    <span className="text-uppercase fw-medium text-neutral-muted" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>Trust Score: 98%</span>
                                </div>
                                <span className="text-primary fw-medium text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>• Active Milestone: #2 Fine-Tuning</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-link text-neutral-muted"><span className="material-icons">videocam</span></button>
                        <button className="btn btn-sm btn-link text-neutral-muted"><span className="material-icons">info</span></button>
                    </div>
                </header>

                {/* Chat Content */}
                <div className="chat-content custom-scrollbar">
                    {/* Timestamp */}
                    <div className="d-flex justify-content-center mb-4">
                        <span className="badge bg-surface-dark text-neutral-muted fw-semibold text-uppercase px-3 py-1 rounded-pill" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Today</span>
                    </div>

                    {/* Received Message */}
                    <div className="message-group">
                        <img className="rounded-circle align-self-end flex-shrink-0" style={{ width: '2rem', height: '2rem' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTlk-_2wXNO_OFv5ouil-0SaBFAj_e5cgNooSy99rd0giSAb3yebG-OJhmLEPD1mVTv5T0rwNyxKUPs2ihA8r9SigrGfOZJvgpO8i0RghwFvY_jmGk_c2piYp260WBRTI9kx6GUNcd8j3i7So90EOwr8xU2bCYiXiWhGubUwGEnOIHjsASh6Zm9BKMgUZqIg_XwpaKROyQkW8HGUnhFiVpgzs267xf79FviKvjd7kvELs8ZaU-CmC5jlFLPNvPlAIe_JVQ_5O6WGs3" alt="Alex" />
                        <div>
                            <div className="message-bubble received">
                                <p className="mb-0">Hey! I've just finished the fine-tuning process for the LLM model. The validation loss is significantly lower than our baseline. Take a look at the logs I've attached below.</p>
                            </div>
                            <span className="small text-neutral-muted mt-1 d-block" style={{ fontSize: '0.65rem' }}>10:42 AM</span>
                        </div>
                    </div>

                    {/* Attachment */}
                    <div className="attachment-card">
                        <div className="rounded d-flex align-items-center justify-content-center bg-primary bg-opacity-25" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span className="material-icons text-primary">analytics</span>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <h4 className="h6 fw-semibold mb-0 text-truncate" style={{ fontSize: '0.75rem' }}>model_training_logs_v2.csv</h4>
                            <p className="small text-neutral-muted mb-0" style={{ fontSize: '0.65rem' }}>4.2 MB • CSV Report</p>
                        </div>
                        <span className="material-icons text-neutral-muted" style={{ fontSize: '1.25rem' }}>download</span>
                    </div>

                    {/* Sent Message */}
                    <div className="message-group self">
                        <div className="message-bubble sent">
                            <p className="mb-0">That looks incredible, Alex! I'm impressed by the turnaround time. I'll review the logs right now. If everything aligns with the requirements, I'll release the payment for this milestone immediately.</p>
                        </div>
                        <div className="d-flex align-items-center gap-1 mt-1">
                            <span className="small text-neutral-muted" style={{ fontSize: '0.65rem' }}>10:45 AM</span>
                            <span className="material-icons text-primary" style={{ fontSize: '0.9rem' }}>done_all</span>
                        </div>
                    </div>

                    {/* Received Message */}
                    <div className="message-group">
                        <img className="rounded-circle align-self-end flex-shrink-0" style={{ width: '2rem', height: '2rem' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK2Orhen0rAYnoUqNF8yzTq9FydvnDS4b6juoheYpHuVO-60F0USID5l0sarKktgAonbvk22AHqtkvQ-UMXsMDm4Db9XXjzvp-Thm92enem9eGJkiFshGewCd3eyDoHWcvs-5jlWwx0J2UDz4dipIC1rVRg0Xg0w5Puf4vU1fewp084wwIdHAyKPqN-l2cZ3cJPDz3SXOPsKiJLuVGx8f62inzWub0lIm060hh9Y0uQMuC7kHTLyY5ZhCl6rldjUBEWOwwd4loUMyp" alt="Alex" />
                        <div>
                            <div className="message-bubble received">
                                <p className="mb-0">Perfect. I'm already prepping the environment for Milestone #3 (Integration).</p>
                            </div>
                            <span className="small text-neutral-muted mt-1 d-block" style={{ fontSize: '0.65rem' }}>10:46 AM</span>
                        </div>
                    </div>
                </div>

                {/* Composer */}
                <div className="composer-area">
                    <div className="composer-box">
                        <textarea className="composer-input" placeholder="Type your message..."></textarea>
                        <div className="d-flex align-items-center justify-content-between px-2 pb-1">
                            <div className="d-flex gap-1">
                                <button className="btn btn-sm btn-link text-neutral-muted p-1"><span className="material-icons">attach_file</span></button>
                                <button className="btn btn-sm btn-link text-neutral-muted p-1"><span className="material-icons">sentiment_satisfied_alt</span></button>
                                <button className="btn btn-sm btn-link text-neutral-muted p-1"><span className="material-icons">alternate_email</span></button>
                            </div>
                            <button className="btn btn-sm btn-primary d-flex align-items-center gap-2 px-3 fw-bold">
                                Send <span className="material-icons" style={{ fontSize: '0.8rem' }}>send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* 4. Right Panel: Project Info */}
            <aside className="project-panel custom-scrollbar">
                <h2 className="small fw-bold text-uppercase text-neutral-muted mb-4" style={{ letterSpacing: '0.1em' }}>Project Quick View</h2>

                <div className="d-flex flex-column gap-4">
                    {/* Title */}
                    <div>
                        <h1 className="h6 fw-bold mb-2">AI Model Fine-Tuning & Deployment</h1>
                        <div className="d-flex align-items-center gap-2">
                            <span className="rounded-circle bg-success" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--accent-green) !important' }}></span>
                            <span className="small fw-medium text-accent-green">Active Project</span>
                        </div>
                    </div>

                    {/* Progress */}
                    <div>
                        <div className="d-flex justify-content-between align-items-end mb-2">
                            <span className="small fw-semibold">Milestone Progress</span>
                            <span className="small text-neutral-muted">2 of 4 Tasks</span>
                        </div>
                        <div className="progress" style={{ height: '0.5rem', backgroundColor: 'var(--surface-dark)' }}>
                            <div className="progress-bar bg-success" style={{ width: '50%', backgroundColor: 'var(--accent-green) !important', boxShadow: '0 0 8px rgba(16,185,129,0.4)' }}></div>
                        </div>
                        <ul className="list-unstyled mt-3 mb-0 d-flex flex-column gap-2">
                            <li className="d-flex align-items-center gap-2 small opacity-50 text-decoration-line-through">
                                <span className="material-icons text-accent-green" style={{ fontSize: '1rem' }}>check_circle</span>
                                Dataset Preparation
                            </li>
                            <li className="d-flex align-items-center gap-2 small">
                                <span className="material-icons text-primary" style={{ fontSize: '1rem' }}>radio_button_checked</span>
                                Model Fine-Tuning
                            </li>
                            <li className="d-flex align-items-center gap-2 small text-neutral-muted">
                                <span className="material-icons" style={{ fontSize: '1rem' }}>radio_button_unchecked</span>
                                API Integration
                            </li>
                            <li className="d-flex align-items-center gap-2 small text-neutral-muted">
                                <span className="material-icons" style={{ fontSize: '1rem' }}>radio_button_unchecked</span>
                                Final Deployment
                            </li>
                        </ul>
                    </div>

                    {/* Financials */}
                    <div className="bg-surface-dark rounded-3 p-3 border border-primary-10">
                        <div className="d-flex justify-content-between mb-2">
                            <span className="small text-neutral-muted">Escrow Balance</span>
                            <span className="small fw-bold">$1,200.00</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="small text-neutral-muted">Active Milestone</span>
                            <span className="small fw-bold">$500.00</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="d-flex flex-column gap-2 pt-3 border-top border-primary-10">
                        <button className="btn btn-primary w-100 fw-bold small py-2 shadow-sm">Approve & Pay Milestone</button>
                        <button className="btn btn-dark border border-primary-10 w-100 fw-bold small py-2 bg-surface-dark">Request Revision</button>
                    </div>

                    {/* Location */}
                    <div className="pt-3">
                        <div className="d-flex align-items-center gap-2 text-neutral-muted mb-2">
                            <span className="material-icons small">location_on</span>
                            <span className="small">Freelancer Location: Austin, USA</span>
                        </div>
                        <div className="map-container">
                            <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ zIndex: 1, pointerEvents: 'none' }}>
                                <span className="material-icons text-primary opacity-50 display-4">map</span>
                            </div>
                            <img className="map-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ91-546_v5qEfRYvAv-PPBFLEGmhe6Wl0XaJMLO6FqOFyJ3vY_zE2doA64YPXPCA_5GOM1dUwlcmEUE2gHNCgYCiX4u8gl91FiT7YUGJ_aeEr3rgAhtgJlknGCwec84QvQgG_WvyOMe-9T4bpP4CBbz23zYu-cx98P876eHc5dNktPQTt1chSccVyQrDmy1fWwZYZNeDxL0v4zL-ndwui-sXPDWFq786MTsP6l0CIQvK7XFahFnOL2gvPYZpM87qt7azrBTi99iB" alt="Map" />
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Workspace;
