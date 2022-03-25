import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero";
import Cards from "../components/cards";
import Facilities from "../components/facilities";
import Community from "../components/community";
import Advantages from "../components/Advantages";
import Footer from "../components/footer";

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
