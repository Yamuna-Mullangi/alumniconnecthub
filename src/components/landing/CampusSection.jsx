import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const CampusSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Campus Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Find Us Here
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vignan's Lara Institute of Technology & Science, Guntur, Andhra Pradesh
          </p>
        </div>

        <Card className="overflow-hidden border-2 shadow-xl">
          <CardContent className="p-0">
            <div className="relative w-full h-[500px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.736573529187!2d80.55174731487576!3d16.231563588700253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0952629d4601%3A0x864f3a1980b47e3e!2sVignan&#39;s%20LARA%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1706367123456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vignan's Lara Institute Location"
              ></iframe>
            </div>
            <div className="p-6 bg-card">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Vignan's Lara Institute of Technology & Science</h3>
                  <p className="text-muted-foreground">
                    Vadlamudi, Guntur - 522 213, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CampusSection;
