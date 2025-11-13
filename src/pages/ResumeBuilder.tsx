import { useState } from "react";
import { Sparkles, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
  });

  const handleGenerate = () => {
    console.log("Generating resume with:", formData);
  };

  return (
    <div className="min-h-screen bg-navy-light">
      <div className="container mx-auto p-6 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">AI Resume Builder</h1>
          <p className="text-muted-foreground">Create a professional resume powered by AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>Fill in your details to generate a professional resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea
                  id="education"
                  placeholder="B.Tech Computer Science, XYZ University (2020-2024)"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Software Engineering Intern at ABC Corp (Jun 2023 - Aug 2023)"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea
                  id="skills"
                  placeholder="Python, React, Node.js, Machine Learning"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projects">Projects</Label>
                <Textarea
                  id="projects"
                  placeholder="E-commerce Platform: Built a full-stack web application..."
                  value={formData.projects}
                  onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
                />
              </div>

              <Button className="w-full" size="lg" onClick={handleGenerate}>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Resume with AI
              </Button>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Resume Preview</CardTitle>
                  <CardDescription>Your AI-generated resume will appear here</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-background p-8 rounded-lg border-2 border-dashed border-border min-h-[600px]">
                <div className="space-y-4 text-foreground">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">{formData.name || "Your Name"}</h2>
                    <p className="text-sm text-muted-foreground">
                      {formData.email || "email@example.com"} | {formData.phone || "+1 234 567 8900"}
                    </p>
                  </div>

                  {formData.education && (
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Education</h3>
                      <p className="text-sm">{formData.education}</p>
                    </div>
                  )}

                  {formData.experience && (
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Experience</h3>
                      <p className="text-sm">{formData.experience}</p>
                    </div>
                  )}

                  {formData.skills && (
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Skills</h3>
                      <p className="text-sm">{formData.skills}</p>
                    </div>
                  )}

                  {formData.projects && (
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Projects</h3>
                      <p className="text-sm">{formData.projects}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
