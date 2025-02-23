export type ClassNamesData = { count: number; classNames: string[]; errorMessage: string | undefined };

export const generateClassNamesData = (classNamesData: Partial<ClassNamesData>): ClassNamesData => {
  const { count, classNames, errorMessage } = classNamesData;
  return { count: count || 0, classNames: classNames || [], errorMessage: errorMessage || undefined };
};
