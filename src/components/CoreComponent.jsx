import CoreConcepts from "./CoreConcepts";
import Section from "./Section";
import { CORE_CONCEPTS } from "../data";
function CoreComponent() {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts {...item} key={item.title} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreComponent;
