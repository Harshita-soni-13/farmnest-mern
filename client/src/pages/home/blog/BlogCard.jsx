/* eslint-disable react/prop-types */

export const BlogCard = ({posts}) => {
  return (
    <div className="relative">
        <img className="shadow-2xl rounded-xl" src={posts.blogImg} alt="" />
        <div className="absolute text-sm px-3 top-2 left-1 shadow-md bg-white rounded-md ">{posts.title}</div>
        <img className="absolute px-1 shadow-md bg-white rounded-md right-2 xl:bottom-24 bottom-28" src={posts.arrow_img} alt="" />
        <div className="flex justify-center gap-5 pt-3">
          <div className="flex md:gap-1 gap-0">
          <img src={posts.dateIcon} alt="" />
          <div>{posts.date}</div>
          </div>
          <div className="flex gap-1">
          <img src={posts.adminIcon} alt="" />
          <div>{posts.userRole}</div>
          </div>
        </div>
        <div className="text-lg pt-4 font-medium text-center">{posts.description}</div>
    </div>
  )
}
