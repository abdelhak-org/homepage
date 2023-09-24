export const generateUniqueId = () => { // for list or bookmark
  const datePart = new Date().valueOf().toString();
  const randomPart = Math.random().toString( 36 ).slice( 2, 16 );
  return `${datePart}${randomPart}`;
}
