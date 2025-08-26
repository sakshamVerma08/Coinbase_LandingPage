import { Button } from "../../button";

type Props = {};

const ExploreSection = (props:Props)=>{

    return(

        <section id = "exploreSection">

            <div className="w-full text-left pl-7">

                <h3 className="text-[30px] font-font1 font-medium leading-9">Explore crypto like Bitcoin,<br/>
                    Ethereum, and Dogecoin</h3>

                <aside className="font-font3 mt-8">Simply and securely buy, sell, and manage<br/>
                        hundreds of cryptocurrencies.</aside>


                <Button className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 font-font1 rounded-full text-[15px] mt-7 pl-30 pr-30 pt-5 pb-5 font-medium ">See more assets</Button>
            </div>

            <div className="bg-purple-500 w-full">


                <div id = "button-container" className ="flex justify-start items-center bg-pink-200 w-full p-10">

                <Button className="cursor-pointer rounded-full bg-slate-700 focus:bg-slate-800 mr-10">Tradable</Button>
                <Button className="cursor-pointer rounded-full bg-slate-700 focus:bg-slate-800">Top gainers</Button>

                </div>

            </div>

        </section>
    );
}


export default ExploreSection;