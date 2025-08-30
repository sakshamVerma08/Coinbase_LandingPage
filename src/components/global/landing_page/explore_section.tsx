import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "../../ui/button";
import TradableGrid from "../tradable-grid";
import TopGainersGrid from "../top-gainers-grid";
import { JSX } from "react";

// type Props = {};


const ExploreSection = (): JSX.Element=>{

    return(

        <section id = "exploreSection" className="mb-13 md:grid md:grid-cols-2 md:gap-3">

            <div className="w-full text-left pl-7 md:flex md:flex-col md:items-lefts md:justify-center md:text-balance">

                <h3 className="text-[30px] font-font1 font-medium leading-9 tracking-tighter md:text-4xl md:leading-12 ">Explore crypto like Bitcoin,<br/>
                    Ethereum, and Dogecoin</h3>

                <aside className="font-font2 mt-8 md:text-3xl">Simply and securely buy, sell, and manage<br/>
                        hundreds of cryptocurrencies.</aside>


                <Button className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 font-font1 rounded-full 
                text-[17px] mt-7 pl-30 pr-30 pt-7 pb-7 font-semibold md:w-1/2">See more assets</Button>
            </div>

            <div className=" w-full">


                <div id = "button-container" className ="flex justify-start items-cente w-full p-10">


                <Tabs defaultValue="tradable" className="w-full ">

                    <TabsList>

                        <TabsTrigger value = "tradable" className="cursor-pointer rounded-full 
                        data-[state=active]:bg-slate-700 bg-slate-200 mr-10  data-[state=active]:text-white
                            p-3 md:py-2 md:font-semibold md:px-4">
                                Tradable
                            
                        </TabsTrigger>

                        <TabsTrigger value = "top-gainers" className="cursor-pointer rounded-full 
                        data-[state=active]:bg-slate-700 bg-slate-200 p-3 data-[state=active]:text-white md:py-2 md:font-semibold md:px-4">
                                    Top gainers
                            

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