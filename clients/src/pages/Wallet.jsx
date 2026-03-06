import React, { useState } from 'react';
import './Wallet.css';
import Footer from '../components/Footer';

const CONTRACTS = [
    { title: 'AI Neural Network Optimizer', client: 'Cyberdyne Systems', amount: '$2,500.00', pct: 75 },
    { title: 'E-commerce Smart Contract Audit', client: 'BlockShop Inc.', amount: '$1,200.00', pct: 33 },
    { title: 'Generative Art Portfolio Website', client: 'Artist.eth', amount: '$500.00', pct: 90 },
];

const TRANSACTIONS = [
    { date: 'Oct 24, 2023', name: 'Neural Network Milestone 2', type: 'Milestone Release', amount: '+$1,500.00', status: 'success', hash: '0x4b...1e2' },
    { date: 'Oct 22, 2023', name: 'Withdrawal to MetaMask', type: 'Payout', amount: '-$2,100.00', status: 'success', hash: '0x9f...d4a' },
    { date: 'Oct 20, 2023', name: 'Smart Contract Audit Deposit', type: 'Escrow Locked', amount: '+$1,200.00', status: 'pending', hash: '0x2a...6c9' },
    { date: 'Oct 18, 2023', name: "Artist.eth Milestone 1", type: 'Milestone Release', amount: '+$450.00', status: 'success', hash: '0xcc...b51' },
];

const amountClass = (a) => {
    if (a.startsWith('+$1') || a.startsWith('+$4')) return 'amount-pos';
    if (a.startsWith('-')) return 'amount-neg';
    return 'amount-pend';
};

const Wallet = () => {
    const [txFilter, setTxFilter] = useState('All Types');

    return (
        <div className="wallet-page">

            {/* ── Header ── */}
            <header className="wallet-header">
                <div>
                    <h1>Wallet &amp; Payments</h1>
                    <p>Manage your earnings, escrow contracts, and payout methods.</p>
                </div>
                <button className="wallet-connect-btn">
                    <span className="material-icons">account_balance_wallet</span>
                    Connect/Manage Wallet
                </button>
            </header>

            {/* ── Summary Cards ── */}
            <div className="wallet-summary-grid">
                {/* Total Balance */}
                <div className="summary-card">
                    <div className="summary-card__glow" />
                    <p className="summary-card__label">Total Balance</p>
                    <p className="summary-card__balance">$12,450.00</p>
                    <p className="summary-card__trend">
                        <span className="material-icons">trending_up</span>
                        +12% from last month
                    </p>
                </div>

                {/* Locked in Escrow */}
                <div className="summary-card">
                    <p className="summary-card__label">Locked in Escrow</p>
                    <div className="escrow-header">
                        <p className="summary-card__sub">$4,200.00</p>
                        <span className="summary-card__badge">5 Active Projects</span>
                    </div>
                    <div className="escrow-bar"><div className="escrow-bar__fill" /></div>
                </div>

                {/* Available to Withdraw */}
                <div className="summary-card">
                    <p className="summary-card__label">Available to Withdraw</p>
                    <p className="summary-card__sub">$8,250.00</p>
                    <button className="withdraw-btn">Withdraw Funds</button>
                </div>
            </div>

            {/* ── Split Grid ── */}
            <div className="wallet-split">
                {/* Escrow Contracts */}
                <div className="escrow-card">
                    <div className="section-header">
                        <h2>Active Escrow Contracts</h2>
                        <a href="/milestone-history">View all contracts</a>
                    </div>
                    <div className="contracts-list">
                        {CONTRACTS.map((c, i) => (
                            <div key={i} className="contract-item">
                                <div className="contract-item__head">
                                    <div>
                                        <p className="contract-item__title">{c.title}</p>
                                        <p className="contract-item__client">Client: {c.client}</p>
                                    </div>
                                    <div>
                                        <p className="contract-item__amount">{c.amount}</p>
                                        <p className="contract-item__ms">Current Milestone</p>
                                    </div>
                                </div>
                                <div className="contract-item__bar-row">
                                    <div className="contract-item__bar">
                                        <div className="contract-item__bar-fill" style={{ width: `${c.pct}%` }} />
                                    </div>
                                    <span className="contract-item__pct">{c.pct}%</span>
                                    <a href="/milestone" className="contract-item__view">
                                        View <span className="material-icons">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment methods + AI insight */}
                <div className="payment-col">
                    <div className="payment-card">
                        <div className="section-header">
                            <h2>Payment Methods</h2>
                            <button className="add-btn">
                                <span className="material-icons">add</span> Add New
                            </button>
                        </div>
                        <div className="methods-list">
                            {/* MetaMask */}
                            <div className="method-item method-item--active">
                                <div className="method-item__left">
                                    <div className="method-icon method-icon--glass">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQfbWJvw_Ti3Qws9UUYySOE1lg5yaSBb-olsJPnx5nVrt40QVlZ8ev9aehKdK8bxSeLyKp56JbTgBuHlOxNu3X7p8pdBZ0uRabAtEJy16VlCy0OmIB4A5K1xISV70DqvgmdAvYfXf_73REh0uQCPzO8rw-E8FNWxu89ZVoLMxJZqMSJHBQI7432EchkJztANxCDqineOBRl4T5EPpU69lsExXctMUKpmCATVq8HJvoqjt_E4Aqf1uJe88h8tqyqm2Z8lz9Y9X-m5NO"
                                            alt="MetaMask"
                                        />
                                    </div>
                                    <div>
                                        <p className="method-name">MetaMask Wallet</p>
                                        <p className="method-sub">0x71C...4e81</p>
                                    </div>
                                </div>
                                <div className="method-check"><span className="material-icons">check_circle</span></div>
                            </div>

                            {/* Coinbase */}
                            <div className="method-item method-item--inactive">
                                <div className="method-item__left">
                                    <div className="method-icon method-icon--blue">
                                        <span>C</span>
                                    </div>
                                    <div>
                                        <p className="method-name">Coinbase Pay</p>
                                        <p className="method-sub">Connected</p>
                                    </div>
                                </div>
                            </div>

                            {/* Visa */}
                            <div className="method-item method-item--inactive">
                                <div className="method-item__left">
                                    <div className="method-icon method-icon--slate">
                                        <span className="material-icons">credit_card</span>
                                    </div>
                                    <div>
                                        <p className="method-name">Visa Ending in 4242</p>
                                        <p className="method-sub">Expires 12/26</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Insight */}
                    <div className="ai-insight-card">
                        <div className="ai-insight-card__head">
                            <span className="material-icons">auto_awesome</span>
                            <h4>AI Payment Insight</h4>
                        </div>
                        <p>Based on your current escrow progress, you are projected to have <strong>$3,400</strong> available for withdrawal in <strong>8 days</strong>.</p>
                    </div>
                </div>
            </div>

            {/* ── Transaction History ── */}
            <div className="tx-card">
                <div className="tx-card__head">
                    <h2>Transaction History</h2>
                    <div className="tx-filter-btns">
                        {['All Types', 'Payouts', 'Escrow'].map(f => (
                            <button
                                key={f}
                                className={`tx-filter-btn${txFilter === f ? ' tx-filter-btn--active' : ''}`}
                                onClick={() => setTxFilter(f)}
                            >{f}</button>
                        ))}
                    </div>
                </div>
                <div className="tx-table-wrap">
                    <table className="tx-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Project / Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th className="text-right">Tx Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TRANSACTIONS.map((tx, i) => (
                                <tr key={i}>
                                    <td className="date">{tx.date}</td>
                                    <td>
                                        <p className="project-name">{tx.name}</p>
                                        <p className="project-type">{tx.type}</p>
                                    </td>
                                    <td className={amountClass(tx.amount)}>{tx.amount}</td>
                                    <td>
                                        <span className={`status-pill status-pill--${tx.status}`}>
                                            <span className={`status-dot status-dot--${tx.status}`} />
                                            {tx.status === 'success' ? 'Success' : 'Pending'}
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <a href="/milestone-history" className="tx-hash-link">
                                            <span>{tx.hash}</span>
                                            <span className="material-icons">open_in_new</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="tx-card__foot">
                    <p>Showing 1-4 of 24 transactions</p>
                    <div className="pag-btns">
                        <button className="pag-btn"><span className="material-icons">chevron_left</span></button>
                        <button className="pag-btn pag-btn--active">1</button>
                        <button className="pag-btn">2</button>
                        <button className="pag-btn">3</button>
                        <button className="pag-btn"><span className="material-icons">chevron_right</span></button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Wallet;
