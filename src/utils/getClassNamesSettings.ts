export const getClassNameSettings = (className: string, classNames: string[]) => {
  return [classNames.includes(`.${className.trim()}{}`), `.${className.trim()}{}`] as const;
};
