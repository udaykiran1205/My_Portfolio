import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle } from "lucide-react"

export default function CertificationsPage() {
  const certifications = [
    {
      category: "Programming",
      items: [
        "Python (Basic) by Hackerrank",
        "Programming Essentials in C by Cisco netacd",
        "Programming in Modern C++ by NPTEL",
        "Foundations of R Software by NPTEL",
        "Database Foundations by Oracle Academy",
      ],
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      items: [
        "Machine Learning with Python by Edx",
        "Introduction to Artificial Intelligence (AI) by Infosys SpringBoard",
        "Introduction to Deep Learning (DL) by Infosys SpringBoard",
        "Introduction to Natural Language Processing (NLP) by Infosys SpringBoard",
        "Neural Networks and Deep Learning offered by Coursera",
      ],
    },
    {
      category: "Networking & Cybersecurity Certifications",
      items: [
        "CCNAv7: Introduction to Networks by Cisco netacd",
        "Cybersecurity Essentials by Cisco netacd",
        "Linux Essentials by Cisco netacd",
        "Ethical Hacker by Cisco netacd",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Certifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-6 w-6 text-primary" />
              <CardTitle>{cert.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {cert.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
