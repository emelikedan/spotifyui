import React from "react";
import Hamburger from "hamburger-react";

import { useState } from "react";

function Hambur() {

    const [open, setOpen] = useState(false);


    return (
        <>
            <Hamburger size={20} toggled={open} toggle={setOpen} />

            {open && <div className="fixed top-0 left-0 w-screen h-screen text-white bg-black">
                <header className="flex justify-end items-center">
                    <Hamburger size={20} toggled={open} toggle={setOpen} />    
                </header>
                    <main className="/*fixed*/ h-screen">
                        <ul className="ml-[30px]">
                            <li>
                                <p className="">Sign Up</p>
                            </li>

                            <li className=" ">
                                <p>Login</p>
                            </li>
                        </ul>
                    </main>
                    home
                </div>}
        </>
    );
}

export default Hambur