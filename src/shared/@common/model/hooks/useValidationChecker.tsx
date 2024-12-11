import { ValidationCheckerType } from "@shared/@common/types";
import { useEffect, useState } from "react";

const useValidationChecker = (
  value: string,
  validations: ValidationCheckerType[]
) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    for (const validation of validations) {
      const validationChecker = validation.regExp.test(value);

      if (validationChecker) {
        setErrorMessage(validation.msg);

        return;
      }
    }

    setErrorMessage("");
  }, [value]);

  return { errorMessage };
};

export default useValidationChecker;
