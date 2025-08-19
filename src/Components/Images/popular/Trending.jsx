import React from "react";
import  {Link} from "react-router-dom"
import music from "../Images/Trending images/music-img.png";
import ewo from "../Images/Trending images/Ewo.png";
import gaddem from "../Images/Trending images/Gaddem.png";
import gang from "../Images/Trending images/Gang.png";
import guilt from "../Images/Trending images/Guilt.png";
import mortal from "../Images/Trending images/Mortal.png";

function Trending() {
    const content = [
        {
            img: ewo,
            title: 'Ewo',
            artist: 'Famous Pluot, Shallipopi, Zerrrydl'
        },
        {
            img: music,
            title: 'Billionaires Club',
            artist: 'Olamide, Wizkid, Darkoo'
        },
        {
            img: gaddem,
            title: 'Gaddem',
            artist: 'Rybeena, Shoday'
        },
        {
            img: gang,
            title: 'Gang',
            artist: 'Ayo Maff, Seyi Vibez'
        },
        {
            img: guilt,
            title: 'Guilt Trippin (feat. Sexyy Red)',
            artist: 'Central Cee, Sexyy Red'
        },
        /*
        {
            img: mortal,
            title: 'Mortal Kombat',
            artist: 'Muyeez'
        }
            */
    ];

    return(
        <div>
            <div className="pt-5 w-[100%]">
                <div className="pb-5 flex justify-between">
                    <Link to = '/trending songs'>
                        <p className="text-white font-semibold text-2xl hover:underline">Trending songs</p>
                    </Link>
                    <Link to = '/trending songs'>
                        <p className="text-[#b3b3b3] text-sm font-bold self-end hover:underline">Show all</p>
                    </Link>
                </div>

                <div className="bg-black flex">
                    {content.map((board, index) => {
                        return (
                            <div key={index}>
                                <div className="p-2.5 hover:bg-[#121212] xl:w-[175px]">
                                    <img src={board.img} alt={board.title} className="rounded-xl"/>
                                    <p className="text-white pt-1 pb-0.5">{board.title}</p>
                                    <p className="text-[#b3b3b3] text-xs">{board.artist}</p>
                                </div>    
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trending