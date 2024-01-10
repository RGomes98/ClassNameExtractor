import { generateClassNamesData } from './generateClassNamesData';
import { addToClassNames } from './addToClassNames';
import type { Option } from './updateFormState';
import { parseFormData } from './parseFormData';
import { getFormCases } from './getFormCases';

export type GetClassNames = { input: string; formType: Option; moduleName?: string };

export const getClassNames = (parameters: GetClassNames) => {
  const { input, formType, moduleName } = parameters;
  let classNameCount = 0;
  const classNames = {};
  let className = '';

  const { baseString, start, end } = getFormCases({ formType, moduleName });
  const isInputDataValid = parseFormData({ input, formType, moduleName, baseString, end });
  const invalidInputErrorMessage = 'Invalid code syntax. Please check for errors or missing elements.';

  if (!isInputDataValid) return generateClassNamesData({ errorMessage: invalidInputErrorMessage });

  for (let i = 0; i < input.length; i++) {
    if (input[i] === baseString[classNameCount]) {
      className += input[i];
      classNameCount++;
    } else {
      className = '';
      classNameCount = 0;
    }

    if (className.length === baseString.length) {
      className = '';
      const openingTag = input[i + 1];
      const closingTag = formType === 'module' ? end[0] : openingTag;
      const foundOpeningMark = start.some((symbol) => openingTag === symbol);

      if (!foundOpeningMark) continue;

      i += 2;

      while (true) {
        const foundClosingMark = input[i] === closingTag;
        if (foundClosingMark || i >= input.length) break;

        if (input[i] === ' ') {
          addToClassNames({ className, classNames });
          className = '';
        }

        className += input[i];
        i++;
      }

      addToClassNames({ className, classNames });
      className = '';
    }
  }

  const classNamesArray = Object.keys(classNames);
  const classNamesCount = classNamesArray.length;
  const classNamesData = classNamesArray.toString().split(',').join('\n');
  const classNamesNotFoundErrorMessage = 'No class names were identified in the provided code snippet.';

  if (!classNamesCount) return generateClassNamesData({ errorMessage: classNamesNotFoundErrorMessage });
  return generateClassNamesData({ count: classNamesCount, classNames: classNamesData });
};
