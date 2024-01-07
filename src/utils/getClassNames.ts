import { getClassNameSettings } from './getClassNamesSettings';
import { parseFormData } from './parseFormData';

type getClassNames = { input: string; formType: FormType[0 | 1 | 2]; moduleName?: string };
export type FormType = typeof availableOptions;

export const availableOptions = ['html', 'jsx', 'module'] as const;

export const getClassNames = (parameters: getClassNames) => {
  const { input, formType, moduleName } = parameters;
  const CLASS_NAME_SIZE_LIMIT = 100;
  const classNames: string[] = [];
  let classNameCount = 0;
  let className = '';

  const formCases = {
    html: { baseString: 'class=', start: ["'", '"'], end: ["'", '"'] },
    jsx: { baseString: 'className=', start: ["'", '"'], end: ["'", '"'] },
    module: { baseString: `className={${moduleName}`, start: ['.'], end: ['}'] },
  };

  const { baseString, start, end } = formCases[formType];

  const isInputDataValid = parseFormData({ input, baseString, formType, end, moduleName });
  if (!isInputDataValid) return 'Invalid Code Structure';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === baseString[classNameCount]) {
      className += input[i];
      classNameCount++;
    } else {
      className = '';
      classNameCount = 0;
    }

    if (className === baseString) {
      let classNameSlider = 1;
      className = '';

      const foundOpeningMark = start.some((symbol) => input[classNameSlider + i] == symbol);
      if (!foundOpeningMark) continue;

      classNameSlider++;

      while (true) {
        const foundClosingMark = end.some((symbol) => input[classNameSlider + i] === symbol);
        if (foundClosingMark || classNameSlider === CLASS_NAME_SIZE_LIMIT) break;

        if (input[classNameSlider + i] === ' ') {
          const [isClassNameRepeated, formattedClassName] = getClassNameSettings(className, classNames);
          if (!isClassNameRepeated) classNames.push(formattedClassName);
          className = '';
        }

        className += input[classNameSlider + i];
        classNameSlider++;
      }

      const [isClassNameRepeated, formattedClassName] = getClassNameSettings(className, classNames);
      if (!isClassNameRepeated) classNames.push(formattedClassName);
      className = '';
    }
  }

  return classNames.toString().split(',').join('\n');
};
