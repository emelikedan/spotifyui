import React from "react";
import five from "../Images/albums/Five.png"
import morayo from "../Images/albums/Morayo.png"
import gen from "../Images/albums/Gen Z.png"
import uncle from "../Images/albums/Uncle K.png"
import machine from "../Images/albums/Machine.png"


function Album() {

    const sing = [
        {
            img: five,
            title: 'Five',
            name: 'Davido'
        },

        {
            img: morayo,
            title: 'Morayo',
            name: 'Wizkid'
        },

        {
            img: gen,
            title: 'Gen Z',
            name: 'Zinoleesky'
        },

        {
            img: uncle,
            title: 'Uncle K: Lemon Chase',
            name: 'Kizz Daniel'
        },

        {
            img: machine,
            title: 'THE MACHINE IS COMING',
            name: 'ODUMODUBLVCK'
        },

        {
            img: five,
            title: 'Five',
            name: 'Davido'
        },

        {
            img: morayo,
            title: 'Morayo',
            name: 'Wizkid'
        },

        {
            img: gen,
            title: 'Gen Z',
            name: 'Zinoleesky'
        },

        {
            img: uncle,
            title: 'Uncle K: Lemon Chase',
            name: 'Kizz Daniel'
        },

        {
            img: machine,
            title: 'THE MACHINE IS COMING',
            name: 'ODUMODUBLVCK'
        }
    ]
    return (
        <>
            <div className="mx-[40px]">
                <div className="flex justify-between">
                    <div className="pt-[20px] mb-[8px]">
                        <span className="text-[24px] font-[500]">Popular albums and singles</span>
                    </div>

                    <div className="pt-[20px] mb-[8px]">
                        <span className="text-[13px] font-[500] text-[#B3B3B3]">Show all</span>
                    </div>
                </div>
            </div>

            <div className="flex overflow-x-auto px-[30px] mb-[30px]">
                {sing.map((alb, index) => {
                    return (
                        <>
                            <div key={index} className="">
                                <div className="flex flex-col p-3 rounded-[10px] hover:bg-[#1F1F1F]">
                                    <img src={alb.img} alt="images" className="w-[150px] mb-1 rounded-[10px]" />
                                    <span className="w-[125px]">{alb.title}</span>
                                    <span className="w-[150px]"></span>
                                    <span className="w-fit text-[#B3B3B3] text-[13px]">{alb.name}</span>
                                </div>
                            </div>
                            
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Album