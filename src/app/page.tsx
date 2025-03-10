import { About } from "./_comonents/about";
import { Hero } from "./_comonents/hero";
import { Services } from "./_comonents/services";

export default function Home() {
  return (
    <main>
       <Hero/>
       <About/>
       <Services/>
    </main>  
  );
}