import { GetClassNames } from './getClassNames';

type GetFormCases = Omit<GetClassNames, 'input'>;
type FormCases = Record<GetFormCases['formType'], { baseString: string; start: string[]; end: string[] }>;

export const getFormCases = ({ formType, moduleName }: GetFormCases) => {
  const formCases: FormCases = {
    html: { baseString: 'class=', start: ["'", '"'], end: ["'", '"'] },
    jsx: { baseString: 'className=', start: ["'", '"'], end: ["'", '"'] },
    module: { baseString: `className={${moduleName}`, start: ['.'], end: ['}'] },
  };

  return formCases[formType];
};
