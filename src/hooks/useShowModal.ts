import { useState } from "react";

const useShowModal = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShowModal = () => {
    setShow(!show);
  };

  return {
    show,
    handleShowModal,
  };
};

export default useShowModal;
