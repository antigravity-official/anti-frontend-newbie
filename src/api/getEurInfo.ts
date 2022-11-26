import Instance from './Instance';

const getEurInfo = async () => {
  try {
    const { data } = await Instance.get(`v1/forex/recent?codes=FRX.KRWEUR`);

    return data[0];
  } catch (error) {
    console.log(error);
  }
};

export default getEurInfo;
