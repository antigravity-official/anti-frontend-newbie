export const exchangeEurToKrw = (
	eur: number,
	basePrice: number,
	point: number
) => {
	const won = eur * basePrice;
	const option = {
		maximumFractionDigits: point,
	};
	return won.toLocaleString("ko-KR", option);
};
