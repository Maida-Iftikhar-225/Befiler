import Navbar from "./components/navbar/Navbar";
import Hero from "./components/homePage/Hero";
import Working from "./components/homePage/Working";
import TaxFilingPlan from "./components/homePage/TaxFilingPlan";
import TaxCalculator from "./components/homePage/TaxCalculator";
import PartnersSection from "./components/homePage/Partners";
import Befilerapp from "./components/homePage/BefilerApp";
import ReviewsAndResources from "./components/homePage/Reviews"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Working />
      <TaxFilingPlan />
      <TaxCalculator />
      <PartnersSection />
      <Befilerapp/>
      <ReviewsAndResources/>
    </>
  );
}

export default App;
