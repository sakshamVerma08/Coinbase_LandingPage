import { Button } from "import/components/ui/button";
import { CircleSmall } from "lucide-react";
import Image from "next/image";


const LastSection = ()=>{

    return (
<>
        <div className="w-full h-auto flex flex-col items-center justify-between p-5">

            <div className="w-full text-wrap">

                <h2 className="text-2xl font-font1 tracking-tighter font-normal">Get lower, volume-based pricing with Advanced Trade</h2>

                <ul className="mt-8 w-full ">

                    <li className="flex w-full justify-start items-center gap-3 mb-3 font-font4 ">
                        <CircleSmall className="text-blue-600"/>
                        <p className="text-gray-500 text-[14px]">Real-time order books with as low as 0.0%<br/>maker fees</p>
                        
                    </li>

                    <li className="flex w-full justify-start items-center gap-3 mb-3 font-font4 ">
                        <CircleSmall className="text-blue-600" />
                        <p className="text-gray-500 text-[14px]">Real-time order books with as low as 0.0%<br/>maker fees</p>
                    </li>

                    <li className="flex w-full justify-start items-center gap-3 mb-3 font-font4 ">
                        <CircleSmall className="text-blue-600" />
                        <p className="text-gray-500 text-[14px]">Real-time order books with as low as 0.0%<br/>maker fees</p>
                    </li>

                    <li className="flex w-full justify-start items-center gap-3 mb-3 font-font4 ">
                        <CircleSmall className="text-blue-600" />
                        <p className="text-gray-500 text-[14px]">Real-time order books with as low as 0.0%<br/>maker fees</p>
                    </li>
                </ul>
            </div>

            <Button className="cursor-pointer rounded-full bg-blue-600 text-white hover:bg-blue-700 w-full mt-10 pl-10 pr-10 pt-7 pb-7 text-[20px] font-medium" type = "submit">Learn more</Button>

        </div>
    
        {/* <Image src = "/images/landing_page_img2.avif" className="w-[100%] h-[100%] mt-10 " width={50} height = {50} alt = "Dark_landing_page_image"/> */}
        <Image src = "/images/landing_page_img2.avif" className="w-full mt-10" width={1920} height = {1080} alt = "Dark_landing_page_image"/>
</>
    );
        };

export default LastSection;