import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-24 space-y-32">
        <About />
        <Education />
        <Work />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}