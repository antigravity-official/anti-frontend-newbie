export interface TextInputProp {
  type: string;
  setValue?: (str: string) => void;
  value: string;
  disabled?: boolean;
  readOnly?: boolean;
  name: string;
}
