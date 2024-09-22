import { IoMdPerson } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillBuild, AiOutlineThunderbolt } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";


// eslint-disable-next-line react/prop-types
const SideBar = ( {userName, nameTag} ) => {
  // eslint-disable-next-line react/prop-types
  const Anchor = ( {children,href} ) => {
    return (
      <a href={href} className="flex gap-5 w-fit transition hover:bg-[#181818] pl-2 pr-5 rounded-full py-3">
        {children}
      </a>
    )
  }

  const iconsClasses = "w-8 h-8 text-white"
  const profileImageUrl = `https://unavatar.io/${nameTag}`
  return (
    <header className="fixed w-full bg-black max-w-xs h-screen flex flex-col justify-between p-4">
        <nav className="flex flex-col text-[20px] gap-2">
            <FaXTwitter className="w-10 h-10 text-white" />
            <Anchor href="https://youtube.com">
              <MdHomeFilled className={iconsClasses}/>
              Home
            </Anchor>
            <Anchor>
              <CiSearch className={iconsClasses}/>
              Explore
            </Anchor>
            <Anchor href="">
              <GrNotification className={iconsClasses}/>
              Notifications
            </Anchor>
            <Anchor href="">
              <MdOutlineMailOutline className={iconsClasses}/>
              Messages
            </Anchor>
            <Anchor href="">
              <AiFillBuild className={iconsClasses}/>
              Grok
            </Anchor>
            <Anchor href="">
              <MdPeople className={iconsClasses}/>
              Communities
            </Anchor>
            <Anchor href="">
              <FaXTwitter className={iconsClasses}/>
              Premiun
            </Anchor>
            <Anchor href="">
              <AiOutlineThunderbolt className={iconsClasses}/>
              Verified Orgs
            </Anchor>
            <Anchor href="">
              <IoMdPerson className={iconsClasses}/>
              Profile
            </Anchor>
            <Anchor href="">
              <HiOutlineDotsCircleHorizontal className="w-8 h-8 text-white"/>
              More
            </Anchor>
        </nav>
        
        <div>
          <button className="bg-[#1A8CD8] w-full py-4 rounded-full font-bold text-lg">Post</button>
        </div>

        <div className="flex justify-between transition cursor-pointer hover:bg-[#181818] p-3 rounded-full">
          <div className="flex gap-2">
            <img src={profileImageUrl} alt="avatar" className="rounded-full w-10 h-10"/>
            <div className="text-[15px]">
              <p className="font-bold">{userName}</p>
              <p className="text-[#71767b]">{nameTag}</p>
            </div>
          </div>
          <button>
            <BsThreeDots className="w-5 h-5 mb-1" />
          </button>
        </div>
    </header>
  )
}

export default SideBar
