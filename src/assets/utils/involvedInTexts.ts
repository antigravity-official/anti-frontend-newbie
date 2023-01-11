import Model from '../../model/Model';

export const getFluctuationIcon = (eurInfo: Model) => {
  if (!eurInfo) return;
  if (eurInfo.basePrice - eurInfo.openingPrice > 0) {
    return '▲';
  } else if (eurInfo.basePrice - eurInfo.openingPrice < 0) {
    return '▼';
  } else {
    return '';
  }
};

export const addComma = (money: number | string | undefined) => {
  if (money === '' || typeof money === 'undefined') return '';
  return money?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const transformInt = (float: number) => {
  return Math.floor(float);
};
