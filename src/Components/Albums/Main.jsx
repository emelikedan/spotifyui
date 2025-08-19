import React from "react";
import Trending from "./Trending";
import Popular from "./Popular";
import Album from "./Album";

function Main({ className }) {
  return (
    <main className={`${className} mt-[64px]`}>
        <div className="h-[calc(100vh-64px-78px)] overflow-y-auto bg-[#121212] rounded-[10px] mr-[8px]">
            <Trending />
            <Popular />
            <Album />
        </div>
    </main>
  );
}

export default Main;
