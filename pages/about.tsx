import About from "@components/home/About";
import Page from "@components/utility/Page";
import type { NextPage } from "next";

const AboutUs: NextPage = () => {
  return (
    <Page title="About Us">
      <About />
    </Page>
  );
};

export default AboutUs;
