import { SelectionContextType } from "@shared/pages/types";
import { createContext } from "react";

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);

export default SelectionContext;
