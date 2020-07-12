import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    "& a": {
      padding: 10,
      color: "#0000004f",
      cursor: "pointer",
    },
    "& a:hover": {
      color: "#000",
    },
  },
  floatImgContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    "& img": {
      width: 100,
      height: 100,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h2>Smart Drop Down</h2>
      <a
        title='Open smart-dropdown github repo'
        href='https://github.com/Manikandarajan-Jegadeshwaran/smart-dropdown'
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

const FloatImageUrl = () => {
  const classes = useStyles();
  return (
    <div className={classes.floatImgContainer}>
      <img src={require("./assets/image/url.png")} />
    </div>
  );
};

function Layout(props) {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Header />
      {props.children}
      <FloatImageUrl />
    </Container>
  );
}

export default React.memo(Layout);
