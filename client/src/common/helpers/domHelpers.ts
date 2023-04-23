export const getTextHeight = (text: string, lineHeight: number) => {
  if (!text) return 0;
  const linesNum = text.split(/\r\n|\r|\n/).length;
  return linesNum * lineHeight;
};
