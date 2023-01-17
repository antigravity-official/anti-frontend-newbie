import { EuroInfoModel } from "../model/EuroInfoModel";
import { ConvertEuroToKrw } from "../view/ConvertEuroToKrw";
import { ExchangeRate } from "../view/ExchangeRate";
import { Loading } from "../view/Loading/Loading";
import { ConvertEuroToKrwViewModel } from "../vm/ConvertEuroToKrwViewModel";
import { ExchangeRateViewModel } from "../vm/ExchangeRateViewModel";
import { LoadingViewModel } from "../vm/LoadingViewModel";
import * as S from "./style";

export const Provider = () => {
  const { exchangeInput, onChangeExchangeValue, exchange } =
    ConvertEuroToKrwViewModel();
  const { eurInfo, exchangeEuroToKrw } = ExchangeRateViewModel();
  const { isReady, fetchAndLoading } = LoadingViewModel();

  return (
    <S.ProdiverWrap>
      {isReady ? (
        <Loading isReady={fetchAndLoading(EuroInfoModel.getEuroInfo())} />
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
