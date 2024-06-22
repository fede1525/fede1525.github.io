import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import "../styles/navbar.css";

export const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="page-link">
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className="socialmedia">
                <div className="social-link">
                    <a href="https://github.com/fede1525">
                        <FontAwesomeIcon className = "social-icon" icon={faGithub}/>
                    </a>
                </div>
                <div className="social-link">
                    <a href="https://www.linkedin.com/in/federicoresanofortain/">
                        <FontAwesomeIcon className = "social-icon" icon={faLinkedin}/>
                    </a>
                </div>
            </div>
            <div className="nav-links">
                <div className="page-link"> 
                    <Link to="/projects">
                         Projects
                    </Link>
                </div>
                <div className="page-link">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=federicoresano1@gmail.com"> Contact</a>
                </div>
            </div>
        </nav>
    );
}
