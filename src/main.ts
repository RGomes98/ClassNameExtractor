import { handleInputChange } from './components/Form/FormModuleNameInput';
import { handleOptionSelect } from './components/Form/FormOptions';
import { Form, handleFormSubmit } from './components/Form/Form';
import { FooterLink } from './components/Footer/FooterLink';
import { Heading } from './components/Heading/Heading';
import { Overlay } from './components/Overlay/Overlay';

import './globals.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main>
      ${Heading()}
      ${Form()}
    </main>
    <footer>
      ${FooterLink()}
    </footer>
    ${Overlay()}
`;

document.getElementById('form-module-input')!.addEventListener('change', handleInputChange);
document.getElementById('form-select')!.addEventListener('change', handleOptionSelect);
document.getElementById('form')!.addEventListener('submit', handleFormSubmit);
