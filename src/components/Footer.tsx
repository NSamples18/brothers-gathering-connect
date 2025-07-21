import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Cross, Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Cross className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Iron Sharpens Iron</h3>
                <p className="text-sm opacity-80">Men's Conference 2024</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Equipping and encouraging Christian men to live with purpose, integrity, and faith.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-10 w-10 text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About the Event
                </a>
              </li>
              <li>
                <a href="#tickets" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Get Tickets
                </a>
              </li>
              <li>
                <a href="#livestream" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Live Stream
                </a>
              </li>
              <li>
                <a href="#email-signup" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Email Updates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Event Details</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Date & Time</p>
                <p className="text-primary-foreground/80">March 15, 2024 | 6:00 PM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-primary-foreground/80">Grace Community Center<br />Downtown</p>
              </div>
              <div>
                <p className="font-medium">Tickets</p>
                <p className="text-primary-foreground/80">Available on Ticketmaster</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <div>
                  <p className="text-sm font-medium">(555) 123-4567</p>
                  <p className="text-xs text-primary-foreground/60">Mon-Fri, 9 AM - 5 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <div>
                  <p className="text-sm font-medium">info@ironsharpensiron.org</p>
                  <p className="text-xs text-primary-foreground/60">24-hour response</p>
                </div>
              </div>
            </div>

            <Button 
              variant="cta" 
              className="w-full mt-6"
              onClick={() => window.open('https://www.ticketmaster.com', '_blank')}
            >
              Buy Tickets Now
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Iron Sharpens Iron Men's Conference. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;