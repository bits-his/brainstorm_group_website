
import Portfolio from "../portfolio/Portfolio";
import AboutUs from "./About/AboutUs";
import ContactForm from "./Contact/Contact";
import CoreValue from "./CoreValues/CoreValues";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Teams from "./Teams/Teams";

export default function Home({ sections }) {
  return (
    <>
      <Hero ref={sections.home} />
      <AboutUs  id="about" Ref={sections.about} />
      {/* <CoreValue id="corevalues" refi={sections.corevalues} /> */}
      <Services id="services" refi={sections.services} />
      <Portfolio id="portfolio" refi={sections.portfolio} />
      <Teams id="teams" Ref={sections.teams} />
      {/* <Team id="team" refi={sections.team} /> */}
      <ContactForm id="contact" refi={sections.contact} />
    </>
  );
}
