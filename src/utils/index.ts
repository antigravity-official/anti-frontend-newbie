export const addComma = (number: string | number) => {
  let temp = number;
  if (typeof temp === "number") {
    temp = String(temp);
  }
  return temp.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};

export const unComma = (string: string) => {
  return string.replaceAll(",", "");
};

export const formattingWon = (number: number) => {
  const floorNumber = Math.floor(number);
  const formattedWon = addComma(floorNumber);
  return `${formattedWon}원`;
};
