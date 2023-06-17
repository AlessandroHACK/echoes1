'use client'

import Link from "next/link";

interface ItemProps {
    Links: { name: string; link: string }[];
    title: string;
  }
  
  const Item: React.FC<ItemProps> = ({ Links, title }) => {
    return (
      <div className="relative group flex flex-col w-full align-center mt-2 mb-2 justify-center items-center">
        <h1 className="mb-1 font-semibold">{title}</h1>
        {Links.map((link) => (
          <div key={link.name}>
            <Link
              className="text-gray-400 hover-text duration-300 text-sm cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default Item;