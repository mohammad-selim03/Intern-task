import Banner from "@/components/Banner";
import Discover from "@/components/Discover";
import Explore from "@/components/Explore";
import Header from "@/components/Header";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Explore />
      <Slider />
      <Discover/>
    </div>
  );
}
