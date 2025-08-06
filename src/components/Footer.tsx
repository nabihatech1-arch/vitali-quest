import { Heart, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Fitness",
      links: ["Workout Plans", "Personal Training", "Group Classes", "Home Workouts", "Strength Training"]
    },
    {
      title: "Nutrition",
      links: ["Meal Plans", "Healthy Recipes", "Supplements", "Diet Guides", "Calorie Calculator"]
    },
    {
      title: "Wellness",
      links: ["Mental Health", "Sleep Optimization", "Stress Management", "Mindfulness", "Recovery"]
    },
    {
      title: "Community",
      links: ["Success Stories", "Forums", "Challenges", "Events", "Support Groups"]
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-energy to-secondary bg-clip-text text-transparent">
                VitalFit
              </span>
            </div>
            <p className="text-background/80 mb-6 max-w-sm">
              Empowering your journey to a healthier, stronger you. Transform your body and mind with expert guidance and community support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-background/60 hover:text-energy transition-colors p-2 rounded-full hover:bg-background/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4 text-energy">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-background/80 hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 VitalFit. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center text-background/40 text-sm mt-4 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-strength" /> for your wellness journey
          </div>
        </div>
      </div>
    </footer>
  );
};