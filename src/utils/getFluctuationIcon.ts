import EuroInfoTypes from '../types/EuroInfoTypes';

const getFluctuationIcon = (eurInfo: EuroInfoTypes) => {
  if (!eurInfo) return;
  if (eurInfo.basePrice - eurInfo.openingPrice > 0) {
    return '▲';
  } else if (eurInfo.basePrice - eurInfo.openingPrice < 0) {
    return '▼';
  } else {
    return '';
  }
};

export default getFluctuationIcon;
