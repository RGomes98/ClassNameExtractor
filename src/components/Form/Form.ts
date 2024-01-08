import { updateFormState } from '../../utils/updateFormState';
import { FormSubmitButton } from './FormSubmitButton';
import { FormOptions } from './FormOptions';
import { FormOutput } from './FormOutput';
import { FormInput } from './FormInput';

export const handleFormSubmit = (event: Event) => {
  event.preventDefault();
  updateFormState();
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
