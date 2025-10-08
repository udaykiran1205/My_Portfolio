import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">Uday Kiran Pillala</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">AI & Data Science Student</h2>
          <p className="text-lg mb-6">
            Final-year B.Tech student in Artificial Intelligence and Data Science with hands-on experience building AI and
ML-powered applications. Proficient in Python and Java with experience in deploying real-time services (Flask
APIs, browser extensions) and working with security protocols (FIDO2/WebAuthn). Strong foundation in Data
Structures & Algorithms.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/udaykiran1205" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/uday-kiran-pillala/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/images/uday-profile.png" alt="Uday Kiran Pillala" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Quick Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>B.Tech in AI & Data Science at Velagapudi Ramakrishna Siddhartha Engineering College with 9.16 GPA</p>
              <Link href="/education" className="text-primary hover:underline inline-flex items-center mt-4">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p>
                Developed multiple projects including a Portfolio Website, Phishing Detection System, and E-Commerce
                Clone
              </p>
              <Link href="/projects" className="text-primary hover:underline inline-flex items-center mt-4">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <p>Proficient in Python, Java, C, React.js, HTML/CSS, JavaScript, and various AI/ML technologies</p>
              <Link href="/skills" className="text-primary hover:underline inline-flex items-center mt-4">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
