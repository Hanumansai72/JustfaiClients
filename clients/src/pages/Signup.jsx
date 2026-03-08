import React, { useState, useEffect } from 'react';
import './Signup.css';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        if (!fullName.trim()) {
            setError('Full name required');
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email');
            setLoading(false);
            return;
        }

        if (password.length < 8) {
            setError('Password too short');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://justfaibackend.vercel.app/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, password }),
            });

            const data = await response.json();

            if (response.status === 201) {
                setSuccess(data.message);
                const token = data.token;
                localStorage.setItem('token', token);
                console.log('Client registered successfully:', data);
                setFullName('');
                setEmail('');
                setPassword('');
            } else if (response.status === 400) {
                setError(data.message);
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Client registration error:', error);
            setError(error.message || 'An error occurred during registration');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <main className="d-flex w-100 min-vh-100">
                {/* Left Section - Hero/Branding */}
                <section className="d-none d-lg-flex col-lg-6 position-relative flex-column align-items-center justify-content-center overflow-hidden border-r-subtle" style={{ backgroundColor: 'var(--bg-dark)' }}>
                    <div className="position-absolute w-100 h-100" style={{ background: 'radial-gradient(circle at center, rgba(137, 90, 246, 0.1), transparent)', opacity: 0.5 }}></div>

                    <div className="position-relative z-1 d-flex flex-column align-items-center">
                        <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '20rem', height: '20rem' }}>
                            <div className="position-absolute rounded-circle bg-gradient-sphere sphere-glow opacity-75" style={{ width: '12rem', height: '12rem' }}></div>
                            <div className="position-absolute rounded-circle blur-sm-custom" style={{ top: '-1rem', right: '-1rem', width: '4rem', height: '4rem', backgroundColor: 'rgba(137, 90, 246, 0.4)' }}></div>
                            <div className="position-absolute rounded-circle blur-md-custom" style={{ bottom: '2.5rem', left: '-3rem', width: '6rem', height: '6rem', backgroundColor: 'rgba(79, 70, 229, 0.3)' }}></div>
                            <div className="position-absolute rounded-circle blur-sm-custom" style={{ top: '8rem', right: '8rem', width: '2rem', height: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                        </div>

                        <div className="mt-5 text-center">
                            <h2 className="display-6 fw-bold text-white mb-2">Secure Your Future</h2>
                            <p className="text-primary-custom fw-medium text-uppercase small d-flex align-items-center justify-content-center gap-2">
                                <span className="material-icons fs-6">verified_user</span>
                                Powered by AI Escrow
                            </p>
                        </div>
                    </div>

                    <div className="position-absolute bottom-0 mb-4 text-muted small">
                        © 2024 Lancely AI. All rights reserved.
                    </div>
                </section>

                {/* Right Section - Form */}
                <section className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4 p-md-5" style={{ backgroundColor: 'var(--bg-dark)' }}>
                    <div className="w-100" style={{ maxWidth: '28rem' }}>

                        {/* Mobile Header */}
                        <div className="d-lg-none mb-4 text-center">
                            <h1 className="h3 fw-bold text-primary-custom">Lancely AI</h1>
                        </div>

                        <div className="glass-card shadow-lg">
                            <header className="mb-4 text-center">
                                <h2 className="h4 fw-bold text-white mb-2">Create your Client Account</h2>
                                <p className="text-secondary small">Hire top-tier freelance talent with AI-powered security.</p>
                            </header>

                            {error && (
                                <div className="alert alert-danger mb-3" role="alert">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="alert alert-success mb-3" role="alert">
                                    {success}
                                </div>
                            )}

                            <form className="d-flex flex-column gap-3" onSubmit={handleSignup}>
                                <div className="input-group-custom">
                                    <label className="signup-label" htmlFor="full-name">Full Name</label>
                                    <div className="position-relative">
                                        <span className="input-icon">
                                            <span className="material-icons fs-6">person</span>
                                        </span>
                                        <input
                                            type="text"
                                            id="full-name"
                                            name="full-name"
                                            className="signup-input"
                                            placeholder="John Doe"
                                            required
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="input-group-custom">
                                    <label className="signup-label" htmlFor="company-email">Company Email</label>
                                    <div className="position-relative">
                                        <span className="input-icon">
                                            <span className="material-icons fs-6">alternate_email</span>
                                        </span>
                                        <input
                                            type="email"
                                            id="company-email"
                                            name="email"
                                            className="signup-input"
                                            placeholder="john@company.com"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="input-group-custom">
                                    <label className="signup-label" htmlFor="password">Password</label>
                                    <div className="position-relative">
                                        <span className="input-icon">
                                            <span className="material-icons fs-6">lock</span>
                                        </span>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="signup-input"
                                            placeholder="••••••••"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary-signup mt-2 group" disabled={loading}>
                                    {loading ? 'Creating Account...' : 'Create Secure Account'}
                                    <span className="material-icons fs-6">arrow_forward</span>
                                </button>
                            </form>

                            <div className="position-relative my-4">
                                <div className="position-absolute w-100 top-50 start-0 translate-middle-y divider-line"></div>
                                <div className="position-relative d-flex justify-content-center">
                                    <span className="px-2 text-muted small text-uppercase bg-surface-dark">Or sign up with</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between gap-3">
                                <button className="social-btn flex-fill">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ500K1uUkttPgQrRsOZ5-HLJjAMoPiBBsYs-WCS7BdrneKy4BMMH3mmWRnZc45J_eWs9slcUepAyAzBLIMZPayX-h3Pux2pMevzgokCG8xXErVRM_aH-tyMlYExCqRXd_HqTcrReTi8i43BvKQIYO7bPDhxusZgKfN0QR7Avd8LuQxENqU4jVl3kDq6ijQZtWsKXoidssbo2dp869jv4awrAfTWyNJ9aMTZhYtjgTLxvImXHqgfp7BzaYebfC3zv9sy4F3487mIfE" alt="Google" />
                                </button>
                                <button className="social-btn flex-fill">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIS_bLg1hwzEmJpquLLJmkcNA0S1ipQFu5YGJ3F8NG-jXuN1c1s-76z4oz4Hp-613fNwlPBBoaFHJk-ua--cbeqsG8ThFzC_wENVa0KIQuR5l-bX2F2ywDR6pLsD4X_FMO5AQ7ld4f2xh4FbZgR3TOWYwY-M2Cq9oYdk4Z7wWv6vvUt0lLCbu5Ua545T2tYnH1GVTvQYVpebVIHBEGrT2VZlau3hlolAikvG4_uWfIZJp6EuDesugg4D6t0yIurXVV9WXqhfwQHlgh" alt="Apple" className="invert-1" style={{ filter: 'invert(1)' }} />
                                </button>
                                <button className="social-btn flex-fill">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjqyT1DRXwrtkGloHd6WWhyz6pyf4cY1TVQmw_1hDBIkOCxbdlH3BSF1mXqDgdnVhPEclrJ8MApt3jDN8UziTQ8zpnRZSxRh7XGqyxSWpvcq-dDsK4iLjg-kyyGUIewj7GbGK3BT116P_9u016JPpci9SkoSo_4mZakEy7Smb_IdBjGLFKFhsQWgLRn4cTdyaKlXAvhe6-B0-Afjx81YtdjgvOuNMk8_Gbjnf6wmdKLVSDIEmG_ks4MGau-8w0anAPupONGuny4BgT" alt="Twitter" />
                                </button>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-secondary small mb-0">
                                    Already have an account?
                                    <a href="/" className="text-primary-custom ms-1 text-decoration-none fw-semibold">Log in</a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 d-flex align-items-center justify-content-center gap-4 opacity-50 grayscale hover-grayscale-0 transition-all">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF1dogaoQC5wwZSfaFkPqEPIm-0PQ0FrOnT0JP0tGCouSkdv8h40IjiqkNb_MYnuhZlxpAxrdK6VKJgj2qC-3y-HJE9SwEbrNad7K7AINp3rCtV0TTt4KhCX2MTAtxKYc-TM_IADxnxjIC4lJ-c8fyfBGmMldJ1fGGm1Ls1ESkRDk5q6AD9ltfmIW6pH0TDUI_OFZ6npBoPBbKh2mI3cchNRVIOlgIQeUtAQaqpoF13oHlsRZ3UqMNEJonzgDoVazu6V24ZjtSG7qT" alt="Trusted Partner 1" style={{ height: '1.5rem', filter: 'grayscale(100%)' }} />
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRJN9jEgU0pi8DngWkQQLgNtW7Tm7Z9zsidVH5pKLve2okftn_97jTGWMdDeGYamqH6H9qJM7F3U7s6L8YrYWFgJxyNoAsNLaxrCCSQqOX8fBqN1fmqPY1jLWoBit-5zrkF4ZxGLto2xxmeMZq4E9fD18bsIFIufvwORckfwUb9HpY8M8h9aACR2eoKmvj2YpsVm2doD8SX2qlw6tCBbpq48mXWnVQ5ZeebS6BN7JhSm4O7fqUkI73HqF8vVe1h4umEOCRHQU9G-X4" alt="Trusted Partner 2" style={{ height: '1.5rem', filter: 'grayscale(100%)' }} />
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgQAVd1CRsdYc34IfTfVJbfotFhLklhKM4K1kF31XqtOXnaaR2fOV0ofL6sWdekCG1_50CogM_cJ58-0HKQ1K_8upWKI6CYgxpFSP6_W6TNnqeMcR-BHXcII6gEK4mDbud6Hw0TlgoeC7bXoDyXICqiEJkN6gFLVeGUZdS7A42EhWWYsjwl_dPQNvt6_PrhcKSS-V_pYsBXilfuPd_vNMB7T-uqVrXLqfCVN6hZ0a7PcJgG30H5u5MGU8WI3EBbDG7nnQMu6thEQZH" alt="Trusted Partner 3" style={{ height: '1.5rem', filter: 'grayscale(100%)' }} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Signup;
