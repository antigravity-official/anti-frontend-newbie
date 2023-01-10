import React, { useState } from "react";
import { ExchangeInfo } from '../../../model/Model';
import { Loading } from '../Loading/Loading';
import { CurrentBox } from '../../../styles/Info/ExchangeCurrentBox';
import { CurrentDealInfo } from './CurrentDealInfo';
import { CurrentPrice, Unit, DetailBtn } from '../../../styles/Info/ExchangeCurrentInfo';
import { DealDate } from './DealDate';

type AppProps = {
    eurInfo: ExchangeInfo
}

export const ExchangeCurrentInfo = (props: AppProps) => {

    let eurInfo = props.eurInfo;
    const [isReady, setIsReady] = useState(false);
    const [detailModal, setDetailModal] = useState(false);

    setInterval(() => {
      setIsReady(true);
    },3000);

    if (!isReady) return <Loading />

    return(
        <CurrentBox>
            <CurrentPrice>
                {eurInfo.basePrice}
                <Unit>EUR</Unit>
                <span style={{marginRight:'5px'}}>=</span>
                {eurInfo.changePrice}
                <Unit>
                    KRW({eurInfo.basePrice - eurInfo.openingPrice > 0 ? <span style={{color:'red'}}>▲</span> : <span style={{color:'blue'}}>▼</span>}
                    {((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
                </Unit>
            </CurrentPrice>
            <DealDate />
            {
                detailModal ? <CurrentDealInfo eurInfo={eurInfo}/> : <DetailBtn onClick={() => setDetailModal(true)}>Detail View</DetailBtn>
            }
      </CurrentBox>
    )
}