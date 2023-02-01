export const getTextHeight = (text: string, lineHeight: number) => {
  const linesNum = text.split(/\r\n|\r|\n/).length;
  return linesNum * lineHeight;
};
