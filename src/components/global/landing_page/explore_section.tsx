import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "../../ui/button";
import TradableGrid from "../tradable-grid";
import TopGainersGrid from "../top-gainers-grid";

// type Props = {};


const ExploreSection = ()=>{

    return(

        <section id = "exploreSection" className="mb-13">

            <div className="w-full text-left pl-7">

                <h3 className="text-[30px] font-font1 font-medium leading-9 tracking-tighter">Explore crypto like Bitcoin,<br/>
                    Ethereum, and Dogecoin</h3>

                <aside className="font-font2 mt-8">Simply and securely buy, sell, and manage<br/>
                        hundreds of cryptocurrencies.</aside>


                <Button className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 font-font1 rounded-full 
                text-[17px] mt-7 pl-30 pr-30 pt-7 pb-7 font-semibold ">See more assets</Button>
            </div>

            <div className=" w-full">


                <div id = "button-container" className ="flex justify-start items-cente w-full p-10">


                <Tabs defaultValue="tradable" className="w-full ">

                    <TabsList>

                        <TabsTrigger value = "tradable" className="cursor-pointer rounded-full 
                        data-[state=active]:bg-slate-700 bg-slate-200 mr-10  data-[state=active]:text-white
                            p-3">
                                Tradable
                            {/* <Button className="cursor-pointer rounded-full bg-slate-800 focus:bg-slate-700 mr-10 
                            p-5">Tradable</Button> */}
                        </TabsTrigger>

                        <TabsTrigger value = "top-gainers" className="cursor-pointer rounded-full 
                        data-[state=active]:bg-slate-700 bg-slate-200 p-3 data-[state=active]:text-white">
                                    Top gainers
                            {/* <Button className="cursor-pointer rounded-full bg-slate-800 focus:bg-slate-700 p-5">Top gainers</Button> */}

                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value = "tradable">

                        <TradableGrid/>
                    </TabsContent>

                    <TabsContent value = "top-gainers">

                        <TopGainersGrid/>

                    </TabsContent>

                </Tabs>

                </div>

            </div>

        </section>
    );
}


export default ExploreSection;