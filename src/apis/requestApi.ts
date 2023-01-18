export const requestApi = async (url: string, options = {}) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${url}`, {
      ...options,
    });
    if (!res.ok) throw new Error(`${res.status} Error`);
    return res.json();
  } catch (e) {
    console.error((e as Error).message);
  }
};
