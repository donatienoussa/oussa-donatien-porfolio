import Hero from "@/components/Hero";
import { Services } from "@/components/Services";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <div className="relative z-0">
          <Services />
          {/* <StarsCanvas /> */}
        </div>
      </main>
    </div>
  );
}
