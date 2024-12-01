import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "AI Chatbot",
    description: "An AI assistant similar to Chat-GPT built using Next.js and Groq apis",
    github: "https://github.com/shreyas-147",
    demo: "https://shreyas-147.github.io/AI-Chatbot/",
  },
  {
    title: "Quadrant recognition",
    description: "Android application that can recognize a handwritten digit based on the image of a quadrant of the digit",
    github: "https://github.com/shreyas-147",
    // demo: "https://beta-app.demo",
  },
  {
    title: "Spring Mart",
    description: "An E-commerce website created using React.js for frontend, and Java, Spring Boot for backend",
    github: "https://github.com/shreyas-147",
    // demo: "https://gamma-tools.demo",
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              {project.demo ? <Button asChild size="sm">
                <Link href={project.demo} target="_blank">
                  <Globe className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>:<></>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}