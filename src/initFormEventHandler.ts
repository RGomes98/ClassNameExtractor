import { handleSubmit } from './handleSubmit';

export const initFormEventHandler = (formElement: HTMLElement) =>
  formElement.addEventListener('submit', handleSubmit);
