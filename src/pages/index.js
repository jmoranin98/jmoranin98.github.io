import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/banner';

const IndexPage = ({ location, data }) => (
  <Layout>
    <SEO title="Inicio" />
    <Banner/>
  </Layout>
);

export default IndexPage;
