import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const education = [
  {
    school: "Arizona State University",
    degree: "MS Computer Science",
    years: "2022 - 2024",
    logo: "https://i.ibb.co/g6ws3nm/6144775a5953a50004ee16bc.png",
    gpa:"CGPA: 3.93 / 4"
  },
  {
    school: "Ramdeobaba University",
    degree: "B.E Computer Science and Engineering",
    years: "2017 - 2021",
    logo: "https://i.ibb.co/CvXGFyM/id-Bj-LMT-ay-logos-removebg-preview.png",
    gpa:"GPA: 8.38 / 10"
  },
];

export function Education() {
  return (
    <section id="education" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((edu) => (
          <Card key={edu.school} className="p-6 rounded-3xl">
            <CardContent className="flex flex-col items-center text-center space-y-6 p-0">
              <div className="relative h-32 w-32">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  // fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-muted-foreground mt-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.years}</p>
                <p className="text-muted-foreground mt-2">{edu.gpa}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}