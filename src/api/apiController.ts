import axios from "axios";

const Axios = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

Axios.interceptors.request.use(
  (config) => config,
  (error) => {
    // 요청에 대한 오류 발생 시, 오류 내용을 출력하고 요청을 거절함
    console.log("🚀 ~ request error : ", error);
    Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // 응답에 대한 오류 발생 시, 오류 내용을 출력하고 요청을 거절함
    console.log("🚀 ~ response error : ", error);
    Promise.reject(error);
  }
);

export default Axios;
