import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[85%] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <Image src="/logo.svg" alt="Logo" width={150} height={25} />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            <Image src="/lock.svg" alt="Lock" width={25} height={25} />
            <Link href="/auth/login">Login</Link>
          </button>
          <button className="px-8 py-3 rounded-md bg-[#3359DF] text-white font-bold">
            <Link href="/auth/register">Sign Up For Free</Link>
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <Image
            src={toggle ? "/close.svg" : "/hamburgerMenu.svg"}
            alt="Menu"
            width={25}
            height={25}
          />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b ease-in-out duration-500"
            : "fixed top-[-100%]"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
              <Image src="/lock.svg" alt="Lock" width={25} height={25} />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#3359DF] text-white font-bold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
