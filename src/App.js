import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "./layout";
import "./App.css";

const LazySmartDropdownContainer = lazy(() => import("./features"));

function App() {
  return (
    <Suspense
      fallback={
        <div className='progress'>
          <CircularProgress />
        </div>
      }
    >
      <Layout>
        <LazySmartDropdownContainer />
      </Layout>
    </Suspense>
  );
}

export default App;
