export const getFormCases = (formType: string, moduleName?: string) => {
  const formCases: { [index: string]: { baseString: string; start: string[]; end: string[] } } = {
    html: { baseString: 'class=', start: ["'", '"'], end: ["'", '"'] },
    jsx: { baseString: 'className=', start: ["'", '"'], end: ["'", '"'] },
    module: { baseString: `className={${moduleName}`, start: ['.'], end: ['}'] },
  };

  return formCases[formType];
};
