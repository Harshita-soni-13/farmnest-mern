
const WhatWeDo = () => {
  return (
    <>
    <div className="relative flex flex-col lg:flex-row items-center justify-center rounded-lg mt-5">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 relative">
        <img
          src="../../../src/assets/Section (1).png"
          alt="Farmer in field"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Right Side - Yellow Section with Overlap */}
        <div className="absolute top-0 right-0 lg:w-1/2 w-full h-full bg-yellow-300 py-10 px-8 flex flex-col justify-center rounded-3xl">
        <div className="flex justify-center items-center bg-white text-black-200 rounded-full shadow-lg px-6 py-3 w-max mb-5">
            <img src="../../../src/assets/Icon.png" alt="icon" className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">What We Do</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Healthy life with fresh products
          </h2>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even.
          </p>

          {/* Stats Section */}
          <div className="flex justify-around mt-4">
            {/* First stat */}
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                {/* Outer Circle Line Image */}
                <img
                  src="../../../src/assets/image (1).png"
                  alt="Circle line"
                  className="w-full h-full"
                />
                {/* Inner Percentage Image */}
                <img
                  src="../../../src/assets/Paragraph+Background (1).png" 
                  alt="90% icon"
                  className="absolute inset-0 w-8 h-8 m-auto" 
                />
              </div>
              <div>
                
                <p className="text-gray-600">Eco Farms Worldwide</p>
              </div>
            </div>

            {/* Second stat */}
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                {/* Outer Circle Line Image */}
                <img
                  src="../../../src/assets/image.png"
                  alt="Circle line"
                  className="w-full h-full"
                />
                {/* Inner Percentage Image */}
                <img
                  src="../../../src/assets/Paragraph+Background.png"
                  alt="78% icon"
                  className="absolute inset-0 w-8 h-8 m-auto" 
                />
              </div>
              <div>
               
                <p className="text-gray-600">Special Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   

  
  {/* our history section */}

    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Title and Description */}
        <div className="mb-12">
          {/* Small Heading */}
          <span className="inline-block bg-gray-200 text-green-700 py-1 px-3 rounded-full text-xs font-semibold">
            Our History
          </span>

          {/* Flex Container for Title and Paragraph */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-4">
            {/* Main Title and 1886 */}
            <div className="flex flex-col lg:flex-row lg:items-center">
              <h1 className="text-4xl lg:text-5xl font-medium text-gray-800">
                Farming have been since <br />
                <span className="text-4xl lg:text-5xl font-medium">1886</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 lg:max-w-md lg:ml-8 mt-4 lg:mt-0">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center">
          {/* First Event */}
          <div className="flex flex-col items-center">
            {/* Year as Image */}
            <img 
              src="../../../src/assets/1987.png" 
              alt="1987" 
              className=" mb-4" 
            />
            <div className="w-6 h-6 rounded-full bg-green-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Open my Farm</h3>
            <p className="text-gray-600 mt-2">
              Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.
            </p>
          </div>

          {/* Second Event */}
          <div className="flex flex-col items-center">
            {/* Year as Image */}
            <img 
              src="../../../src/assets/1995.png" 
              alt="1995" 
              className=" mb-4" 
            />
            <div className="w-6 h-6 rounded-full bg-green-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Farm Remodelacion</h3>
            <p className="text-gray-600 mt-2">
              Majority have suffered alteration in some form by injected humor culpa odio temporibus.
            </p>
          </div>

          {/* Third Event */}
          <div className="flex flex-col items-center">
            {/* Year as Image */}
            <img 
              src="../../../src/assets/2000.png" 
              alt="2000" 
              className=" mb-4" 
            />
            <div className="w-6 h-6 rounded-full bg-green-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Grainfarmers Formed</h3>
            <p className="text-gray-600 mt-2">
              Always parties but trying the shewing of moment minus Velit ratione hic corporis veritatis odit.
            </p>
          </div>

          {/* Fourth Event */}
          <div className="flex flex-col items-center">
            {/* Year as Image */}
            <img 
              src="../../../src/assets/1910.png" 
              alt="1910" 
              className=" mb-4" 
            />
            <div className="w-6 h-6 rounded-full bg-green-600 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Start of Agriculture</h3>
            <p className="text-gray-600 mt-2">
              Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.
            </p>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
};

export default WhatWeDo;
