export const FormOutput = () => {
  return `
    <div class='output-wrapper'>
      <div class='count-wrapper'>
        <label class='label' for='form-output'>Extracted Class Names:</label>
        <span class='count-label'>Class Names Found: <span id='form-count' class='count'>0</span></span>
      </div>
      <textarea id='form-output' class='form-output' readonly placeholder='.wrapper{} \n.text{} \n.text-bold{}'></textarea>
    </div>
  `;
};
