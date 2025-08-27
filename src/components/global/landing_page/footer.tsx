import { Earth } from "lucide-react";
import Image from "next/image";


const Footer = ()=>{

    return (

        <>
        <div className="mt-20 w-full p-7">

            {/* <h1 className="text-blue-600 text-4xl font-semibold tracking-normal">coinbase</h1> */}
            <Image src = "/important_svgs/coinbase_logo.svg" alt = "Coinbase Logo" width = {150} height = {150}/>
            <p className="text-slate-500 mt-7">© 2025 Coinbase</p>
            <p className="cursor-pointer text-blue-600 font-font2 font-normal mt-3">Blog <span className="text-slate-600 ">•</span> X <span className="text-slate-600">•</span> Facebook</p>

            <div className="flex w-full justify-start gap-4 items-center mt-5">
                <Earth size = {20}/>
                <h3 className="text-slate-500">India | English</h3>

            </div>

            <div>

                <div id="company" className = " w-1/2 text-wrap ">
                    <h2 className="font-semibold mt-7">Company</h2>

                    <ul className="text-slate-500 gap-5 font-font1">
                        <li className="mb-1 mt-3">About</li>
                        <li className="mb-1">Careers</li>
                        <li className="mb-1">Affiliates</li>
                        <li className="mb-1">Blog</li>
                        <li className="mb-1">Press</li>
                        <li className="mb-1">Security</li>
                        <li className="mb-1">Investors</li>
                        <li className="mb-1">Vendors</li>
                        <li className="mb-1">Legal & Privacy</li>
                        <li className="mb-1">Cookie Policy</li>
                        <li className="mb-1">Cookie Preference</li>
                        <li className="mb-1">Digital Asset Disclosures</li>
                    </ul>
                </div>

                <div id="learn" className = " w-full text-wrap ">
                    <h2 className="font-semibold mt-7">Learn</h2>

                    <ul className="text-slate-500 gap-5 font-font1">
                        <li className="mb-1 mt-3">Explore</li>
                        <li className="mb-1">Coinbase Bytes newsletter</li>
                        <li className="mb-1">Crypto basics</li>
                        <li className="mb-1">Tips & tutorials</li>
                        <li className="mb-1">Crypto glossary</li>
                        <li className="mb-1">Market updates</li>
                        <li className="mb-1">What is Bitcoin?</li>
                        <li className="mb-1">What is crypto?</li>
                        <li className="mb-1">What is blockchain?</li>
                        <li className="mb-1">How to set up a crypto wallet</li>
                        <li className="mb-1">How to send crypto</li>
                        <li className="mb-1">Taxes</li>
                    </ul>
                </div>

                <div id="individuals" className = " w-full text-wrap ">
                    <h2 className="font-semibold mt-7">Individuals</h2>

                    <ul className="text-slate-500 gap-5 font-font1">
                        <li className="mb-1 mt-3">Buy & sell</li>
                        <li className="mb-1">Earn free crypto</li>
                        <li className="mb-1">Base App</li>
                        <li className="mb-1">Coinbase One</li>
                        <li className="mb-1">Debit Card</li>
                        
                    </ul>
                </div>

                <div id="business" className = " w-full text-wrap ">
                    <h2 className="font-semibold mt-7">Businesses</h2>

                    <ul className="text-slate-500 gap-5 font-font1">
                        <li className="mb-1 mt-3">Asset Listings</li>
                        <li className="mb-1">Commerce</li>
                        
                    </ul>
                </div>


                <div id="institutions" className = " w-full text-wrap ">
                    <h2 className="font-semibold mt-7">Institutions</h2>

                    <ul className="text-slate-500 gap-5 font-font1">
                        <li className="mb-1 mt-3">Prime</li>
                        <li className="mb-1">Staking</li>
                        <li className="mb-1">Exchange</li>
                        <li className="mb-1">International Exchange</li>
                        <li className="mb-1">Derivatives Exchange</li>
                        <li className="mb-1">Veified Pools</li>
                        
                    </ul>
                </div>


                <div id="developers" className = " w-full text-wrap ">
                    <h2 className="font-semibold mt-7">Institutions</h2>

                    <ul className="text-slate-500 gap-5 font-font1">
                        <li className="mb-1 mt-3">Developer Platform</li>
                        <li className="mb-1">Base</li>
                        <li className="mb-1">Server Wallets</li>
                        <li className="mb-1">Embedd Wallets</li>
                        <li className="mb-1">Base Accounts(Smart Wallets)</li>
                        <li className="mb-1">Onramp & Offramp</li>
                        <li className="mb-1">X402</li>
                        <li className="mb-1">Trade API</li>
                        <li className="mb-1">Paymaster</li>
                        <li className="mb-1">Onchain Kit</li>
                        <li className="mb-1">Data API</li>
                        <li className="mb-1">Verifications</li>
                        <li className="mb-1">Node</li>
                        <li className="mb-1">Agent Kit</li>
                        <li className="mb-1">Staking</li>
                        <li className="mb-1">Faucet</li>
                        <li className="mb-1">Exchange API</li>
                        <li className="mb-1">International Exchange API</li>
                        <li className="mb-1">Prime API</li>
                        <li className="mb-1">Derivatives API</li>
                        
                    </ul>
                </div>

                <div id="support" className = " w-1/2 text-wrap ">
                    <h2 className="font-semibold mt-7">Support</h2>

                    <ul className="text-slate-500 gap-5 font-font1">
                        <li className="mb-1 mt-3">Help center</li>
                        <li className="mb-1">Contact us</li>
                        <li className="mb-1">Create account</li>
                        <li className="mb-1">ID verification</li>
                        <li className="mb-1">Account information</li>
                        <li className="mb-1">Payment methods</li>
                        <li className="mb-1">Account access</li>
                        <li className="mb-1">Supported crypto</li>
                        <li className="mb-1">Status</li>
                    </ul>
                </div>

                <div id="asset-prices" className="w-1/2 text-wrap">
                    <h2 className="font-semibold mt-7">Asset Prices</h2>

                    <ul className="text-slate-500 gap-5 font-font1">

                        <div className="mb-1 mt-3">Bitcoin price</div>
                        <div className="mb-1">Ethereum price</div>
                        <div className="mb-1">Solana price</div>
                        <div className="mb-1">XRP price</div>
                    </ul>
                </div>

            </div>

        </div>
        </>
    );
};

export default Footer;