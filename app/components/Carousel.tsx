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
    if (!data) return;
    setSlide(slide === data?.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    if (!data) return;
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
      <p className="m-5 text-xl min-md:text-2xl lg:text-3xl">Experience</p>
      <div className="flex mt-2 justify-center items-center">
        <Image
          src="/chevron-left.svg"
          alt="Left arrow"
          width={100}
          height={58}
          className="size-8 left-4 hover:cursor-pointer"
          onClick={prevSlide}
        />
        <div className="max-md:hidden flex-1 flex justify-center">
          {data?.slice(0, 3).map((exp: exp, index: number) => {
            return (
              <div
                className="flex w-full max-w-lg justify-evenly items-center"
                key={index}
              >
                <div>
                  <p className="text-xl lg:text-3xl">{exp.company}</p>
                  <p className="text-xl lg:text-3xl">{exp.date}</p>
                  <p className="text-md lg:text-3xl">{exp.role}</p>
                </div>
                <div>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="rounded-lg size-12"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="min-md:hidden flex-1 flex justify-center">
          {data?.map((exp: exp, index: number) => {
            return (
              <div
                className={`${slide === index ? "flex" : "hidden"} w-full max-w-lg justify-between items-center`}
                key={index}
              >
                <div>
                  <p className="text-xl min-md:text-2xl lg:text-3xl">{exp.company}</p>
                  <p className="text-xl min-md:text-2xl lg:text-3xl">{exp.date}</p>
                  <p className="text-xl min-md:text-2xl lg:text-3xl">{exp.role}</p>
                </div>
                <div>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="rounded-lg size-20"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Image
          src="/chevron-right.svg"
          alt="Right arrow"
          width={100}
          height={100}
          className="size-8 right-4 hover:cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};
