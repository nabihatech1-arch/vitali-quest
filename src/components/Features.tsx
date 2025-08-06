import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Apple, Heart, Users, Trophy, Clock } from "lucide-react";
import workoutEquipment from "@/assets/workout-equipment.jpg";
import healthyNutrition from "@/assets/healthy-nutrition.jpg";
import wellnessMindfulness from "@/assets/wellness-mindfulness.jpg";

export const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Personalized Workouts",
      description: "Tailored fitness plans that adapt to your goals, experience level, and available time.",
      image: workoutEquipment,
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Apple className="h-8 w-8" />,
      title: "Nutrition Guidance",
      description: "Evidence-based meal plans and nutrition tips to fuel your fitness journey.",
      image: healthyNutrition,
      gradient: "from-energy to-secondary"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wellness & Recovery",
      description: "Mindfulness practices, sleep optimization, and recovery strategies for total well-being.",
      image: wellnessMindfulness,
      gradient: "from-wellness to-primary"
    }
  ];

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Support",
      description: "Join thousands of like-minded individuals on their fitness journey"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Proven Results",
      description: "Track your progress with detailed analytics and achievement badges"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Workouts that fit your lifestyle, from 15-minute sessions to full routines"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need for a
            <span className="block bg-gradient-to-r from-primary to-energy bg-clip-text text-transparent">
              Healthier Lifestyle
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and guidance to support every aspect of your wellness journey
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-80`} />
                <div className="absolute top-4 left-4 text-white">
                  {feature.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 bg-white/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary to-energy text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{stat.title}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};