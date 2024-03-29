import AppLogo from "@/components/common/appLogo";
import PrimaryBtn from "@/components/common/primaryBtn";
import { AuroraBackground } from "@/components/others/auroraBg";
import Blackhole from "@/components/others/blackhole";
import FallingStars from "@/components/others/fallingStars";
import Feature from "@/components/others/features";
import { GlobeDemo } from "@/components/others/githubGlobe";
import GlassCard from "@/components/others/glassCard";
import { SparklesCore } from "@/components/others/sparkles";
import SparklesPreview from "@/components/others/sparklesPreview";
import TriTravellersBg from "@/components/others/triTravelersBg";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex justify-center items-center h-[100vh] bg-black bg-radial-gradient from-white via-#222 to-black overflow-hidden">
    //   <TriTravellersBg />
    // </main>
    <main>
      <div className="fixed left-0 top-0 z-10 w-[100vw] bg-[rgba(3,0,20,.08)] backdrop-blur-lg px-5">
        <nav className="relative flex justify-between items-center py-6">
          <AppLogo />
          <PrimaryBtn>Login</PrimaryBtn>
        </nav>
      </div>
      <section className="">
        <Blackhole />
        <SparklesPreview />
        {/* <GlassCard /> */}
        <Feature />
      </section>
    </main>
  );
}
