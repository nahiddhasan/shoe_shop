import Featured from "@/components/Featured";
import FeaturedBottom from "@/components/FeaturedBottom";
import Hero from "@/components/Hero";
import Hype from "@/components/Hype";
import NewItem from "@/components/NewItem";
import Sponsor from "@/components/Sponsor";

export default function Home() {
  return (
    <main >
      <Hero/>
      <Sponsor />
      <Featured />
      <Hype/>
      <NewItem/>
      <FeaturedBottom/>
      
    </main>
  )
}
