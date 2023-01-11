const Margin = ({ eurInfo, commify }) => {
    return (
      <div>
        <div>살 때 : {commify(Math.round(eurInfo.cashBuyingPrice))} 원</div>
        <div>팔 때 : {commify(Math.round(eurInfo.cashSellingPrice))} 원</div>
        <div>보낼 때 : {commify(Math.round(eurInfo.ttSellingPrice))} 원</div>
        <div>받을 때 : {commify(Math.round(eurInfo.ttBuyingPrice))} 원</div>
      </div>
    );
  };
  
  export default Margin;