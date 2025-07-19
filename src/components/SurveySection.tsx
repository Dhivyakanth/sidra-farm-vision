import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, TrendingUp, Star, Award, Target } from "lucide-react";
import agricultureTech from "@/assets/agriculture-tech.jpg";
import farmerSmartphone from "@/assets/farmer-smartphone.jpg";
import aerialCrops from "@/assets/aerial-crops.jpg";

export const SurveySection = () => {
  const surveyStats = [
    {
      icon: Users,
      metric: "500+",
      label: "Farmers Served",
      description: "Active farmers using our platform"
    },
    {
      icon: TrendingUp,
      metric: "35%",
      label: "Yield Improvement",
      description: "Average increase in crop yields"
    },
    {
      icon: Star,
      metric: "4.8/5",
      label: "Satisfaction Rate",
      description: "Based on farmer feedback"
    },
    {
      icon: Award,
      metric: "98%",
      label: "Success Rate",
      description: "Successful crop monitoring"
    }
  ];

  const testimonials = [
    {
      name: "Ravi Kumar",
      location: "Salem District",
      crop: "Rice",
      feedback: "SiDRA Hub helped me increase my rice yield by 40%. The WhatsApp alerts saved my crop from pest attack!",
      image: farmerSmartphone
    },
    {
      name: "Meera Devi",
      location: "Namakkal District", 
      crop: "Cotton",
      feedback: "Getting satellite reports in Tamil made it so easy to understand. My cotton quality improved significantly.",
      image: aerialCrops
    }
  ];

  const benefits = [
    "Early pest and disease detection",
    "Water management optimization", 
    "Fertilizer usage guidance",
    "Weather-based advisories",
    "Market price information",
    "Government scheme updates"
  ];

  return (
    <section id="survey" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Target className="h-4 w-4 mr-2" />
            Impact Survey Results
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforming Farming Lives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from real farmers. See how SiDRA Hub is making a difference 
            in agricultural productivity and farmer livelihoods across Tamil Nadu.
          </p>
        </div>

        {/* Technology Showcase */}
        <div className="mb-16">
          <img 
            src={agricultureTech} 
            alt="Agricultural Technology"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-strong"
          />
        </div>

        {/* Survey Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {surveyStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-shadow">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
              <div className="font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Farmer Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Farmer Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <Badge variant="secondary">{testimonial.crop}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{testimonial.location}</p>
                    <p className="text-muted-foreground italic">"{testimonial.feedback}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Benefits Farmers Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Join the Smart Farming Revolution</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Be part of the growing community of successful farmers using satellite technology 
              to improve their crop yields and farming practices.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Register Your Farm Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};