import projects from "../data/projects.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  return (
    <div className="ml-5 mr-5">
      <p className="lg:hidden uppercase font-extrabold text-2xl">Ahmed Mohamed</p>
      <p className="lg:hidden uppercase font-extrabold text-[15px]">Software Engineer</p>

      <div className="mt-4 mb-4">
        <p className="font-medium lg:text-xl lg:w-full lg:max-w-200">Lorem ipsum nostrud ad et. Exercitation nulla esse duis id. Quis fugiat sed. In ut consectetur sit. Consequat ullamco aliquip do deserunt deserunt commodo pariatur. Veniam ad tempor enim consectetur.</p>
      </div>

      <div className="lg:grid lg:grid-cols-3">
        <div>
          <p className="font-extrabold text-xl uppercase">Experience</p>
        </div>

        <div>
          <p className="font-extrabold text-xl uppercase">Projects</p>

          {projects.map((project, idx) => (
            <div className="relative" key={idx}>
              <p className="font-extrabold text-lg">{project.name} <ArrowForwardIcon sx={{ position: 'absolute', right: 0 }} /></p>
              <p className="font-medium">{project.intro}</p>

              <div className="grid grid-cols-3 gap-1 mb-5">
                {project.stack.map((tech, idx) => (
                  <p
                    key={idx}
                    className="text-sm p-0.5 uppercase font-extrabold border-[1.5px] bg-[#ebdccb] lg:hover:bg-black lg:hover:text-[#ebdccb]"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="font-extrabold text-xl uppercase">Education</p>
        </div>
      </div>
    </div>
  )
}
