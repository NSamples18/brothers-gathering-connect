import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const EventHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            IRON SHARPENS IRON
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
            A Men's Christian Conference for Spiritual Growth and Brotherhood
          </p>
          
          {/* Event Details Card */}
          <Card className="bg-background/95 backdrop-blur-sm p-6 md:p-8 mb-8 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-foreground">
              <div className="flex items-center justify-center gap-3">
                <CalendarDays className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">March 15, 2024</p>
                  <p className="text-sm text-muted-foreground">Friday</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">6:00 PM - 10:00 PM</p>
                  <p className="text-sm text-muted-foreground">Evening Session</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Grace Community Center</p>
                  <p className="text-sm text-muted-foreground">Downtown</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">500+ Expected</p>
                  <p className="text-sm text-muted-foreground">Men Attending</p>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.open('https://www.ticketmaster.com', '_blank')}
            >
              Get Your Tickets
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
            >
              Watch Live Stream
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;