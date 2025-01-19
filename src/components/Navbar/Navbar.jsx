import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ username }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setShowDropdown(false);
    // Clear any auth state here
    navigate('/login');
    window.location.reload(); // Force reload to clear state
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          EduLearn
        </Link>
        <div className={styles.nav}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : ''}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/courses" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Courses
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Dashboard
          </NavLink>
        </div>
        <div className={styles.profileDropdown}>
          <button 
            className={styles.profileButton}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>{username}</span>
          </button>
          {showDropdown && (
            <div className={styles.dropdownMenu}>
              <button onClick={handleLogout} className={styles.dropdownItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.dropdownIcon}>
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 