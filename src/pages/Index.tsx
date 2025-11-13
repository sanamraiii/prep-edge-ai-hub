import { Building2, FileText, BookOpen, BarChart3, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Building2,
      title: "Company Insights",
      description: "Access detailed reviews and interview experiences from seniors who've been there",
      iconColor: "primary",
    },
    {
      icon: FileText,
      title: "AI Resume Builder",
      description: "Create professional, ATS-friendly resumes with AI-powered suggestions",
      iconColor: "secondary",
    },
    {
      icon: BookOpen,
      title: "PrepBox Practice",
      description: "Practice common interview questions with real-time AI feedback",
      iconColor: "accent",
    },
    {
      icon: BarChart3,
      title: "Smart Dashboard",
      description: "Track your preparation progress and identify areas for improvement",
      iconColor: "primary",
    },
    {
      icon: Users,
      title: "Senior Reviews",
      description: "Learn from real experiences shared by students who secured placements",
      iconColor: "secondary",
    },
    {
      icon: Sparkles,
      title: "AI Roadmap",
      description: "Get personalized preparation roadmaps based on your target companies",
      iconColor: "accent",
    },
  ];

  const steps = [
    "Create your account and set your placement goals",
    "Search for companies and read senior reviews",
    "Get AI-generated preparation roadmap",
    "Practice with PrepBox and get feedback",
    "Build your perfect resume with AI",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.9)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Your Smartest Edge in{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Placement Prep
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              PrepEdge.AI — where real experiences meet AI to shape your placement journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and insights to prepare you for top company placements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Use PrepEdge.AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Five simple steps to transform your placement preparation
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:shadow-card transition-shadow">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-lg pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of students who've transformed their placement preparation with PrepEdge.AI
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/signup">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
