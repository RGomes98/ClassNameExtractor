type FormType = ['html', 'jsx', 'module'];

type getClassNames = { formData: string } & (
  | { formType: FormType[0 | 1] }
  | { formType: FormType[2]; moduleImportName: string }
);

export const getClassNames = (parameters: getClassNames) => {
  const moduleName = (parameters.formType === 'module' && parameters.moduleImportName) || '';
  const { formData, formType } = parameters;

  const formCases = {
    html: { baseString: 'class=', start: ["'", '"'], end: ["'", '"'] },
    jsx: { baseString: 'className=', start: ["'", '"'], end: ["'", '"'] },
    module: { baseString: `className={${moduleName}`, start: ['.'], end: ['}'] },
  } as const;

  const { baseString, start, end } = formCases[formType];
  const CLASS_NAME_SIZE_LIMIT = 50;
  const classNames: string[] = [];
  let classNameMatchCount = 0;
  let className = '';

  for (const [index, currentClassNameChar] of Object.entries(formData)) {
    const isClassNameMatching = className.length == baseString.length;
    const currentBaseStringChar = baseString[classNameMatchCount];
    const currentIndex = Number(index);

    if (currentClassNameChar === currentBaseStringChar) {
      className += currentClassNameChar;
      classNameMatchCount++;
    } else {
      className = '';
      classNameMatchCount = 0;
    }

    if (isClassNameMatching) {
      className = '.';
      let classNameCharCount = 0;

      const isPatternMatching = start.some((symbol) => formData[currentIndex + classNameCharCount] == symbol);
      if (!isPatternMatching) continue;

      classNameCharCount++;

      while (end.every((symbol) => formData[currentIndex + classNameCharCount] !== symbol)) {
        if (classNameCharCount === CLASS_NAME_SIZE_LIMIT) break;
        className += formData[currentIndex + classNameCharCount];
        classNameCharCount++;
      }

      className += '{}';
      const isClassNameRepeated = classNames.includes(className);
      if (!isClassNameRepeated) classNames.push(className) && (className = '');
    }
  }

  return classNames.toString().split(',').join(' ');
};
