import React, { useState } from "react";

type EuroInfoProps = {
    basePrice: number;
    openingPrice: number;
    changePrice: number;
    cashBuyingPrice: number;
    cashSellingPrice: number;
    ttSellingPrice: number;
    ttBuyingPrice: number;
};

const EuroInfo = ({
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice
}: EuroInfoProps) => {
    const [krw, setKrw] = useState<string>("0");

    const onChangeEuro = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eurToNum: number = +e.target.value;
        const krw: number = (Math.floor(eurToNum * basePrice));
        setKrw(krw.toLocaleString('ko-KR'));
    };

    return (
        <div className="App">
            <div>환율기준 (1 유로)</div>
            <div>
                {basePrice}
                {basePrice - openingPrice > 0 && "▲"}
                {basePrice - openingPrice < 0 && "▼"}
                {changePrice}원 ({(changePrice / basePrice) * 100}%)
            </div>
            <div>
                <div>살때 : {cashBuyingPrice}</div>
                <div>팔때 : {cashSellingPrice}</div>
                <div>보낼때 : {ttSellingPrice}</div>
                <div>받을때 : {ttBuyingPrice}</div>
            </div>
            <hr />
            <input onChange={onChangeEuro} /> 유로 ▶︎ <input value={krw} disabled /> 원
        </div>
    );
}

export default EuroInfo;