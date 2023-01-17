import { KrwEur } from "../types/krweur";

export const getEurInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/forex/recent?codes=FRX.KRWEUR`
    );
    const data = await res.json();
    const krweur: KrwEur = await data[0];
    return krweur;
  } catch (error) {
    if (error instanceof Error)
      throw new Error("환율 정보 요청에 실패했습니다. 관리자에게 문의하세요.");
  }
};
