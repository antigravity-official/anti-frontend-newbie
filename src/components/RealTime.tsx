import { Types } from "../types/eurTypes";

const RealTime = ({ eurInfo }: { eurInfo: Types }) => {
	return (
		<div>
			<div>1 유로 =</div>
			<div>
				{eurInfo.basePrice} 원
				{eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
				{eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
				{eurInfo.changePrice}원 (
				{(eurInfo.changePrice / eurInfo.basePrice) * 100}
				%)
			</div>
		</div>
	);
};

export default RealTime;
