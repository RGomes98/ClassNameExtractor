import { FormElement, handleFormSubmit } from './elements/FormElement';
import { handleOptionSelect } from './elements/SelectElement';
import { handleInputChange } from './elements/InputElement';

import './globals.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main>
      ${FormElement()}
    </main>
`;

document.getElementById('formModuleInput')!.addEventListener('change', handleInputChange);
document.getElementById('formSelect')!.addEventListener('change', handleOptionSelect);
document.getElementById('form')!.addEventListener('submit', handleFormSubmit);
