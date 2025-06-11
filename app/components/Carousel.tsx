"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface exp {
  role: string;
  date: string;
  logo: string;
  company: string;
}

export const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState<exp[]>();

  const nextSlide = () => {
    setSlide(slide === data?.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data?.length - 1 : slide - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/experiences");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <p className="text-xl min-md:text-2xl m-5">Experience</p>
      <div className="flex relative mt-2 justify-center items-center">
        <Image
          src="/chevron-left.svg"
          alt="Left arrow"
          width={100}
          height={58}
          className="absolute size-8 left-4 hover:cursor-pointer"
          onClick={prevSlide}
        />
        {data?.map((exp: exp, index: number) => {
          return (
            <div className="grid grid-cols-2 gap-2" key={index}>
              <div>
                <p className={`${slide === index ? "" : "hidden"}`}>{exp.company}</p>
                <p className={`${slide === index ? "" : "hidden"}`}>{exp.date}</p>
                <p className={`${slide === index ? "" : "hidden"}`}>{exp.role}</p>
              </div>
              <div>
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className={`rounded-lg size-20 ${slide === index ? "" : "hidden"} col-span-2`}
              />
              </div>
            </div>
          );
        })}
        <Image
          src="/chevron-right.svg"
          alt="Right arrow"
          width={100}
          height={100}
          className="absolute size-8 right-4 hover:cursor-pointer"
          onClick={nextSlide}
        />
        {/* <span className="flex absolute bottom-0"> */}
        {/*   {data?.map((_: any, index: number) => { */}
        {/*     return ( */}
        {/*       <button */}
        {/*         key={index} */}
        {/*         onClick={undefined} */}
        {/*         className={`size-4 m-0.5 rounded-full border-none outline-none hover:cursor-pointer bg-white ${slide === index ? "" : "disabled:bg-grey-600"}`} */}
        {/*       ></button> */}
        {/*     ); */}
        {/*   })} */}
        {/* </span> */}
      </div>
    </>
  );
};
