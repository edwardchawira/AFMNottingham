import React from 'react';
import { TeamMember as TeamMemberType } from '../types/types';

interface TeamMemberProps {
  member: TeamMemberType;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, className = '' }) => {
  return (
    <div className={`group ${className}`}>
      <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
          <div className="p-6 text-white">
            <p className="text-sm">{member.bio}</p>
          </div>
        </div>
      </div>
      <h3 className="font-heading font-semibold text-lg text-primary-900">{member.name}</h3>
      <p className="text-sm text-primary-600">{member.role}</p>
    </div>
  );
};

export default TeamMember;