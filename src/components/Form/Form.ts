import { getClassNames } from '../../utils/getClassNames';
import { FormSubmitButton } from './FormSubmitButton';
import { FormOptions, formType } from './FormOptions';
import { moduleName } from './FormModuleNameInput';
import { FormOutput } from './FormOutput';
import { FormInput } from './FormInput';

export const availableOptions = ['html', 'jsx', 'module'] as const;
export type FormType = typeof availableOptions;

export const handleFormSubmit = (event: Event) => {
  event.preventDefault();

  const input = (<HTMLInputElement>document.getElementById('form-input')).value.replace(/ {2,}/g, ' ');
  let formOutput = <HTMLTextAreaElement>document.getElementById('form-output');

  if (!availableOptions.includes(formType)) return;
  formOutput.value = getClassNames({ input, formType, moduleName });
};

export const Form = () => {
  return `
    <form id='form' class='form'>
      ${FormInput()}
      ${FormOutput()}
      ${FormOptions()}
      ${FormSubmitButton()}
    </form>
  `;
};
