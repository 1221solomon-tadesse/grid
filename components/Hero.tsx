import React from 'react';
import Image from 'next/image';
import photo from '@/app/Rectangle 18 (2).png'
import zig from '@/app/Vector 10.png'
const Hero = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-12 gap-4 grid-rows-8">
          {/* Basic Columns */}

          <div className=" col-start-4 row-start-1 col-span-6 row-span-4 bg-yellow-500  ">
            <p className="text-navtex max-w-fit mb-6  text-center pb-6 r border bg-slate-500 text-14.4 dark:text-incolor">
              Technology Service Agency
            </p>
            <div className=" h-fit text-center font-federo text-70 leading-none tracking--1 z-10">
              <span>Crafting Digital Solutions for Todays Innovators</span>
              <Image src={zig} alt="photo " className="items-center m-auto" />
            </div>
            <div className=" h-fit font-sans text-18 font-light">
              <p>
                Our team of strategists, creatives, and engineers leverage their
                unparalleled expertise to develop everything from Digital Brand
                & presence, enterprise software and systems to stunning websites
                and mobile apps.
              </p>
            </div>
          </div>
          <div className="row-span-3 row-start-6 col-start-4 col-span-6 bg-green-500 p-4 ">
            Column 12 (4/12)
          </div>
          <div className="row-span-1 row-start-7 col-start-3 col-span-2 z-20 bg-red-500  h-4/5 hover:border-b-4 hover:border-l-4 border-green-500  ">
            <div className="flex">
              <Image src={photo} alt="photo" />
              <p className="p-3"> DevOPs Engineer </p>
            </div>
          </div>
          <div className="row-span-1 col-start-10 row-start-6 col-span-3 bg-yellow-500 mr-16  h-4/5 hover:border-b-4 hover:border-l-4 border-green-500">
            <div className="flex">
              <Image src={photo} alt="photo" />
              <p className="p-3"> Quality Assurance Engineer</p>
            </div>
          </div>
          <div className="row-span-1 col-start-10 row-start-4 col-span-3 bg-red-500   h-4/5 hover:border-b-4 hover:border-l-4 border-green-500 ml-16 mr-16">
            <div className="flex">
              <div className="flex">
                <Image src={photo} alt="photo" />
                <p className="p-3"> Product Manager</p>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-start-10 row-start-2 col-span-2 bg-yellow-500  h-4/5 hover:border-b-4 hover:border-l-4 border-green-500 ">
            <div className="flex">
              <Image src={photo} alt="photo" />
              <p className="p-3"> Project Manager</p>
            </div>
          </div>
          <div className="row-span-1 col-start-2 row-start-4 col-span-2 bg-red-500 mr-8  h-4/5 hover:border-b-4 hover:border-l-4 border-green-500">
            <div className="flex">
              <Image src={photo} alt="photo" />
              <p className="p-3"> UI/UX Designer</p>
            </div>
          </div>
          <div className="row-span-1 col-start-2 row-start-3 col-span-2 bg-green-500   h-4/5 hover:border-b-4 hover:border-l-4 border-green-500 ">
            <div className="flex ">
              <Image src={photo} alt="photo" />
              <p> Full Stack Developer </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
