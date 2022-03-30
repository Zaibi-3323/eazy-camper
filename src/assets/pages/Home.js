import Hero from "../components/Hero";
import Cards from "../components/cards";
import Facilities from "../components/facilities";
import Community from "../components/community";
import Advantages from "../components/Advantages";
import Footer from "../components/footer";

import DarkModeToggle from "../components/DarkModeToggle";

import DarkModeStatus from "../components/DarkModeStatus";
import DarkModeCommands from "../components/DarkModeCommands";

function Home() {
  return (
    <div>
      <Hero />

      <DarkModeStatus />
      <DarkModeCommands />
      <Cards />
      <Facilities />
      <Community />
      <Advantages />
      <Footer />
    </div>
  );
}

export default Home;
