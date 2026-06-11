import Link from "next/link.js";
import projects from "../data/projects.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Projects() {
  return (
    <div>
      <p className="font-extrabold text-xl lg:text-2xl uppercase">Projects</p>

      {projects.map((project, idx) => (
        <div className="relative" key={idx}>
          <Link href={`/project/${project.name}`}>
            <p className="font-extrabold text-lg lg:text-xl">{project.title} <ArrowForwardIcon sx={{ position: 'absolute', right: 0 }} /></p>
            <p className="font-medium lg:text-lg">{project.intro}</p>
          </Link>

          <div className="flex flex-wrap gap-2 mb-5 mt-1">
            {project.stack.map((tech, idx) => (
              <p
                key={idx}
                className="text-md lg:text-lg p-1 uppercase font-extrabold border-[1.5px] bg-[#e1ccb2] lg:hover:bg-black lg:hover:text-[#e1ccb2]"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
