import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ShellBar.css';

const ShellBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/overview', label: 'Overview', icon: '👁️' },
    { path: '/products', label: 'Products', icon: '📦' },
    { path: '/orders', label: 'Orders', icon: '🛒' },
    { path: '/customers', label: 'Customers', icon: '👥' },
    { path: '/reports', label: 'Reports', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <header className="shellbar">
      <div className="shellbar-start">
        <div className="logo">
          <span className="logo-icon">◈</span>
          <span className="logo-text">Fiori App</span>
        </div>
      </div>

      <nav className="shellbar-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="shellbar-end">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        <button className="icon-button" aria-label="Notifications">
          🔔
        </button>

        <button className="icon-button" aria-label="Help">
          ❓
        </button>

        <div className="user-menu">
          <button
            className="user-button"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            aria-label="User menu"
          >
            <div className="user-avatar">JD</div>
            <span className="user-name">John Doe</span>
          </button>

          {userMenuOpen && (
            <div className="user-dropdown">
              <Link to="/profile" className="dropdown-item">
                👤 Profile
              </Link>
              <Link to="/settings" className="dropdown-item">
                ⚙️ Settings
              </Link>
              <hr className="dropdown-divider" />
              <button className="dropdown-item logout">
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default ShellBar;
