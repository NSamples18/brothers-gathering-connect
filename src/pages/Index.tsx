import { useEffect } from "react";
import EventHero from "@/components/EventHero";
import AboutSection from "@/components/AboutSection";
import TicketSection from "@/components/TicketSection";
import LiveStreamSection from "@/components/LiveStreamSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = "Iron Sharpens Iron - Men's Christian Conference 2024";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Join hundreds of Christian men for Iron Sharpens Iron conference - March 15, 2024. Get tickets, watch live stream, and experience transformative fellowship and biblical teaching.'
      );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Iron Sharpens Iron - Men\'s Christian Conference 2024');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'A powerful evening of faith, fellowship, and spiritual growth for Christian men. March 15, 2024 at Grace Community Center.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <EventHero />
      <AboutSection />
      <TicketSection />
      <LiveStreamSection />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
