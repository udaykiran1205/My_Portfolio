import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GithubIcon } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    
    {
      title: "Fido Based Password Less Authentication For E-Bikes",
      description: "Designed and implemented a secure passwordless authentication system using FIDO2/WebAuthn, eliminating traditional passwords and reducing phishing attack surfaces and Built an end-to-end authentication flow supporting credential registration and cryptographic challenge-response login",
      techStack: ["Fido2/WebAuth Protocol"],
      type: "Epics Project",
    },
    {
      title: "Phishing Website Detection Using a Random Forest Model",
      description:
        "Engineered a Random Forest–based phishing detection model using 23+ handcrafted URL and domain features and built a custom feature extraction pipeline to analyze lexical, structural, and domain-level attributes of URLs and Improved detection reliability through data preprocessing, feature selection, and model evaluation metrics and deployed the model as a Flask web application on Render, enabling real-time phishing classification.",
      techStack: ["Python", "Random Forest model","Flask"],
      type: "Mini Project",
      githubLink: "https://github.com/udaykiran1205/Phishing_detection",
      demoLink: "https://phishing-detection1.onrender.com/",
    },
    {
      title: "Phishing Url Blocker",
      description:
        "Developed a real-time Chrome browser extension that blocks malicious URLs before page load, enhancing user security and Integrated a Flask-based ML backend with the extension to perform live phishing predictions.",
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
