import { AboutUs } from "./aboutUs/AboutUs"
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
   </div>
  )
}
