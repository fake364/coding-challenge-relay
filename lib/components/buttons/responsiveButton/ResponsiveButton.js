import { styled } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ResponsiveButton = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  [theme.breakpoints.down(600)]: {
    fontSize: "1.1rem",
    padding: "12px"
  }
}));

export default ResponsiveButton;
