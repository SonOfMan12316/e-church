import React from "react";

interface FolderProp extends React.SVGProps<SVGSVGElement> {
  titleAccess: string;
}

const Folder: React.FC<FolderProp> = ({ titleAccess, ...props }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 14.5C2.01875 14.5 1.60692 14.3288 1.2645 13.9864C0.922083 13.644 0.750583 13.2318 0.75 12.75V2.25C0.75 1.76875 0.9215 1.35692 1.2645 1.0145C1.6075 0.672083 2.01933 0.500583 2.5 0.5H7.75L9.5 2.25H16.5C16.9813 2.25 17.3934 2.4215 17.7364 2.7645C18.0794 3.1075 18.2506 3.51933 18.25 4V12.75C18.25 13.2313 18.0788 13.6434 17.7364 13.9864C17.394 14.3294 16.9818 14.5006 16.5 14.5H2.5Z"
        fill="white"
      />
    </svg>
  );
};

export default Folder;
