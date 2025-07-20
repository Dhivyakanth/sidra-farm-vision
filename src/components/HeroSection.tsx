import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite, Smartphone, TrendingUp, Users } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-sky opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-primary opacity-10 transform skew-x-12"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                SiDRA Hub
                <span className="block text-3xl md:text-4xl lg:text-5xl text-primary mt-2">
                  Satellite Driven Rural Agro Hub (SiDRA Hub)
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Empowering farmers with satellite technology. Get easy-to-understand reports, 
                timely advice, and better yields. Join us and make farming smarter!
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Satellite className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Satellite Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">WhatsApp Reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Better Yields</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Expert Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="farmer" 
                size="xl"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="nature" 
                size="xl"
                onClick={() => scrollToSection("#how-it-works")}
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-primary p-8 rounded-2xl shadow-strong">
              <img
                src="/lovable-uploads/c323b960-2904-45ec-ba03-1c0c3ea9e5dc.png"
                alt="SiDRA Hub Launch Ceremony"
                className="w-full h-auto rounded-lg shadow-medium"
              />
              <div className="absolute -bottom-4 -right-4 bg-wheat-gold text-foreground px-4 py-2 rounded-lg shadow-medium">
                <span className="text-sm font-semibold">First Hub in India! 🌟</span>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-medium animate-scale-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">🌾</div>
                <div className="text-xs text-muted-foreground">Smart Farming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};