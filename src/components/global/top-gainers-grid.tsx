import Image from "next/image";

const TopGainersGrid = ()=>{

    return (

          <div className="grid grid-rows-3 grid-cols-2 gap-4 pt-10">
            {/* Card 1 */}
            <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                
                <div className="pl-1 pt-1">

                    <Image src = "/images/dimo_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                    <span className="font-font1 text-[20px] font-medium">DIMO</span><br/>
                    <span className=" text-left font-normal text-slate-500">₹9.11</span>
                    <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 68.15%</p>
                </div>

            </div>

            <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                
                <div className="pl-1 pt-1">

                    <Image src = "/images/iExec_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                    <span className="font-font1 text-[20px] font-medium">iExec RLC</span><br/>
                    <span className=" text-left font-normal text-slate-500">₹95.96</span>
                    <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 14.31%</p>
                </div>

            </div>


            <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                
                <div className="pl-1 pt-1">

                    <Image src = "/images/tokenbot_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                    <span className="font-font1 text-[20px] font-medium">tokenbot</span><br/>
                    <span className=" text-left font-normal text-slate-500">₹4,704.26</span>
                    <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 12.46%</p>
                </div>

            </div>


            <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                
                <div className="pl-1 pt-1">

                    <Image src = "/images/pump_fun_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                    <span className="font-font1 text-[20px] font-medium">Pump.fun</span><br/>
                    <span className=" text-left font-normal text-slate-500">₹0.27</span>
                    <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 12.33%</p>
                </div>

            </div>


            <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                
                <div className="pl-1 pt-1">

                    <Image src = "/images/maple_finance_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                    <span className="font-font1 text-[20px] font-medium">Maple Finance</span><br/>
                    <span className=" text-left font-normal text-slate-500">₹38.97</span>
                    <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 10.91%</p>
                </div>

            </div>


            <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                
                <div className="pl-1 pt-1">

                    <Image src = "/images/story_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                    <span className="font-font1 text-[20px] font-medium">Story</span><br/>
                    <span className=" text-left font-normal text-slate-500">₹539.53</span>
                    <p className="text-gray-700 font-semibold mt-2 text-2xl">↑ 10.72%</p>
                </div>

            </div>


            
            
        </div>
    );
};


export default TopGainersGrid;