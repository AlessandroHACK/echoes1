'use client'

import Link from "next/link";

interface ItemProps {
    Links: { name: string; link: string }[];
    title: string;
  }
  
  const Item: React.FC<ItemProps> = ({ Links, title }) => {
    return (
      <div className=" relative group flex flex-col w-full align-center mt-2 mb-2 justify-center items-center">
        <h1 className="mb-1 font-semibold text-lg">{title}</h1>
        {Links.map((link) => (
          <div key={link.name}>
            <Link
              className="text-ash-500/80 dark:text-beige-100/70 hover:text-zinc-800 hover:dark:text-beige-100  hover:scale-120 duration-300 text-md cursor-pointer "
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