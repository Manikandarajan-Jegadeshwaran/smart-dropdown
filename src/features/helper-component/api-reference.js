import React from "react";
import { contents } from "../meta-data";

const ApiContent = ({ title, content }) => (
  <p>
    <h4>{title}</h4>
    {content}
  </p>
);

const ApiReference = () => (
  <>
    <h2>API Reference</h2>
    {contents?.map(({ title, content }, idx) => (
      <ApiContent {...{ title, content }} />
    ))}
  </>
);

export default React.memo(ApiReference);
