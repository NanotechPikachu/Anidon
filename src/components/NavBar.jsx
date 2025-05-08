"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-16 bg-blue-900 p-4 z-10 fixed flex items-center justify-between">
        <div>
          <p className="ml-8 text-2xl font-bold">ANIDON</p>
        </div>
      </div>
    </>
  );
}
