import { Button } from "import/components/ui/button";
import { DatePickerDemo } from "import/components/ui/date-picker";
import { Input } from "import/components/ui/input";
import { MyChart } from "import/components/ui/main-chart";
import Image from "next/image";

export default function Home(){

  return (

    <>
      <section id = "hero-section" className="w-full h-auto flex justify-between items-start p-20">

        <div id="namasteIndia" className=" w-1/2 h-1/4 pt-10 mt-30">

          <h1 className="text-6xl font-semibold tracking-normal leading-18">Namaste,India!<br/>Meet Coinbase 🇮🇳</h1>

          <aside className="mt-4"><span className="text-2xl text-slate-500 font-semibold">Coinbase is the world’s safest and most<br/>
            trusted platform to buy, sell and<br/>
            manage crypto.
            </span>
          </aside>

          <aside className="mt-4 text-slate-500 font-normal">

            We’re launching soon! Add your email and you’ll be the first to<br/>
            know when you can join.
          </aside>


          <form className="mt-5">

            <Input type = "email" placeholder="Enter your Email" className = "w-1/3 p-5 cursor-pointer mb-7 bg-white hover:bg-slate-100 "/>
            <Button type = "submit" className="rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Get Notified</Button>
          </form>

        </div>

        <div id="tradingImage">

          <Image src = "/images/landing_page_img1.avif" alt = "Trading_image" width={500} height = {500}/>
        </div>

      </section>
    </>
  );
}