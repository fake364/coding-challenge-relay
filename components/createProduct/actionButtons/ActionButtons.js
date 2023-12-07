import Grid from "@material-ui/core/Grid";
import ResponsiveButton from "../../../lib/components/buttons/responsiveButton/ResponsiveButton";
import React from "react";

const ActionButtons = ({
  buttonsXS,
  buttonsTabIndexes: { reset, submit },
  isSubmitButtonDisabled,
  onSubmit,
  onReset
}) => {
  return (
    <Grid container spacing={1} justify="flex-end">
      <Grid item xs={buttonsXS}>
        <ResponsiveButton
          fullWidth
          variant={"outlined"}
          color={"primary"}
          inputProps={{ tabIndex: reset }}
          onClick={onReset}
        >
          Reset
        </ResponsiveButton>
      </Grid>
      <Grid item xs={buttonsXS}>
        <ResponsiveButton
          variant={"contained"}
          color={"primary"}
          fullWidth
          disabled={isSubmitButtonDisabled}
          onClick={onSubmit}
          inputProps={{ tabIndex: submit }}
        >
          Create
        </ResponsiveButton>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
