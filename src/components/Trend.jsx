import ThreeDots from "./ThreeDots"

const Trend = ( {where, trend, posts} ) => {
  return (
    <div className="hover:bg-[#080808] py-2">
      <div className="flex items-center gap-3 justify-between w-full px-3">
        <div>
            <p className="text-[13px] text-[#71767B]">{where}</p>
            <h3 className="font-semibold">{trend}</h3>
            <p className="text-[13px] text-[#71767B]">{posts} posts</p>
        </div>

        <div>
            <ThreeDots />
        </div>
      </div>
    </div>
  )
}

export default Trend
