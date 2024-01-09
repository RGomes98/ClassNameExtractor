import { GetClassNames } from './getClassNames';

type GetBaseStringMatch = Omit<GetClassNames, 'input'>;

export const getBaseStringMatch = ({ formType, moduleName }: GetBaseStringMatch) => {
  const hasToMatch = {
    html: ['class=""', "class=''"],
    jsx: ['className=""', "className=''"],
    module: [`className={${moduleName}}`],
  } as const;

  return hasToMatch[formType];
};
