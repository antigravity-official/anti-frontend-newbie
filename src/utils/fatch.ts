import { useEffect, useState } from "react";
import { money } from "../store/Types/type";

export const getEurInfo = async () => {

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

    useEffect(() => {
        getEurInfo();
            return () => { };
    }, []);

    return [eurInfo, isReady, error]
};

export default getEurInfo