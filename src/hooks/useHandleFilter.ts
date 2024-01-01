import { useState } from "react";

const useHandleFilter = (default_data: string, default_show: boolean) => {
  const [showData, setShowData] = useState<boolean>(default_show);

  const [data, setData] = useState<string | null>(default_data);

  const handleShowData = (show: boolean) => {
    setShowData(show);
  };

  const handleData = (show: string | null) => {
    setData(show);
  };

  return {
    showData,
    data,
    handleShowData,
    handleData,
  };
};

export default useHandleFilter;
