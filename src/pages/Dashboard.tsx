import { Search, TrendingUp, Users, Target, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    { label: "Companies Reviewed", value: "127", icon: Target, color: "text-primary" },
    { label: "Senior Reviews", value: "2.4K", icon: Users, color: "text-secondary" },
    { label: "Practice Sessions", value: "48", icon: BookOpen, color: "text-accent" },
    { label: "Success Rate", value: "87%", icon: TrendingUp, color: "text-primary" },
  ];

  const recentReviews = [
    { company: "Google", role: "SDE Intern", author: "Alex Chen", rating: 5 },
    { company: "Microsoft", role: "Software Engineer", author: "Sarah Kim", rating: 4 },
    { company: "Amazon", role: "SDE-1", author: "Rahul Sharma", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-navy-light">
      <div className="container mx-auto p-6 space-y-8">
        {/* Search Section */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle>Find Company Reviews</CardTitle>
            <CardDescription>Search for interview experiences and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for companies..." className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Reviews */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle>Recent Senior Reviews</CardTitle>
            <CardDescription>Latest experiences shared by seniors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReviews.map((review, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold">{review.company}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{review.author}</p>
                    <p className="text-sm text-primary">{"⭐".repeat(review.rating)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
