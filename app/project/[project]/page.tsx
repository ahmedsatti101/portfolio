import projects from "@/data/projects";
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
import Link from "next/link";

export default async function Project({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const data = projects.find((proj) => proj.name === project);

  return (
    <div className="min-h-screen flex flex-col ml-7 mr-7">
      <Link href="/">
        <ArrowBackOutlined sx={{ mb: 2 }} fontSize="large" />
      </Link>
      <div className="border-b-2 pb-3">
        <div className="flex flex-col gap-2">
          <h1 id="grid-name" className="text-3xl font-extrabold tracking-tight uppercase leading-none">
            {data?.title}
          </h1>
          <div className="w-fit flex flex-col lg:flex-row gap-2 md:gap-4 font-semibold">
            <span className="border font-extrabold px-2 py-0.5 bg-black text-[#e5d3bf] uppercase" id="grid-status">{data?.status}</span>
            <span className="border font-extrabold px-2 py-0.5 uppercase" id="grid-duration">{data?.duration}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-5">

        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-medium font-bold uppercase tracking-wider mb-2 opacity-50">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 uppercase w-fit">
            {data?.stack.map((tech, idx) => (
              <p
                key={idx}
                className="text-sm p-1 font-extrabold border-[1.5px] bg-[#ebdccb] lg:hover:bg-black lg:hover:text-[#ebdccb]">
                {tech}
              </p>
            ))}
          </div>

          <div className="border-t-2 pt-5">
            <h3 className="text-medium font-bold uppercase tracking-wider mb-2 opacity-50">Project links</h3>
            <div className="text-medium uppercase space-y-1 font-bold">
              <a href={data?.links.github} className="block hover:underline flex items-center justify-between">
                <span>GitHub Repo</span>
                <span className="text-2xl">→</span>
              </a>
              {data?.links.app && (
                <a href={data?.links.app} className="block hover:underline flex items-center justify-between">
                  <span>App</span>
                  <span className="text-2xl">→</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t-2 lg:border-t-0 md:col-span-2 space-y-8 pt-5">
          <div>
            <h3 className="text-medium font-bold uppercase tracking-wider mb-3 opacity-50">01. About the Project</h3>
            <p id="grid-about" className="leading-relaxed font-semibold text-portfolio-dark/90">
              {data?.about}
            </p>
          </div>

          {data?.why && (
            <div>
              <h3 className="text-medium font-bold uppercase tracking-wider mb-3 opacity-50 text-portfolio-accent">02. Problem & Solution</h3>
              <div className="space-y-4">
                <p id="grid-problem" className="leading-relaxed font-semibold">
                  {data?.why}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
