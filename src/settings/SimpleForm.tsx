import React from "react";
import {
  makeStyles,
  Theme,
  FormControl,
  Button,
  InputLabel,
} from "@material-ui/core";

import { FieldInfo, FIELDS } from "./fields/allFields";

interface Props {
  fields: FieldInfo[];
  onSave: () => Promise<void>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export const SimpleForm: React.FC<Props> = (props: Props) => {
  const { fields, onSave } = props;

  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const saveForm = React.useCallback(async () => {
    setIsSubmitting(true);
    await onSave();
    setIsSubmitting(false);
  }, [onSave, setIsSubmitting]);

  return (
    <div className={classes.root}>
      {fields.map((fieldInfo, i) => {
        const Component = FIELDS[fieldInfo.type];
        return (
          <FormControl
            key={i}
            fullWidth
            className={classes.margin}
            variant="outlined"
          >
            <InputLabel htmlFor={fieldInfo.id}>{fieldInfo.label}</InputLabel>
            <Component {...fieldInfo} />
          </FormControl>
        );
      })}
      <Button
        onClick={saveForm}
        disabled={isSubmitting}
        className={classes.margin}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </div>
  );
};
