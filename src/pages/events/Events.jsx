import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Events = () => {
    const categories = ["All", "Reunions", "Webinars", "Hackathons", "Campus Events"];

    const events = [
        {
            title: "Global Alumni Meet 2024",
            category: "Reunions",
            date: "OCT 12",
            time: "10:00 AM - 4:00 PM",
            location: "San Francisco, CA",
            attendees: 120,
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
            description: "Join us for our annual global meet. Network with alumni from across the globe."
        },
        {
            title: "AI in Healthcare Webinar",
            category: "Webinars",
            date: "NOV 05",
            time: "2:00 PM - 3:30 PM",
            location: "Online (Zoom)",
            attendees: 450,
            image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop",
            description: "Expert panel discussion on the future of AI in modern healthcare systems."
        },
        {
            title: "HackTheFuture 2024",
            category: "Hackathons",
            date: "NOV 15",
            time: "48 Hours",
            location: "Main Campus, Block A",
            attendees: 85,
            image: "https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=2070&auto=format&fit=crop",
            description: "A 48-hour coding marathon to solve real-world problems. Great prizes for winners!"
        },
        {
            title: "Campus Cultural Fest",
            category: "Campus Events",
            date: "DEC 20",
            time: "6:00 PM - 11:00 PM",
            location: "University Auditorium",
            attendees: 300,
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
            description: "Celebrating our diverse culture with music, dance, and food stalls."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">Events</h1>
                    <p className="text-muted-foreground mt-1">View upcoming and previous alumni events & conferences.</p>
                </div>
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-indigo-500/20">
                    Host an Event
                </Button>
            </div>

            <Tabs defaultValue="All" className="w-full">
                <div className="overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                    <TabsList className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 p-1 rounded-full h-12 w-auto inline-flex">
                        {categories.map((cat) => (
                            <TabsTrigger
                                key={cat}
                                value={cat}
                                className="rounded-full px-6 h-10 data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-700 hover:text-indigo-600 hover:scale-105 hover:shadow-sm"
                            >
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {categories.map((cat) => (
                    <TabsContent key={cat} value={cat} className="mt-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        {events.filter(e => cat === "All" || e.category === cat).length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {events.filter(e => cat === "All" || e.category === cat).map((event, index) => (
                                    <Card key={index} className="overflow-hidden border-none shadow-lg glass-card group hover:-translate-y-1 transition-all duration-300">
                                        <div className="relative h-48 overflow-hidden">
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-center shadow-sm z-10">
                                                <p className="text-xs font-bold text-indigo-600 uppercase">{event.date.split(' ')[0]}</p>
                                                <p className="text-lg font-extrabold text-gray-900">{event.date.split(' ')[1]}</p>
                                            </div>
                                            <Badge className="absolute top-3 right-3 bg-black/50 backdrop-blur-md hover:bg-black/60 border-none text-white font-medium z-10">
                                                {event.category}
                                            </Badge>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-[5]" />
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-indigo-600 transition-colors">{event.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                                            <div className="space-y-2 text-sm text-muted-foreground/80">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-indigo-500" /> {event.time}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-indigo-500" /> {event.location}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-4 h-4 text-indigo-500" /> {event.attendees} Attending
                                                </div>
                                            </div>
                                            <Button variant="outline" className="w-full mt-2 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-all">
                                                View Details
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mb-4">
                                    <Calendar className="w-10 h-10 text-muted-foreground/50" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">No events found</h3>
                                <p className="text-muted-foreground">There are no upcoming events in this category yet.</p>
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default Events;
