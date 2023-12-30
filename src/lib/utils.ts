export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function toIDR(usd: number) {
  const amountInIDR = usd * 15000;

  const formattedAmount = amountInIDR.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formattedAmount.replace(/IDR|Rp/g, "").trim();
}
