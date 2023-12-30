"use client";

import CardProduct from "@component/CardProduct";
import useHandlePreviewProduct from "@hook/useHandlePreviewProduct";
import iconMediumPreview from "@image/double.svg";
import iconSmallPreview from "@image/multiple.svg";
import iconLargePreview from "@image/single.svg";
import ModelProduct from "@interface/ModelProduct";
import Image from "next/image";
import { Fragment } from "react";

const ListProducts = (props: { data: any; info: string }) => {
  const { size, handlePreviewSize } = useHandlePreviewProduct();

  let grid = "grid-large";

  if (size === "medium") {
    grid = "grid-medium";
  } else if (size === "small") {
    grid = "grid-small";
  }

  return (
    <Fragment>
      <section className="w-full px-6 flex items-center justify-between mb-4">
        <div className="text-xs font-light">{props.info}</div>

        <div id="show-style" className="flex justify-center items-center gap-3">
          <div className="flex flex-col gap-2 items-center transition duration-500">
            <button onClick={() => handlePreviewSize("large")}>
              <Image
                src={iconLargePreview}
                alt="icon large preview"
                width={14}
                height={14}
              />
            </button>

            {size === "large" && <div className="w-2 h-[1px] bg-black"></div>}
          </div>

          <div className="flex flex-col gap-2 items-center transition duration-500">
            <button onClick={() => handlePreviewSize("medium")}>
              <Image
                src={iconMediumPreview}
                alt="icon medium preview"
                width={14}
                height={14}
              />
            </button>

            {size === "medium" && <div className="w-2 h-[1px] bg-black"></div>}
          </div>

          <div className="flex flex-col gap-2 items-center transition duration-500">
            <button onClick={() => handlePreviewSize("small")}>
              <Image
                src={iconSmallPreview}
                alt="icon small preview"
                width={14}
                height={14}
              />
            </button>

            {size === "small" && <div className="w-2 h-[1px] bg-black"></div>}
          </div>
        </div>
      </section>

      <section className={`grid border-black ${grid}`}>
        {props.data.map((product: ModelProduct) => (
          <CardProduct
            key={product.id}
            image={product.images[0]}
            title={product.title}
            price={product.price}
            size={size}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default ListProducts;
