import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  helper: {
    marginTop: 12,
    fontSize: "0.9rem"
  }
});

const InputFields = ({
  onChange,
  values: { name, price, description, createdAt },
  errors: {
    name: errorName,
    price: priceError,
    description: descriptionError,
    createdAt: dateError
  },
  isValidationShown
}) => {
  const classes = styles();
  const datePickerElementRef = useRef();
  const errorNameLabel = isValidationShown && errorName;
  const errorPriceLabel = isValidationShown && priceError;
  const errorDescriptionLabel = isValidationShown && descriptionError;

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label={"Name"}
            variant="outlined"
            value={name}
            name="name"
            onChange={onChange}
            fullWidth
            margin="normal"
            inputProps={{ tabIndex: "1", ["data-testid"]: "name-input" }}
            error={errorNameLabel}
            helperText={errorNameLabel}
            FormHelperTextProps={{
              classes: {
                root: classes.helper
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={"Price"}
            variant="outlined"
            value={price || ""}
            name="price"
            type="number"
            onChange={onChange}
            fullWidth
            margin="normal"
            inputProps={{ tabIndex: "2", ["data-testid"]: "price-input" }}
            error={errorPriceLabel}
            helperText={errorPriceLabel}
            FormHelperTextProps={{
              classes: {
                root: classes.helper
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            label={"Description"}
            variant="outlined"
            value={description}
            name={"description"}
            onChange={onChange}
            fullWidth
            margin="normal"
            multiline
            inputProps={{ tabIndex: "3", ["data-testid"]: "description-input" }}
            error={errorDescriptionLabel}
            helperText={errorDescriptionLabel}
            FormHelperTextProps={{
              classes: {
                root: classes.helper
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            type={"date"}
            name={"createdAt"}
            value={createdAt}
            onChange={onChange}
            inputRef={datePickerElementRef}
            onClick={datePickerElementRef.current?.showPicker}
            fullWidth
            margin="normal"
            inputProps={{ tabIndex: "4", ["data-testid"]: "createdat-input" }}
            error={dateError && isValidationShown}
            FormHelperTextProps={{
              classes: {
                root: classes.helper
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InputFields;
