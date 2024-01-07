import { toggleFormOptionsVisibility } from '../../utils/toggleFormOptionsVisibility';
import { FormModuleNameInput } from './FormModuleNameInput';
import { FormSelectOptions } from './FormSelectOptions';
import type { FormType } from './Form';

export type Option = FormType[0 | 1 | 2];

export let formType: Option = 'jsx';

export const handleOptionSelect = (event: Event) => {
  const selectElement = <HTMLSelectElement>event.target;
  const { value } = <{ value: Option }>selectElement;
  toggleFormOptionsVisibility(value);
  formType = value;
};

export const FormOptions = () => {
  return `
    <div class='options-wrapper'>
      ${FormSelectOptions()}
      ${FormModuleNameInput()}
    </div>
  `;
};
