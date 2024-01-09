import { getBaseStringMatch } from './getBaseStringMatch';
import { GetClassNames } from './getClassNames';
import type { EndCases } from './getFormCases';

type ParseFormData = GetClassNames & { baseString: string; end: EndCases };

export const parseFormData = ({ input, formType, moduleName, baseString, end }: ParseFormData) => {
  const hasToMatch = getBaseStringMatch({ formType, moduleName });
  let baseStringToCheck = '';
  let baseStringCount = 0;
  let errorCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === baseString[baseStringCount]) {
      baseStringToCheck += input[i];
      baseStringCount++;
    } else {
      baseStringCount = 0;
      baseStringToCheck = '';
    }

    if (baseStringToCheck.length === baseString.length) {
      const closingTag = formType === 'module' ? end[0] : input[i + 1];
      const outterMarkAmount = formType === 'module' ? 1 : 2;
      let outterMarkerCount = 0;

      while (outterMarkerCount < outterMarkAmount && i < input.length) {
        const someMarkerMatched = input[i] === closingTag;

        if (someMarkerMatched) {
          outterMarkerCount++;
          baseStringToCheck += input[i];

          const isNotClosingTag = input[i + 1] !== '>' && input[i + 1] !== '/';
          const isNotWhiteSpace = input[i + 1] !== ' ';

          const isNotClosingTagOrWhiteSpaceAtTheEnd = isNotClosingTag && isNotWhiteSpace;
          const foundAllOutterMarkers = outterMarkerCount === outterMarkAmount;
          const isNotOutOfBound = i < input.length - 1;

          if (isNotOutOfBound && foundAllOutterMarkers && isNotClosingTagOrWhiteSpaceAtTheEnd) errorCount++;
        }

        i++;
      }

      const isClassNameValid = hasToMatch.some((pattern) => pattern === baseStringToCheck);
      if (!isClassNameValid) errorCount++;

      i--;
      baseStringToCheck = '';
    }
  }

  return errorCount > 0 ? false : true;
};
