import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRust} from '@fortawesome/free-brands-svg-icons';
import "../styles/projects.css";
import React from "react";

export const Projects = () => {

    return (
        <div>
            <h1 className="projects-title">My projects</h1>
               <div className="project-grid">
                    <div className="box">
                        <h3>Therapy Time</h3>
                        <h5>Full stack scheduling app</h5>
                        <p>Web application for managing patients, schedule, and payments</p>
                        <a className="card-link" href="https://github.com/fede1525/Therapy-Time">Source code</a>
                        <a className="card-link" href="https://www.youtube.com/watch?v=G2Ty1Y9_wTg">See it in action</a>
                    </div>
                    <div className="box">
                        <h3>Multi-threaded server</h3>
                        <h5>HTTP Server</h5>
                        <p>HTTP server written in Rust <FontAwesomeIcon icon={faRust} style={{color: "#e66100",}}/> </p>
                        <a className="card-link" href="https://github.com/fede1525/Multithread-server">Source code</a>
                    </div>
                    <div className="box">
                        <h3>Personal web page</h3>
                        <h5>Built using React</h5>
                        <a className="card-link" href="https://github.com/fede1525/fede1525.github.io">Source code</a>
                        <a className="card-link" href="https://fede1525-github-io.vercel.app/projects">Recursion!</a>
                    </div>
                    <div className="box">
                        <h3>Star Wars API</h3>
                        <h5>Using Python, Flask and PostgreSQL</h5>
                        <p>API that provides infomation about Star Wars characters </p>
                        <a className="card-link" href="https://github.com/fede1525/StarWars-Api">Source code</a>
                    </div>
                    <div className="box">
                        <h3>Films API</h3>
                        <h5>Built using Java, Spring, MongoDB and React</h5>
                        <p>Web application that conveys information about films, including reviews</p>
                        <a className="card-link" href="https://github.com/fede1525/films-api">Source code</a>
                    </div>
               </div>
        </div>
    );
};
