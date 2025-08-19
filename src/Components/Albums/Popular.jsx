import React from "react";
import davido from "../Images/popular/Davido.png"
import shalli from "../Images/popular/Shalli.png"
import asake from "../Images/popular/Asake.png"
import seyi from "../Images/popular/Seyi.png"
import burna from "../Images/popular/Burna.png"

function Popular() {

    const trend = [
        {
            img: davido,
            name: 'Davido',
            artisrt: 'Artist'
        },

        {
            img: shalli,
            name:'Shallipopi',
            artisrt: 'Artist'
        },

        {
            img: asake,
            name: 'Asake',
            artisrt: 'Artist'
        },

        {
            img: seyi,
            name: 'Seyi Vibez',
            artisrt: 'Artist'
        },

        {
            img: burna,
            name: 'Burna Boy',
            artisrt: 'Artist'
        },

        {
            img: davido,
            name: 'Davido',
            artisrt: 'Artist'
        },

        {
            img: shalli,
            name:'Shallipopi',
            artisrt: 'Artist'
        },

        {
            img: asake,
            name: 'Asake',
            artisrt: 'Artist'
        },

        {
            img: seyi,
            name: 'Seyi Vibez',
            artisrt: 'Artist'
        },

        {
            img: burna,
            name: 'Burna Boy',
            artisrt: 'Artist'
        }
    ]
    return (
        <>
            <div className="mx-[40px]">
                <div className="flex justify-between">
                    <div className="pt-[20px] mb-[8px]">
                        <span className="text-[24px] font-[500]">Popular artists</span>
                    </div>
                    <div className="pt-[20px] mb-[8px]">
                        <span className="text-[13px] font-[500] text-[#B3B3B3]">Show all</span>
                    </div>
                </div>   
            </div>

            <div className="flex overflow-x-auto px-[30px] mb-[30px]">
                {trend.map((art, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div className="flex flex-col p-3 hover:bg-[#1F1F1F]">
                                    <img src={art.img} alt="img" className="w-[150px] mb-1 rounded-full"/>
                                    <span className="w-fit">{art.name}</span>
                                    <span className="w-[150px]"></span>
                                    <span className="w-fit text-[#B3B3B3] text-[13px]">{art.artisrt}</span>
                                </div>
                            </div>
                            
                        </>
                        )
                    })}
                </div>
        </>
    )
}

export default Popular