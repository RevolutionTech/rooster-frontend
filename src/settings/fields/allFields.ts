import React from "react";
import { OmitStrict } from "type-zoo";

import { TextField, Props as TextFieldProps } from "./TextField";
import { PasswordField, Props as PasswordFieldProps } from "./PasswordField";

export enum FieldType {
  TEXT,
  PASSWORD,
}

export type FieldInfo =
  | ({ type: FieldType.TEXT } & TextFieldProps)
  | ({ type: FieldType.PASSWORD } & PasswordFieldProps);

export const FIELDS: Record<
  FieldType,
  React.ComponentType<OmitStrict<FieldInfo, "type">>
> = {
  [FieldType.TEXT]: TextField,
  [FieldType.PASSWORD]: PasswordField,
};
