interface HyperLinkCardType {
  text: string;
  path: string;
}

type InputValueType = string | number;

type AuthButtonType = {
  text: string;
  path?: string;
  img?: string;
  colorTheme?: boolean;
  reducer?: (value: any) => {
    type: string;
    payload: any;
  };
};

export type { HyperLinkCardType, InputValueType, AuthButtonType };
