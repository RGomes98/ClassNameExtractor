import type { StartCases, EndCases } from './getFormCases';
import { addToClassNames } from './addToClassNames';
import type { Option } from './updateFormState';

export type ClassNames = {
  set: Set<string>;
  string: string;
  array: string[];
  matchCount: number;
};

type ParseClassNames = {
  input: string;
  baseString: string;
  formType: Option;
  start: StartCases;
  end: EndCases;
};

export const parseClassNames = ({ input, baseString, formType, start, end }: ParseClassNames) => {
  const classNames: ClassNames = {
    set: new Set<string>(),
    matchCount: 0,
    string: '',
    array: [],
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === baseString[classNames.matchCount]) {
      classNames.string += input[i];
      classNames.matchCount++;
    } else {
      classNames.string = '';
      classNames.matchCount = 0;
    }

    if (classNames.string.length === baseString.length) {
      classNames.string = '';
      const openingTag = input[i + 1];
      const closingTag = formType === 'module' ? end[0] : openingTag;
      const foundOpeningTag = start.some((symbol) => symbol === openingTag);

      if (!foundOpeningTag) continue;

      i += 2;

      while (true) {
        const foundClosingTag = input[i] === closingTag;

        if (foundClosingTag || i >= input.length) break;
        if (input[i] === ' ') addToClassNames(classNames);
        classNames.string += input[i];
        i++;
      }

      addToClassNames(classNames);
    }
  }

  const classNamesCount = classNames.set.size;
  const classNamesData = classNames.array.join('\n');

  return { classNamesData, classNamesCount };
};
