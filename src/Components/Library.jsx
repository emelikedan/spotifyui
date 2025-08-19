import React, { useEffect } from "react";
import { GoPlus } from "react-icons/go";

function Library({ className }) {
  const libra = [
    {
      first: "Create your first playlist",
      second: "It's easy, we'll help you",
      third: "Create playlist",
    },
    {
      first: "Let's find some podcasts to follow",
      second: "we'll keep you updated on new episodes",
      third: "Browse podcasts",
    },
  ];

  /*
  async function getData() {
    try {
      const response = await fetch("https://api.deezer.com/search?q=eminem");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Deezer Data:", data);
    } catch (error) {
      console.error("Error fetching data from Deezer:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  */

  return (
    <div className={className}>
      <div className="h-[calc(100vh-64px-15px)]">
        <div className="mt-[64px] ml-[7px] pb-[10px] bg-[#121212]">
          <header className="py-[10px] bg-[#121212]">
            <div className="flex items-center justify-between h-[35px] mx-[15px] px-[7px] bg-[#121212]">
              <h1 className="text-[#FFFFFF] font-[700]">Your Library</h1>
              <div className="p-[6px] rounded-[100px] hover:bg-[#1F1F1F]">
                <GoPlus className="text-[#B3B3B3] font-[700] text-[20px] " />
              </div>
            </div>
          </header>
        </div>

        <div className="ml-[7px] pt-[13px] h-[36%] lg:h-[44%] overflow-y-auto bg-[#121212]">
          {libra.map((lib, index) => {
            return (
              <>
                <section
                  key={index}
                  className="pt-[15px] mb-[17px] mx-[7px] pb-[20px] bg-[#1F1F1F] rounded-[5px]"
                >
                  <div className="w-fit mx-[20px] mb-[25px]">
                    <span className="block font-[700] text-[16px]">
                      {lib.first}
                    </span>
                    <span className="block font-[400] text-[12px] md:text-[14px]">
                      {lib.second}
                    </span>
                  </div>
                  <div className="w-fit mx-[20px] px-[16px] py-[6px] bg-white text-black rounded-[50px] font-[500] text-[12px] md:text-[14px] transition-transform duration-100 linear hover:scale-103">
                    <span className="">{lib.third}</span>
                  </div>
                </section>
              </>
            );
          })}
        </div>

        <div className="ml-[7px] pt-[10px] pb-[162px] lg:pb-[calc(100vh-64px-521px)] bg-[#121212]">
          <div className="mt-[10px] bg-[#121212]">
            <div className="flex flex-wrap gap-x-[15px] mx-[17px]  text-[#B3B3B3] bg-[#121212] text-[11px] font-[400]">
              <div className="py-[8px]">
                <span>legal</span>
              </div>

              <div className="py-[8px]">
                <span>Safety & Privacy Center</span>
              </div>

              <div className="py-[8px]">
                <span>Privacy Policy</span>
              </div>

              <div className="py-[8px]">
                <span>Cookies</span>
              </div>

              <div className="py-[8px]">
                <span>About Ads</span>
              </div>

              <div className="py-[8px]">
                <span>Accessibility</span>
              </div>
            </div>

            <div className="ml-[30px] text-[12px]">
              <span>
                <a href="#">Cookies</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
