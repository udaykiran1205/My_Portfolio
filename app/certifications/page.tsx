import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle } from "lucide-react"

export default function CertificationsPage() {
  const certifications = [
    {
      category: "Programming",
      items: ["Python (Basic)", "Programming Essentials in C", "Programming in Modern C++", "Database Foundations"],
    },
    {
      category: "Artificial Intelligence & Machine Learning",
      items: [
        "Machine Learning with Python",
        "Introduction to Artificial Intelligence (AI)",
        "Introduction to Deep Learning (DL)",
        "Introduction to Natural Language Processing (NLP)",
        "Neural Networks and Deep Learning offered by Coursera",
      ],
    },
    {
      category: "Other Technical Skills",
      items: [
        "Foundations of R Software",
        "CCNAv7: Introduction to Networks",
        "Cybersecurity Essentials",
        "Linux Essentials",
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
