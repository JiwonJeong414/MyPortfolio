
import React from 'react';

type ProjectProps = {
    title: string;
    description: string;
    link?: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, link }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {link && <a href={link}>View Project</a>}
        </div>
    );
}

export default Project;
