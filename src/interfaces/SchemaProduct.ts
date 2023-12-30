import ModelProduct from "./ModelProduct";

interface SchemaProduct {
  info: {
    page: number;
    limit: number;
    offset: number;
    show_per_page: number;
  };
  pages: {
    available_page: number[];
    data_show: {
      from: number;
      to: number;
    };
    total: number;
    available_show_per_page: number[];
  };
  data: ModelProduct[];
}

export default SchemaProduct;
