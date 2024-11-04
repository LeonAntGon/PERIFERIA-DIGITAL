// src/app/desarrolloweb/components/ServiceCard.tsx

import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    number: string;
    svg: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, number, svg }) => {
    return (
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
            <div className="group-hover:invert">
                {svg}
            </div>

            <p className="font-bold text-2xl group-hover:text-white text-black/80">
                {title}
            </p>
            <p className="text-gray-400 text-sm">
                {description}
            </p>
            <p
                style={{ WebkitTextStroke: '1px gray', WebkitTextFillColor: 'transparent' }}
                className="text-5xl font-bold self-end"
            >
                {number}
            </p>
        </div>
    );
};

export default ServiceCard;