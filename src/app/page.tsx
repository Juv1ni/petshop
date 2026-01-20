import { Divisor } from "./components/divisor";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ServicesSection } from "./components/services_section";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Divisor color="bg-pink-500" />
      <Hero />
      <Divisor color="bg-purple-500" />
      <ServicesSection />
    </main>
  );
}
