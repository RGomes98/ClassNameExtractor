import type { ClassNames } from './parseClassNames';

export const addToClassNames = (classNames: ClassNames) => {
  const formattedClassName = (classNames.string.trim() && `.${classNames.string.trim()}{}`) || '';
  const isClassNameNotInSet = !classNames.set.has(formattedClassName);

  if (isClassNameNotInSet && formattedClassName) {
    classNames.set.add(formattedClassName);
    classNames.array.push(formattedClassName);
  }

  classNames.string = '';
};
