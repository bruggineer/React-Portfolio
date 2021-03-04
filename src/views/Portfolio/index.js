import React from 'react';
import "./style.css";
import ProjectCard from '../../components/ProjectCard';
import Wrapper from '../../components/Wrapper';
import projects from '../../projects.json';

export default function Portfolio() {
    return (
        <Wrapper>
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
                />
            ))
            }
        </Wrapper >
    )
};

