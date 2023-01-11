import { ExchangeInfo } from '../../../model/type';
import { CurrentDealbox,EachDeal, EachDealTxt } from '../../../styles/Info/DealInfo';

type AppProps = {
    eurInfo: ExchangeInfo
}

export const CurrentDealInfo = (props :AppProps) => {

    let eurInfo = props.eurInfo;

    return(
        <CurrentDealbox>
            <div>
            <EachDeal>
                <EachDealTxt>Buy</EachDealTxt>
                {eurInfo.cashBuyingPrice}
            </EachDeal>
            <EachDeal>
                <EachDealTxt>Sell</EachDealTxt>
                {eurInfo.cashSellingPrice}</EachDeal>
            </div>
            <div>
            <EachDeal>
                <EachDealTxt>Send</EachDealTxt>
                {eurInfo.ttSellingPrice}</EachDeal>
            <EachDeal>
                <EachDealTxt>Receive</EachDealTxt>
                {eurInfo.ttBuyingPrice}</EachDeal>

                </div>
        </CurrentDealbox>
    )
}
