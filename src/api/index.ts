import { EurInfoType } from "../../types";

export default async function getEurInfo(): Promise<EurInfoType> {
  try {
    const response = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    );
    if (response.ok) {
      const result = await response.json();
      return result[0];
    } else {
      throw response;
    }
  } catch (error) {
    throw new Error("에러 발생");
  }
}
