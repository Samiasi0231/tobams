import Hero from "./components/Hero"
import LiveAuction from "./components/LiveAuctions";
import Feature from "./components/Feature"
import Habitation from "./components/Habitation"
import LeatestAuction from "./components/LeatestAuction"
import PopularAuctions from "./components/PopularAuctions"
import CursurVitea from "./components/CursurVitea"
import Statistics from "./components/statistic";
import Author from "./components/Author";
export default function Home() {
  return (
  <div className= "min-h-screen" >
      <Hero />
<LiveAuction />
<Feature />
<LeatestAuction/>
<Habitation />
<PopularAuctions/>
<CursurVitea />
<Statistics/>
<Author/>

  </div>
  );
}
