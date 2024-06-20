import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faBootstrap, faCss3Alt, faPython, faJava, faLinux, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { Projects } from '../components/projects';
import React from 'react';

export const Landing = () => {
    return (
        <div>
            <h2>Hi there!</h2>
                <p>
                    My name is Federico, and I build software. I am a web developer from Argentina.
                </p>

                <h4>My stack </h4>
                <div className="stack-div">
                    <span className="stack-list">
                    <FontAwesomeIcon className="stack-icon" id="js-icon" icon={faJs} /> <FontAwesomeIcon className="stack-icon" id="react-icon" icon={faReact} /> <FontAwesomeIcon className="stack-icon" id="bootstrap-icon" icon={faBootstrap} /> 
                    <FontAwesomeIcon className="stack-icon" id="css-icon" icon={faCss3Alt} /> <FontAwesomeIcon className="stack-icon" id="python-icon" icon={faPython} /> <FontAwesomeIcon className="stack-icon" id="java-icon" icon={faJava} /> 
                    <FontAwesomeIcon className="stack-icon" id="linux-icon" icon={faLinux} /> <FontAwesomeIcon className="stack-icon" id="git-icon" icon={faGitAlt} />
                    </span>
                </div>
                <div>
                    <h4>My projects </h4>
                    <Projects />
                </div>
        </div>
    );
}
