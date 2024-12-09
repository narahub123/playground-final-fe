interface CheckBoxType {
  text: string;
  reducer: (value: boolean | string | number) => {
    type: string;
    payload: boolean | string | number;
  };
  value?: string | number;
}

export type { CheckBoxType };
