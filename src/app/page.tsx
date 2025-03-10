import { About } from "./_comonents/about";
import { Hero } from "./_comonents/hero";
import { Services } from "./_comonents/services";
import { Testimonials } from "./_comonents/testimonials";

export default function Home() {
  return (
    <main>
       <Hero/>
       <About/>
       <Services/>
       <Testimonials/>
    </main>  
  );
}