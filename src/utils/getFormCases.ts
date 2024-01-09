import { GetClassNames } from './getClassNames';

export type EndCases = (typeof endCases)[number];
type GetFormCases = Omit<GetClassNames, 'input'>;

const endCases = [["'", '"'], ['}']] as const;

export const getFormCases = ({ formType, moduleName }: GetFormCases) => {
  const [quotationMarks, curlyBraces] = endCases;

  const formCases = {
    html: { baseString: 'class=', start: ["'", '"'], end: quotationMarks },
    jsx: { baseString: 'className=', start: ["'", '"'], end: quotationMarks },
    module: { baseString: `className={${moduleName}`, start: ['.'], end: curlyBraces },
  } as const;

  return formCases[formType];
};
