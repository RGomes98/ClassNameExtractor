export let moduleName = '';

export const handleInputChange = (event: Event) => {
  const moduleInput = <HTMLInputElement>event.target;
  const { value } = moduleInput;
  moduleName = value;
};

export const FormModuleNameInput = () => {
  return `
    <div id='module-wrapper' class='module-wrapper'>
      <label class='label' for='form-module-input'>Module Import Name:</label>
      <input id='form-module-input' class='form-module-input' placeholder="Enter the imported module name (e.g., 'myModule')" />
    </div>
  `;
};
