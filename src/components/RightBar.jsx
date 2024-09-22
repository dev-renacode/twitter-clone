import Trend from "./Trend"
import { CiSearch } from "react-icons/ci";

const RightBar = () => {
  return (
    <aside className="flex flex-col w-full max-w-xs gap-4">
        <section className="relative group focus-within:text-[#1D9BF0] pt-2">
            <input className="w-full h-11 pl-11 placeholder:text-[#71767B] text-white bg-[#202327] focus:outline-[#1D9BF0] outline-none outline-1 rounded-full" type="text" placeholder="Search" />
            <CiSearch className="w-6 h-6 top-1/3 left-2 text-[#71767B] absolute z-10 group-focus-within:text-[#1D9BF0]" />
        </section>

        <section className="border border-[#71767b]/50 rounded-2xl p-3">
            <div className="pr-2 flex flex-col gap-3">
                <h2 className="font-bold text-[20px]">Subscribe to Premium</h2>
                <p className="text-[15px]">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <button className="bg-[#1A8CD8] text-white px-5 py-2 rounded-full font-semibold text-[15px] max-w-32">Subscribe</button>
            </div>
        </section>

        <section className="border border-[#71767b]/50 rounded-2xl flex flex-col gap-2">
            <div className="p-2">
                <h2 className="text-[20px] font-bold">Trends for you</h2>
            </div>
            <Trend where="Trending in Chile" trend="React" posts="10" />
            <Trend where="Global" trend="Maria Burgos Marketing" posts="1.0M" />
            <Trend where="Trending in Chile" trend="#Temblor" posts="1.601" />
            <Trend where="Trending in Chile" trend="Gaybriel" posts="1.745" />
            <Trend where="Trending in Chile" trend="Carolina Tohá" posts="5.035" />
            <Trend where="Politics - Trending" trend="Israel" posts="1.16M" />
            <Trend where="Politics - Trending" trend="Israel" posts="1.16M" />
        </section>
    </aside>
  )
}

export default RightBar
