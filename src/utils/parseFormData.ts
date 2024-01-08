import { getBaseStringMatch } from './getBaseStringMatch';

type ParseFormData = {
  input: string;
  baseString: string;
  formType: string;
  moduleName?: string;
  end: string[];
};

export const parseFormData = ({ input, baseString, formType, moduleName, end }: ParseFormData) => {
  const hasToMatch = getBaseStringMatch(formType, moduleName);
  let baseStringToCheck = '';
  let baseStringCount = 0;
  let matchCount = 0;
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

          const notClosingTag = input[i + 1] !== '>' && input[i + 1] !== '/';
          const notWhiteSpace = input[i + 1] !== ' ';

          const notWhiteSpaceSpaceOrClosingTagAtTheEnd = notWhiteSpace && notClosingTag;
          const foundAllOutterMarkers = outterMarkerCount === outterMarkAmount;
          const notOutOfBound = i < input.length - 1;

          if (notOutOfBound && foundAllOutterMarkers && notWhiteSpaceSpaceOrClosingTagAtTheEnd) errorCount++;
        }

        i++;
      }

      const isClassNameValid = hasToMatch.some((pattern) => pattern === baseStringToCheck);
      if (!isClassNameValid) errorCount++;
      else matchCount++;

      i--;
      baseStringToCheck = '';
    }
  }

  return errorCount > 0 ? false : true;
};
