
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

export default function Home({ sections }) {
  return (
    <>
      <Hero ref={sections.home} />
      <Services id="services" refi={sections.services} />
    </>
  );
}
