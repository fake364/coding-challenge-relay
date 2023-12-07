import { useEffect, useState } from "react";
import getInitialErrorObject from "../../../lib/utils/state/getInitialErrorObject";
import getCreateProductInitialState from "../../../lib/utils/state/getCreateProductInitialState";
import useValidateField from "./useValidateField";

const useCreateProductForm = () => {
  const [values, setValues] = useState(getCreateProductInitialState);
  const [errors, setErrors] = useState(() => getInitialErrorObject(values));
  const [isValidationShown, setValidationShown] = useState(false);

  const onChange = ({ target: { value, name } }) =>
    setValues(prev => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value
    }));

  const resetForm = () => {
    setValidationShown(false);
    setValues(getCreateProductInitialState());
  };

  useValidateField(
    values.name,
    error => setErrors(prev => ({ ...prev, name: error })),
    { checkMandatory: true, minLength: 4, maxLength: 20 }
  );

  useValidateField(
    values.description,
    error => setErrors(prev => ({ ...prev, description: error })),
    { checkMandatory: true, minLength: 10, maxLength: 100 }
  );

  useEffect(() => {
    if (!values.price || values.price < 0) {
      setErrors(prev => ({
        ...prev,
        price: "Price shouldn't be below or equal zero"
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        price: ""
      }));
    }
  }, [values.price]);

  const showErrors = () => setValidationShown(true);

  return {
    onChange,
    values,
    errors,
    showErrors,
    isValidationShown,
    isFormInvalid: Object.values(errors).some(Boolean),
    resetForm
  };
};

export default useCreateProductForm;
