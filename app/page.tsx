import { jetBrains400, jetBrains800 } from "@/fonts";
import projects from "../data/projects.js";

export default function Home() {
  return <p className={`${jetBrains400.className}`}>{projects[0].name}</p>
}
