type setFormState = {
  count: number;
  classNames: string;
  errorMessage: string | null;
  formCount: HTMLSpanElement;
  formOutput: HTMLTextAreaElement;
};

export const setFormState = ({ count, classNames, errorMessage, formCount, formOutput }: setFormState) => {
  const outputContent = errorMessage ? errorMessage : classNames;
  formCount.innerText = String(count);
  formOutput.value = outputContent;
};
