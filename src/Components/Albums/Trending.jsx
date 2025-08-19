import React from "react";
import Love from "../Images/trending/Love.png"
import Champain from "../Images/trending/CHAMPAIN & VACAY.png"
import Ilmb from "../Images/trending/ILMB(feat. Travis Scott).png"
import Jump from "../Images/trending/JUMP.png"
import Calculate from "../Images/trending/Calculate.png"




function Trending() {

    const trend = [
        {
            img: Love,
            title: 'Love',
            name: 'Burna Boy'
        }, 

        {
            img: Champain,
            title: 'CHAMPAIN & VACAY',
            name: 'Travis Scott, Don Toliver'
        },

        {
            img: Ilmb,
            title: 'ILMB',
            name: 'Sheck Wes, Travis Scott'
        },

        {
            img: Jump,
            title: 'JUMP',
            name: 'BLACKPINK'
        },

        {
            img: Calculate,
            title: 'Calculate',
            name: 'Kidd Carder'
        },

        {
            img: Love,
            title: 'Love',
            name: 'Burna Boy'
        }, 

        {
            img: Champain,
            title: 'CHAMPAIN & VACAY',
            name: 'Travis Scott, Don Toliver'
        },

        {
            img: Ilmb,
            title: 'ILMB',
            name: 'Sheck Wes, Travis Scott'
        },

        {
            img: Jump,
            title: 'JUMP',
            name: 'BLACKPINK'
        },

        {
            img: Calculate,
            title: 'Calculate',
            name: 'Kidd Carder'
        }
    ] 

    return (
        <>
            <div className="mx-[40px]">
                <div className="flex justify-between">
                    <div className="pt-[20px] mb-[8px]">
                        <span className="text-[24px] font-[500]">Trending songs</span>
                    </div> 

                    <div className="pt-[20px] mb-[8px]">
                        <span className="text-[13px] font-[500] text-[#B3B3B3]">Show all</span>
                    </div>                                  
                </div>
            </div>

            <div className="flex overflow-x-auto px-[30px] mb-[30px]">
                {trend.map((cont, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div  className="flex flex-col p-3 rounded-[10px] hover:bg-[#1F1F1F]">
                                    <img src={cont.img} alt="images" className="w-[150px] mb-1 rounded-[10px]"/>
                                    <span className="w-[100px]">{cont.title}</span>
                                    <span className="w-[150px]"></span>
                                    <span className="w-[100px] text-[#B3B3B3] text-[13px]">{cont.name}</span>
                                </div>
                            </div>
                            
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Trending