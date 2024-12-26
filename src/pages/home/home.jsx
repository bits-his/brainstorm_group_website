import Services from "./Services/Services";

export default function Home({ sections }) {
  return (
    <>
      <Services id="services" refi={sections.services} />
    </>
  );
}
