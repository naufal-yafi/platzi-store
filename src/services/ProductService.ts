import api from "@config/api";

export const getAllProduct = async () => {
  const response = await fetch(`${api.url}${api.route.product}`, {
    cache: "reload",
    next: {
      revalidate: 1200,
    },
  });

  return await response.json();
};

export const paginateProducts = async (offset: number, limit: number) => {
  const response = await fetch(
    `${api.url}${api.route.product}?offset=${offset}&limit=${limit}`,
    {
      cache: "reload",
      next: {
        revalidate: 1200,
      },
    }
  );

  return await response.json();
};
