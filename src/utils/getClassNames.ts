import { generateClassNamesData } from './generateClassNamesData';
import { parseClassNames } from './parseClassNames';
import type { Option } from './updateFormState';
import { parseFormData } from './parseFormData';
import { getFormCases } from './getFormCases';

export type GetClassNames = { input: string; formType: Option; moduleName?: string };

const classNamesNotFoundErrorMessage = 'No class names were identified in the provided code snippet.';
const invalidInputErrorMessage = 'Invalid code syntax. Please check for errors or missing elements.';

export const getClassNames = ({ input, formType, moduleName }: GetClassNames) => {
  const { baseString, start, end } = getFormCases({ formType, moduleName });

  const isInputDataValid = parseFormData({ input, formType, moduleName, baseString, end });
  if (!isInputDataValid) return generateClassNamesData({ errorMessage: invalidInputErrorMessage });

  const { classNamesData, classNamesCount } = parseClassNames({ input, formType, baseString, start, end });
  if (!classNamesCount) return generateClassNamesData({ errorMessage: classNamesNotFoundErrorMessage });

  return generateClassNamesData({ classNames: classNamesData, count: classNamesCount });
};
