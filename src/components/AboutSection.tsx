import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cross, Users, BookOpen, Target } from "lucide-react";
import communityImage from "@/assets/community-image.jpg";
import studyImage from "@/assets/study-image.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Cross,
      title: "Faith-Centered",
      description: "Rooted in biblical truth and centered on Christ's teachings for men of all ages."
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "Building authentic relationships and accountability among Christian men."
    },
    {
      icon: BookOpen,
      title: "Biblical Teaching",
      description: "Practical, scripture-based messages that challenge and inspire growth."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Equipping men to lead with integrity in their families, work, and communities."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Our Mission
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sharpening Men for God's Kingdom
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Just as iron sharpens iron, we gather to challenge, encourage, and equip each other 
              in our walk with Christ and our calling as men of God.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 lg:p-12 mb-12 bg-gradient-primary text-primary-foreground">
            <div className="text-center">
              <Cross className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <blockquote className="text-2xl md:text-3xl font-bold mb-6">
                "As iron sharpens iron, so one man sharpens another."
              </blockquote>
              <cite className="text-xl opacity-90">Proverbs 27:17</cite>
            </div>
          </Card>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img 
                src={communityImage} 
                alt="Men praying together in fellowship"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Brotherhood & Fellowship</h3>
                <p className="text-muted-foreground">
                  Experience the power of authentic Christian community as we support and encourage one another.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src={studyImage} 
                alt="Men studying the Bible together"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Bible-Based Teaching</h3>
                <p className="text-muted-foreground">
                  Dive deep into God's Word with practical teachings that transform hearts and lives.
                </p>
              </div>
            </Card>
          </div>

          {/* What to Expect */}
          <Card className="p-8 lg:p-12 bg-background">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6:00 PM</div>
                <h4 className="font-semibold text-foreground mb-2">Welcome & Fellowship</h4>
                <p className="text-muted-foreground text-sm">Registration, refreshments, and connecting with other men</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">7:00 PM</div>
                <h4 className="font-semibold text-foreground mb-2">Worship & Teaching</h4>
                <p className="text-muted-foreground text-sm">Powerful worship and life-changing biblical messages</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">9:30 PM</div>
                <h4 className="font-semibold text-foreground mb-2">Prayer & Commitment</h4>
                <p className="text-muted-foreground text-sm">Time for personal reflection and group prayer</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;