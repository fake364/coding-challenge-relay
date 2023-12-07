import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Title = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" variant={"h2"}>
          Create Product
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Title;
