import { useEffect } from 'react';

interface useInputHookProps {
  inputValue: string;
  setCurrentNote: Function;

  isValid?: boolean;
  setIsValid?: Function;
  validationData?: { regex: RegExp; note: string };
  existanceData?: { values: Array<string>; note: string };
  customTest?: { test: Function; note: string };
  customDependancies?: Array<any>;
}

const useInputValidation = ({
  inputValue,
  setCurrentNote,

  isValid,
  setIsValid,
  validationData,
  existanceData,
  customTest,
  customDependancies,
}: useInputHookProps) => {
  let dependancies = [inputValue];
  if (customDependancies) dependancies = [dependancies, ...customDependancies];

  useEffect(() => {
    if (isValid === undefined || !setIsValid) return;

    let isRegexValid = true;
    if (validationData) isRegexValid = validationData.regex.test(inputValue);

    let isExistanceValid = true;
    if (existanceData)
      isExistanceValid = !existanceData.values.find((ev) => inputValue === ev);

    let isCustomTestValid = true;
    if (customTest) isCustomTestValid = customTest.test();

    if (validationData && !isRegexValid) setCurrentNote(validationData.note);
    else if (customTest && !isCustomTestValid) setCurrentNote(customTest.note);
    else if (existanceData && !isExistanceValid)
      setCurrentNote(existanceData.note);

    setIsValid(isExistanceValid && isRegexValid && isCustomTestValid);
  }, dependancies);
};

export default useInputValidation;
