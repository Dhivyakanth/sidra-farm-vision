import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Satellite, Smartphone, TrendingUp, ArrowRight } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Register Your Field",
      description: "Sign up with SiDRA Hub and register your field details. Our team will help you get started with the setup process.",
      details: ["Provide field location", "Crop type information", "Contact details", "Field size data"]
    },
    {
      number: "02", 
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "Our advanced satellites continuously monitor your field, analyzing crop health, growth patterns, and potential issues.",
      details: ["24/7 monitoring", "Health analysis", "Growth tracking", "Issue detection"]
    },
    {
      number: "03",
      icon: Smartphone,
      title: "WhatsApp Reports",
      description: "Receive monthly reports and real-time advice directly on WhatsApp in your preferred language - Tamil or English.",
      details: ["Monthly reports", "Real-time alerts", "Local language support", "Easy-to-understand advice"]
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Better Farming",
      description: "Follow our simple tips, take timely action based on our recommendations, and enjoy healthier crops with better yields.",
      details: ["Actionable tips", "Timely interventions", "Increased yields", "Cost savings"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Getting started with SiDRA Hub is simple. Follow these four easy steps to revolutionize your farming experience.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative animate-slide-up`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Card className="bg-gradient-primary/5 border-primary/20 hover:shadow-medium transition-shadow duration-300">
                      <CardContent className="p-8 text-center">
                        <div className="bg-gradient-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <step.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div className="text-4xl font-bold text-primary mb-2">Step {step.number}</div>
                        <div className="text-foreground font-semibold">{step.title}</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="mt-20 bg-gradient-earth/10 rounded-2xl p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Farming?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of farmers who are already using SiDRA Hub to make smarter farming decisions 
            and increase their crop yields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="farmer" 
              size="xl"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="group"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="nature" 
              size="xl"
              onClick={() => {
                const element = document.querySelector("#services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};