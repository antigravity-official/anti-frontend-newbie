import React from "react";

const List = ({ infoArray }: { infoArray: string[] }) => {
  return (
    <ul>
      {infoArray.map((infoText: string) => (
        <li key={infoText}>{infoText}</li>
      ))}
    </ul>
  );
};

export default List;
