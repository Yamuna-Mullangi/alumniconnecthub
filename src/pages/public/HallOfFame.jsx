import { Link } from "react-router-dom";
import { Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HallOfFame = () => {
    const achievers = [
        {
            name: "Ms. Lakshmi Prasad",
            batch: "2007-2011",
            title: "IAS Officer",
            description: "Secured All India Rank 42 in UPSC Civil Services Examination 2012. Currently serving as District Collector.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
        },
        {
            name: "Mr. Satya Nadella (Honorary)",
            batch: "Guest Alumni",
            title: "CEO, Microsoft",
            description: "Visited campus in 2015 and inspired thousands of students with his visionary talk on technology.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
        },
        {
            name: "Mr. Ravi Kumar",
            batch: "2008-2012",
            title: "Founder, TechSolutions",
            description: "Built a multi-million dollar software services company employing over 500 people in Hyderabad.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
                        <Award className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Hall of Fame</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Celebrating the extraordinary achievements of our most distinguished alumni who have made a significant impact on society.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievers.map((person, index) => (
                        <Card key={index} className="overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all duration-300 hover:shadow-xl group">
                            <div className="h-64 overflow-hidden relative">
                                <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-2xl font-bold font-serif">{person.name}</h3>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{person.title}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4 font-medium">{person.batch}</p>
                                <p className="text-gray-600 leading-relaxed">
                                    {person.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HallOfFame;
