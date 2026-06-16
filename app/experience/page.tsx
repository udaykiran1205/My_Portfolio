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
              <CardTitle>Google-AIML VIRTUAL INTERSHIP</CardTitle>
              <CardDescription>AICTE</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              <ol>
                <li> Developed an airport runway detection system using the YOLOv8 deep learning model to accurately identify runways from satellite and aerial imagery for autonomous aviation applications.</li>
                <li> Applied advanced image preprocessing and Region of Interest (RoI) extraction techniques to improve detection performance under challenging weather conditions and visual obstructions. </li>
                <li>Trained and evaluated the model on a dataset of 880 images, achieving 93.2% detection accuracy with a 6.32% false positive rate, demonstrating reliable runway identification for enhanced aviation safety and automation.</li>
              
              </ol>
              <b>Technologies: </b> Python, YOLOv8, OpenCV, Deep Learning, Computer Vision, Image Processing.
            </p>
          </CardContent>
        </Card>
      </div>
       <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Briefcase className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>AI-Powered Cloud Engineer Virtual Internship</CardTitle>
              <CardDescription>AICTE</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              <ol>
                <li> Developed a serverless subscription management system using AWS services to manage subscriber data and process subscription events efficiently.</li>
                <li>Automated subscription lifecycle tracking, renewal scheduling, and expiration monitoring through event-driven cloud workflows.</li>
                <li>Implemented automated email notification services to send renewal reminders and subscription expiration alerts, enhancing user engagement and operational efficiency.</li>
              </ol>
              <b>Technologies: </b>AWS Lambda, DynamoDB, API Gateway, EventBridge, Amazon SES, Python.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
