import app from "@config/app";
import { workSans } from "@config/fonts";
import SchemaProduct from "@interface/SchemaProduct";
import ListProducts from "@partial/ListProducts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "See All Product | Platzi Store",
};

async function getAllProduct(page: string, limit?: string) {
  const PAGE = page ?? 1;
  const LIMIT = limit ?? 10;

  const res = await fetch(
    `${app.host}/api/products?page=${PAGE}&limit=${LIMIT}`,
    {
      method: "GET",
    }
  );

  return res.json();
}

export default async function Products({
  searchParams,
}: Readonly<{
  searchParams: { page: string; show: string };
}>) {
  const SHOW = searchParams.show ?? 10;
  const { pages, data }: SchemaProduct = await getAllProduct(
    searchParams.page,
    SHOW
  );

  return (
    <main className={`${workSans.className} pt-36`}>
      <ListProducts
        data={data}
        info={`Showing ${pages.data_show.from} - ${pages.data_show.to} of ${pages.total}`}
      />

      <section
        id="pagination"
        className="w-full mt-10 flex justify-center items-center"
      >
        <div className="border-t border-l border-black">
          {pages.available_page.map((paginate: number) => (
            <Link
              href={`/products?page=${paginate}&show=${SHOW}`}
              key={paginate}
            >
              <button className="border-b border-r border-black px-3 py-1 text-sm">
                {paginate}
              </button>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
