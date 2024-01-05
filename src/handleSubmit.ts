import { getClassNames } from './getClassNames';

export const handleSubmit = (event: Event) => {
  event.preventDefault();

  const input = <HTMLTextAreaElement>document.getElementById('input');
  const output = <HTMLTextAreaElement>document.getElementById('output');

  output.value = getClassNames({ formData: input.value, formType: 'module', moduleImportName: 'styles' });
};
