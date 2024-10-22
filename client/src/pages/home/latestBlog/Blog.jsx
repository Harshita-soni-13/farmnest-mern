import white_icon from '../../../assets/blogWheat_icon.png'
import admin_icon from '../../../assets/admin_icon.png'
import blogImg_1 from '../../../assets/blogImg-1.jpeg'
import blogImg_2 from '../../../assets/blogImg-2.jpeg'
import blogImg_3 from '../../../assets/blogImg-3.jpeg'
import arrow_img from '../../../assets/small_arrow.png'
import dateIcon from '../../../assets/date_icon.png'
import left_arrow from '../../../assets/left_arrow.png'
import right_arrow from '../../../assets/right_arrow.png'
import { BlogCard } from './BlogCard'

export const Blog = () => {

  const blog = [{
    id:1,
    title: "Food Crops",
    blogImg: blogImg_1,
    arrow_img: arrow_img,
    dateIcon: dateIcon,
    date: "Oct 15. 2024",
    adminIcon: admin_icon,
    userRole: "Admin",
    description: "What technology is used in vertical farming?"
  },
  {   
    id:2,
    title: "Organic Farm",
    blogImg: blogImg_2,
    arrow_img: arrow_img,
    dateIcon: dateIcon,
    date: "Oct 15. 2024",
    adminIcon: admin_icon,
    userRole: "Admin",
    description: "Which type of farming is more prevalent today?"
  }, {
    id:3,
    title: "Farming Tips",
    blogImg: blogImg_3,
    arrow_img: arrow_img,
    dateIcon: dateIcon,
    date: "Oct 15. 2024",
    adminIcon: admin_icon,
    userRole: "Admin",
    description: "The Farmers Sentiment Darkens Hopes Fade?"
  },
  ]
  return (
    <div className="container mx-auto pb-10">
      <div className="flex w-32 justify-center items-center gap-3 p-1 bg-white shadow-xl rounded-xl">
        <img src={white_icon} alt="" />
          <div className='font-medium text-sm'>Latest Blog</div>
      </div>
      <div className='flex justify-between'>
      <div className='font-medium text-3xl sm:text-4xl md:text-5xl pb-5 pt-3'>Latest posts & articles</div> 
          <div className='flex gap-1 sm:gap-2 items-center sm:me-0 me-2'>
            <img className='py-3 h-9 px-1 sm:px-2 md:px-4 border' src={right_arrow} alt="" />
            <img className='py-3 h-9 px-1 sm:px-2 md:px-4 border' src={left_arrow} alt="" />
          </div>
        </div>
        <div  className="grid md:grid-cols-3 sm:grid-cols-2  gap-6">
          {
            blog.map((posts)=>{
              return <BlogCard key={posts.id} posts={posts}/>
            })
          }
        </div>
    </div>
  )
}
