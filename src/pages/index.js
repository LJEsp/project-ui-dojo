import React from "react";
import styled from "styled-components";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Image from "../components/image";

const ImgWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImgWrapper>
      <Image />
    </ImgWrapper>
  </Layout>
);

export default IndexPage;
