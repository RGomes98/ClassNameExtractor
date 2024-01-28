import type { GetClassNames } from './getClassNames';

type GetBaseString = Omit<GetClassNames, 'input'>;

export const getBaseString = ({ formType, moduleName }: GetBaseString) => {
  const baseString = {
    html: ['class=""', "class=''"],
    jsx: ['className=""', "className=''"],
    module: [`className={${moduleName}}`],
  } as const;

  return baseString[formType];
};
