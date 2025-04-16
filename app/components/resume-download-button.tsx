"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ResumeDownloadButton() {
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Show toast notification
    toast({
      title: "Resume Download Started",
      description: "Your download should begin automatically.",
    })

    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false)
    }, 1500)
  }

  return (
    <Button variant="outline" onClick={handleDownload} disabled={isDownloading} asChild>
      <a href="/resume.pdf" download="Uday_Kiran_Pillala_Resume.pdf">
        {isDownloading ? "Downloading..." : "Download CV"}{" "}
        <Download className={`ml-2 h-4 w-4 ${isDownloading ? "animate-bounce" : ""}`} />
      </a>
    </Button>
  )
}
