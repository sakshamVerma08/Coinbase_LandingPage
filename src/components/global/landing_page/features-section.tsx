import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card"

/* Importing SVG's as React Components */

import Safe from "../../../../public/important_svgs/safe-3.svg";
import Support from "../../../../public/important_svgs/support-5.svg";
import Trusted from "../../../../public/important_svgs/trusted-5.svg";
import Worldwide from "../../../../public/important_svgs/worldwide-3.svg";
import Image from "next/image";
import { Button } from "import/components/ui/button";

const FeaturesSection = ()=>{

    return (
        <section id = "features-section" className="p-5">

            <div className="w-full mb-10">

                <h2 className="font-font1 text-3xl tracking-tighter mb-5">The most trusted crypto<br/>assets exchange</h2>
                <p className="text-gray-500 text-[1rem] tracking-normal font-font2">See why millions of users trust us. The proof is in <br/> our platform: </p>
            </div>


            <div className="grid grid-cols-1 ">

                    <Card className="max-w-sm mb-7 flex flex-col h-full">
                        <CardHeader>
                            <Image src = "/important_svgs/worldwide-3.svg" width={50} height = {50} alt = "Worldwide_SVG" className="mb-5"/>

                            <h2 className="font-font2 tracking-light text-2xl">The largest public crypto <br/>
                                        company</h2>

                        </CardHeader>

                        <CardContent className="text-gray-500 w-full text-wrap leading-relaxed text-sm font-font4 grow">
                            <p>In April 2021, Coinbase became the largest publicly traded crypto company in the world. That means we operate with more financial transparency, and make our financial statements available each quarter.</p>

                        </CardContent>

                        <CardFooter>
                            <Button className="text-blue-500 bg-white cursor-pointer">Learn more</Button>
                        </CardFooter>
                </Card>


                    <Card className="max-w-sm mb-7">
                        <CardHeader>
                            <Image src = "/important_svgs/safe-3.svg" width={50} height = {50} alt = "Worldwide_SVG" className="mb-5"/>

                            <h2 className="font-font2 tracking-light text-2xl">Your assets are secure</h2>

                        </CardHeader>

                        <CardContent className="text-gray-500 w-full text-wrap leading-relaxed text-sm font-font4 grow">
                            <p>Your crypto is your crypto. It’s that simple.<br/> Coinbase doesn't use, or lend, your assets without your permission. Also, we offer the most secure and multifaceted risk management programs designed to protect our customers' assets.</p>

                        </CardContent>

                        <CardFooter>
                            <Button className="text-blue-500 bg-white cursor-pointer">Learn more</Button>
                        </CardFooter>
                </Card>


                    <Card className="max-w-sm mb-7">
                        <CardHeader>
                            <Image src = "/important_svgs/trusted-5.svg" width={50} height = {50} alt = "Worldwide_SVG" className="mb-5"/>

                            <h2 className="font-font2 tracking-light text-2xl">The most trusted</h2>

                        </CardHeader>

                        <CardContent className="text-gray-500 w-full text-wrap leading-relaxed text-sm font-font4 grow">
                            <p>Coinbase is registered as a reporting entity with FIU. This requires Coinbase to meet the strict rules enforced by FIU. This ultimately helps us deliver a better and more trusted experience for our users</p>

                        </CardContent>

                        <CardFooter>
                            <Button className="text-blue-500 bg-white cursor-pointer">Learn more</Button>
                        </CardFooter>
                </Card>


                    <Card className="max-w-sm mb-7">
                        <CardHeader>
                            <Image src = "/important_svgs/support-5.svg" width={50} height = {50} alt = "Worldwide_SVG" className="mb-5"/>

                            <h2 className="font-font2 tracking-light text-2xl">The most trusted</h2>

                        </CardHeader>

                        <CardContent className="text-gray-500 w-full text-wrap leading-relaxed text-sm font-font4 grow">
                            <p>Coinbase is registered as a reporting entity with FIU. This requires Coinbase to meet the strict rules enforced by FIU. This ultimately helps us deliver a better and more trusted experience for our users</p>

                        </CardContent>

                        <CardFooter>
                            <Button className="text-blue-500 bg-white cursor-pointer">Learn more</Button>
                        </CardFooter>
                </Card>
            </div>

        </section>
    );
};

export default FeaturesSection;