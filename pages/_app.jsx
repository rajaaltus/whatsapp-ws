import React from "react";
import Layout from "../components/layout";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
