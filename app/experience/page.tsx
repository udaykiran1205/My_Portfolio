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
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold">Key Responsibilities:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed Android applications using Java/Kotlin</li>
                <li>Implemented responsive UI designs</li>
                <li>Worked with Android SDK and related technologies</li>
                <li>Collaborated with team members on project development</li>
                <li>Learned about app deployment and maintenance</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
