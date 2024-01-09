import type { Option } from './updateFormState';

export const toggleFormOptionsVisibility = (option: Option) => {
  const moduleInput = <HTMLInputElement>document.getElementById('form-module-input');
  const formatWrapper = <HTMLDivElement>document.getElementById('format-wrapper');
  const moduleWrapper = <HTMLDivElement>document.getElementById('module-wrapper');

  const isModuleWrapperVisible = option === 'module';

  if (isModuleWrapperVisible) {
    formatWrapper.style.width = '50%';
    moduleWrapper.style.display = 'flex';
    moduleInput.setAttribute('required', 'true');
  } else {
    formatWrapper.style.width = '100%';
    moduleWrapper.style.display = 'none';
    moduleInput.removeAttribute('required');
  }
};
