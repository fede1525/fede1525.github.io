import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Context} from '../store/appContext';
import React, { useContext, useState, useEffect } from 'react';

export const Projects = () => {

    const { actions } = useContext(Context)
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchRepos = async () => {
            let resp = await actions.apiFetch("https://api.github.com/users/fede1525/repos", "GET")

            if (resp && !resp.error){
                setRepos(resp)
            }
        };

        fetchRepos();
    }, [actions]);

    return (
        <div>
            {repos.map((repo) => (
                <Card key={repo.id}>
                    <Card.Body>
                        <Card.Title>
                            {repo.name}
                        </Card.Title>
                        <Card.Text>
                            {repo.description}
                        </Card.Text>
                        <Button href={repo.html_url} target="_blank" rel="noopener noreferrer">Source code</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};