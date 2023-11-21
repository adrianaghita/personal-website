import { ChangeEvent, useState } from "react";

interface useInputProps {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputBlurHandler: () => void;
}

const useInput = (validateValue: (value: string) => boolean): useInputProps => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(inputValue);
  const hasError = !isValid && isTouched;
  const valueChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: inputValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
