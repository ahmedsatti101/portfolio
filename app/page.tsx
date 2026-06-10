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

      <div className="mt-4 mb-4">
        <p className="font-medium lg:text-xl lg:w-full lg:max-w-200">Lorem ipsum nostrud ad et. Exercitation nulla esse duis id. Quis fugiat sed. In ut consectetur sit. Consequat ullamco aliquip do deserunt deserunt commodo pariatur. Veniam ad tempor enim consectetur.</p>
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
