'use client'

import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="ml-5 mr-5">
      <Link href="/">
        <ArrowBackOutlined sx={{ mb: 2 }} fontSize="large" />
      </Link>
      <div className="mb-5">
        <About hidden={false} />
      </div>
      <div className="mb-5">
        <Experience hidden={false} />
      </div>
      <Education hidden={false} />
    </div>
  )
}
