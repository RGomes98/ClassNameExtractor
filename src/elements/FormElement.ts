import { availableOptions, getClassNames } from '../utils/getClassNames';
import { InputElement, moduleName } from './InputElement';
import { SelectElement, option } from './SelectElement';

export const handleFormSubmit = (event: Event) => {
  event.preventDefault();

  const { value } = <HTMLTextAreaElement>document.getElementById('formInput');
  const inputData = value.replace(/ {2,}/g, ' ');

  let formOutput = <HTMLTextAreaElement>document.getElementById('formOutput');

  if (!availableOptions.includes(option)) return;
  formOutput.value = getClassNames({ input: inputData, formType: option, moduleImportName: moduleName });
};

export const FormElement = () => {
  return `
    <form id="form">
      <input id="formInput"></input>
      <textarea id="formOutput"></textarea>
      ${SelectElement()}
      ${InputElement()}
      <button id="formButton" type="submit">Extract</button>
    </form>
  `;
};
