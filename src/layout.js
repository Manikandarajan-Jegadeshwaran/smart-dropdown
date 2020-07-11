import React from "react";
import Container from "@material-ui/core/Container";

function Layout(props) {
  return (
    <Container maxWidth='lg'>
      <h2>Smart Drop Down</h2>
      {props.children}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        <img
          src={require("./assets/image/url.png")}
          style={{ width: 100, height: 100 }}
        />
      </div>
    </Container>
  );
}

export default Layout;
