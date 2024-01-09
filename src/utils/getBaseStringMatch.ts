import { GetClassNames } from './getClassNames';

type GetBaseStringMatch = Omit<GetClassNames, 'input'>;

export const getBaseStringMatch = ({ formType, moduleName }: GetBaseStringMatch) => {
  const hasToMatch: Record<GetBaseStringMatch['formType'], string[]> = {
    html: ['class=""', "class=''"],
    jsx: ['className=""', "className=''"],
    module: [`className={${moduleName}}`],
  };

  return hasToMatch[formType];
};
