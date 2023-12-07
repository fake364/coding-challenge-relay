import { useEffect } from "react";
import isMandatoryError from "../../../lib/utils/validations/isMandatoryError";
import {
  getMaxErrorValidation,
  getMinErrorValidation
} from "../../../lib/utils/validations/getRangeErrorValidation";

const useValidateField = (
  value,
  setError,
  { checkMandatory = true, minLength, maxLength }
) => {
  useEffect(() => {
    if (checkMandatory && isMandatoryError(value)) {
      setError("This is mandatory field");
    } else if (minLength && getMinErrorValidation(minLength)(value)) {
      setError("Min length for this field is " + minLength);
    } else if (maxLength && getMaxErrorValidation(maxLength)(value)) {
      setError("Max length for this field is " + maxLength);
    } else {
      setError("");
    }
  }, [value]);
};

export default useValidateField;
