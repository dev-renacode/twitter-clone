//#E7E9EA text color
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const TwitterPost = ({userName, nameTag, text, verified}) => {
    const classVerified = verified ? "w-5 h-5 text-[#1D9BF0]" : "hidden"
    const profileImageUrl = `https://unavatar.io/${nameTag}`

  return (
    <section className="bg-black w-full h-auto p-3">
        <header className="flex items-center gap-2">
            <img 
                src={profileImageUrl}
                alt="avatar del perfil" 
                className="rounded-full w-12 h-12 mb-4"
            />
            <div className="flex w-full justify-between">
                <div className="flex flex-col pb-3 text-[15px]">
                    <div className="flex items-center gap-2">
                        <p className="font-bold">{userName}</p>
                        <MdVerified className={classVerified} />
                    </div>
                    <p className="text-[#71767b]">{nameTag}</p>
                </div>

                <div className="flex items-start">
                    <button className="bg-[#D7DBDC] text-black py-1.5 px-4 rounded-full font-medium text-[14px]">Follow</button>
                    <BsThreeDots className="w-9 h-9 text-[#71767b] p-2 rounded-full hover:bg-[#031018] hover:text-[#1D9BF0] transition-all cursor-pointer" />
                </div>
            </div>
        </header>
        <article>
            <p className="pb-3">{text}</p>
            <p className="pb-3 text-[#71767b]">3:58 AM · Sep 16, 2024 · <span className="font-bold text-[#D7DBDC]">51M</span> Views</p>
        </article>
        <footer>
            <hr className="border-[#71767b]/50" />
            <div className="flex justify-between text-[#71767b] text-[13px] py-2 px-2">
                <button className="flex items-center gap-2 transition hover:text-[#F91880] group"><RiChat1Line className="group-hover:bg-[#200914] w-8 h-8 rounded-full p-1"/>18K</button>
                <button className="flex items-center gap-2 transition hover:text-[#F91880] group"><AiOutlineRetweet className="group-hover:bg-[#200914] w-8 h-8 rounded-full p-1"/>15K</button>
                <button className="flex items-center gap-2 transition hover:text-[#F91880] group"><FaRegHeart className="group-hover:bg-[#200914] w-8 h-8 rounded-full p-1"/>241K</button>
                <button className="flex items-center gap-2 transition hover:text-[#F91880] group"><FaRegBookmark className="group-hover:bg-[#200914] w-8 h-8 rounded-full p-1"/>5K</button>
            </div>
            <hr className="border-[#71767b]/50"/>
        </footer>
    </section>
  )
}
export default TwitterPost
