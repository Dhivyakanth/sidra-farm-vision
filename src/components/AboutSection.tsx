import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-primary">
              Empowering Farmers with Smart, Ground-Level Insights
            </h3>
            <p className="text-muted-foreground">
              SiDRA Hub is a powerful and farmer-first platform designed to help monitor agricultural lands, 
              improve crop performance, and support smarter decision-making across every stage of farming.
            </p>
            <p className="text-muted-foreground">
              In today's farming, knowing the condition of your land and crops at the right time can make 
              a huge difference. SiDRA Hub acts like your digital farming assistant — always watching over 
              your fields, understanding what they need, and guiding you to take the best action at the right time.
            </p>
            <div className="bg-gradient-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <p className="text-foreground font-medium">
                Our goal is to make farming easy, cost-saving, and profitable for you.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="hover:shadow-medium transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  To make advanced farming technology accessible to every farmer, regardless of farm size.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">
                  A world where every field is monitored, understood, and optimized for sustainable farming.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="bg-wheat-gold/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Our Values</h4>
                <p className="text-sm text-muted-foreground">
                  Farmer-first approach, sustainability, innovation, and community support.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="bg-sky-blue/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Recognition</h4>
                <p className="text-sm text-muted-foreground">
                  First Hub in India, recognized by leading agricultural experts and institutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who Can Use Section */}
        <div className="bg-gradient-earth/10 rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Who Can Use SiDRA Hub?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Small and large-scale farmers",
              "Agri-businesses and contract farming companies", 
              "Village agriculture officers and advisors",
              "FPOs and cooperatives",
              "Government bodies in rural and agriculture sectors",
              "Research institutions and universities"
            ].map((user, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">{user}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 italic">
            Whether you manage 1 acre or 100, SiDRA Hub ensures your land is heard, understood, and cared for — all year round.
          </p>
        </div>
      </div>
    </section>
  );
};