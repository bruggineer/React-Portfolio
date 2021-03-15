import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../projects.json';
import { Container } from 'react-bootstrap';

export default function Portfolio() {
    console.log('portfolio view is re-rendering')


    return (
        <Container fluid className='px-0' id="portfolio-view">
            <div className="row no-gutters">
                {projects.map(project => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        title={project.title}
                        img={project.img}
                        team={project.team}
                        repo={project.repo}
                        site={project.site}
                        blurb={project.blurb}
                        tech={project.tech}
                        concepts={project.concepts}
                    />
                ))
                }
            </div>
        </Container>
    )
};

