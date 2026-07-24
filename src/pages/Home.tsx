import { Hero } from "../components/sections/Hero";
import { Resources } from "../components/sections/Resources";
import { About } from "../components/sections/About";
import { Discovery } from "../components/sections/Discovery";
import { Journey } from "../components/sections/Journey";
import { WhoIsThis } from "../components/sections/WhoIsThis";
import { Team } from "../components/sections/Team";
import { Sponsor } from "../components/sections/Sponsor";
import { Register } from "../components/sections/Register";
import { Payment } from "../components/sections/Payment";
import { Details } from "../components/sections/Details";
import { Layout } from "../components/Layout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <Layout>
      <Hero />
      <Resources />
      <About />
      <Discovery />
      <Journey />
      <WhoIsThis />
      <Team />
      <Sponsor />
      <Register />
      <Payment />
      <Details />
    </Layout>
  );
}
