interface CheckBoxType {
  text: string;
  reducer: (value: boolean) => { type: string; payload: boolean };
  initialValue: boolean;
}

export type { CheckBoxType };
