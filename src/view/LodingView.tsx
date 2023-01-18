import * as React from "react";

import { BarLoader } from "react-spinners";

export default function LodingView() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",
      }}
    >
      <BarLoader />
      <p> 환율 정보를 가져오는 중입니다.</p>
    </div>
  );
}
