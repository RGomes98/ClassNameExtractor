import { parseFormData } from './parseFormData';

type getClassNames = { input: string; formType: FormType[0 | 1 | 2]; moduleImportName?: string };
export type FormType = typeof availableOptions;

export const availableOptions = ['html', 'jsx', 'module'] as const;

export const getClassNames = (parameters: getClassNames) => {
  const moduleName = (parameters.formType === 'module' && parameters.moduleImportName) || '';
  const { input, formType } = parameters;

  const formCases = {
    html: { baseString: 'class=', start: ["'", '"'], end: ["'", '"'] },
    jsx: { baseString: 'className=', start: ["'", '"'], end: ["'", '"'] },
    module: { baseString: `className={${moduleName}`, start: ['.'], end: ['}'] },
  };

  const { baseString, start, end } = formCases[formType];

  const isFormDataValid = parseFormData(input, baseString, formType, end, moduleName);
  if (!isFormDataValid) return 'Invalid Code Structure';

  const CLASS_NAME_SIZE_LIMIT = 100;
  const classNames: string[] = [];
  let classNameMatchCount = 0;
  let className = '';

  for (const [index, currentClassNameChar] of Object.entries(input)) {
    const currentBaseStringChar = baseString[classNameMatchCount];
    const isClassNameMatching = className == baseString;
    const currentIndex = Number(index);

    if (currentClassNameChar === currentBaseStringChar) {
      className += currentClassNameChar;
      classNameMatchCount++;
    } else {
      className = '';
      classNameMatchCount = 0;
    }

    if (isClassNameMatching) {
      let classNameCharCount = 0;
      className = '.';

      const isPatternMatching = start.some((symbol) => input[currentIndex + classNameCharCount] == symbol);
      if (!isPatternMatching) continue;
      classNameCharCount++;

      while (true) {
        const isClosingMark = end.some((symbol) => input[currentIndex + classNameCharCount] == symbol);
        if (isClosingMark || classNameCharCount === CLASS_NAME_SIZE_LIMIT) break;

        className += input[currentIndex + classNameCharCount];
        classNameCharCount++;
      }

      className += '{}';
      const isClassNameRepeated = classNames.includes(className);
      if (!isClassNameRepeated) classNames.push(className) && (className = '');
    }
  }

  return classNames.toString().split(',').join(' ');
};
