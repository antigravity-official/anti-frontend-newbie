/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI } from "../features/fetcher/fetcherSlice";
import { WrapperProps } from '../App';
import women from '../images/women.png';
import eur from '../images/EUR.png';
import kor from '../images/KOR.png';
import loading from '../images/loading.gif';
import { AppDispatch } from '../app/store';

const fadeLeft = keyframes`
0% {
    transform : translateX(30px);
    opacity: 0;
}
50% {
    opacity: 0.3;
}
70% {
    opacity: 0.5;
}
100% {
    opacity: 1;
    transform : none;
`;

const fadeUp = keyframes`
    0% {
        transform : translateY(30px);
        opacity: 0;
    }
    50% {
        opacity: 0.3;
    }
    70% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
        transform : none;
`;

const Section = ({ children }: WrapperProps) => {
    return (
        <section css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `}>
            {children}
        </section>
    )
};

const Women = () => {
    return (
        <img src={women} alt="아이콘" css={css`
        position: absolute;
        height: 7.5em;
        margin-right: 5em;    
            `} />
    )
};

const Increment = () => {
    return (
        <span css={css`
        font-size: 11px;
        color: red;
        margin-right: .4em;
        `}>▲</span>
    )
};

const Decrement = () => {
    return (
        <span css={css`
        font-size: 11px;
        color: blue;
        margin-right: .4em;
        `}>▼</span>
    )
};

const Difference = ({ children }: WrapperProps) => {
    return (
        <>
            <p css={css`
            position: absolute;
            font-size: 14px;
            margin-top: 7em;
            color: black;
            `}>
                {children}
            </p>
        </>
    )
};

const Country = (props: any) => {
    return (
        <div css={css`
            position: absolute;
            margin-top: -3em;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 0.7em;
        `}>
            <img alt="국기" src={props.name} css={css`
                width: 2.2em;
            `} />
            <p css={css`
                font-family: 'Pretendard-Bold';
                letter-spacing: -0.03em;
            `}>
                {props.name === kor ? "KOR" : "EUR"}
            </p>
        </div>
    )
};

const RowBox = ({ children }: WrapperProps) => {
    return (
        <div css={css`
            display: flex;
            align-items: center;
            jusitify-content: center;
            column-gap: 6em;
        `}>
            {children}
        </div>
    )
};

const TitleDiv = ({ children, delay }: WrapperProps) => {
    return (
        <div css={css`
            margin-bottom: 3.7em;
            ${delay === "first" && `margin-bottom: 10em;`}
            animation: ${fadeLeft} 1.3s ease-in-out;
        `}>
            {children}
        </div>
    )
};

const Title = () => {
    return (
        <p css={css`
            position: absolute;
            margin-left: 5em;
            margin-top: 3em;
            font-family: 'Pretendard-Bold';
            font-size: 25px;
            letter-spacing: -0.03em;
        `}>여기서 유로를 원화로 변환 할 수 있어요!</p>
    )
};

const ColumnBox = ({ children, delay }: WrapperProps) => {
    return (
        <div css={css`
            display: flex;
            flex-direction: column;
            row-gap: 4em;
            justify-content: center;
            ${delay === "first" && css`animation: ${fadeUp} 1s ease-in-out`};
            ${delay === "second" && css`animation: ${fadeUp} 1.7s ease-in-out`};
        `}>
            {children}
        </div>
    )
};

const CountryDiv = ({ children }: WrapperProps) => {
    return (
        <div css={css`
        display: flex;
        flex-direction: column;
        `}>
            {children}
        </div>
    )
}

const UnitKOR = () => {
    return (
        <span css={css`
            position: absolute;
            margin-left: 16.5em;
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
    `}>
            원
        </span>
    )
}

const UnitEUR = () => {
    return (
        <span css={css`
            position: absolute;
            margin-left: 15.5em;
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
    `}>
            유로
        </span>
    )
}

const Input = (props: any) => {
    return (
        <input css={css`
        font-family: 'Pretendard-Medium';
        padding-left: 1em;
        padding-top: 0;
        letter-spacing: -0.03em;
        font-size: 16px;
        width: 17em;
        height: 3em;
        border: solid;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-color: #206ff0;
        color: #206ff0;
        ${!props.disabled && `cursor: pointer;`}

        &::placeholder {
            color: #206ff0;
        }

        &:focus {
            outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        }

        `}  {...props} />


    )
};

const ContentBox = ({ children }: WrapperProps) => {
    return (
        <div css={css`
            display: flex;
            column-gap: 8em;
        `}>
            {children}
        </div>
    )
};

const Loading = () => {
    return (
        <Section>
            <div css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
            `}>
                <img alt="로딩 이미지" src={loading} css={css`
                width: 13em;
            `} />
                <p css={css`
                    margin-top: -1em;
                    font-family: 'Pretendard-Medium';
                    font-size: 18px;
                    letter-spacing: -0.03px;
                `}>환율 정보를 로딩중이에요!</p>
            </div>
        </Section>
    )
}

const DivStyle = ({ children }: WrapperProps) => {
    return (
        <div css={css`
            font-family: 'Pretendard-Bold';
            letter-spacing: -0.03em;
            font-size: 16px;
            width: 17em;
            height: 3.5em;
            border: none;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #206ff0;
            color: white;
      `}>
            {children}
        </div>
    )
};

// JSX 시작, 위에는 Emotion CSS IN JS
export default function Index() {

    // interface 타입 지정
    interface RootState {
        fetcher: any;
        data?: string | object,
        loading?: boolean,
        basePrice?: string,
    }

    const [eurValue, setEurValue] = useState<string>('');
    const [scaledKor, setScaledKor] = useState<string>('');

    // redux 사용
    const loading = useSelector((state: RootState) => state.fetcher.loading);
    const basePrice = useSelector((state: RootState) => state.fetcher.basePrice);
    const openingPrice = useSelector((state: RootState) => state.fetcher.openingPrice);
    const cashBuyingPrice = useSelector((state: RootState) => state.fetcher.cashBuyingPrice);
    const cashSellingPrice = useSelector((state: RootState) => state.fetcher.cashSellingPrice);
    const ttSellingPrice = useSelector((state: RootState) => state.fetcher.ttSellingPrice);
    const ttBuyingPrice = useSelector((state: RootState) => state.fetcher.ttBuyingPrice);
    const changePrice = useSelector((state: RootState) => state.fetcher.changePrice);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchAPI());
    }, []);

    useEffect(() => {
        setScaledKor((Number(eurValue.replaceAll(',', '')) * basePrice).toLocaleString('ko-KR').split(".")[0]);
    }, [eurValue]);

    /* 사용자의 원화 및 유로를 입력을 받는 함수 */
    const exchangeEurToKrw = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "유로") {
            let value = event.target.value.replace(/[^0-9]/g, "");
            setEurValue(Number(value.replaceAll(',', '')).toLocaleString('en-US'));
        }
    }

    return (
        <div className="App" >
            {!loading ?
                <Section>
                    <ContentBox>
                        {/* 왼쪽 아티클 디자인 */}
                        <ColumnBox delay="first">
                            <RowBox>
                                <DivStyle>1 유로</DivStyle>
                                <DivStyle>
                                    {basePrice} 원
                                    <Difference>
                                        {basePrice - openingPrice > 0 && <Increment />}
                                        {basePrice - openingPrice < 0 && <Decrement />}
                                        {changePrice} 원 ({changePrice / basePrice * 100}%)
                                    </Difference>
                                </DivStyle>
                            </RowBox>
                            <RowBox>
                                <DivStyle>보내실때 {ttSellingPrice} 원</DivStyle>
                                <DivStyle>받으실때 {ttBuyingPrice} 원</DivStyle>
                            </RowBox>
                            <RowBox>
                                <DivStyle>사실때 {cashBuyingPrice} 원</DivStyle>
                                <DivStyle>파실때 {cashSellingPrice} 원</DivStyle>
                            </RowBox>
                        </ColumnBox>
                        {/* 오른쪽 아티클 디자인 */}
                        <ColumnBox delay="second">
                            <TitleDiv delay="third">
                                <RowBox>
                                    <Women />
                                    <Title />
                                </RowBox>
                            </TitleDiv>
                            <RowBox>
                                <CountryDiv>
                                    <Country name={eur} />
                                    <RowBox>
                                        <Input value={eurValue} name="유로" placeholder="유로를 입력해주세요!" onChange={exchangeEurToKrw} />
                                        {eurValue && <UnitEUR />}
                                    </RowBox>
                                </CountryDiv>
                                <CountryDiv>
                                    <Country name={kor} />
                                    <RowBox>
                                        <Input value={scaledKor} name="유로" placeholder="" disabled={true} />
                                        {scaledKor && <UnitKOR />}
                                    </RowBox>
                                </CountryDiv>
                            </RowBox>
                        </ColumnBox>
                    </ContentBox>
                </Section > : <Loading />
            }
        </div >
    );
}