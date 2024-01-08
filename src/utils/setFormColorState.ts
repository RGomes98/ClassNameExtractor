export const setFormColorState = (count: number, formCount: HTMLSpanElement) => {
  const { style } = formCount;

  if (count === 0) return (style.color = 'var(--madder)');
  if (count < 100) return (style.color = 'var(--persian-orange)');
  style.color = 'var(--malachite)';
};
