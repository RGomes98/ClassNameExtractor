export const FormSelectOptions = () => {
  return `
    <div id='format-wrapper' class='format-wrapper'>
      <label class='label' for='form-select'>Select code format:</label>
      <select id='form-select' class='select-options'>
          <option class='option' value='jsx'>JSX</option>
          <option class='option' value='html'>HTML</option>
          <option class='option' value='module'>JSX with CSS Modules</option>
      </select>
    </div>
  `;
};
