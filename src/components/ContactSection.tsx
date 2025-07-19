import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Facebook,
  Youtube,
  Send,
  Building
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fieldSize: "",
    location: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Registration Successful!",
      description: "Thank you for your interest. Our team will contact you soon.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      fieldSize: "",
      location: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in SiDRA Hub services. Please provide more information.";
    window.open(`https://wa.me/918610128910?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your farming with smart technology? Get in touch with us today and let's discuss how SiDRA Hub can help your crops thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Our team is here to help you get started with smart farming. Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone & WhatsApp</h4>
                      <p className="text-muted-foreground">8610128910</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleWhatsApp}
                        className="p-0 h-auto text-primary hover:text-primary/80"
                      >
                        Message on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">acic@ksrct.ac.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-wheat-gold/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        SiDRA Hub, KSRCT Incubation Centre<br />
                        K.S.Rangasamy College of Technology<br />
                        KSR Kalvi Nagar, Tiruchengode<br />
                        Namakkal, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-sky-blue/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Working Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Emergency support only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Stay updated with farming tips and SiDRA Hub news!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
                  <Building className="h-6 w-6 text-primary" />
                  <span>Register Your Field</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form to get started with SiDRA Hub services. Our team will contact you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Field Size (acres) *
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g., 2.5 acres"
                        value={formData.fieldSize}
                        onChange={(e) => setFormData({...formData, fieldSize: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Location *
                      </label>
                      <Input
                        type="text"
                        placeholder="Village, District"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message / Crop Details
                    </label>
                    <Textarea
                      placeholder="Tell us about your crops, current challenges, or any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="farmer" size="xl" className="w-full group">
                    Register Now
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By registering, you agree to receive updates and farming advice from SiDRA Hub. 
                    We respect your privacy and never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};