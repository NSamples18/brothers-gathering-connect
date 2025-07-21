import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Shield, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailSignupSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required for confirmation.",
        variant: "destructive",
      });
      return;
    }

    // Simulate email confirmation signup
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Thank you for signing up!",
        description: "You'll receive a confirmation email shortly with all event details.",
      });
    }, 500);
  };

  if (isSubmitted) {
    return (
      <section id="email-signup" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 lg:p-12 text-center bg-gradient-primary text-primary-foreground">
              <CheckCircle className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
              <p className="text-xl mb-6 opacity-90">
                Thank you for signing up, {name}! You'll receive a confirmation email shortly.
              </p>
              <p className="opacity-80">
                Check your inbox for event updates, live stream links, and important information.
              </p>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="email-signup" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              <Mail className="w-4 h-4 mr-2" />
              Stay Connected
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get Event Confirmation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sign up to receive important event updates, live stream access, and a thank you message 
              after your Ticketmaster purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Signup Form */}
            <Card className="p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                >
                  Sign Up for Updates
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By signing up, you'll receive event confirmations and updates. 
                  We respect your privacy and won't spam you.
                </p>
              </form>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Event Reminders</h3>
                  <p className="text-muted-foreground">
                    Get timely reminders about the event, including parking information and what to bring.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Live Stream Access</h3>
                  <p className="text-muted-foreground">
                    Receive direct links to the live stream and backup viewing options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Privacy Protected</h3>
                  <p className="text-muted-foreground">
                    Your information is secure and will only be used for event-related communications.
                  </p>
                </div>
              </div>

              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold text-foreground mb-3">What You'll Receive:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Confirmation email within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Event day reminders and logistics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Live stream links and access codes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Post-event follow-up and resources</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignupSection;