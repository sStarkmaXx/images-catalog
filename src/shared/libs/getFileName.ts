export const getFileName = (name: string) => {
  const arr = name.split('/');
  const arr2 = arr[1].split('_');
  return arr2[0];
};
