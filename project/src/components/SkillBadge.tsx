import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
      {name}
    </span>
  );
};

export default SkillBadge;