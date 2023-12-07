// @flow
import typography from "../typography";

export default {
  root: {
    fontSize: "1.1rem"
  },
  input: {
    fontWeight: 500,
    "&::placeholder": {
      opacity: 1,
      color: typography.caption.color
    }
  }
};
