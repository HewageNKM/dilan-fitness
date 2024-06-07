import {NavBar} from "@/components/ui/NavBar";
import {TracingBeam} from "@/components/ui/Tracing-Beam";
import {Hero} from "@/components/Hero";
import {About} from "@/components/About";

export default function Home() {
    return (
        <main className="relative w-full h-screen bg-white text-black" id="hero">
            <NavBar/>
            <TracingBeam>
                <Hero/>
                <About/>
            </TracingBeam>
        </main>
    );
}
