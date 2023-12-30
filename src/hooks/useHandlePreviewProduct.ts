import { useState } from "react";

const useHandlePreviewProduct = () => {
  const [size, setSize] = useState<"small" | "medium" | "large">("large");

  const handlePreviewSize = (size: "small" | "medium" | "large") => {
    if (size === "small") {
      setSize("small");
    } else if (size === "medium") {
      setSize("medium");
    } else {
      setSize("large");
    }
  };

  return {
    size,
    handlePreviewSize,
  };
};

export default useHandlePreviewProduct;
