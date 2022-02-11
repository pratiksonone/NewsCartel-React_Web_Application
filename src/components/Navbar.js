import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { WiDayCloudyWindy } from "react-icons/wi";
export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
    return (
        <>
            <nav className="lg:flex sticky top-0 z-20 items-center bg-slate-900 text-white md:-p-3">

                <div className="md:ml-2 md:mr-10 lg:mr-20 p-3 flex items-center justify-between">
                    <div className='md:mr-20'>
                        <Link to="/NewsCartel-React_Web_Application"><p className='font-bold text-xl'>NewsCartel</p></Link>
                    </div>

                    <div >
                        <ul className={(showNav ? "right-1" : "-right-full") + " lg:static fixed bottom-0 top-[67px] lg:flex lg:space-x-7 items-center lg:bg-transparent bg-slate-800 bg-opacity-90  w-1/3 text-white lg:space-y-0 space-y-5 p-2 transition-right rounded-md"}>

                            <li className="m-3">
                                <Link className="hover:text-slate-400 outline-none text-lg" to="/NewsCartel-React_Web_Application">General</Link>
                            </li>
                            <li className="m-3">
                                <Link className="hover:text-slate-400 text-lg" to="/NewsCartel-React_Web_Application/business">Business</Link>
                            </li>
                            <li className="m-3">
                                <Link className="hover:text-slate-400 text-lg" to="/NewsCartel-React_Web_Application/entertainment">Entertainment</Link>
                            </li>
                            <li className="m-3">
                                <Link className="hover:text-slate-400 text-lg" to="/NewsCartel-React_Web_Application/sports">Sports</Link>
                            </li>
                            <li className="m-3">
                                <Link className="hover:text-slate-400 text-lg" to="/NewsCartel-React_Web_Application/science">Science</Link>
                            </li>
                            <li className="m-3">
                                <Link className="hover:text-slate-400 text-lg" to="/NewsCartel-React_Web_Application/technology">Technology</Link>
                            </li>
                            <li className="m-3">
                                <Link className="hover:text-slate-400 text-lg" to="/NewsCartel-React_Web_Application/health">Health</Link>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <ul className='mx-2 '>
                            <li className='p-1 px-3  flex items-center justify-center'>
                                <WiDayCloudyWindy className=' w-8 h-8 mx-2' /> <Link className="border-2 px-2 border-white hover:text-blue-400 hover:border-blue-400 focus::border-blue-400" to="/NewsCartel-React_Web_Application/weather"> Weather</Link>
                            </li>
                        </ul>
                    </div>
                    {showNav ? (
                        <HiOutlineMenuAlt3
                            onClick={() => setShowNav(!showNav)}
                            className="lg:hidden block w-10 h-10 p-1 sm:p-2  cursor-pointer"
                        />
                    ) : (
                        <HiOutlineMenuAlt2
                            onClick={() => setShowNav(!showNav)}
                            className="lg:hidden block w-10 h-10 p-1 sm:p-2 cursor-pointer"
                        />
                    )}

                </div>
            </nav>
        </>
    )
}
