import { Footer } from "../../components/footer/Footer"
import { AboutUs } from "./aboutUs/AboutUs"
import { Blog } from "./latestBlog/Blog"
import { Card } from "./cards/Card"
import { FarmFields } from "./farm-fields/FarmFields"
import { Header } from "./header/Header"

export const Home = () => {
  return (
   <div className="bg-custum-gray">
   <Header/>
   <Card/>
   <AboutUs/>
   <FarmFields/>
   <Blog/>
   <Footer/>
   </div>
  )
}
