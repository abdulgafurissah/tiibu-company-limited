import { NavLink } from 'react-router-dom';
import '../assests/styles/rootlayout.css';



// Ensure DOM elements are loaded before attaching event listeners
window.onload = () => {
    const menuIcon = document.getElementById('menuIcon');
    const navMenu = document.getElementById('navMenu');

    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Apply fade-in/out animation with visibility toggle
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'block';
                setTimeout(() => (navMenu.style.opacity = '1'), 10); // Ensures smooth fade-in
            } else {
                navMenu.style.opacity = '0';
                setTimeout(() => (navMenu.style.display = 'none'), 300); // Matches transition time
            }
        });
    }
}

function RootLayout() {
    return (
        <>
        <header className="header">
                <div className="logo">Tiibu Co. Ltd</div>
                <div className="menu-icon" id="menuIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                <nav className="nav-menu" id="navMenu">
                    <ul>
                        <li><NavLink to="/"> Home</NavLink></li>
                        <li><NavLink to="about"> About</NavLink></li>
                        <li><NavLink to="service"> Service</NavLink></li>
                        <li><NavLink to="projet"> Projet</NavLink></li>
                        <li><NavLink to="contact"> Contact</NavLink></li>
                    </ul>
                </nav>
            </header>

        </>
            )}
export default RootLayout