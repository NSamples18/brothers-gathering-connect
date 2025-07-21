import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Users, Clock, Wifi } from "lucide-react";

const LiveStreamSection = () => {
  return (
    <section id="livestream" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Wifi className="w-4 h-4 mr-2" />
              Live Stream Available
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Can't Make It In Person?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us live online and be part of the experience from anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Stream Player Placeholder */}
            <Card className="p-6 lg:p-8">
              <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-primary-foreground">
                  <PlayCircle className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Live Stream</h3>
                  <p className="text-primary-foreground/80">Stream starts 15 minutes before the event</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="cta" size="lg" className="w-full mb-4">
                  Join Live Stream
                </Button>
                <p className="text-sm text-muted-foreground">
                  Free to watch • High quality video • Interactive chat
                </p>
              </div>
            </Card>

            {/* Stream Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">HD Quality Stream</h3>
                  <p className="text-muted-foreground">
                    Experience the event in crystal-clear high definition with professional audio quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Community</h3>
                  <p className="text-muted-foreground">
                    Connect with other viewers through live chat and prayer requests during the stream.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Recording Available</h3>
                  <p className="text-muted-foreground">
                    Missed the live stream? Watch the full recording available for 30 days after the event.
                  </p>
                </div>
              </div>

              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold text-foreground mb-2">Stream Schedule</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pre-event music</span>
                    <span className="font-medium">5:45 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Event begins</span>
                    <span className="font-medium">6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Main session</span>
                    <span className="font-medium">6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Closing</span>
                    <span className="font-medium">10:00 PM</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;