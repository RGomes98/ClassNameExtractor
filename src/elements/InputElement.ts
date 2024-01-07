export let moduleName = '';

export const handleInputChange = (event: Event) => {
  const moduleInput = <HTMLInputElement>event.target;
  const { value } = moduleInput;
  moduleName = value;
};

export const InputElement = () => {
  return `
    <input id="formModuleInput" placeholder="Enter the imported module name (e.g., 'myModule')" />
  `;
};
