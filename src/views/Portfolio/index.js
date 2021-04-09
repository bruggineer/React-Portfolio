import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../projects.json';
import { Container } from 'react-bootstrap';

export default function Portfolio() {
    console.log('portfolio view is rendering')

    return (
        <>
            <Container fluid="xl" className='px-0 no-gutters mx-auto' id="portfolio-view">
                <div>
                    {projects.map(project => (
                        <ProjectCard
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            buttontitle={project.buttontitle}
                            img={project.img}
                            team={project.team}
                            repo={project.repo}
                            site={project.site}
                            blurb={project.blurb}
                            blurb2={project.blurb2}
                        />
                    ))
                    }
                </div>
            </Container>
        </>
    )
};

