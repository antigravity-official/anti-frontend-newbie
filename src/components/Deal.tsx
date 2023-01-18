import { Types } from "../types/eurTypes";

const Deal = ({ eurInfo }: { eurInfo: Types }) => {
	return (
		<div>
			<div>살때 : {eurInfo.cashBuyingPrice}</div>
			<div>팔때 : {eurInfo.cashSellingPrice}</div>
			<div>보낼때 : {eurInfo.ttSellingPrice}</div>
			<div>받을때 : {eurInfo.ttBuyingPrice}</div>
		</div>
	);
};

export default Deal;
