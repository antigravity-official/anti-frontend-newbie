import React, { useState } from "react";
import { Types } from "../types/eurTypes";
import { exchangeEurToKrw } from "../controller/exchangeEurToKrw";

const Input = ({ eurInfo }: { eurInfo: Types }) => {
	const [eur, setEur] = useState("");
	const [krw, setKrw] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (/^[\d]*\.?[\d]{0,2}$/.test(event.target.value)) {
			setEur(event.target.value);
			setKrw(
				exchangeEurToKrw(Number(event.target.value), eurInfo.basePrice, 0)
			);
		}
	};
	return (
		<>
			<input
				type="number"
				value={eur}
				onChange={handleChange}
				placeholder="EUR"
			/>
			유로 ▶︎
			<input type="text" value={krw} placeholder="KRW" />원
		</>
	);
};

export default Input;
