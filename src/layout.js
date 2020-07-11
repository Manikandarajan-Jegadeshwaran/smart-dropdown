import React from "react";
import Container from "@material-ui/core/Container";

function Layout(props) {
  return (
    <Container maxWidth='lg'>
      <h1>Smart Drop Down</h1>

      {props.children}
    </Container>
  );
}

export default Layout;
