import type { GetClassNames } from './getClassNames';
import { getBaseString } from './getBaseString';
import type { EndCases } from './getFormCases';

type ParseFormData = GetClassNames & {
  baseString: string;
  end: EndCases;
};

export const parseFormData = ({ input, formType, moduleName, baseString, end }: ParseFormData) => {
  const formData = { string: '', matchCount: 0, errorCount: 0 };
  const hasToMatch = getBaseString({ formType, moduleName });

  for (let i = 0; i < input.length; i++) {
    if (input[i] === baseString[formData.matchCount]) {
      formData.string += input[i];
      formData.matchCount++;
    } else {
      formData.matchCount = 0;
      formData.string = '';
    }

    if (formData.string.length === baseString.length) {
      const closingTag = formType === 'module' ? end[0] : input[i + 1];
      const amountOfClosingTagsToFind = formType === 'module' ? 1 : 2;
      let closingTagsFoundCount = 0;

      while (closingTagsFoundCount < amountOfClosingTagsToFind && i < input.length) {
        const someTagMatched = input[i] === closingTag;

        if (someTagMatched) {
          closingTagsFoundCount++;
          formData.string += input[i];

          const isNotClosingTag = input[i + 1] !== '>' && input[i + 1] !== '/';
          const isNotWhiteSpace = input[i + 1] !== ' ';

          const foundAllClosingTags = amountOfClosingTagsToFind === closingTagsFoundCount;
          const isNotClosingTagOrWhiteSpaceAtTheEnd = isNotClosingTag && isNotWhiteSpace;
          const isNotOutOfBound = i < input.length - 1;

          if (isNotOutOfBound && foundAllClosingTags && isNotClosingTagOrWhiteSpaceAtTheEnd)
            formData.errorCount++;
        }

        i++;
      }

      const isClassNameValid = hasToMatch.some((pattern) => pattern === formData.string);
      if (!isClassNameValid) formData.errorCount++;

      i--;
      formData.string = '';
    }
  }

  return !(formData.errorCount > 0);
};
