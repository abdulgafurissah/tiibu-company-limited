import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/rootlayout.css';

function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

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
                        <li><NavLink to="/admin" className="hover:underline" state={{ from: location }}>Dashboard</NavLink></li>
                        <li><NavLink to="/admin/services" className="hover:underline" state={{ from: location }}>Services</NavLink></li>
                        <li><NavLink to="/admin/projects" className="hover:underline" state={{ from: location }}>Projects</NavLink></li>
                        <li><NavLink to="/admin/blog-posts" className="hover:underline" state={{ from: location }}>Blog Posts</NavLink></li>
                        <li><NavLink to="/admin/job-applications" className="hover:underline" state={{ from: location }}>Job Applications</NavLink></li>
                        <li><NavLink to="/admin/messages" className="hover:underline" state={{ from: location }}>Messages</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Sidebar;
