const ExchangeComaViewModel = (money: string | number, country: string) => {
  let moneyComaPlus;

  if (typeof money === "string") {
    money = Number(money.replaceAll(",", ""));
  }
  moneyComaPlus = money.toLocaleString();

  if (country === "kr") {
    return moneyComaPlus.split(".")[0];
  }

  return moneyComaPlus;
};

export default ExchangeComaViewModel;
