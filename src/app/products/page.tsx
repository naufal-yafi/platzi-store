import app from "@config/app";
import SchemaInfo from "@interface/SchemaProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "See All Product | Platzi Store",
};

async function getAllProduct() {
  const res = await fetch(`${app.host}/api/products`, {
    method: "GET",
  });

  return res.json();
}

export default async function Home() {
  const { info, pages, data }: SchemaInfo = await getAllProduct();
  return (
    <main className="">
      {JSON.stringify(info)}
      {JSON.stringify(pages)}
      {JSON.stringify(data)}
    </main>
  );
}
