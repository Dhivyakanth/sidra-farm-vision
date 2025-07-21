import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [landArea, setLandArea] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const featuresData = t('pricing.features');
  const features = Array.isArray(featuresData) ? featuresData : [];
  
  const plans = [
    {
      name: t('pricing.basic.name'),
      price: t('pricing.basic.price'),
      period: t('pricing.basic.period'),
      description: "Perfect for getting started with smart farming"
    },
    {
      name: t('pricing.standard.name'),
      price: t('pricing.standard.price'),
      period: t('pricing.standard.period'),
      description: "Great value for seasonal planning",
      popular: true
    },
    {
      name: t('pricing.economy.name'),
      price: t('pricing.economy.price'),
      period: t('pricing.economy.period'),
      description: "Best value for long-term farming success"
    }
  ];

  const calculateTotal = (plan: any, area: number) => {
    const priceNum = parseInt(plan.price.replace('₹', ''));
    return priceNum * area;
  };

  const handleGetStarted = (plan: any) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!landArea || !selectedPlan) return;
    
    const area = parseFloat(landArea);
    const total = calculateTotal(selectedPlan, area);
    
    const message = `Hi! I'm interested in the ${selectedPlan.name} plan for ${area} acres. Total amount: ₹${total}. Please help me get started with SiDRA Hub services.`;
    const whatsappUrl = `https://wa.me/919489243775?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsDialogOpen(false);
    setLandArea("");
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-strong transition-all duration-300 hover:scale-105 animate-slide-up ${
                plan.popular ? 'border-primary shadow-medium' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleGetStarted(plan)}
                >
                  {t('common.getStarted')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            All plans include the same comprehensive features. Contact us for custom enterprise solutions.
          </p>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('pricing.dialog.title')}</DialogTitle>
            <DialogDescription>
              {t('pricing.dialog.description')}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="area">{t('pricing.dialog.landArea')}</Label>
              <Input
                id="area"
                type="number"
                placeholder={t('pricing.dialog.placeholder')}
                value={landArea}
                onChange={(e) => setLandArea(e.target.value)}
              />
            </div>
            {landArea && selectedPlan && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">{t('pricing.dialog.total')}:</div>
                <div className="text-2xl font-bold text-primary">
                  ₹{calculateTotal(selectedPlan, parseFloat(landArea))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {selectedPlan.name} plan for {landArea} acres
                </div>
              </div>
            )}
            <Button 
              onClick={handleSubmit} 
              disabled={!landArea}
              className="w-full"
            >
              {t('pricing.dialog.calculate')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;