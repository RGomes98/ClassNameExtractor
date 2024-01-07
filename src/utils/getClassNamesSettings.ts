export const getClassNameSettings = (className: string, classNames: string[]) => {
  const formattedClassName = `.${className.trim()}{}`;
  return [classNames.includes(formattedClassName), formattedClassName] as const;
};
