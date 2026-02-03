import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";

const BatchSection = () => {
    const batches = [
        {
            year: "2020-2024",
            students: "842 Alumni",
            highlights: "First fully digital batch",
            color: "from-purple-500 to-pink-500"
        },
        {
            year: "2015-2019",
            students: "956 Alumni",
            highlights: "Highest placement rate",
            color: "from-blue-500 to-cyan-500"
        },
        {
            year: "2010-2014",
            students: "874 Alumni",
            highlights: "Record entrepreneurship",
            color: "from-green-500 to-emerald-500"
        },
        {
            year: "2005-2009",
            students: "723 Alumni",
            highlights: "Global impact leaders",
            color: "from-amber-500 to-orange-500"
        },
        {
            year: "2000-2004",
            students: "598 Alumni",
            highlights: "Industry pioneers",
            color: "from-rose-500 to-red-500"
        },
        {
            year: "1995-1999",
            students: "175 Alumni",
            highlights: "Foundation builders",
            color: "from-indigo-500 to-violet-500"
        },
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-muted/30 to-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">Batch Directory</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                        Find Your Batch
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Reconnect with your classmates and relive the memories of your college days
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {batches.map((batch, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 cursor-pointer"
                        >
                            <div className={`h-2 bg-gradient-to-r ${batch.color}`} />
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {batch.year}
                                        </h3>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Users className="w-4 h-4" />
                                            <span className="text-sm font-medium">{batch.students}</span>
                                        </div>
                                    </div>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${batch.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-border">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        <span className="font-semibold text-foreground">Highlight:</span> {batch.highlights}
                                    </p>
                                    <Link to="/auth/login" className="w-full">
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                                        >
                                            View Batch Profile
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default BatchSection;
