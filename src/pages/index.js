import React from "react";
import "destyle.css";

import SEO from "../components/seo";
import Layout from "../components/layout";

import GlobalStyle from "../theme/GlobalStyle";
import theme from "../theme/theme";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <GlobalStyle theme={theme}/>

  </Layout>
);

export default IndexPage;
