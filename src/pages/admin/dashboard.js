import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assests/styles/rootlayout.css';

function DashBoard() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header className="header">
                <div className="logo">Tiibu Co. Ltd</div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                <nav className={`nav-menu ${isActive ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/dashboard"> 
                                <span>Admin</span>
                                <ul>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/blog-posts">Blog Posts</Link></li>
                                    <li><Link to="/job-applications">Job Applications</Link></li>
                                    <li><Link to="/messages">Messages</Link></li>
                                </ul>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default DashBoard;

