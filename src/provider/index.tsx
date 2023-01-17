import { EuroInfoModel } from "../model/EuroInfoModel";
import { ConvertEuroToKrw } from "../view/ConvertEuroToKrw";
import { ExchangeRate } from "../view/ExchangeRate";
import { Loading } from "../view/Loading/Loading";
import { ConvertEuroToKrwViewModel } from "../viewModel/ConvertEuroToKrwViewModel";
import { ExchangeRateViewModel } from "../viewModel/ExchangeRateViewModel";
import { LoadingViewModel } from "../viewModel/LoadingViewModel";
import * as S from "./style";

export const Provider = () => {
  const { exchangeInput, onChangeExchangeValue, exchange } =
    ConvertEuroToKrwViewModel();
  const { eurInfo, exchangeEuroToKrw } = ExchangeRateViewModel();
  const { isLoading, fetchAndLoading } = LoadingViewModel();

  return (
    <S.ProdiverWrap>
      {isLoading ? (
        <Loading isFetching={fetchAndLoading(EuroInfoModel.getEuroInfo())} />
      ) : (
        <ExchangeRate euroInfo={eurInfo} />
      )}
      <ConvertEuroToKrw
        exchangeEuroToKrw={exchangeEuroToKrw}
        exchange={exchange}
        exchangeInput={exchangeInput}
        onChangeExchangeValue={onChangeExchangeValue}
      />
    </S.ProdiverWrap>
  );
};
