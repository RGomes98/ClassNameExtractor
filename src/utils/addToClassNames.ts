type AddToClassNames = { className: string; classNames: Record<string, boolean> };

export const addToClassNames = ({ className, classNames }: AddToClassNames) => {
  const formattedClassName = (className.trim() && `.${className.trim()}{}`) || '';
  if (!classNames[formattedClassName] && formattedClassName) classNames[formattedClassName] = true;
};
