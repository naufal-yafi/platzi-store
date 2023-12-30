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

  return (
    <Fragment>
      <section className="w-full px-6 flex items-center justify-between mb-4">
        <div className="text-xs font-light">{props.info}</div>

        <div id="show-style" className="space-x-3">
          <button onClick={() => handlePreviewSize("large")}>
            <Image
              src={iconLargePreview}
              alt="icon large preview"
              width={14}
              height={14}
            />
          </button>
          <button onClick={() => handlePreviewSize("medium")}>
            <Image
              src={iconMediumPreview}
              alt="icon medium preview"
              width={14}
              height={14}
            />
          </button>
          <button onClick={() => handlePreviewSize("small")}>
            <Image
              src={iconSmallPreview}
              alt="icon small preview"
              width={14}
              height={14}
            />
          </button>
        </div>
      </section>

      <section className={`grid border-black grid-${size}`}>
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
