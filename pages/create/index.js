// @flow
import Box from "@material-ui/core/Box";
import React, { useState } from "react";
import useCreateProduct from "../../components/createProduct/hooks/useCreateProduct";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeButton from "../../lib/components/buttons/homeButton/HomeButton";
import theme from "../../lib/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import clsx from "clsx";
import CreateProductModule from "../../components/createProduct";
import useCreateProductForm from "../../components/createProduct/hooks/useCreateProductForm";
import Snackbar from "@material-ui/core/Snackbar";

function CreateProduct() {
  const { isMutationInFlight, createProduct } = useCreateProduct();
  const matches = useMediaQuery("(max-width:600px)");
  const classes = styles();
  const [isNotificationOpened, setNotificationOpened] = useState(false);

  const {
    onChange,
    errors,
    values,
    isValidationShown,
    showErrors,
    isFormInvalid,
    resetForm
  } = useCreateProductForm();
  const onSubmit = () => {
    if (isFormInvalid) {
      showErrors();
    } else {
      createProduct(values);
      setNotificationOpened(true);
      resetForm();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CreateProductModule.Head />
        <HomeButton />
        <Container
          maxWidth={matches ? false : "sm"}
          classes={{
            root: classes.container
          }}
          disableGutters={matches && true}
        >
          <Card
            classes={{
              root: clsx(
                classes.cardContainer,
                matches && classes.cardFullHeight
              )
            }}
          >
            <Grid container>
              <CreateProductModule.Title />
              <CreateProductModule.InputFields
                onChange={onChange}
                values={values}
                errors={errors}
                isValidationShown={isValidationShown}
              />
              <CreateProductModule.ActionButtons
                buttonsTabIndexes={{ reset: "4", submit: "5" }}
                buttonsXS={matches ? 12 : undefined}
                onSubmit={onSubmit}
                isSubmitButtonDisabled={isMutationInFlight}
                onReset={resetForm}
              />
            </Grid>
            <Snackbar
              open={isNotificationOpened}
              autoHideDuration={2000}
              onClose={setNotificationOpened}
              message={"Product was created successfully!"}
              data-testid={'snackbar'}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
            />
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

const styles = makeStyles({
  cardContainer: {
    padding: "16px"
  },
  container: {
    height: "100vh"
  },
  cardFullHeight: {
    height: "100vh"
  }
});

export default CreateProduct;
