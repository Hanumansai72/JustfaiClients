import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email');
      setLoading(false);
      return;
    }

    if (!password.trim()) {
      setError('Password required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://justfaibackend.vercel.app/api/clients/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setSuccess(data.message);
        const token = data.token;
        localStorage.setItem('token', token);
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('email', email);
        }
        console.log('Login successful:', data);
        navigate('/dashboard');
      } else if (response.status === 404) {
        setError(data.message || 'Client not found');
      } else if (response.status === 400) {
        setError(data.message || 'Invalid credentials');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Client login error:', error);
      setError(error.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page mesh-gradient-bg">
      <div className="container-fluid d-flex align-items-center justify-content-center p-4" style={{ minHeight: '100vh' }}>
        <div className="row w-100 justify-content-center align-items-center" style={{ maxWidth: '72rem' }}>

          {/* ===== Left Section - Branding & Abstract ===== */}
          <div className="col-lg-6 d-none d-lg-flex flex-column gap-4">
            {/* Branding */}
            <div>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="brand-icon d-flex align-items-center justify-content-center">
                  <span className="material-icons text-white fw-bold" style={{ fontSize: '1.25rem' }}>psychology</span>
                </div>
                <span className="brand-text">
                  AI<span className="brand-highlight">Lancer</span>
                </span>
              </div>
              <h1 className="hero-heading">
                The New Era of <br />
                <span className="gradient-text">Intelligent Work</span>
              </h1>
              <p className="hero-sub">
                Empowering the global freelance economy with advanced AI matchmaking and seamless decentralized infrastructure.
              </p>
            </div>

            {/* Abstract Container */}
            <div className="position-relative w-100 abstract-container rounded-circle d-flex align-items-center justify-content-center" style={{ aspectRatio: '1/1', maxWidth: '28rem' }}>
              {/* Orbit Rings */}
              <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle abstract-circle-outer"></div>
              <div className="position-absolute rounded-circle abstract-circle-inner"></div>

              {/* Glow Nodes */}
              <div className="position-absolute rounded-circle glow-node-purple node-purple-1"></div>
              <div className="position-absolute rounded-circle glow-node-pink node-pink-1"></div>
              <div className="position-absolute rounded-circle glow-node-purple node-purple-2"></div>

              {/* Central Card */}
              <div className="neural-card d-flex flex-column align-items-center gap-3 shadow-lg">
                <div className="neural-icon-wrapper rounded-circle d-flex align-items-center justify-content-center">
                  <span className="material-symbols-outlined text-primary-custom" style={{ fontSize: '1.75rem' }}>hub</span>
                </div>
                <div className="text-center">
                  <p className="neural-title mb-0">Neural Core Link</p>
                  <p className="neural-status mb-0">Status: Operational</p>
                </div>
              </div>

              {/* Top Right Badge */}
              <div className="position-absolute badge-card d-flex align-items-center gap-2" style={{ top: '2.5rem', right: '2.5rem' }}>
                <span className="rounded-circle badge-dot-pink glow-node-pink d-inline-block"></span>
                <span className="badge-label">SYNC_ENABLED</span>
              </div>

              {/* Bottom Left Badge */}
              <div className="position-absolute badge-card d-flex align-items-center gap-2" style={{ bottom: '5rem', left: '0' }}>
                <span className="material-icons text-primary-custom" style={{ fontSize: '0.875rem' }}>auto_awesome</span>
                <span className="badge-label">AI_RANK: 0.992</span>
              </div>
            </div>
          </div>

          {/* ===== Right Section - Login Form ===== */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="form-card">
              <div className="mb-5">
                <h2 className="fw-bold mb-2 text-white" style={{ fontSize: '1.875rem' }}>Welcome Back</h2>
                <p className="text-secondary-custom mb-0">Sign in to your AI-powered portal</p>
              </div>

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

              <form onSubmit={handleSignIn}>
                {/* Email Input */}
                <div className="mb-4">
                  <label className="login-label" htmlFor="email">Email Address</label>
                  <input
                    className="login-input"
                    id="email"
                    placeholder="name@domain.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <label className="login-label mb-0" htmlFor="password">Password</label>
                    <a className="link-primary" href="#forgot" style={{ fontSize: '0.75rem' }}>Forgot password?</a>
                  </div>
                  <input
                    className="login-input"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Remember Me Checkbox */}
                <div className="d-flex align-items-center gap-2 py-2 mb-4">
                  <input
                    className="login-checkbox"
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="text-secondary-custom mb-0" style={{ fontSize: '0.875rem', cursor: 'pointer' }} htmlFor="remember">
                    Keep me logged in
                  </label>
                </div>

                {/* Sign In Button */}
                <button className="btn btn-primary-custom d-flex align-items-center justify-content-center gap-2" type="submit" disabled={loading}>
                  <span className="material-icons" style={{ fontSize: '0.875rem' }}>login</span>
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>

                {/* Divider */}
                <div className="divider-wrapper my-4">
                  <div className="position-absolute top-50 start-0 w-100 translate-middle-y">
                    <hr className="divider-line m-0" />
                  </div>
                  <div className="position-relative d-flex justify-content-center">
                    <span className="divider-text">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="row g-3">
                  <div className="col-6">
                    <button className="btn btn-social w-100 d-flex align-items-center justify-content-center gap-2" type="button">
                      <img
                        alt="Wallet"
                        className="wallet-img"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJyttoSMlq12kQl7nddF4oaYKCoqevQeq7E6anljxUFuRPtHs1ns7SJGeaWdRU5Vn-Q_95gLSMtuJhvzRbJIzmsLHnpDpDozIjU_BY_mEAS2LCdUdaesVVdqXR_yUjGVdiBvQR0UawS5I09CqMszlFvnPSomH_57pgx3Vm9z6JrsU4idgP9aVBs4EteRbMQvuewbWiwj8gyw86amNCGFvXJrVdESbO1flwAubmtWmg9Y_0c49BvEUCiET6hwt6Wsq_PaVghYuG95cK"
                      />
                      <span>Wallet</span>
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-social w-100 d-flex align-items-center justify-content-center gap-2" type="button">
                      <span className="material-icons text-muted-custom" style={{ fontSize: '0.875rem' }}>alternate_email</span>
                      <span>SSO</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Sign Up Link */}
              <p className="mt-4 text-center text-secondary-custom mb-0" style={{ fontSize: '0.875rem' }}>
                New to the platform?
                <a className="link-primary-bold ms-1" href="/signup">Create Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur Orbs */}
      <div className="blur-orb blur-orb-purple"></div>
      <div className="blur-orb blur-orb-pink"></div>
    </div>
  );
};

export default Login;
