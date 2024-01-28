import { ClassNamesData } from './generateClassNamesData';
import { setFormColorState } from './setFormColorState';

type setFormState = ClassNamesData & { formCount: HTMLSpanElement; formOutput: HTMLTextAreaElement };

export const setFormState = ({ count, classNames, errorMessage, formCount, formOutput }: setFormState) => {
  const outputContent = errorMessage || classNames;
  setFormColorState(count, formCount);
  formCount.innerText = String(count);
  formOutput.value = outputContent;
};
