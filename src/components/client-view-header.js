// File: src/components/RootLayout.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assests/styles/rootlayout.css';

function RootLayout() {
    // Opens the sidebar on small screens
    function displayNav() {
        const header = document.querySelector('.header');
        const nav = document.querySelector('.nav');
        if (header) {
            header.style.width = '70%';
            header.style.height = '100%';
        }
        if (nav) {
            nav.style.height = '0';
        }
    }

    // Closes the sidebar
    function closesidebar() {
        const header = document.querySelector('.header');
        const nav = document.querySelector('.nav');
        if (header) {
            header.style.width = '0';
        }
        if (nav) {
            nav.style.height = '100%';
        }
    }

    return (
        <>
            <nav className="nav">
                <div className="nav-div">
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
                </div>
                <div className="nav-div">
                    <NavLink className="brand" to="/">
                        <i>Tiibu Co. Ltd,</i>
                    </NavLink>
                    <img src="../../assests/images/logo.png" alt="Logo" />
                </div>
            </nav>
            <header className="header">
                <button className="close" onClick={closesidebar}>
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
        </>
    );
}

export default RootLayout;
