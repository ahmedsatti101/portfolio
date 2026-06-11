"use client";

import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="ml-5 mr-5">
      <p className="uppercase font-extrabold lg:text-4xl text-2xl">Ahmed Mohamed</p>
      <p className="uppercase font-extrabold lg:text-2xl text-[15px]">Software Engineer</p>

      <div className="mt-4 mb-4 lg:mb-10">
        <p className="font-medium lg:text-xl lg:w-full lg:max-w-300">
          Hi I'm Ahmed and I'm a self taught software engineer looking for a full time role in tech.
          I have experience working as an associate software engineer at Tech Returners building
          a platform for small businesses to advertise their events to the public. My skillset is
          focused on full stack web and mobile development with TypeScript, React, React Native and AWS.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-3">
        <Experience hidden />

        <Projects />

        <Education hidden />
      </div>

      <About hidden />
    </div>
  )
}
