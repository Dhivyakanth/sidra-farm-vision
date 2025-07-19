import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Quote, Star } from "lucide-react";

export const VisitorsSection = () => {
  const visitors = [
    {
      date: "08.01.2025",
      name: "Cmde Sridhar Kotra",
      organization: "Agri Matrix India Pvt Ltd",
      comment: "First Hub in India",
      image: "/lovable-uploads/7b24d5be-8465-42ea-8704-7e1ccc6ad997.png"
    },
    {
      date: "22.03.2025", 
      name: "S. Rajesh Kannan, I.P.S.",
      organization: "Tamil Nadu Police Department",
      comment: "Should get integrated with TN Agristack"
    },
    {
      date: "04.04.2025",
      name: "Mr. Gopinath Dakshinamurthy",
      organization: "CGI",
      comment: "Excellent and wish to get serve the community"
    },
    {
      date: "04.04.2025",
      name: "Dr. Shanthi",
      organization: "Kongu Engineering College",
      comment: "The Research initiative under SiDRA Hub is Great"
    },
    {
      date: "30.04.2025",
      name: "Prof. Nilton Correia da Silva",
      organization: "University of Brasília - UnB, Brasília, Brazil",
      comment: "Amazed to see his relevant area of Doctorate in Brazil and wished to get connected with his GIS team"
    },
    {
      date: "14.04.2025",
      name: "Dr. P. Rethinam",
      organization: "World Noni Research Foundation",
      comment: "Good work to the Society"
    },
    {
      date: "14.04.2025",
      name: "Dr. T. Marimuthu",
      organization: "World Noni Research Foundation",
      comment: "Kolli hills must reach its visibility"
    },
    {
      date: "14.04.2025",
      name: "Dr. N. Mathivanan",
      organization: "World Noni Research Foundation",
      comment: "Realtime data should reach the unreached"
    },
    {
      date: "30.04.2025",
      name: "Prof. Sasidharan",
      organization: "PSG",
      comment: "Serving Farmer community will be great"
    },
    {
      date: "28.03.2025",
      name: "Mr. G. Gajendran",
      organization: "Paypal",
      comment: "wish he could work here for something good"
    },
    {
      date: "30.04.2025",
      name: "Prof. Dr. K. Lalitha (AI-DS)",
      organization: "Nandha Engineering College", 
      comment: "Good initiative by KSRCT"
    },
    {
      date: "28.03.2025",
      name: "Dr. Ashwin Rajkumar",
      organization: "Certinity.AI",
      comment: "Really a great work and enrolled with us with his coordinates"
    },
    {
      date: "08.05.2025",
      name: "Balaji Baradhazhvar",
      organization: "Crystal Delta",
      comment: "Really sourceful"
    }
  ];

  return (
    <section id="visitors" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eminent Visitors at SiDRA Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading experts, academicians, and industry professionals who have visited and appreciated our work at SiDRA Hub.
          </p>
        </div>


        {/* Featured Visitor - Sridhar Kotra */}
        <div className="mb-12 animate-scale-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-background to-muted/30 border-primary/20 hover:shadow-strong transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary mb-6">First Hub in India!</CardTitle>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-foreground">Cmde Sridhar Kotra</h3>
                <p className="text-lg text-primary font-medium">Agri Matrix India Pvt Ltd</p>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-wheat-gold/20 border border-wheat-gold/30 rounded-2xl p-6 inline-block">
                <div className="text-4xl font-bold text-primary mb-2">99</div>
                <Quote className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="text-foreground font-semibold text-lg">"First Hub in India"</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visitors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visitors.slice(1).map((visitor, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{visitor.date}</span>
                </div>
                <CardTitle className="text-lg text-foreground">{visitor.name}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-primary">
                  <MapPin className="h-4 w-4" />
                  <span>{visitor.organization}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Quote className="h-4 w-4 text-primary mb-2" />
                  <p className="text-sm text-foreground italic">"{visitor.comment}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <div className="text-center p-6 bg-gradient-primary/5 rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">{visitors.length}</div>
            <div className="text-sm text-muted-foreground">Distinguished Visitors</div>
          </div>
          <div className="text-center p-6 bg-gradient-earth/5 rounded-xl border border-earth-brown/20">
            <div className="text-3xl font-bold text-earth-brown mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Countries Represented</div>
          </div>
          <div className="text-center p-6 bg-accent/10 rounded-xl border border-accent/20">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Prestigious Organizations</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-sky/10 rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Growing Community
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of the agricultural revolution that has impressed experts from around the world. 
            Experience the innovation that makes SiDRA Hub unique.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {["Research Excellence", "Global Recognition", "Industry Support", "Academic Partnerships"].map((tag, index) => (
              <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};