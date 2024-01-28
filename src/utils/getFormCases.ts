import type { GetClassNames } from './getClassNames';

export type StartCases = (typeof startCases)[number];
export type EndCases = (typeof endCases)[number];
type GetFormCases = Omit<GetClassNames, 'input'>;

const startCases = [["'", '"'], ['.']] as const;
const endCases = [["'", '"'], ['}']] as const;

export const getFormCases = ({ formType, moduleName }: GetFormCases) => {
  const [quotationMarksStart, periodStart] = startCases;
  const [quotationMarksEnd, curlyBracesEnd] = endCases;

  const formCases = {
    html: { baseString: 'class=', start: quotationMarksStart, end: quotationMarksEnd },
    jsx: { baseString: 'className=', start: quotationMarksStart, end: quotationMarksEnd },
    module: { baseString: `className={${moduleName}`, start: periodStart, end: curlyBracesEnd },
  } as const;

  return formCases[formType];
};
