import React from "react";
import { BiSkipPrevious, BiPauseCircle, BiSkipNext } from "react-icons/bi";

function Footer({ className }) {
  return (
    <footer
      className={`${className} fixed bottom-0 left-0 right-0 h-[60px] bg-blue-950 z-50 m-[8px]`}
    >
      <div className="flex items-center justify-center h-full gap-6">
        <button>
          <BiSkipPrevious className="w-8 h-8 text-[#B3B3B3] hover:text-white transition" />
        </button>
        <button>
          <BiPauseCircle className="w-10 h-10 text-[#B3B3B3] hover:text-white transition" />
        </button>
        <button>
          <BiSkipNext className="w-8 h-8 text-[#B3B3B3] hover:text-white transition" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
