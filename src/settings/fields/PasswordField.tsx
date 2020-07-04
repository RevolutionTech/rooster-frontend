import React from "react";
import { OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { BaseField } from "./baseField";

export type Props = BaseField<string>;

export const PasswordField: React.FC<Props> = (props: Props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <OutlinedInput
      {...props}
      type={showPassword ? "text" : "password"}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        props.setValue(event.target.value)
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label={`toggle ${props.label} visibility`}
            onClick={() => setShowPassword(!showPassword)}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
