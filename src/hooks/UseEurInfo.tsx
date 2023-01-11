import React, { useEffect } from 'react'
import axios from 'axios'

export default function UseEurInfo() {

    useEffect(() => {
        axios.get(`https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR`)
            .then((res) => {
                // console.log(res);
            })
    }, []);

    return (
        <div>useEurInfo</div>
    )
}
