import {NavBar} from "@/components/ui/NavBar";
import {TracingBeam} from "@/components/ui/Tracing-Beam";
import {Hero} from "@/components/Hero";
import {navItems} from "@/data";
export default function Home() {
    return (
        <main className="relative w-full h-screen bg-white text-black">
            <NavBar navItems={navItems}/>
            <TracingBeam className="px-3">
                <Hero/>
            </TracingBeam>
        </main>
    );
}
