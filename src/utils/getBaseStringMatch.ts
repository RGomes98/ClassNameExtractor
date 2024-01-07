export const getBaseStringMatch = (formType: string, moduleName?: string) => {
  const hasToMatch: { [index: string]: string[] } = {
    html: ['class=""', "class=''"],
    jsx: ['className=""', "className=''"],
    module: [`className={${moduleName}}`],
  };

  return hasToMatch[formType];
};
