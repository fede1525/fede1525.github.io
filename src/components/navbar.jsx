import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav className="navbar">
            <div>
                <Link to="/">
                    <p className="page-link">Home</p>
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
            <div>
                <Link to="/trivia">
                    <p className="page-link">Trivia</p>
                </Link>
            </div>
        </nav>
    );
}