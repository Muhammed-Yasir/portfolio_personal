import React, { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="transform hover:scale-110 transition-transform duration-200 text-white hover:text-gray-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialLink;