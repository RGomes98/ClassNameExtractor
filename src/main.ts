import { initFormEventHandler } from './initFormEventHandler';
import './globals.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form id='form'>
      <textarea id='input'></textarea>
      <textarea id='output'></textarea>
      <button>Click</button>
    </form>
  </div>
`;

initFormEventHandler(document.getElementById('form')!);
