import copyIcon from '../assets/content_copy.svg';

function handleCopyContent(content: string[]) {
  navigator.clipboard.writeText(content.join('\n\n'));
}

export function setCopyButtonState(contentCount: number, copyButton: HTMLButtonElement, content: string[]) {
  if (contentCount > 0) copyButton.style.display = 'flex';
  else copyButton.style.display = 'none';

  const imageElement = document.createElement('img');
  imageElement.className = 'copy-icon';
  imageElement.src = copyIcon;

  if (!copyButton.hasChildNodes()) copyButton.appendChild(imageElement);
  copyButton.addEventListener('click', () => handleCopyContent(content));
}
