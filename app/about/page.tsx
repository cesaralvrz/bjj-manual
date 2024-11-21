import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About BJJ Techniques Library</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>Empowering BJJ practitioners with knowledge</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Welcome to the BJJ Techniques Library, a comprehensive resource for Brazilian Jiu-Jitsu practitioners of all levels.
          </p>
          <p>
            This website was created to help BJJ enthusiasts learn, review, and perfect various techniques. 
            Whether you're a beginner looking to build a solid foundation or an advanced practitioner refining your skills, 
            you'll find valuable information and demonstrations here.
          </p>
          <p>
            Our collection of techniques is constantly growing, and we strive to provide clear explanations 
            and high-quality video demonstrations for each technique. We hope this resource helps you on your 
            BJJ journey and contributes to your growth as a martial artist.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

