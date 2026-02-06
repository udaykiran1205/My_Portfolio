import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Globe, Laptop, MessageSquare } from "lucide-react"

export default function SkillsPage() {
  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "C", level: 80 },
    { name: "SQL", level: 75 },
    
  ]
  const AIML = [
  { name: "AI", level: 80 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "NLP", level: 75 },
  ]
  const webDevSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    {name : "Node.js", level : 75},
    { name: "Git", level: 80 },
  ]

  const toolsSkills = [
    { name: "VSCode", level: 95 },
    { name: "Google Colab", level: 90 },
    { name: "Jupyter Notebook", level: 85 },
    { name: "Github", level: 80 },
    
  ]

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Time Management", level: 85 },
    { name: "Teamwork", level: 90 },
    { name: "Critical Thinking", level: 85 },
  ]
  

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Technical Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Code className="h-6 w-6 text-primary" />
            <CardTitle>Programming Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Globe className="h-6 w-6 text-primary" />
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {webDevSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Code className="h-6 w-6 text-primary" />
            <CardTitle>AI&ML</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {AIML.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Laptop className="h-6 w-6 text-primary" />
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <MessageSquare className="h-6 w-6 text-primary" />
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        
      </div>
    </div>
  )
}
