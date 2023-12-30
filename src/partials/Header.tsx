"use client";

import useHandleHeader from "@hook/useHandleHeader";
import imgLogo from "@image/platzi-logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { visible } = useHandleHeader();

  return (
    <header className="w-full px-6 top-0 left-0 fixed bg-white py-4">
      <div
        className={`mb-4 ${
          visible ? "flex" : "hidden"
        } justify-between items-center`}
      >
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src={imgLogo} width={30} height={30} alt="logo" />
            <h1>Platzi Store</h1>
          </div>
        </Link>

        <nav>
          <ul className="flex gap-4 text-sm items-center">
            <li>
              <Link href="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <button>Product</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex w-full justify-between items-center">
        <button className="text-xs uppercase font-semibold">Filters</button>

        <Link href="/search">
          <button className="flex text-xs font-light gap-2 items-center justify-end py-1 px-3 border border-black w-[120px] uppercase">
            <p>Search</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
