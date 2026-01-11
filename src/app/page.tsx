import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Featured from "@/components/Home/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Featured />
    </div>
  );
}
