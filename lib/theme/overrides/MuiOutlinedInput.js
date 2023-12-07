// @flow
import palette from "../palette";

export default {
  root: {
    fontSize: "1.1rem",
    "@media screen and (max-width: 600px)": {
      fontSize: "1.4rem"
    },
    "&$focused $notchedOutline": {
      borderColor: palette.outlineInput,
      borderWidth: 2
    }
  },
  notchedOutline: {
    fontSize: "1.1rem",
    "@media screen and (max-width: 600px)": {
      fontSize: "1.4rem"
    },
    borderColor: "rgba(0,0,0,0.15)"
  }
};
