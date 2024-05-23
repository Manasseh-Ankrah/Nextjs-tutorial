import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className='p-4 bg-blue-500 text-white'>
      <Link
        href='/'
        className='bg-white text-blue-500 px-2 py-1 text-sm rounded-lg'
      >
        Home
      </Link>
    </header>
  );
};

export default Header;
