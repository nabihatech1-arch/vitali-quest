import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CallToAction = () => {
  const benefits = [
    "Access to 500+ expert-designed workouts",
    "Personalized nutrition plans and meal tracking",
    "24/7 community support and motivation",
    "Progress tracking with detailed analytics",
    "Live virtual classes and challenges"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-energy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of people who have already started their journey to better health. 
            Start transforming your body and mind—because you deserve to feel amazing every day!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
              <ul className="space-y-3 text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Free</div>
                <div className="text-lg mb-4">for 30 days</div>
                <div className="text-sm text-white/80 mb-6">
                  No credit card required. Cancel anytime.
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto w-full"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-white text-lg px-8 py-6 h-auto backdrop-blur-sm"
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-8 py-6 h-auto"
            >
              Contact Us
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-6">
            Join 10,000+ members who trust VitalFit for their wellness journey
          </p>
        </div>
      </div>
    </section>
  );
};