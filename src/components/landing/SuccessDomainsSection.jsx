import { Card, CardContent } from "@/components/ui/card";
import { Code, Stethoscope, Scale, Palette, TrendingUp, Rocket } from "lucide-react";

const SuccessDomainsSection = () => {
  const domains = [
    {
      icon: Code,
      title: "Technology & IT",
      count: "1,245+ Alumni",
      description: "Leading innovations in software, AI, and cybersecurity",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Scale,
      title: "Legal & Judiciary",
      count: "432+ Alumni",
      description: "Upholding justice and corporate governance",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Business & Finance",
      count: "892+ Alumni",
      description: "Shaping global markets and startups",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Arts & Media",
      count: "345+ Alumni",
      description: "Creating impactful content and designs",
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "Entrepreneurship",
      count: "567+ Alumni",
      description: "Building innovative companies and solutions",
      color: "from-indigo-500 to-violet-500"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Excellence Across Domains
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our alumni are making remarkable contributions across diverse industries worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {domain.title}
                </h3>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <span className="text-sm font-semibold text-primary">{domain.count}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20">
            <p className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              4,168+ Alumni
            </p>
            <p className="text-muted-foreground">Making a difference globally</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessDomainsSection;
