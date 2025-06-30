import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GithubIcon } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern and responsive website serves as a digital resume, showcasing my projects, skills, and experience in an interactive and visually appealing manner.",
      techStack: ["React.js", "JSON", "TypeScript"],
      githubLink: "https://github.com/udaykiran1205/My_Portfolio",
    },
    {
      title: "Fido Based Password Less Authentication For E-Bikes",
      description: "Enhanced Security for E-Bikes through Password less Authentication Using Fido Technology",
      techStack: ["Fido2/WebAuth Protocol"],
      type: "Epics Project",
    },
    {
      title: "Phishing Website Detection Using a Random Forest Model",
      description:
        "Implemented a phishing website detection system using the Random Forest model, enhancing cybersecurity by accurately identifying malicious sites.",
      techStack: ["Python", "Random Forest model","Flask"],
      type: "Mini Project",
      githubLink: "https://github.com/udaykiran1205/Phishing_detection",
      demoLink: "https://phishing-detection1.onrender.com/",
    },
    {
      title: "Phishing Url Blocker",
      description:
        "Developed a browser extension that proactively blocks access to phishing websites in real-time.",
      techStack: ["JavaScript", "HTML", "CSS", "Chrome Extension APIs", "Random Forest", "Flask (backend)"],
      type: "Individual Project",
      githubLink: "https://github.com/udaykiran1205/Phishing_Url_Blocker_extension",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              {project.type && <CardDescription>{project.type}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.demoLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
