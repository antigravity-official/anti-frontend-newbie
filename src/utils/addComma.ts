const addComma = (money: number | string | undefined) => {
  if (money === '' || typeof money === 'undefined') return '';
  return money?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default addComma;
