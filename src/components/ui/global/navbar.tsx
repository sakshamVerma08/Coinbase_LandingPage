import { Button } from "../button";

type Props = {};

const Navbar = (props:Props)=>{

    return (
        <div className=" flex justify-between items-center w-full h-[10vh] bg-white fixed border-b-[1px] border-slate-300 p-5">

            <div id = "left-nav" className="w-1/5">
            
            <h2 className=" text-2xl text-blue-600 font-bold">coinbase</h2>
            </div>

            <div id = "center-nav" className="w-2/4 p-3">
                <ul className="list-none flex justify-between items-center gap-2.5 cursor-pointer font-sans ">
                    <li>Cryptocurrencies</li>
                    <li>Individuals</li>
                    <li>Business</li>
                    <li>Institutions</li>
                    <li>Developers</li>
                    <li>Company</li>
                </ul>
            </div>

            <div id="right-nav" className="w-1/5 flex justify-end items-center">
                <Button className="cursor-pointer">Signup/Signin</Button>
            </div>
        </div>
    );

};

export default Navbar;