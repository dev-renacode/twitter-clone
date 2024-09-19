import { IoMdHome } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const SideBar = () => {
  return (
    <header className="bg-black max-w-xs h-screen">
        <nav className="flex flex-col gap-3 text-[20px]">
            <FaXTwitter className="w-9 h-9 text-white" />
            <a href=""><IoMdHome className="w-9 h-9 text-white" />Home</a>
            <a href=""><FaSearch className="w-8 h-8 text-white"/>Explore</a>
            <a href="">Notifications</a>
            <a href="">Messages</a>
            <a href="">Grok</a>
            <a href="">Profile</a>
            <a href="">More</a>
            <button className="">Post</button>
        </nav>
    </header>
  )
}

export default SideBar
