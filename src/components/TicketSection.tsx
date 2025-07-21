import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, Star, Gift } from "lucide-react";

const TicketSection = () => {
  const ticketTypes = [
    {
      name: "General Admission",
      price: "$25",
      features: ["Event Access", "Welcome Kit", "Light Refreshments"],
      popular: false,
      icon: Ticket
    },
    {
      name: "VIP Experience",
      price: "$50",
      features: ["Event Access", "VIP Seating", "Welcome Kit", "Full Dinner", "Meet & Greet"],
      popular: true,
      icon: Star
    },
    {
      name: "Group Discount",
      price: "$20 each",
      features: ["5+ Tickets", "Event Access", "Welcome Kit", "Group Photo"],
      popular: false,
      icon: Gift
    }
  ];

  return (
    <section id="tickets" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Secure Your Spot
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of men in a transformative evening of faith, fellowship, and spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ticketTypes.map((ticket, index) => {
              const IconComponent = ticket.icon;
              return (
                <Card 
                  key={index}
                  className={`p-6 lg:p-8 relative transition-smooth hover:shadow-elegant ${
                    ticket.popular ? 'ring-2 ring-primary shadow-elegant' : ''
                  }`}
                >
                  {ticket.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{ticket.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-1">{ticket.price}</div>
                    {ticket.name === "Group Discount" && (
                      <p className="text-sm text-muted-foreground">minimum 5 tickets</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={ticket.popular ? "cta" : "default"}
                    className="w-full"
                    onClick={() => window.open('https://www.ticketmaster.com', '_blank')}
                  >
                    Buy on Ticketmaster
                  </Button>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Secure ticket purchasing powered by Ticketmaster
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://www.ticketmaster.com', '_blank')}
            >
              View All Tickets on Ticketmaster
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;