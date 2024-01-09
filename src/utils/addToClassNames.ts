type AddToClassNames = { className: string; classNames: string[]; classNamesMap: Record<string, boolean> };

export const addToClassNames = ({ className, classNames, classNamesMap }: AddToClassNames) => {
  const formattedClassName = (className.trim() && `.${className.trim()}{}`) || '';

  if (!classNamesMap[formattedClassName] && formattedClassName) {
    classNames.push(formattedClassName);
    classNamesMap[formattedClassName] = true;
  }
};
