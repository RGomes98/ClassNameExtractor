export const FormOutput = () => {
  return `
    <div class='output-wrapper'>
      <label class='label' for='form-output'>Extracted Class Names:</label>
      <textarea id='form-output' class='form-output' readonly placeholder='.wrapper{} \n.text{} \n.text-bold{}'></textarea>
    </div>
  `;
};
