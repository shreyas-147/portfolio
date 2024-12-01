// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Briefcase } from "lucide-react";

// const experience = [
//   {
//     company: "WUD Events",
//     position: "Software Engineer",
//     period: "2024 - Present",
//     description: "Leading development of cloud-native applications using React and Node.js.",
//     technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
//   },
//   {
//     company: "StartupX",
//     position: "Full Stack Developer",
//     period: "2018 - 2020",
//     description: "Built and maintained multiple web applications using modern JavaScript frameworks.",
//     technologies: ["Vue.js", "Express", "MongoDB", "Redis", "JavaScript"],
//   },
//   {
//     company: "StartupX",
//     position: "Full Stack Developer",
//     period: "2018 - 2020",
//     description: "Built and maintained multiple web applications using modern JavaScript frameworks.",
//     technologies: ["Vue.js", "Express", "MongoDB", "Redis", "JavaScript"],
//   },
// ];

// export function Work() {
//   return (
//     <section id="work" className="space-y-8">
//       <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
//       <div className="space-y-6">
//         {experience.map((exp) => (
//           <Card key={exp.company}>
//             <CardHeader>
//               <div className="flex items-center space-x-4">
//                 <div className="p-2 bg-primary/10 rounded-lg">
//                   <Briefcase className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <CardTitle>{exp.position}</CardTitle>
//                   <p className="text-sm text-muted-foreground">
//                     {exp.company} • {exp.period}
//                   </p>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <p className="text-muted-foreground">{exp.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {exp.technologies.map((tech) => (
//                   <Badge key={tech} variant="secondary">
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "WUD Events",
    position: "Software Engineer",
    period: "2024 - Present",
    description: "• Designed and developed the WUD iOS app using React Native, with a Java, Spring Boot backend and AWS Lambda for real-time event discovery, reducing response latency by 30% through optimized Redis caching strategies.\n• Collaborated in agile sprints using Jira to align mobile app features with user needs, optimizing feature delivery by 25%, shortening development cycles, and improving team velocity. Manage cloud infrastructure using Terraform.\n• Integrated Eventtia, leveraging data-driven optimization techniques to accelerate event pairings by 30%, improving user engagement and satisfaction.\n• Refined user experience through Figma-based prototyping and iterative UI/UX design meetings, ensuring seamless interaction across mobile interfaces, leading to a 20% increase in user retention",
    technologies: ["React Native", "Java", "Spring Boot", "AWS", "Figma", "JavaScript"],
  },
  {
    company: "Principal Financial Group",
    position: "Software Engineer",
    period: "2021 - 2022",
    description: "• Coordinated 2 end-to-end projects, handling assessments, risk evaluations, solution development, and implementation.\n• Led a 4 - person team for Node.js integration layer creation while optimizing deployment with AWS, achieving 75% faster UI load time using React-Redux. Also participated in GUI design.\n• Developed clean, efficient code using Node.js, React, Java, TypeScript, and Spring Boot, deploying via AWS Lambda, API Gateway and DynamoDB, enhancing user experience and resolving service issues. Created pipelines for CI/CD.",
    technologies: ["React.js", "Node.js","TypeScript", "JavaScript", "Java", "Spring Boot", "AWS"],
  },
  {
    company: "Principal Financial Group",
    position: "Software Engineer Intern",
    period: "2021 - 2021",
    description: "• Automated 25% of the customer onboarding process using React, Java, Spring Boot, and AWS Lambda, reducing paperwork by 90% and improving efficiency by 40%.\n• Redesigned the front-end with React, Material-UI, and implemented caching with Redis to streamline document submission, cutting response times by 50% and enhancing user experience.\n• Developed a scalable back end using Java, Spring Boot, AWS EC2, and DynamoDB, optimizing database queries and leveraging load balancing to improve system scalability by 30%, supporting higher user traffic.",
    technologies: ["React.js", "JavaScript", "Java", "Spring Boot", "AWS"],
  },
];

export function Work() {
  return (
    <section id="work" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
      <div className="space-y-6">
        {experience.map((exp) => (
          <Card key={exp.company}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>{exp.position}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {exp.description.split('\n').map((line, index) => (
                <p key={index} className="text-muted-foreground">{line}</p>
              ))}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
