import React from 'react';
import './Browserfreelancer.css';

const BrowserFreelancer = () => {
    return (
        <div className="browser-page mesh-gradient text-white">
            {/* Navbar */}
            <nav className="navbar navbar-expand-md glass-nav sticky-top px-4 py-3">
                <div className="container-fluid">
                    <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <span className="material-icons text-white fw-bold">bolt</span>
                        </div>
                        <span className="h5 mb-0 fw-bold text-uppercase tracking-tight">
                            Block<span className="text-primary-custom" style={{ color: 'var(--primary)' }}>Lancer</span>
                        </span>
                    </div>

                    <div className="collapse navbar-collapse justify-content-center d-none d-md-block">
                        <div className="d-flex gap-4">
                            <a href="#" className="nav-link-custom active">Browse Freelancers</a>
                            <a href="#" className="nav-link-custom">My Projects</a>
                            <a href="#" className="nav-link-custom">Finance</a>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <div className="d-none d-md-block" style={{ height: '2rem', width: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        <div className="d-flex align-items-center gap-3">
                            <div className="text-end d-none d-sm-block">
                                <p className="mb-0 text-secondary-custom small" style={{ fontSize: '0.75rem' }}>Connected Wallet</p>
                                <p className="mb-0 font-monospace fw-medium small">0x71C...3a42</p>
                            </div>
                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem', backgroundColor: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                                <span className="material-icons text-primary-custom" style={{ fontSize: '0.875rem', color: 'var(--primary)' }}>account_balance_wallet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container py-5">
                {/* Header */}
                <header className="mb-5">
                    <div className="row align-items-end gy-4">
                        <div className="col-md-7">
                            <h1 className="fw-bold display-5 mb-2">Browse Freelancers</h1>
                            <p className="text-secondary-custom mb-0" style={{ maxWidth: '40rem' }}>
                                Connect with top-tier talent verified by our AI engine and secure every collaboration with automated smart contract payments.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <div className="d-flex gap-3 justify-content-md-end">
                                <div className="position-relative flex-grow-1 flex-md-grow-0" style={{ minWidth: '250px' }}>
                                    <span className="material-icons search-icon">search</span>
                                    <input
                                        type="text"
                                        className="form-control search-input rounded-3"
                                        placeholder="Search skills or names..."
                                    />
                                </div>
                                <button className="btn glow-btn d-flex align-items-center gap-2 rounded-3 px-3 fw-medium">
                                    <span className="material-icons" style={{ fontSize: '1.1rem' }}>filter_list</span>
                                    Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* AI Top Talent Section */}
                <section className="mb-5">
                    <div className="d-flex align-items-center gap-2 mb-4 text-accent">
                        <span className="material-icons" style={{ fontSize: '1.2rem' }}>auto_awesome</span>
                        <span className="small fw-bold text-uppercase tracking-wider">AI Top Talent Recommendations</span>
                    </div>

                    <div className="row g-4">
                        {/* Card 1 */}
                        <div className="col-md-4">
                            <div className="card ai-glow-card border-0 text-white p-4 h-100">
                                <div className="ai-badge-glow">AI Match 98%</div>
                                <div className="d-flex align-items-center gap-3 mb-4 mt-2">
                                    <div className="rounded-circle p-1 border border-2 border-primary border-opacity-25" style={{ width: '4.5rem', height: '4.5rem' }}>
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBVy35boypjzPcoBSkWyMK8BZUVK4NgZNH90OeGqBPK8_jCTWDY0Q8EC6tUEObWmVxeC7B5yMwxoOiqFdZDWMZkWE7vLTCU5hFx5mORSrHDR0Kc4isdhJj_x7doVhhhbaINyg4Ab-4uy9_pxI1EzimlzhTplyFsBNlXFJ8CcMly2NEzdiphdYhTUh0z3lH6eZ1AgmCfJ4sOOBEpmvsujOG6caABHMWJ6Bg0ZS6snAhHXBbkpMmSmmm_Lkj79ezseNtaO-s8U66VmiW" alt="Alex Rivera" className="rounded-circle w-100 h-100 object-fit-cover" />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Alex Rivera</h5>
                                        <p className="small text-secondary-custom mb-1">Senior Blockchain Architect</p>
                                        <div className="trust-badge">
                                            <span className="material-icons me-1" style={{ fontSize: '0.7rem' }}>verified</span>
                                            Trust Score: 99
                                        </div>
                                    </div>
                                </div>
                                <p className="small text-light fst-italic mb-4 flex-grow-1 opacity-75">
                                    "Expert in EVM optimization and high-security smart contract audits for DeFi protocols."
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    <span className="skill-tag">Solidity</span>
                                    <span className="skill-tag">Rust</span>
                                    <span className="skill-tag">Audit</span>
                                </div>
                                <button className="btn glow-btn w-100 py-2 small fw-bold text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>View Profile</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">
                            <div className="card ai-glow-card border-0 text-white p-4 h-100">
                                <div className="ai-badge-glow">AI Match 95%</div>
                                <div className="d-flex align-items-center gap-3 mb-4 mt-2">
                                    <div className="rounded-circle p-1 border border-2 border-primary border-opacity-25" style={{ width: '4.5rem', height: '4.5rem' }}>
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq3pPjcKDbBNruhiVCgWKULVryIopBFbfbUi9YTPZkYz5mbpIcxMNP3tQ9UayjRHhX2OY8FmOaHm-U_Sm42dIBOn5iwzmsxiZpZPNeEZAZoOp_fg7xHm7rHNixZ2EeOOsAj23BG3aSey44DQ4ziYIyMEDzKkfOFmpkyeYnlBHDpJTOcuZqf_-8F_XDv0e4QgXiVSFgi3QGYCcYNFKVHAZEKO5WAQKTGaP4huhRBpdVNeO0qMmqeADxVd9PzrbsatAHtQIOw4b-NpIf" alt="Sarah Chen" className="rounded-circle w-100 h-100 object-fit-cover" />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Sarah Chen</h5>
                                        <p className="small text-secondary-custom mb-1">Full-Stack Web3 Developer</p>
                                        <div className="trust-badge">
                                            <span className="material-icons me-1" style={{ fontSize: '0.7rem' }}>verified</span>
                                            Trust Score: 97
                                        </div>
                                    </div>
                                </div>
                                <p className="small text-light fst-italic mb-4 flex-grow-1 opacity-75">
                                    "Building seamless dApp experiences with React, ethers.js and custom subgraph integration."
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">ethers.js</span>
                                    <span className="skill-tag">The Graph</span>
                                </div>
                                <button className="btn glow-btn w-100 py-2 small fw-bold text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>View Profile</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">
                            <div className="card ai-glow-card border-0 text-white p-4 h-100">
                                <div className="ai-badge-glow">AI Match 92%</div>
                                <div className="d-flex align-items-center gap-3 mb-4 mt-2">
                                    <div className="rounded-circle p-1 border border-2 border-primary border-opacity-25" style={{ width: '4.5rem', height: '4.5rem' }}>
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW-ci8yGZjOYcBRGiMufmYpoh9KoGh_RErAoMtI86G_BFU9aLQX5tHMQQyRw1DdC0IEdHYxwQjpFL-74e_URdCf-z0MP_5naoTGIgxB37Um7SMjwGR4ChFQC5oeIXEc6eM7c4UpxArl0LX0kVi210chjH5JyXOIFlGkKt9WN996PNSahVfaaovb_yCata8JpjaRRcO2BY7o6y__lhgOXy9LuQzEoIxX-UZjqV557xLoppJD6wApej0JkDVIXg6oxWkAn_-5S1qTHRX" alt="Marcus Thorne" className="rounded-circle w-100 h-100 object-fit-cover" />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Marcus Thorne</h5>
                                        <p className="small text-secondary-custom mb-1">Product Designer (Web3 Focus)</p>
                                        <div className="trust-badge">
                                            <span className="material-icons me-1" style={{ fontSize: '0.7rem' }}>verified</span>
                                            Trust Score: 95
                                        </div>
                                    </div>
                                </div>
                                <p className="small text-light fst-italic mb-4 flex-grow-1 opacity-75">
                                    "Designing intuitive interfaces for complex blockchain transactions and governance portals."
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    <span className="skill-tag">Figma</span>
                                    <span className="skill-tag">UI/UX</span>
                                    <span className="skill-tag">Design Systems</span>
                                </div>
                                <button className="btn glow-btn w-100 py-2 small fw-bold text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>View Profile</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Freelancer List */}
                <div className="glass-panel rounded-3 overflow-hidden mb-5">
                    <div className="p-4 border-bottom border-white-5 d-flex align-items-center justify-content-between">
                        <h6 className="mb-0 fw-bold text-uppercase tracking-wider text-secondary-custom small">Top Rated Freelancers</h6>
                        <span className="small text-secondary-custom opacity-75">Showing 1-10 of 428 results</span>
                    </div>

                    <div className="list-group list-group-flush">
                        {/* List Item 1 */}
                        <div className="list-group-item bg-transparent border-bottom border-white-5 p-4 list-item-hover">
                            <div className="row align-items-center gy-3">
                                <div className="col-auto">
                                    <div className="bg-dark rounded-3 d-flex align-items-center justify-content-center" style={{ width: '3.5rem', height: '3.5rem' }}>
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiJtvDUClqpsE5Fv2aCBCWlXGdQs6VdKDA63Z2k0rLwdJPlVVhU8_6kdvFIx7xfxb7RKLJXrSnU_Rfcy4lNAe-lcN1P5YLkOMwJ-hGIfGqBpX7U2Z0ke7EBbHxuh5kljDEJZGiyj-uAXf7xopKsGDuVxZCkmXJJCC1TcrPkARVk5ehiZgXtkY46qpaIW1l2zgkPf0o9mXOrOPghJ9eYu05LagDJxH--vgw4MXCx1Xwr2aw5G2HFkGWONLJv8nYuthGtGUSv1tv40YX" alt="Aria Stark" className="rounded-3 w-100 h-100 object-fit-cover opacity-75" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <h5 className="mb-0 fw-bold">Aria Stark</h5>
                                        <span className="badge bg-soft-accent text-accent border border-accent border-opacity-25 small">Trust Score: 100</span>
                                    </div>
                                    <p className="small text-secondary-custom mb-2">Cryptographic Infrastructure Engineer • $125/hr</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>Zero Knowledge</span>
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>C++</span>
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>Layer 2</span>
                                    </div>
                                </div>
                                <div className="col-auto text-end">
                                    <div className="small text-secondary-custom font-monospace mb-2">24 Projects Completed</div>
                                    <button className="btn btn-quick-hire rounded-1">Quick Hire</button>
                                </div>
                            </div>
                        </div>

                        {/* List Item 2 */}
                        <div className="list-group-item bg-transparent border-bottom border-white-5 p-4 list-item-hover">
                            <div className="row align-items-center gy-3">
                                <div className="col-auto">
                                    <div className="bg-dark rounded-3 d-flex align-items-center justify-content-center" style={{ width: '3.5rem', height: '3.5rem' }}>
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAasLrJJeRIB1hEFgeYaecXaQJn6QWDWAbAxcWS6wBDDMgdJ3aUQCKCSg81mo23yl1xLBVYYE7hUhuz9JxkIvFerbkVQ9hzriiXOKMp6Pdmdr0cmakeouucT4ee4dmgd-xwN_PivkUMsJ_o0HGh2y4mUpbSb27i0g6zE080dOaBklKP6f70rLtt7GUXU_3_pFipCp92QdfPNTNXpM9enmYb5kDBz_37MzmgX9ARlKrMCZLzdqecql8H_8rD90EYwafKsqADe_QDuzCc" alt="Leo Martinez" className="rounded-3 w-100 h-100 object-fit-cover opacity-75" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <h5 className="mb-0 fw-bold">Leo Martinez</h5>
                                        <span className="badge bg-soft-accent text-accent border border-accent border-opacity-25 small">Trust Score: 94</span>
                                    </div>
                                    <p className="small text-secondary-custom mb-2">Governance Framework Consultant • $90/hr</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>DAO</span>
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>Snapshot</span>
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>Economics</span>
                                    </div>
                                </div>
                                <div className="col-auto text-end">
                                    <div className="small text-secondary-custom font-monospace mb-2">15 Projects Completed</div>
                                    <button className="btn btn-quick-hire rounded-1">Quick Hire</button>
                                </div>
                            </div>
                        </div>

                        {/* List Item 3 */}
                        <div className="list-group-item bg-transparent border-0 p-4 list-item-hover">
                            <div className="row align-items-center gy-3">
                                <div className="col-auto">
                                    <div className="bg-dark rounded-3 d-flex align-items-center justify-content-center" style={{ width: '3.5rem', height: '3.5rem' }}>
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg_I8LMidhnuVXy3pO_tgWGrspo48gqd0pGD-75VLD7evRsdhN4rRQUW2P18TVKECTpltPwhD0n_ioE__51mdjuC3AyA2rdcTRpaNJ-QBXS5UgIyaTGT7kkYxc4HtrIPaXhvRudC5L07zUxMOE0MCnvjEwH1yRCi--mcvj7A8oCoRuvyz0QvMlKOJUU6suPCsyyo9ALaHbyrl-54EpWb0f5u15onCmNHsob8ZX85AsRl5-_ZFN51tF7pP_PM6vqfiDbCasC93jBZIh" alt="Elena Vance" className="rounded-3 w-100 h-100 object-fit-cover opacity-75" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <h5 className="mb-0 fw-bold">Elena Vance</h5>
                                        <span className="badge bg-soft-accent text-accent border border-accent border-opacity-25 small">Trust Score: 96</span>
                                    </div>
                                    <p className="small text-secondary-custom mb-2">Front-end Integration Specialist • $110/hr</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>Next.js</span>
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>Tailwind</span>
                                        <span className="skill-tag py-0 px-2" style={{ fontSize: '0.6rem' }}>Wagmi</span>
                                    </div>
                                </div>
                                <div className="col-auto text-end">
                                    <div className="small text-secondary-custom font-monospace mb-2">31 Projects Completed</div>
                                    <button className="btn btn-quick-hire rounded-1">Quick Hire</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 text-center bg-white-5">
                        <button className="btn btn-link text-primary text-decoration-none fw-bold small text-uppercase tracking-wider">Load More Freelancers</button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="row g-4 px-2">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center gap-3 p-3 rounded-3 hover-bg-soft transition-all">
                            <div className="rounded-circle d-flex align-items-center justify-content-center text-primary bg-primary bg-opacity-10" style={{ width: '3rem', height: '3rem' }}>
                                <span className="material-icons">verified_user</span>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-0">Encrypted Governance</h6>
                                <p className="small text-secondary-custom mb-0">Privacy first contract execution.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center gap-3 p-3 rounded-3 hover-bg-soft transition-all">
                            <div className="rounded-circle d-flex align-items-center justify-content-center text-primary bg-primary bg-opacity-10" style={{ width: '3rem', height: '3rem' }}>
                                <span className="material-icons">account_balance</span>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-0">Dispute Protection</h6>
                                <p className="small text-secondary-custom mb-0">Built-in arbitration layer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center gap-3 p-3 rounded-3 hover-bg-soft transition-all">
                            <div className="rounded-circle d-flex align-items-center justify-content-center text-primary bg-primary bg-opacity-10" style={{ width: '3rem', height: '3rem' }}>
                                <span className="material-icons">history</span>
                            </div>
                            <div>
                                <h6 className="fw-bold mb-0">On-chain Ledger</h6>
                                <p className="small text-secondary-custom mb-0">Every payment is auditable forever.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Background Blurs */}
            <div className="bg-blur-1"></div>
            <div className="bg-blur-2"></div>
        </div>
    );
};

export default BrowserFreelancer;
