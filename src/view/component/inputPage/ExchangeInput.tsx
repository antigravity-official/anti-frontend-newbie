import { ChangeEvent, useEffect, useState } from 'react';
import { ExchangeInfo } from '../../../model/Model';
import { InputSection,EachInput, EachInputLabel } from '../../../styles/input/InputSection';

type AppProps = {
    eurInfo: ExchangeInfo
}

export const ExchangeInput = (props: AppProps) => {

    let eurInfo = props.eurInfo;

    const [eurInput, setEurInput] = useState<number>();
    const [krw, setkrw] = useState<string>('0');

    const getEurInput = (e :ChangeEvent<HTMLInputElement>) => {
        setEurInput(parseFloat(e.target.value));
    }

    if(krw == 'NaN') setkrw('0')

    useEffect(() => {
    if (eurInput != undefined && eurInfo?.basePrice) {
      let totalPrice :number = Math.ceil(eurInput * eurInfo.basePrice);
      setkrw(totalPrice.toLocaleString('ko-KR'));
    }

  },[eurInput]);

    return (
        <>
        <InputSection>
            <EachInput>
                <input onChange={getEurInput}/>
                <EachInputLabel>EUR</EachInputLabel>
            </EachInput>
            <br />
            <br />
            <EachInput>
                <input disabled value={krw}/>
                <EachInputLabel>KRW</EachInputLabel>
            </EachInput>
        </InputSection>
        </>
    )
}
