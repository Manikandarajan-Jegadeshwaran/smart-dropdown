import React from "react";

const Sample = () => (
  <>
    <h2>Sample</h2>
    <div
      style={{
        borderLeft: "10px solid #ffe564",
        backgroundColor: "#ffe5644d",
      }}
    >
      <img src={require("../../assets/image/smart-dropdown-sample.png")} />
    </div>
  </>
);

export default React.memo(Sample);
