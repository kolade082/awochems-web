import React from 'react';

interface ExecutiveProfileProps {
    name: string;
    position: string;
    imageUrl: string;
    bio: string;
}

const ExecutiveProfile: React.FC<ExecutiveProfileProps> = ({ name, position, imageUrl, bio }) => {
    return (
        <div className="executive-profile">
            <img src={imageUrl} alt={name} className="executive-image"/>
            <h3 className="executive-name">{name}</h3>
            <p className="executive-position">{position}</p>
            <p className="executive-bio">{bio}</p>
        </div>
    );
};

export default ExecutiveProfile;
