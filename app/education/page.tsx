import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon as Graduation, School } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>

      <div className="grid gap-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Graduation className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>B.Tech in Artificial Intelligence and Data Science</CardTitle>
              <p className="text-muted-foreground">2022 - Present</p>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">Velagapudi Ramakrishna Siddhartha Engineering College</h3>
            <p className="text-muted-foreground mb-2">Vijayawada, India</p>
            <div className="mt-4 bg-muted p-4 rounded-lg">
              <p className="font-medium">GPA: 9.06/10.0</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <School className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>Intermediate, MPC</CardTitle>
              <p className="text-muted-foreground">2020 - 2022</p>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">Nagarjuna Junior College</h3>
            <p className="text-muted-foreground mb-2">Tiruvuru, India</p>
            <div className="mt-4 bg-muted p-4 rounded-lg">
              <p className="font-medium">Percentage: 96.7%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <School className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>SSC</CardTitle>
              <p className="text-muted-foreground">2020</p>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">Nagarjuna E.M High School</h3>
            <p className="text-muted-foreground mb-2">Tiruvuru, India</p>
             <div className="mt-4 bg-muted p-4 rounded-lg">
              <p className="font-medium">Percentage: 98%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
