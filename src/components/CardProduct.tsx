import { slugify, toIDR } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const CardProduct = (props: {
  image: string;
  title: string;
  price: number;
  size?: "small" | "medium" | "large";
}) => {
  const LINK: string = `/products/${slugify(props.title)}`;

  return (
    <div
      className={`w-full border-black ${
        props.size === "large" ? "" : "border-r border-b"
      }`}
    >
      <Link href={LINK}>
        <Image
          src={props.image}
          alt="thumbnail"
          width={1000}
          height={1000}
          quality={100}
          className={`border-black w-full ${
            props.size !== "medium" ? "" : "border-b"
          }`}
        />
      </Link>

      {props.size !== "small" && (
        <div
          className={`font-light text-xs ${
            props.size === "large" ? "my-2" : "p-3"
          }`}
        >
          <Link href={LINK}>
            <h1 className="mb-2 overflow-hidden truncate hover:underline">
              {props.title}
            </h1>
          </Link>
          <p>
            <span>
              <span className="text-[0.65rem]">$</span>
              {props.price}
            </span>{" "}
            <span className="bg-[#ffe800] py-1 px-2">
              {toIDR(props.price)} IDR
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

CardProduct.defaultProps = {
  size: "large",
};

export default CardProduct;
