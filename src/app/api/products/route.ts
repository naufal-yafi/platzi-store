import { getAllProduct, paginateProducts } from "@service/ProductService";

export async function GET(request: Request) {
  try {
    // ---------------------------------------------------------------------------
    // Get Query Parameter
    // ?page=1&limit=10
    // ---------------------------------------------------------------------------
    const { searchParams } = new URL(request.url);

    const requestPage = Number(searchParams.get("page") ?? 1);
    const requestLimit = Number(searchParams.get("limit") ?? 10);

    // ---------------------------------------------------------------------------
    // Calculate
    // ---------------------------------------------------------------------------
    const offset = requestPage === 1 ? 0 : (requestPage - 1) * requestLimit;

    // ---------------------------------------------------------------------------
    // Fetch All Data & Calculate Total Page Available
    // ---------------------------------------------------------------------------
    const products = await getAllProduct();
    const totalPage = Math.ceil(products.length / requestLimit);

    // ---------------------------------------------------------------------------
    // Get Data With A Certain Index & A Certain Amount
    // ---------------------------------------------------------------------------
    const paginationDataProducts = await paginateProducts(offset, requestLimit);

    // ---------------------------------------------------------------------------
    // Handling Error Response
    // ---------------------------------------------------------------------------
    if (requestPage > totalPage) throw new Error("Page unavailable!");
    if (requestLimit !== 10 && requestLimit !== 20 && requestLimit !== 50)
      throw new Error("Unavailable!");

    // ---------------------------------------------------------------------------
    // Response
    // ---------------------------------------------------------------------------
    return Response.json({
      info: {
        page: requestPage,
        limit: requestLimit,
        offset: offset,
        show_per_page: requestLimit,
      },
      pages: {
        available_page: Array.from(
          { length: totalPage },
          (_, index) => index + 1
        ),
        data_show: {
          from: offset,
          to: paginationDataProducts.length,
        },
        total: products.length,
        available_show_per_page: [10, 20, 50],
      },

      data: paginationDataProducts,
    });
  } catch (error) {
    return Response.json({
      errors: (error as Error).message,
    });
  }
}
