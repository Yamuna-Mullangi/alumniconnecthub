import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useState } from "react";

const InspiringAlumniSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const alumni = [
    {
      name: "Vikram Reddy",
      batch: "Class of 2007",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Ananya Krishnan",
      batch: "Class of 2011",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    },
    {
      name: "Karthik Iyer",
      batch: "Class of 2013",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    },
    {
      name: "Priya Sharma",
      batch: "Class of 2009",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      name: "Rajesh Kumar",
      batch: "Class of 2015",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Sneha Patel",
      batch: "Class of 2012",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Inspiring Alumni</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our Distinguished Alumni
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating the success stories of our alumni community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative group cursor-pointer">
                {/* Circular Photo */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg transition-all duration-300 group-hover:border-primary group-hover:shadow-2xl group-hover:scale-105">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* View Details Button on Hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-300 animate-in fade-in zoom-in">
                    <Link to="/auth/login">
                      <button className="px-4 py-2 bg-white text-primary rounded-full font-semibold text-sm shadow-lg hover:bg-primary-foreground transition-all">
                        View Details
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Name and Batch */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-foreground text-sm md:text-base">{person.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{person.batch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiringAlumniSection;
