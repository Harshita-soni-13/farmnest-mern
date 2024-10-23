import React from 'react'

const OurServices = () => {
  return (

    <>
      {/* Our Services section */}

      <div className="py-10" style={{ backgroundColor: '#5B8C51' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center ">
          <div className="flex justify-center items-center bg-white text-black-200 rounded-full shadow-lg px-6 py-3 w-max mb-5">
            <img src="../../../src/assests/Icon.png" alt="icon" className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">Our Services</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-5xl font-medium text-left mb-10">Best Agriculture Services</h2>

            <div className="flex space-x-2">
              {/* Previous Arrow */}
              <img
                src="../../../src/assests/Button - Previous slide.png"
                alt="Previous"
                className=" cursor-pointer"
              />

              {/* Next Arrow */}
              <img
                src="../../../src/assests/Button - Next slide.png"
                alt="Next"
                className=" cursor-pointer"
              />
            </div>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg relative min-h-96  p-4">
              <img
                src="../../../src/assests/service-img-01.jpg.png"
                alt="Harvest Concepts"
                className="object-cover w-full h-48 rounded-xl mb-4"
              />
              <div className="px-4">
                <span className="text-sm text-gray-500 uppercase">Fertilizer</span>
                <h3 className="text-xl font-bold mb-2">Harvest Concepts</h3>
                <hr></hr>
                <p className="text-gray-600">Farming and animal husbandry and discuss with farmers and scientists.</p>
              </div>
              <div className="absolute bottom-4 right-4 p-2 ">
                <img src="../../../src/assests/Link.png" alt="arrow" className="" />
              </div>

            </div>


            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg relative min-h-96  p-4">
              <img
                src="../../../src/assests/service-img-02.jpg.png"
                alt="Farming Products"
                className="object-cover w-full h-48 rounded-xl mb-4"
              />
              <div className="px-4">
                <span className="text-sm text-gray-500 uppercase">Fruits</span>
                <h3 className="text-lg font-bold mb-2">Farming Products</h3>
                <hr></hr>
                <p className="text-gray-700">Providing top products for sustainable farming.</p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute bottom-4 right-4 p-2 ">
                <img src="../../../src/assests/Link.png" alt="arrow" className="" />
              </div>
            </div>



            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg relative min-h-96  p-4">
              <img
                src="../../../src/assests/service-img-03.jpg.png"
                alt="Harvest Concepts"
                className="object-cover w-full h-48 rounded-xl mb-4"
              />
              <div className="px-4">
                <span className="text-sm text-gray-500 uppercase">Fertilizer</span>
                <h3 className="text-lg font-bold mb-2">Soil Fertilization</h3>
                <hr></hr>
                <p className="text-gray-700">Optimizing soil health for better crop yields.</p>
              </div>

              <div className="absolute bottom-4 right-4 p-2 ">
                <img src="../../../src/assests/Link.png" alt="arrow" className="" />
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Grow Naturally Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center py-12">
        <div className="text-center mb-12">
          <img
            src="../../../src/assests/Icon.png"
            alt="icon"
            className="w-6 h-6 inline-block mr-2"
          />
          <span className="text-lg font-semibold">Grow Naturally</span>
        </div>

        <h1 className="text-5xl font-medium text-center mb-10">
          Choose What's Perfect For Your Field
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-yellow-300 w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src="../../../src/assests/Background.png"
                  alt="Agriculture Products"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Agriculture Products</h3>
                <p className="text-gray-600">
                  Nulla porta enim vel tellus commodo, eget laoreet odio
                  ultrices.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-yellow-300 w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src="../../../src/assests/Background (1).png"
                  alt="Quality Products"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quality Products</h3>
                <p className="text-gray-600">
                  Nulla porta enim vel tellus commodo, eget laoreet odio
                  ultrices.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Image */}
          <div className="flex justify-center">
            <img
              src="../../../src/assests/corn.png"
              alt="Corn"
              className="w-72"
            />
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-yellow-300 w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src="../../../src/assests/Background (3).png"
                  alt="Fresh Vegetables"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Fresh Vegetables</h3>
                <p className="text-gray-600">
                  Nulla porta enim vel tellus commodo, eget laoreet odio
                  ultrices.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-yellow-300 w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src="../../../src/assests/Background (4).png"
                  alt="Pure & Organic"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Pure & Organic</h3>
                <p className="text-gray-600">
                  Nulla porta enim vel tellus commodo, eget laoreet odio
                  ultrices.
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>

          {/* image Section */}

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
  <div class="p-2">
    <img src="../../../src/assests/portfolio-img-08.png" alt="portfolio img 1" class="h-50 w-full object-cover" />
  </div>
  <div class="p-2">
    <img src="../../../src/assests/portfolio-img-02.png" alt="portfolio img 2" class="h-50 w-full object-cover" />
  </div>
  <div class="p-2">
    <img src="../../../src/assests/portfolio-img-08.png" alt="portfolio img 3" class="h-50 w-full object-cover" />
  </div>
  <div class="p-2">
    <img src="../../../src/assests/portfolio-img-02.png" alt="portfolio img 4" class="h-50 w-full object-cover" />
  </div>
</div>
        
    </>

  )
}

export default OurServices
