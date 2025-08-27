import ExploreSection from "./explore_section";
import FeaturesSection from "./features-section";
import LandingHero from "./landing_hero";

// type Props = {};

const LandingPage = ()=>{

    return (
        <>
        <main className = "min-h-screen">
      <LandingHero/>
    <ExploreSection/>
    <FeaturesSection/>

    </main>
        </>
    )
};

export default LandingPage;