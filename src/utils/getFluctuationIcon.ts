import ViewModelEuroInfo from '../types/ViewModelEuroInfo';

const getFluctuationIcon = (euroInfo: ViewModelEuroInfo) => {
  if (!euroInfo) return;
  if (euroInfo.fluctuationPrice > 0) {
    return '▲';
  } else if (euroInfo.fluctuationPrice < 0) {
    return '▼';
  } else {
    return '';
  }
};

export default getFluctuationIcon;
