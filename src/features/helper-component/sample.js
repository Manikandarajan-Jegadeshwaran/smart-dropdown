import React from "react";

const Sample = () => (
  <>
    <h2>Sample</h2>
    <div
      style={{
        borderLeft: "8px solid #d1d4d6",
        backgroundColor: "#f6f8fa",
      }}
    >
      <img src={require("../../assets/image/smart-dropdown-sample.png")} />
    </div>
  </>
);

export default React.memo(Sample);
