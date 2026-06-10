import Link from "next/link.js";
import projects from "../data/projects.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Projects() {
  return (
    <div>
      <p className="font-extrabold text-xl uppercase">Projects</p>

      {projects.map((project, idx) => (
        <div className="relative" key={idx}>
          <Link href={`/project/${project.name}`}>
            <p className="font-extrabold text-lg">{project.title} <ArrowForwardIcon sx={{ position: 'absolute', right: 0 }} /></p>
            <p className="font-medium">{project.intro}</p>
          </Link>

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
  )
}
