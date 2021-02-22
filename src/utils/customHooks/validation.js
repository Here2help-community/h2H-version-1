import { useState } from "react";
import { isAuthFieldsValid } from "../helpers";

// Hook to handle validation and remove repetition
// It receives an object of fields to validate
// Returns the field with the error and error message for that field
export default function useValidation(authFields) {
  const [errorField, setErrorField] = useState(null);
  const [errorFieldMessage, setErrorFieldMessage] = useState(null);

  const isValid = () => {
    const _setErrorFieldCallBack = (field) => setErrorField(field);
    const _setErrorFieldMessageCallBack = (message) =>
      setErrorFieldMessage(message);
    if (
      !isAuthFieldsValid(
        authFields,
        _setErrorFieldCallBack,
        _setErrorFieldMessageCallBack
      )
    ) {
      return false;
    }
    return true;
  };

  return [errorField, errorFieldMessage, isValid];
}
