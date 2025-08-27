import ExploreSection from "./explore_section";
import FeaturesSection from "./features-section";
import LandingHero from "./landing_hero";
import LastSection from "./last-section";

// type Props = {};

const LandingPage = ()=>{

    return (
        <>
        <main className = "min-h-screen">
      <LandingHero/>
    <ExploreSection/>
    <FeaturesSection/>
    <LastSection/>


    </main>
        </>
    )
};

export default LandingPage;