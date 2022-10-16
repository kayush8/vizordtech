import type { NextPage } from "next";
import Page from "@components/utility/Page";
import Banner from "@components/home/Banner";
import About from "@components/home/About";
import Services from "@components/home/Services";
import Clients from "@components/home/Clients";
import Projects from "@components/home/Projects";

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <Banner />
      <About />
      <Services />
      <Clients />
      <Projects />
    </Page>
  );
};

export default Home;
