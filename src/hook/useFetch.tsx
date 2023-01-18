import { useState, useEffect } from "react";
import { Types } from "../types/eurTypes";

const useFetch = () => {
	const [isReady, setReady] = useState(false);
	const [eurInfo, setEurInfo] = useState<Types>();
	const getEurInfo = async () => {
		const krweur = await fetch(
			"https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
		)
			.then((response) => response.json())
			.then((array) => array[0]);

		setEurInfo(krweur);
		setReady(true);
	};

	useEffect(() => {
		getEurInfo();
	}, []);
	return { isReady, eurInfo };
};

export default useFetch;
