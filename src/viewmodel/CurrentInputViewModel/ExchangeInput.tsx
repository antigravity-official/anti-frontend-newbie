import { ChangeEvent, useEffect, useState } from 'react';
import { ExchangeInfo } from '../../model/type';
import { InputSection,EachInput, EachInputLabel } from '../../styles/InputPageStyle/InputSection';

type AppProps = {
    eurInfo: ExchangeInfo
}

export const ExchangeInput = (props: AppProps) => {

    let eurInfo = props.eurInfo;

    const [eurInput, setEurInput] = useState<number>();
    const [krw, setkrw] = useState<string>('0');

    const getEurInput = (e :ChangeEvent<HTMLInputElement>) => {

        let inputPrice = e.target.value;

        if (e.target.value == '') setkrw('0')
        if (e.target.value.includes('.')) {
            if(inputPrice.split('.')[1].length > 2) {
                alert('소수 둘째자리까지만 입력해주세요.');
                e.target.value='';
            } else if(inputPrice.split('').filter(v => v =='.').length >= 2){
                alert('잘못된 입력입니다.');
                e.target.value='';
            } else{
                setEurInput(parseFloat(inputPrice));
            }
        } 
        setEurInput(parseFloat(inputPrice));
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
