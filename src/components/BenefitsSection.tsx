import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  DollarSign, 
  Droplets, 
  Languages, 
  TrendingUp, 
  Shield,
  Users,
  Target,
  CheckCircle
} from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time and Money",
      description: "Reduce the time spent on field monitoring and optimize resource usage to cut farming costs significantly.",
      stats: "Up to 30% cost reduction"
    },
    {
      icon: Droplets,
      title: "Early Water & Nutrient Detection",
      description: "Know exactly when your crops need water or nutrients before visible stress appears, preventing yield loss.",
      stats: "Prevent 20% yield loss"
    },
    {
      icon: Languages,
      title: "Support in Your Language",
      description: "Get assistance and advice in Tamil and English, ensuring clear communication and better understanding.",
      stats: "Tamil & English support"
    },
    {
      icon: TrendingUp,
      title: "Improve Yield with Smart Decisions",
      description: "Make data-driven farming decisions based on satellite insights and expert recommendations.",
      stats: "15-25% yield increase"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Early detection of pests, diseases, and weather-related risks helps protect your crops proactively.",
      stats: "Reduce crop loss by 40%"
    },
    {
      icon: Target,
      title: "Precision Farming",
      description: "Apply water, fertilizers, and pesticides only where needed, reducing waste and environmental impact.",
      stats: "50% reduction in waste"
    }
  ];

  const additionalBenefits = [
    "Real-time field monitoring without physical visits",
    "Historical data for better planning next season",
    "Government subsidy documentation support",
    "Crop insurance claim assistance",
    "Market price alerts and trends",
    "Weather-based farming advisories",
    "Soil health monitoring and recommendations",
    "Sustainable farming practice guidance"
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Farmer Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how SiDRA Hub transforms farming practices and delivers measurable benefits to farmers across all scales.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in group">
              <CardHeader>
                <div className="bg-gradient-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                <div className="bg-accent/20 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-primary text-center">
                    {benefit.stats}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12 animate-slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Additional Benefits & Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg hover:shadow-soft transition-shadow duration-300">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          <div className="text-center p-6 bg-gradient-primary/5 rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
          </div>
          <div className="text-center p-6 bg-gradient-earth/5 rounded-xl border border-earth-brown/20">
            <div className="text-3xl font-bold text-earth-brown mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Farmers Served</div>
          </div>
          <div className="text-center p-6 bg-wheat-gold/10 rounded-xl border border-wheat-gold/20">
            <div className="text-3xl font-bold text-earth-brown mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-accent/10 rounded-xl border border-accent/20">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Acres Monitored</div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center bg-gradient-sky/10 rounded-2xl p-8 animate-fade-in">
          <div className="mb-6">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join SiDRA Hub and Grow Confidently
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple advice, better farming! Experience the difference that smart technology 
              can make in your agricultural journey.
            </p>
          </div>
          <div className="text-primary font-semibold text-lg">
            "Making smart farming accessible to every farmer, regardless of farm size."
          </div>
        </div>
      </div>
    </section>
  );
};