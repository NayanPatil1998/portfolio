import React from "react";

interface SocialIconsProps {
  icon: any;
  link: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({link, icon}) => {
  return (
    <a className="hover:animate-ping" target="_blank" href={link} rel="noopener noreferrer">
      <div className="text-primary p-1">
       {icon}
      </div>
    </a>
  );
};

export default SocialIcons;
