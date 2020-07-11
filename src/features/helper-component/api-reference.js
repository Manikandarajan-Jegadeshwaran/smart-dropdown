import React from "react";
import { contents } from "../meta-data";

const ApiContent = ({ title, content }) => (
  <>
    <h4>{title}</h4>
    {content}
  </>
);

const ApiReference = () => (
  <>
    <h2>API Reference</h2>
    {contents?.map(({ title, content }, key) => (
      <ApiContent {...{ title, content, key }} />
    ))}
  </>
);

export default React.memo(ApiReference);
