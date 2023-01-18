import React, { useState } from "react";
import { Block3 } from "../styles/Styles";
import { exchangeEurToKrw } from "../utils/condition"
import { useSampleState, useSampleDispatch } from "../components/Context"

export const ExchangeMoney = () => {
    const state = useSampleState();
    const dispatch = useSampleDispatch();

    const [text, setText] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const regexp = /^\d*.?\d{0,2}$/;
        const number = event.target.value;
        if (!regexp.test(number)) {
            alert("소수점 둘째자리까지 입력가능합니다.");
        } else {
            setText(number);
        }
    };

    return (
        <Block3>
            <input className='inputMain' onChange={handleChange} value={text} type="number" /> 유로 ▶︎ <input className='inputMain' disabled value={exchangeEurToKrw(text, state.basePrice)} /> 원
        </Block3>
    );
}
