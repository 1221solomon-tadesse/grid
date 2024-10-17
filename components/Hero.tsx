import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-12 gap-4 grid-rows-8">
          <div className="col-span-1 bg-blue-500 p-4">Column 1 (4/12)</div>
          <div className="col-span-1 bg-blue-500 p-4">Column 2 (4/12)</div>
          <div className="col-span-1 bg-blue-500 p-4">Column 3 (4/12)</div>
          <div className="col-span-1 bg-blue-500 p-4">Column 4 (4/12)</div>
          <div className="col-span-1 bg-blue-500 p-4">Column 5 (4/12)</div>
          <div className="col-span-1 bg-blue-500 p-4">Column 6 (4/12)</div>
          <div className="col-span-1 bg-blue-500 p-4">Column 7 (4/12)</div>
          <div className="col-span-1 bg-green-500 p-4">Column 8 (4/12)</div>
          <div className="col-span-1 bg-red-500 p-4">Column 9 (4/12)</div>
          <div className="col-span-1 bg-yellow-500 p-4">Column 10 (6/12)</div>
          <div className="col-span-1 bg-blue-500 p-4">Column 11 (4/12)</div>
          <div className="col-span-1 bg-purple-500 p-4">Column 12 (6/12)</div>
          <div className="col-span-2 col-start-10 row-start-2  bg-purple-500 p-4">
            Column 5 (6/12)
          </div>
          <div className="col-span-2 col-start-10 row-start-6 bg-purple-500 p-4">
            Column 5 (6/12)
          </div>

          <div className="col-span-2 col-start-11 row-start-4  bg-purple-500 p-4">
            Column 5 (6/12)
          </div>
          <div className="col-span-2 col-start-3 z-20 bg-yellow-500 p-4 row-start-7">
            Column 5 (6/12)
          </div>
          <div className=" col-start-1  col-span-2 z-20 bg-yellow-500 p-4 row-start-5">
            Column 5 (6/12)
          </div>
          <div className=" ml-10 col-start-1 col-span-2 row-start-3   bg-green-500 p-4">
            Column 5 (6/12)
          </div>
          <div className="col-start-4 col-span-6 row-start-5 row-span-4 bg-red-500 p-4">
            Column 5 (6/12)
          </div>
          <div className="col-start-4 col-span-6 row-start-2 row-span-3 bg-green-500 p-4">
            <div className="m-auto mb-0 h-fit w-570 text-center font-federo text-70 leading-none tracking--1">
              <span>Crafting Digital Solutions for Todays Innovators</span>
            </div>
            <div className="m-auto w-780 text-center font-sans text-18 font-light">
              <p>
                Our team of strategists, creatives, and engineers leverage their
                unparalleled expertise to develop everything from Digital Brand
                & presence, enterprise software and systems to stunning websites
                and mobile apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
// {/* <div class="grid grid-rows-12 grid-flow-col gap-4"> */}