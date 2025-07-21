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
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = t('services.main');
  const serviceIcons = [Satellite, MessageSquare, MapPin, AlertTriangle, Languages];
  
  const additionalFeatures = t('services.additional.features');

  const additionalIcons = [Calendar, BarChart3, FileText, Smartphone];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const ServiceIcon = serviceIcons[index];
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in">
                <CardHeader>
                  <div className="bg-gradient-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <ServiceIcon className="h-6 w-6 text-primary" />
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
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="bg-muted/30 rounded-2xl p-8 animate-slide-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('services.additional.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFeatures.map((feature, index) => {
              const FeatureIcon = additionalIcons[index];
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                    <FeatureIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
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
            {t('services.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};