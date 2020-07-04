export interface BaseField<T> {
  id: string;
  label: string;
  value: T;
  setValue: (value: T) => void;
}
