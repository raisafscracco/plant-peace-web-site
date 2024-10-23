import React from 'react';

interface SocialIcons{
  instagram: string;
  email: string;
  linkedin: string;
};

interface CardProps {
  dev: string;
  name: string;
  description: string;
  socialIcons: SocialIcons;
}

const Person: React.FC<CardProps> = ({ dev, name, description, socialIcons }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={dev} alt={name} className="mb-2" />
      <div className="max-w-[180px] text-center">
        <h2 className="text-2xl text-center text-primaryText font-semibold ">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      </div>
      <div className="flex space-x-4">
        <a href={'https://www.instagram.com'} target="_blank">
          <img src={socialIcons.instagram} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href={`mailto:${socialIcons.email}`}>
          <img src={socialIcons.email} alt="Email" className="w-7 h-6" />
        </a>
        <a href={'https://br.linkedin.com'} target="_blank">
          <img src={socialIcons.linkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Person;
