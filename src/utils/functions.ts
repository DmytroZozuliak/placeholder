export const stringAvatar = (name: string): string => {
  const [first, second] = name.split(' ');
  return second ? `${first[0]}${second[0]}`.toUpperCase() : first[0].toUpperCase();
};

export const getSubstring = (string: string): string => {
  const stringLength = string.length;
  const lastIndex = 6;
  const subString = string.substring(0, lastIndex);
  return stringLength > lastIndex ? `${subString}...` : subString;
};
