import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../pages/components/Hero";
import Cards from "../pages/components/cards";
import Facilities from "../pages/components/facilities";
import Community from "../pages/components/community";
import Advantages from "../pages/components/Advantages";
import Footer from "../pages/components/footer";

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Facilities />
      <Community />
      <Advantages />
      <Footer />
    </div>
  );
}

export default Home;
