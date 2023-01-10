import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EuroInfo from "../component/EuroInfo";
import { RootState } from '../module';
import { getEuroInfoThunk } from '../module/euro';

const EuroInfoLoader = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.euro.euroInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getEuroInfoThunk());
        return () => {};
    }, []);

    return (
        <>
            {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && <EuroInfo basePrice={data.basePrice} openingPrice={data.openingPrice} changePrice={data.changePrice} cashBuyingPrice={data.cashBuyingPrice} cashSellingPrice={data.cashSellingPrice} ttSellingPrice={data.ttSellingPrice} ttBuyingPrice={data.ttBuyingPrice} />}
        </>
    );
}

export default EuroInfoLoader;