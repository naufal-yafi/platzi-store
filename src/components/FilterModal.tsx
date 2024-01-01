"use client";

import useHandleFilter from "@hook/useHandleFilter";
import useHandleHeader from "@hook/useHandleHeader";
import Link from "next/link";
import { ReactNode } from "react";

const FilterModal = (props: {
  show: boolean;
  data_show: string;
  children: ReactNode;
}) => {
  const { showData, data, handleShowData, handleData } = useHandleFilter(
    props.data_show,
    false
  );
  const {
    showData: showCategory,
    data: category,
    handleShowData: handleShowCategory,
    handleData: handleCategory,
  } = useHandleFilter("all", true);
  const { visible } = useHandleHeader();

  return (
    <aside
      className={`fixed right-2 md:right-6 z-20 ${
        visible ? "top-[104px]" : "top-[62px]"
      } bg-white transition duration-500 border border-black w-3/4 md:w-1/2 ${
        props.show ? "translate-x-0" : "translate-x-[1000%]"
      }`}
    >
      <div className="flex flex-row-reverse md:flex-row justify-start md:justify-between w-full border-b border-black p-4">
        {showCategory === false && showData === false ? (
          <button
            className="px-4 py-2 border border-black text-[0.65rem] font-medium uppercase"
            onClick={() => handleShowData(true)}
          >
            Choose Filter
          </button>
        ) : (
          <div className="bg-[#ffe800] px-4 py-2 border border-black text-[0.65rem] font-medium uppercase">
            {showCategory ? (
              <>
                category &nbsp;&nbsp;|&nbsp;&nbsp; {category} &nbsp;
                <button
                  className="text-black/60"
                  onClick={() => {
                    handleShowCategory(false);
                    handleShowData(true);
                  }}
                >
                  X
                </button>
              </>
            ) : (
              <>
                {showData && (
                  <>
                    {data && <>show data &nbsp;&nbsp;|&nbsp;&nbsp; {data}</>}{" "}
                    &nbsp;
                    <button
                      className="text-black/60"
                      onClick={() => {
                        handleShowData(false);
                      }}
                    >
                      X
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        )}

        {props.children}
      </div>

      <div className="p-4 font-light text-xs">
        {showCategory === false && showData === false ? (
          <p className="text-end">...</p>
        ) : (
          <>
            {showCategory ? (
              <div className="flex flex-col items-end md:items-start">
                <h1>CATEGORY</h1>

                <div className="flex gap-2 mt-2">
                  <Link href={`/products?page=1&show=${data}`}>
                    <button
                      className="bg-[#ffe800] p-1 px-2 border border-black text-xs font-light uppercase"
                      onClick={() => {
                        handleCategory("all");
                      }}
                    >
                      all
                    </button>
                  </Link>

                  <Link href={`/products?page=1&show=${data}&filter=shoes`}>
                    <button
                      className="bg-[#ffe800] p-1 px-2 border border-black text-xs font-light uppercase"
                      onClick={() => {
                        handleCategory("shoes");
                      }}
                    >
                      shoes
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {showData && (
                  <div className="flex flex-col items-end md:items-start">
                    <h1>SHOW DATA</h1>

                    <div className="flex gap-2 mt-2">
                      <button
                        className="bg-[#ffe800] p-1 px-2 border border-black text-xs font-light"
                        onClick={() => {
                          handleShowCategory(true);
                          handleData("10");
                        }}
                      >
                        10
                      </button>
                      <button
                        className="bg-[#ffe800] p-1 px-2 border border-black text-xs font-light"
                        onClick={() => {
                          handleShowCategory(true);
                          handleData("20");
                        }}
                      >
                        20
                      </button>
                      <button
                        className="bg-[#ffe800] p-1 px-2 border border-black text-xs font-light"
                        onClick={() => {
                          handleShowCategory(true);
                          handleData("50");
                        }}
                      >
                        50
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export default FilterModal;
