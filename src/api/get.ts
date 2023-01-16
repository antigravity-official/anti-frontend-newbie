import Instance from './Inatance';

export async function getEurInfo() {
  return await Instance.get(`/recent?codes=FRX.KRWEUR`)
    .then((res) => res.data[0])
    .catch((err) => console.log(err));
}
