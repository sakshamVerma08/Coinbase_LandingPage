import { DatePickerDemo } from "import/components/ui/date-picker";
import { MyChart } from "import/components/ui/main-chart";
import Image from "next/image";

export default function Home(){

  return (

    <>
      <section id = "hero-section" className="w-full bg-purple-200 h-auto flex justify-between items-center p-20">

        <div id="namasteIndia" className="bg-amber-200">

          <h1 className="text-6xl font-medium tracking-normal leading-18">Namaste,India!<br/>Meet Coinbase 🇮🇳</h1>
        </div>

        <div id="tradingImage">

          <Image src = "/images/landing_page_img1.avif" alt = "Trading_image" width={500} height = {500}/>
        </div>

      </section>
    </>
  );
}