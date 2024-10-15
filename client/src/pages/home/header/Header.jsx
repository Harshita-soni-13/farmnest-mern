import { Navbar } from "../../../components/navbar/Navbar"
import arrow from '../../../assets/arrow.png'
import slideButton from '../../../assets/slide-button.png'
import harizontalBorder from '../../../assets/HorizontalBorder.png'

export const Header = () => {
  return (
    <div className="container-fluid  bg-cover h-screen  bg-header-bg-image">
      <Navbar />
      <div className="grid grid-cols-12 justify-center items-center h-screen">
        <div className="col-span-1"></div>
        <div className="col-span-7 ">
          <span className="text-white text-xs px-3 py-1 rounded-lg font-medium border ml-4">
            Believe in Quality!
          </span>
          <div className="text-white text-8xl font-medium">
            Quality Trust:
            Direct to the Farm
          </div>
          <img className="mt-4" width={620} src={harizontalBorder} alt="border" />
          <div className="text-[16px] flex justify-center py-2 bg-white rounded-3xl w-36 gap-1 mt-4">
            <button>Contact Us </button>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col  items-end gap-2 mb-16">
            <img src={slideButton} alt="slide button" className="w-2 mr-9" />
            <img src={slideButton} alt="slide button"  className="w-2 mr-9" />
            <img src={slideButton} alt="slide button"  className="w-2 mr-9" />
          </div>

        </div>
      </div>
    </div>
  )
}
