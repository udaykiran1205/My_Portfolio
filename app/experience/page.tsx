import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Briefcase className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>Google Android Developer Virtual Intern</CardTitle>
              <CardDescription>AICTE</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Gained hands-on experience in Android app development and modern mobile technologies. This internship
              provided practical knowledge in building Android applications using industry-standard tools and best
              practices.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Briefcase className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>AWS-AIML VIRTUAL INTERSHIP</CardTitle>
              <CardDescription>AICTE</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Exploring the captivating world of machine learning concepts and algorithms has been a profound journey of fascination and learning for me. From understanding the fundamental principles to delving into intricate algorithms, each discovery has ignited my passion for unraveling the mysteries of artificial intelligence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
