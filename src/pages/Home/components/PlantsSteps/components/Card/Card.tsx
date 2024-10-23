import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-md overflow-hidden box-border">
        <div className="flex justify-center mt-6">
            <img src={imageUrl} alt="Card image" className="w-13 h-13 rounded-full object-cover" />
        </div>
        <div className="py-4 mt-6">
            <div className="font-bold font-titleCard text-xl mb-10 text-center">{title}</div>
            <p className="text-description font-subtitle text-base text-center">
            {description}
            </p>
        </div>
    </div>
  );
};

