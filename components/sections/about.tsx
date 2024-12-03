import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Code2, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "AWS",
  "Docker",
];

export function About() {
  return (
    <section id="about" className="space-y-12">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-center">
          Hey, I'm Shreyas 👋
        </h1>
        <p className="text-xl text-muted-foreground text-center">
          Software Developer & Tech Enthusiast
        </p>
        <div className="flex gap-4">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="https://drive.google.com/file/d/1B5boMoFb9dXMB2qAap6Fwexm9_VBVk36/preview" target="_blank">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="https://github.com/shreyas-147" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="https://www.linkedin.com/in/shreyas-kolte-bb8588160/" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="overflow-hidden rounded-3xl border shadow-lg md:col-span-1">
          <div className="relative aspect-square">
            <Image
              src="https://i.ibb.co/k0RZWBp/Whats-App-Image-2024-11-20-at-17-45-14-06d5460f.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </Card>

        <div className="md:col-span-2 space-y-8">
          <Card className="p-6 rounded-3xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                About Me
              </h2>
              <p className="text-muted-foreground">
                A driven Computer Science graduate specializing in software development, I am actively pursuing opportunities in Full-time Software Engineering roles. With over a year of hands-on experience in full-stack development, proficient in object-oriented programming, and adept at deploying micro-services in the cloud, I am equipped with the skills and determination to thrive in dynamic tech environments. Eager to contribute innovative solutions and collaborate with talented teams to drive impactful outcomes.
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Skills & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}