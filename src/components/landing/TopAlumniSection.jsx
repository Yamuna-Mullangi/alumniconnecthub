import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase } from "lucide-react";

const TopAlumniSection = () => {
  const topAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "Class of 2005",
      position: "Chief Technology Officer",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      achievement: "Led digital transformation initiatives"
    },
    {
      name: "Priya Sharma",
      batch: "Class of 2008",
      position: "Director of Engineering",
      company: "Global Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      achievement: "Pioneer in AI and Machine Learning"
    },
    {
      name: "Arun Mehta",
      batch: "Class of 2010",
      position: "Senior Vice President",
      company: "Financial Services Group",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      achievement: "Transformed banking technology"
    },
    {
      name: "Sneha Patel",
      batch: "Class of 2012",
      position: "Founder & CEO",
      company: "EduTech Startups",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      achievement: "Revolutionizing online education"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-background to-indigo-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Distinguished Alumni</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Meet Our Top Alumni
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating excellence and achievements of our remarkable graduates who are making a difference worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topAlumni.map((alumni, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/60 backdrop-blur-md hover:shadow-2xl transition-all duration-300 group border-white/20 shadow-lg hover:border-primary/50 cursor-pointer hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-1">{alumni.name}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <img src="/images/logo.png" alt="Batch" className="w-4 h-4 object-contain rounded-full bg-white" />
                    <span>{alumni.batch}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{alumni.position}</p>
                    <p className="text-sm text-muted-foreground">{alumni.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                  {alumni.achievement}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAlumniSection;
