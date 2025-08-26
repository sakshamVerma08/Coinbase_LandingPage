import ExploreSection from "./explore_section";
import LandingHero from "./landing_hero";

type Props = {};

const LandingPage = (props:Props)=>{

    return (
        <>
        <main className = "min-h-screen">
      <LandingHero/>
    <ExploreSection/>

    </main>
        </>
    )
};

export default LandingPage;