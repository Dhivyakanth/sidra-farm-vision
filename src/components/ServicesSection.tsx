import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Satellite, 
  MessageSquare, 
  MapPin, 
  AlertTriangle, 
  Languages,
  Calendar,
  BarChart3,
  FileText,
  Smartphone
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Satellite,
      title: "Satellite Crop Health Monitoring",
      description: "Advanced satellite technology monitors your fields 24/7, tracking crop health, growth patterns, and identifying potential issues before they become problems.",
      features: ["Real-time monitoring", "Historical data analysis", "Growth pattern tracking", "Early issue detection"]
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Advisory Reports",
      description: "Get personalized farming advice and reports directly on WhatsApp in your preferred language. Simple, actionable insights delivered right to your phone.",
      features: ["Monthly reports", "Instant alerts", "Personalized advice", "Easy to understand"]
    },
    {
      icon: MapPin,
      title: "Field Visit & Crop Scouting",
      description: "Our agricultural experts visit your fields for detailed crop scouting, soil analysis, and on-ground verification of satellite data.",
      features: ["Expert field visits", "Soil analysis", "Crop health assessment", "Verification of satellite data"]
    },
    {
      icon: AlertTriangle,
      title: "Early Alerts for Pests & Diseases",
      description: "Receive timely warnings about potential pest attacks, disease outbreaks, and weather-related risks to protect your crops.",
      features: ["Pest detection", "Disease alerts", "Weather warnings", "Prevention strategies"]
    },
    {
      icon: Languages,
      title: "Support in Tamil and English",
      description: "Get support and advice in your preferred language. Our team provides assistance in both Tamil and English for better understanding.",
      features: ["Multilingual support", "Local expertise", "Cultural understanding", "Clear communication"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Calendar,
      title: "Season Planning & Crop Monitoring",
      description: "Organize cropping seasons effectively from sowing to harvesting with our comprehensive planning tools."
    },
    {
      icon: BarChart3,
      title: "Land Insights for Every Plot",
      description: "Get detailed insights for individual fields to optimize water and fertilizer usage."
    },
    {
      icon: FileText,
      title: "Record Keeping Made Simple",
      description: "Store and manage field data season-by-season for future planning and documentation."
    },
    {
      icon: Smartphone,
      title: "Customized Suggestions",
      description: "Receive tailored advice specific to your field conditions and current crop status."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive agricultural technology solutions designed to support farmers at every stage of the farming process.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in">
              <CardHeader>
                <div className="bg-gradient-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="bg-muted/30 rounded-2xl p-8 animate-slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            What SiDRA Hub Does for You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft">
                <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="farmer" 
            size="xl"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Using Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};