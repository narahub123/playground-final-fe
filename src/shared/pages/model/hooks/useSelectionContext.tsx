import { useContext } from "react";
import { SelectionContext } from "../contexts";

const useSelectionContext = () => {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error(
      "useSelectionContext는 SelectionProvider 내에서 사용 가능합니다. "
    );
  }
  return context;
};

export default useSelectionContext;
