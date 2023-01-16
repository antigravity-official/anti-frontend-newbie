class CurrencyExchange {
  public eurToKrw = (eur: number, krwBasePrice: number) => eur * krwBasePrice;
  public krwToEur = (krw: number, krwBasePrice: number) => krw / krwBasePrice;
}

export default new CurrencyExchange();
