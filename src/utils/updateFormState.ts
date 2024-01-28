import { moduleName } from '../components/Form/FormModuleNameInput';
import { formType } from '../components/Form/FormOptions';
import { getClassNames } from './getClassNames';
import { setFormState } from './setFormState';

export const availableOptions = ['html', 'jsx', 'module'] as const;
export type FormType = typeof availableOptions;
export type Option = FormType[number];

export const updateFormState = () => {
  if (!availableOptions.includes(formType)) return;

  const input = (<HTMLInputElement>document.getElementById('form-input')).value.replace(/ {2,}/g, ' ');
  let formOutput = <HTMLTextAreaElement>document.getElementById('form-output');
  const formCount = <HTMLSpanElement>document.getElementById('form-count');

  const { count, classNames, errorMessage } = getClassNames({ input, formType, moduleName });
  setFormState({ count, classNames, errorMessage, formCount, formOutput });
};
