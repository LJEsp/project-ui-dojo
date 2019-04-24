import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

import GlobalStyle from "../theme/GlobalStyle";
import theme from "../theme/theme";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <GlobalStyle theme={theme} />

    <Link to="/facebook">Facebook</Link>
  </Layout>
);

export default IndexPage;
