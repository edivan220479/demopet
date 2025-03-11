import { About } from "./_comonents/about";
import { Hero } from "./_comonents/hero";
import { Services } from "./_comonents/services";
import { Testimonials } from "./_comonents/testimonials";
import { Footer } from "./_comonents/footer";

export default function Home() {
  return (
    <main>
       <Hero/>
       <About/>
       <Services/>
       <Testimonials/>
       <Footer/>    
    </main>  
  );
}