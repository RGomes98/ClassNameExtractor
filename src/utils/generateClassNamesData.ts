type ClassNamesData = { count: number; classNames: string; errorMessage: string | null };

export const generateClassNamesData = ({ classNames, count, errorMessage }: Partial<ClassNamesData>) => {
  const classNamesData: ClassNamesData = { count: 0, classNames: '', errorMessage: null };

  if (count) classNamesData.count = count;
  if (classNames) classNamesData.classNames = classNames;
  if (errorMessage) classNamesData.errorMessage = errorMessage;

  return classNamesData;
};
