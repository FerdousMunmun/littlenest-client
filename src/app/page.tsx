import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Statistics from "@/components/Satistics";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
        <Hero/>
        <WhyChoose/>
        <HowItWorks/>
        <Statistics/>
        <Testimonials/>
      
    </div>
  );
}
