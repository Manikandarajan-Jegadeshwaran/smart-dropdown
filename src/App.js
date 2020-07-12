import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "./layout";
import "./App.css";

const LazySmartDropdownContainer = lazy(() => import("./features"));

const Loader = () => (
  <div className='progress'>
    <CircularProgress />
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <LazySmartDropdownContainer />
      </Layout>
    </Suspense>
  );
}

export default App;
