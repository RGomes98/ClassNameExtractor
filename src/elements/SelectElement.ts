import type { FormType } from '../utils/getClassNames';

type Option = FormType[0 | 1 | 2];

export let option: Option = 'html';

export const handleOptionSelect = (event: Event) => {
  const selectElement = <HTMLSelectElement>event.target;
  const { value } = <{ value: Option }>selectElement;
  option = value;
};

export const SelectElement = () => {
  return `
    <select id="formSelect">
      <option value="html">HTML</option>
      <option value="jsx">JSX</option>
      <option value="module">Module JSX</option>
    </select>
  `;
};
