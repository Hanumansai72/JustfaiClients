import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="justfai-footer">
            <div className="justfai-footer__inner">
                {/* Top Row */}
                <div className="justfai-footer__top">
                    {/* Brand */}
                    <div className="justfai-footer__brand">
                        <a href="/dashboard" className="justfai-footer__logo">
                            <div className="justfai-footer__logo-icon">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <span className="justfai-footer__logo-text">JustFAI</span>
                        </a>
                        <p className="justfai-footer__tagline">
                            AI-powered freelance marketplace with transparent escrow, smart contracts, and trust verification.
                        </p>
                    </div>

                    {/* Nav Columns */}
                    <nav className="justfai-footer__nav">
                        <div>
                            <h4 className="justfai-footer__col-title">Platform</h4>
                            <ul className="justfai-footer__col-links">
                                <li><a href="/dashboard"><span className="material-symbols-outlined">arrow_forward</span>Dashboard</a></li>
                                <li><a href="/browse"><span className="material-symbols-outlined">arrow_forward</span>Browse Talent</a></li>
                                <li><a href="/post-project"><span className="material-symbols-outlined">arrow_forward</span>Post a Project</a></li>
                                <li><a href="/ai-assistant"><span className="material-symbols-outlined">arrow_forward</span>AI Assistant</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="justfai-footer__col-title">Finance</h4>
                            <ul className="justfai-footer__col-links">
                                <li><a href="/wallet"><span className="material-symbols-outlined">arrow_forward</span>Wallet</a></li>
                                <li><a href="/milestone"><span className="material-symbols-outlined">arrow_forward</span>Milestones</a></li>
                                <li><a href="/milestone-history"><span className="material-symbols-outlined">arrow_forward</span>Payment History</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="justfai-footer__col-title">Resources</h4>
                            <ul className="justfai-footer__col-links">
                                <li><a href="/dashboard"><span className="material-symbols-outlined">arrow_forward</span>Help Center</a></li>
                                <li><a href="/dashboard"><span className="material-symbols-outlined">arrow_forward</span>Privacy Policy</a></li>
                                <li><a href="/dashboard"><span className="material-symbols-outlined">arrow_forward</span>Terms of Service</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Bottom Row */}
                <div className="justfai-footer__bottom">
                    <p className="justfai-footer__copy">
                        &copy; {new Date().getFullYear()} JustFAI Protocol. All rights reserved.
                    </p>
                    <div className="justfai-footer__badge">
                        <span className="material-symbols-outlined">verified_user</span>
                        End-to-End Encrypted &amp; AI Audited
                    </div>
                    <div className="justfai-footer__socials">
                        <button className="justfai-footer__social-btn"><span className="material-symbols-outlined">language</span></button>
                        <button className="justfai-footer__social-btn"><span className="material-symbols-outlined">mail</span></button>
                        <button className="justfai-footer__social-btn"><span className="material-symbols-outlined">code</span></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
