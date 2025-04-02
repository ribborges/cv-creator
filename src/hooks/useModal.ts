import { useContext } from "react";

import ModalContext from "@/contexts/modal";

const useModal = () => useContext(ModalContext);

export default useModal;