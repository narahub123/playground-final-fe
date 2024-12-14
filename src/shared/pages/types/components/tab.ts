import { ReactNode } from "react";

interface TabItemType {
  text: string;
  path: string;
  value: string;
}

interface SelectionContextType {
  selection: string | number;
  setSelection: React.Dispatch<React.SetStateAction<string | number>>;
}

interface SelectionProviderType {
  children: ReactNode;
  initialValue?: string | number;
}

export type { TabItemType, SelectionContextType, SelectionProviderType };
