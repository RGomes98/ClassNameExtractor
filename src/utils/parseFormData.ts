export const parseFormData = (
  formData: string,
  baseString: string,
  chosenType: string,
  end: string[],
  moduleName: string
) => {
  let baseStringToCheck = '';
  let baseStringCount = 0;
  let errorCount = 0;
  let matchCount = 0;

  const hasToMatch: { [index: string]: string[] } = {
    html: ['class=""', "class=''"],
    jsx: ['className=""', "className=''"],
    module: [`className={${moduleName}}`],
  };

  for (let i = 0; i < formData.length; i++) {
    if (formData[i] === baseString[baseStringCount]) {
      baseStringToCheck += formData[i];
      baseStringCount++;
    } else {
      baseStringCount = 0;
      baseStringToCheck = '';
    }

    if (baseStringToCheck === baseString) {
      let outterMarkerCount = 0;
      const outterMarkAmount = chosenType === 'module' ? 1 : 2;

      while (outterMarkerCount < outterMarkAmount && i < formData.length) {
        if (end.some((marker) => formData[i] == marker)) {
          outterMarkerCount++;
          baseStringToCheck += formData[i];

          const notClosingTag = formData[i + 1] !== '>' && formData[i + 1] !== '/';
          const notWhiteSpace = formData[i + 1] !== ' ';

          const notWhiteSpaceSpaceOrClosingTagAtTheEnd = notWhiteSpace && notClosingTag;
          const foundAllOutterMarkers = outterMarkerCount == outterMarkAmount;
          const notOutOfBound = i < formData.length - 1;

          if (notOutOfBound && foundAllOutterMarkers && notWhiteSpaceSpaceOrClosingTagAtTheEnd) errorCount++;
        }

        i++;
      }

      const isClassNameValid = hasToMatch[chosenType].some((pattern) => pattern === baseStringToCheck);

      if (!isClassNameValid) errorCount++;
      else matchCount++;

      baseStringToCheck = '';
      i--;
    }
  }

  if (errorCount > 0 || matchCount == 0) return false;
  return true;
};
