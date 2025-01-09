import { NavLink } from 'react-router-dom';
import '../assests/styles/rootlayout.css';

function RootLayout() {
    function displayNav(){
        document.querySelector('header').style.width = '70vw'
        document.querySelector('nav').style.height = '100vh'
    }
    
    function closesidebar(){
        document.querySelector('header').style.width = '0px'
        document.querySelector('nav').style.height = '0px'
    }
    return (
        <>
            <nav className="nav">
        <div className="nav-div">
            <NavLink href="#" className="menu-icon" onClick={displayNav}><svg className="bi bi-list" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg></NavLink>  
        </div>
        <div className="nav-div">
            <NavLink className="brand" to="/"><i>Tiibu Co. Ltd,</i></NavLink>
            <img src="../img/2-512.png" alt=""/>    
        </div>
        <div className="nav-div">
            <ul className="nav-ul">
                <li className="nav-li"> <NavLink to="/"> Home</NavLink></li>
                <li className="nav-li"><NavLink to="/about"> About</NavLink></li>
                <li className="nav-li"><NavLink to="/service"> Service</NavLink></li>
                <li className="nav-li"><NavLink to="/projet"> Projet</NavLink></li>
                <li className="nav-li"><NavLink to="/contact"> Contact</NavLink></li>
            </ul>   
        </div>
    </nav>
    <header className="header">
        <NavLink className="close" onClick={closesidebar}>&times;</NavLink>
        <ul>
            <li><NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/about"> About</NavLink></li>
            <li><NavLink to="/service"> Service</NavLink></li>
            <li><NavLink to="/projet"> Projet</NavLink></li>
            <li><NavLink to="/contact"> Contact</NavLink></li>
        </ul>
    </header>

        </>
            )}
export default RootLayout


