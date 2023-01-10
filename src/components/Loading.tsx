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
        backgroundColor: "gray",
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
        Loading...
      </h3>
    </div>
  );
};

export default Loading;
