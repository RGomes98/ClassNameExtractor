import { toggleFormOptionsVisibility } from '../../utils/toggleFormOptionsVisibility';
import { FormModuleNameInput } from './FormModuleNameInput';
import type { Option } from '../../utils/updateFormState';
import { FormSelectOptions } from './FormSelectOptions';

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
