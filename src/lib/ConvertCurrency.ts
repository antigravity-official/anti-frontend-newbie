class ConvertCurrency {
  public eurToKrw = (eur: number, krwBasePrice: number): number => eur * krwBasePrice;
  public krwToEur = (krw: number, krwBasePrice: number): number => krw / krwBasePrice;
}

export default new ConvertCurrency();
