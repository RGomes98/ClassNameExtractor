import { ClassNamesData } from './generateClassNamesData';

type setFormState = ClassNamesData & { formCount: HTMLSpanElement; formOutput: HTMLTextAreaElement };

export const setFormState = ({ count, classNames, errorMessage, formCount, formOutput }: setFormState) => {
  const outputContent = errorMessage ? errorMessage : classNames;
  formCount.innerText = String(count);
  formOutput.value = outputContent;
};
