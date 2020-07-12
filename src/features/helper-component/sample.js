import React from "react";

const Sample = () => (
  <>
    <h2>Sample</h2>
    <div
      style={{
        borderLeft: "8px solid #d1d4d6",
        backgroundColor: "#f6f8fa",
        paddingTop: 5,
      }}
    >
      <img
        src={require("../../assets/image/smart-dropdown-sample-props-only.png")}
      />
    </div>
  </>
);

export default React.memo(Sample);
