import React from "react";
import ShowPrice from "../components/ShowPrice";
import ComputePrice from "../components/ComputePrice";
import { ExchangeMoney } from "../components/ExchangeMoney";
import { AppCss } from "../styles/Styles";
import Context from "../Models/Context"

export const Main = () => {
    return (
        <AppCss>
            <Context>
                <ShowPrice />
                <ComputePrice />
                <ExchangeMoney />
            </Context>
        </AppCss>
    );
};

export default Main;
