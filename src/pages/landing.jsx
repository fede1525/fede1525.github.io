import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faBootstrap, faCss3Alt, faPython, faJava, faLinux, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import "../styles/index.css";

export const Landing = () => {
    return (
        <div>
            <h1>Welcome</h1>
                <p className="summary">
                    I'm Federico, a web developer dedicated to creating exceptional digital experiences. <br />
                    I specialize in creating responsive, user-friendly websites and web applications. <br />
                    I also have experience in developing desktop applications for data analysis with a clear user interface, using the Pandas and PyQt frameworks.<br />
                </p>
                <h2>What I offer: </h2>
                    <p className="service-list">
                        Custom web development: Tailored solutions designed to meet your unique needs and goals. <br />
                        Front-end expertise: Proficient in HTML5, CSS and Javascript, employing the React library. <br />
                        Back-end development: Experience with server-side languages and frameworks such as: Java, Python, Spring, Flask and PostgreSQL. <br />
                        Responsive design: Making sure your site looks great on any device, from desktop to smartphone. <br />
                    </p>

                <div className="stack-div">
                    <h4>My stack </h4>
                    <span className="stack-list">
                        <FontAwesomeIcon className="stack-icon" id="js-icon" icon={faJs} /> <FontAwesomeIcon className="stack-icon" id="react-icon" icon={faReact} /> 
                        <FontAwesomeIcon className="stack-icon" id="bootstrap-icon" icon={faBootstrap} /> <FontAwesomeIcon className="stack-icon" id="css-icon" icon={faCss3Alt} />
                        <FontAwesomeIcon className="stack-icon" id="python-icon" icon={faPython} /> <FontAwesomeIcon className="stack-icon" id="java-icon" icon={faJava} /> 
                        <FontAwesomeIcon className="stack-icon" id="linux-icon" icon={faLinux} /> <FontAwesomeIcon className="stack-icon" id="git-icon" icon={faGitAlt} />
                    </span>
                </div>
        </div>
    );
}
