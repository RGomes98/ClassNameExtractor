import { ClassNamesData } from './generateClassNamesData';
import { setCopyButtonState } from './setCopyButtonState';
import { setFormColorState } from './setFormColorState';

type setFormState = ClassNamesData & {
  formCount: HTMLSpanElement;
  formOutput: HTMLTextAreaElement;
  formCopyButton: HTMLButtonElement;
};

export const setFormState = ({
  count,
  classNames,
  errorMessage,
  formCount,
  formOutput,
  formCopyButton,
}: setFormState) => {
  const outputContent = errorMessage || classNames.join('\n');
  setCopyButtonState(count, formCopyButton, classNames);
  setFormColorState(count, formCount);
  formCount.innerText = String(count);
  formOutput.value = outputContent;
};
