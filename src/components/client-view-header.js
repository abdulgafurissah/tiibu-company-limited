import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assests/styles/rootlayout.css';
import Logo from '../assests/images/logo.png'

function RootLayout() {
    // Opens the sidebar on small screens
    function displayNav() {
        setIsOpen(true);
    }

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let timer;
        if (isOpen) {
            timer = setTimeout(() => {
                setIsOpen(false);
            }, 5000); // Close after 5 seconds
        }
        return () => clearTimeout(timer); // Clean up the timer
    }, [isOpen, location]); // Re-run effect when isOpen or location changes
    return (
        <nav className="navbar">
                    <button className="menu-icon" onClick={displayNav}>
                        <svg
                            className="bi bi-list"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </button>
                    <img src={Logo} className="img-logo" alt="Logo" style={{width: '50px', height: '50px'}} />
                    <div className="brand">
                        Tiibu Co. Ltd
                    </div>
            <header className={`header ${isOpen ? 'open' : ''}`}>
                <button className="close" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projet">Projet</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </header> 
        </nav>
    );
}

export default RootLayout;
