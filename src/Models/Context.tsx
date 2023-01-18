import React, { useReducer, useEffect, useContext, createContext, useState, Dispatch } from 'react'
import { money } from "../store/Types/type";
import model from "./Model"
import Loading from "../components/Loading";


type Action =
    | { type: 'basePrice'; basePrice: number }
    | { type: 'openingPrice'; openingPrice: number }
    | { type: 'changePrice'; changePrice: number }
    | { type: 'cashBuyingPrice'; cashBuyingPrice: number }
    | { type: 'cashSellingPrice'; cashSellingPrice: number }
    | { type: 'ttSellingPrice'; ttSellingPrice: number }
    | { type: 'ttBuyingPrice'; ttBuyingPrice: number }

type SampleDispatch = Dispatch<Action>;


// 리듀서
function reducer(state: money, action: Action): money {
    switch (action.type) {
        case 'basePrice':
            return {
                ...state,
                basePrice: action.basePrice 
            };
        case 'openingPrice':
            return {
                ...state,
                openingPrice: action.openingPrice 
            };
        case 'changePrice':
            return {
                ...state,
                changePrice: action.changePrice 
            };
        case 'cashBuyingPrice':
            return {
                ...state,
                cashBuyingPrice: action.cashBuyingPrice
            };
        case 'cashSellingPrice':
            return {
                ...state,
                cashSellingPrice: action.cashSellingPrice
            };
        case 'ttSellingPrice':
            return {
                ...state,
                ttSellingPrice: action.ttSellingPrice
            };
        case 'ttBuyingPrice':
            return {
                ...state,
                ttBuyingPrice: action.ttBuyingPrice
            };
        default:
            throw new Error('Unhandled action');
    }
}


// Context 만들기
const StateContext = createContext<money>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
});
const DispatchContext = createContext<SampleDispatch | null>(null);

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useSampleState(): money {
    const state = useContext(StateContext);
    if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(DispatchContext);
    if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
    return dispatch;
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
    const [isReady, setReady] = useState(false);
    const [error, setError] = useState(null);
    const [eurInfo, setEurInfo] = useState<money>({
        basePrice: 0,
        openingPrice: 0,
        changePrice: 0,
        cashBuyingPrice: 0,
        cashSellingPrice: 0,
        ttSellingPrice: 0,
        ttBuyingPrice: 0,
    });

    const getEurInfo = async () => {
        try {
            const krweur = await fetch(
                "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
            )
                .then((response) => response.json())
                .then((array) => array[0]);
            setEurInfo(krweur);
            setReady(true);
        } catch (e: any) {
            setError(e);
        }
    };

    useEffect(() => {
        getEurInfo();
        return () => { };
    }, []);

    const Model = new model();
    Model.initMoney(eurInfo)
    const money = Model.getAll();
    
    const [state, dispatch] = useReducer(reducer, {
        basePrice: money.basePrice,
        openingPrice: money.openingPrice,
        changePrice: money.changePrice,
        cashBuyingPrice: money.cashBuyingPrice,
        cashSellingPrice: money.cashSellingPrice,
        ttSellingPrice: money.ttSellingPrice,
        ttBuyingPrice: money.ttBuyingPrice,
    });

    if (!isReady) return (<Loading />);
    if (error) return (<div>error!</div>);
    return (
        <StateContext.Provider value={money}
        >
            <DispatchContext.Provider value={dispatch}>
                {children}
            </ DispatchContext.Provider>
        </StateContext.Provider>
    )
}


export default Provider