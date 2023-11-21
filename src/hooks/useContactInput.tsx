import useInput from "./useInput";

const useContactInput = () => {
  const {
    value: enteredName,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
  } = useInput((value) => value.includes("@") && value.trim() !== "");

  const {
    value: enteredMessage,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    isValid: messageIsValid,
    hasError: messageHasError,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  return {
    enteredName,
    nameChangeHandler,
    nameBlurHandler,
    nameIsValid,
    nameHasError,
    enteredEmail,
    emailChangeHandler,
    emailBlurHandler,
    emailIsValid,
    emailHasError,
    enteredMessage,
    messageChangeHandler,
    messageBlurHandler,
    messageIsValid,
    messageHasError,
    formIsValid,
  };
};

export default useContactInput;
