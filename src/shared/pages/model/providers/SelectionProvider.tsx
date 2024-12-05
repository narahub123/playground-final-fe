import { SelectionProviderType } from "@shared/pages/types";
import { useState } from "react";
import { SelectionContext } from "../contexts";

const SelectionProvider = ({
  children,
  initialValue = "",
}: SelectionProviderType) => {
  const [selection, setSelection] = useState<string | number>(initialValue);

  return (
    <SelectionContext.Provider value={{ selection, setSelection }}>
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionProvider;
