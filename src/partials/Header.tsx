"use client";

import useHandleHeader from "@hook/useHandleHeader";
import imgLogo from "@image/platzi-logo.png";
import Image from "next/image";
import Link from "next/link";
import iconFilter from "@image/filter.svg";
import useShowModal from "@hook/useShowModal";
import { Fragment } from "react";
import FilterModal from "@component/FilterModal";

const Header = (props: { data_show: string }) => {
  const { visible } = useHandleHeader();
  const { show, handleShowModal } = useShowModal();

  return (
    <Fragment>
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
        <div
          className={`flex w-full ${
            visible ? "justify-end" : "justify-between"
          } items-center`}
        >
          <div className={visible ? "hidden" : "block"}>
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image src={imgLogo} width={30} height={30} alt="logo" />
                <h1 className="hidden md:block">Platzi Store</h1>
              </div>
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <button
              className="text-xs uppercase font-normal flex items-center gap-2"
              onClick={handleShowModal}
            >
              <Image
                src={iconFilter}
                width={18}
                height={18}
                alt="icon filter"
              />
              Filter
            </button>

            <Link href="/search">
              <button className="flex text-xs font-light gap-2 items-center justify-end py-1 px-3 border border-black w-[90px] uppercase">
                <p>Search</p>
              </button>
            </Link>
          </div>
        </div>
      </header>
      <FilterModal show={show} data_show={props.data_show}>
        <button
          className="border border-black px-4 text-sm mr-2 md:mr-0"
          onClick={handleShowModal}
        >
          X
        </button>
      </FilterModal>
    </Fragment>
  );
};

export default Header;
