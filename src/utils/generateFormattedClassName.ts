export const generateFormattedClassName = (className: string, classNames: string[]) => {
  const formattedClassName = className.trim() ? `.${className.trim()}{}` : '';
  return [classNames.includes(formattedClassName), formattedClassName] as const;
};
