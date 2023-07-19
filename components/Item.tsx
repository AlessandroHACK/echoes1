'use client'

import Link from "next/link";

interface ItemProps {
    Links: { name: string; link: string }[];
    title: string;
  }
  
  const Item: React.FC<ItemProps> = ({ Links, title }) => {
    return (
      <div className=" relative group flex flex-col w-full align-center mt-2 mb-2 justify-center items-center">
        <h1 className="mb-1 font-semibold">{title}</h1>
        {Links.map((link) => (
          <div key={link.name}>
            <Link
              className="text-ash-500 dark:text-bone-100 hover:text-ash-100 hover:dark:text-bone-100  hover:scale-120 duration-300 text-sm cursor-pointer leading-6"
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