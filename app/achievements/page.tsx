import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Medal, Star, Trophy } from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Achievements</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Trophy className="h-6 w-6 text-primary" />
            <CardTitle>Academic Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Best Performer of Elite Coding Club</p>
                  <p className="text-muted-foreground">2nd year B-Tech</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">MSME IDEA HACKATHON 4.0 Youth Winner for the project entitled : Fido Based Passwordless Authentication
For E-Bikes</p>
                  <p className="text-muted-foreground">with a grant of Rs 6 lakhs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">North South Foundation (NSF) merit Scholarship Scholar </p>
                  <p className="text-muted-foreground">for the academic year 2022-2026</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

{/*         <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Medal className="h-6 w-6 text-primary" />
            <CardTitle>Coding Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">
                    Solved 100+ problems in{" "}
                    <a href="https://leetcode.com/u/udaykiran1205/" className="text-primary hover:underline">
                      LeetCode
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">
                    Solved 100+ problems in{" "}
                    <a
                      href="https://www.geeksforgeeks.org/user/udaykiran1205/"
                      className="text-primary hover:underline"
                    >
                      GeeksforGeeks
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Problem Solver - Bronze Badge in CodeChef</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
 */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-4">
            <Award className="h-6 w-6 text-primary" />
            <CardTitle>Extra Curricular Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>
                    Received Active Participation Certificates for involvement in competitions like quizzes and
                    debugging competitions hosted by esteemed universities and institutions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>
                    Actively participated in internal hackathons and ideathons, showcasing problem-solving skills,
                    innovation, and teamwork.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>
                    Actively engaged in peer-to-peer learning, fostering collaborative knowledge sharing, mentoring
                    peers, and enhancing collective problem-solving skills in technical and academic domains.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
