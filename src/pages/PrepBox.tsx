import { useState } from "react";
import { Mic, MicOff, PlayCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PrepBox = () => {
  const [isRecording, setIsRecording] = useState(false);

  const commonQuestions = [
    { question: "Tell me about yourself", difficulty: "Easy", category: "Behavioral" },
    { question: "Explain the SOLID principles", difficulty: "Medium", category: "Technical" },
    { question: "Describe a challenging project you worked on", difficulty: "Medium", category: "Behavioral" },
    { question: "How do you handle conflicts in a team?", difficulty: "Easy", category: "Behavioral" },
  ];

  return (
    <div className="min-h-screen bg-navy-light">
      <div className="container mx-auto p-6 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">AI PrepBox</h1>
          <p className="text-muted-foreground">Practice common interview questions with AI feedback</p>
        </div>

        {/* Practice Section */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle>Voice Practice Session</CardTitle>
            <CardDescription>Click to start recording your answer. AI will analyze and provide feedback.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/20">
              <Button
                size="lg"
                variant={isRecording ? "destructive" : "default"}
                className="h-24 w-24 rounded-full"
                onClick={() => setIsRecording(!isRecording)}
              >
                {isRecording ? <MicOff className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                {isRecording ? "Recording... Click to stop" : "Click to start recording"}
              </p>
            </div>

            {/* AI Feedback Section */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">AI Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your answer will be analyzed here with suggestions for improvement...
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Common Questions */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle>Common Interview Questions</CardTitle>
            <CardDescription>Practice these frequently asked questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commonQuestions.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-1 space-y-1">
                    <h4 className="font-semibold">{item.question}</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">{item.category}</Badge>
                      <Badge variant={item.difficulty === "Easy" ? "default" : "secondary"}>
                        {item.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Practice
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrepBox;
