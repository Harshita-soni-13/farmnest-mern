import React from 'react';

const testimonials = [
  {
    name: 'Martin Bailey',
    role: 'SUPERVISOR',
    image: '../../../src/assests/testimonial-02.png', // Adjust the path as per your assets
    rating: 5,
    quote: 'I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!',
  },
  {
    name: 'Emma Greed',
    role: 'CUSTOMER',
    image: '../../../src/assests/testimonial-03.png', // Adjust the path
    rating: 4,
    quote: 'I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!',
  },
  {
    name: 'Daniel Craig',
    role: 'CO FOUNDER',
    image: '../../../src/assests/testimonial-04.png', // Adjust the path
    rating: 4,
    quote: 'I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!',
  },
];

const OurCustomerSay = () => {
  return (

    <>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
      <div className="flex justify-center items-center bg-white text-black-200 rounded-full shadow-lg px-6 py-3 w-max mb-5">
            <img src="../../../src/assests/Icon.png" alt="icon" className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">Testimonial</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-black text-5xl font-medium text-left mb-10">What Our Customer Say</h2>

            <div className="flex space-x-2">
              {/* Previous Arrow */}
              <img
                src="../../../src/assests/Button - Previous slide(1).png"
                alt="Previous"
                className=" cursor-pointer"
              />

              {/* Next Arrow */}
              <img
                src="../../../src/assests/Button - Next slide (1).png"
                alt="Next"
                className=" cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg relative"
            >
              {/* Quote icon on the top-right corner */}
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3">
                <img
                  src="../../../src/assests/Background.png"
                  alt="Quote"
                  className="w-12 h-12"
                />
              </div>

              <div className="mb-4 flex items-center">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, idx) => (
                  <span key={idx} className="text-gray-300 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
              <div className="flex items-center mt-6">
                <img
                  className="w-12 h-12 rounded-full border-2 border-yellow-500 mr-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        
        </div>
     

    </section>


    {/* logos section */}
    <div className="flex flex-wrap justify-center items-center gap-4">
  <img src="../../../src/assests/farm logo 2.png" alt="Organic Rice" className="" />
  <img src="../../../src/assests/farm logo 6.png" alt="Farm" className="" />
  <img src="../../../src/assests/farm logo 1.png" alt="Farm Fresh" className="" />
  <img src="../../../src/assests/farm logo 3.png" alt="Eco Food" className="" />
  <img src="../../../src/assests/farm logo 4.png" alt="Tractor" className="" />
  <img src="../../../src/assests/farm logo 5.png" alt="Tractor" className="" />
</div>

</>
  );
};

export default OurCustomerSay;
