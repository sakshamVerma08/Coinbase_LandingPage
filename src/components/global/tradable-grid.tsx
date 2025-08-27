import Image from "next/image";

const TradableGrid = ()=>{

    
    return (

       <div className="grid grid-cols-2 gap-4 pt-10">
                    {/* Card 1 */}
                    <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                        
                        <div className="pl-1 pt-1">
        
                            <Image src = "/images/bitcoin_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                            <span className="font-font1 text-[20px] font-medium">Bitcoin</span><br/>
                            <span className=" text-left font-normal text-slate-500">₹97,59,807.91</span>
                            <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 1.59%</p>
                        </div>
        
                    </div>
        
                    <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                        
                        <div className="pl-1 pt-1">
        
                            <Image src = "/images/ethereum_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                            <span className="font-font1 text-[20px] font-medium">Ethereum</span><br/>
                            <span className=" text-left font-normal text-slate-500">₹4,01,901.29</span>
                            <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 3.88%</p>
                        </div>
        
                    </div>
        
        
                    <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                        
                        <div className="pl-1 pt-1">
        
                            <Image src = "/images/xrp_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                            <span className="font-font1 text-[20px] font-medium">XRP</span><br/>
                            <span className=" text-left font-normal text-slate-500">₹262.98</span>
                            <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 4.36%</p>
                        </div>
        
                    </div>
        
        
                    <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                        
                        <div className="pl-1 pt-1">
        
                            <Image src = "/images/xrp_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                            <span className="font-font1 text-[20px] font-medium">Tether</span><br/>
                            <span className=" text-left font-normal text-slate-500">₹87.71</span>
                            <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 0.00%</p>
                        </div>
        
                    </div>
        
        
                    <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                        
                        <div className="pl-1 pt-1">
        
                            <Image src = "/images/solana_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                            <span className="font-font1 text-[20px] font-medium">Solana</span><br/>
                            <span className=" text-left font-normal text-slate-500">₹17,437.06</span>
                            <p className="text-green-700 font-semibold mt-2 text-2xl">↑ 5.78%</p>
                        </div>
        
                    </div>
        
        
                    <div className="shadow-xl/20 bg-slate-100 border border-gray-300 rounded-2xl w-36 h-auto p-3 ">
                        
                        <div className="pl-1 pt-1">
        
                            <Image src = "/images/solana_logo.png" alt = "Bitcoin_image" width={30} height={30}/>
                            <span className="font-font1 text-[20px] font-medium">USDC</span><br/>
                            <span className=" text-left font-normal text-slate-500">₹87.79</span>
                            <p className="text-gray-700 font-semibold mt-2 text-2xl">↑ 0.00%</p>
                        </div>
        
                    </div>
        
        
                    
                    
                </div>
    );



}

export default TradableGrid;

