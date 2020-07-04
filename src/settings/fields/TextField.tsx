import React from "react";
import { OutlinedInput } from "@material-ui/core";

import { BaseField } from "./baseField";

export type Props = BaseField<string>;

export const TextField: React.FC<Props> = (props: Props) => (
  <OutlinedInput
    {...props}
    type="text"
    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
      props.setValue(event.target.value)
    }
  />
);
