import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GithubIcon } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    
    {
      title: "Fido Based Password Less Authentication For E-Bikes",
      description: ["Designed and implemented a secure passwordless authentication system using FIDO2/WebAuthn, eliminating traditional passwords and reducing phishing attack surfaces.","Built a secure web application implementing passwordless login flows, integrating frontend JavaScript with backend APIs."],
      techStack: ["WebAuth", "JavaScript", "HTML", "CSS","Node.js", "express.js", "MongoDB"],
    
      githubLink: "https://github.com/udaykiran1205/Fido_Based_Passwordless_Authentication",
    },
    {
      title: "Phishing Website Detection Using a Random Forest Model",
      description:
        ["Engineered a Random Forest–based phishing detection model using 23+ handcrafted URL and domain features and built a custom feature extraction pipeline to analyze lexical, structural, and domain-level attributes of URLs and Improved detection reliability through data preprocessing, feature selection, and model evaluation metrics and deployed the model as a Flask web application on Render, enabling real-time phishing classification."],
      techStack: ["Python", "Random Forest model","Flask","TensorFlow/Keras", "NumPy", "Pandas", "Matplotlib", "Google Colab"],
      
      githubLink: "https://github.com/udaykiran1205/Phishing_detection",
      demoLink: "https://phishing-detection1.onrender.com/",
    },
    {
      title: "Phishing Url Blocker",
      description:
        ["Developed a real-time Chrome browser extension that blocks malicious URLs before page load, enhancing user security and Integrated a Flask-based ML backend with the extension to perform live phishing predictions."],
      techStack: ["JavaScript", "HTML", "CSS", "Chrome Extension APIs", "Random Forest", "Flask (backend)"],
     
      githubLink: "https://github.com/udaykiran1205/Phishing_Url_Blocker_extension",
    },
     {
      title: "Smart Road Accident Detection & Severity Analysis System",
      description: ["Developed an intelligent traffic safety system using YOLO for real-time vehicle/accident detection from CCTV or dashcam video streams.","Integrated a CNN model to classify accident severity levels (minor, moderate, severe) for faster emergency response and decision-making.","Improved monitoring efficiency by combining fast object detection with accurate severity analysis, enabling automated road incident alerts."],
      techStack: ["Python","YOLO","CNN", "OpenCV","TensorFlow/Keras", "NumPy", "Pandas", "Matplotlib", "Google Colab", "Gradio"],
    
      githubLink: "https://github.com/udaykiran1205/Smart-Road-Accident-Detection-and-Severity-Analysis",
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
            
            </CardHeader>
            <CardContent className="flex-grow">
             <ul className="list-disc list-inside mb-4 space-y-2">
               {project.description.map((point, pointIndex) => (
                  <li key={pointIndex} variant="secondary">
                    {point}
                  </li>
                ))}
              </ul>
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
