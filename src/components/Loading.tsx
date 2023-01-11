import React from "react";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffffb7",
      }}
    >
      <h3
        style={{
          margin: 0,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor:'white',
          opacity:0.8
        }}
      >
        <img src='/spinner.gif' alt="loading" width={40}/>
      </h3>
    </div>
  );
};

export default Loading;
