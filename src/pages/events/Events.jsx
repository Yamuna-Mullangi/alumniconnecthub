import { useState } from "react";
import EventCard from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Plus } from "lucide-react";

// Mock Data
const MOCK_EVENTS = [
    {
        id: 1,
        title: "Annual Alumni Gala 2024",
        date: "Saturday, Oct 12, 2024",
        time: "6:00 PM - 10:00 PM",
        month: "Oct",
        day: "12",
        location: "Grand Hotel, New York, NY",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        attendees: 156,
    },
    {
        id: 2,
        title: "Tech Trends & AI Workshop",
        date: "Wednesday, Nov 05, 2024",
        time: "2:00 PM - 4:00 PM",
        month: "Nov",
        day: "05",
        location: "Innovation Hub (Online)",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7f8?q=80&w=2000&auto=format&fit=crop",
        attendees: 84,
    },
    {
        id: 3,
        title: "Class of 2014 Reunion",
        date: "Friday, Dec 15, 2024",
        time: "7:00 PM - 11:00 PM",
        month: "Dec",
        day: "15",
        location: "University Campus, Main Hall",
        category: "Reunion",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
        attendees: 230,
    },
    {
        id: 4,
        title: "Career Fair Spring 2025",
        date: "Tuesday, Jan 10, 2025",
        time: "10:00 AM - 3:00 PM",
        month: "Jan",
        day: "10",
        location: "University Sports Complex",
        category: "Career",
        image: "https://images.unsplash.com/photo-1559223607-a30d5dc6e344?q=80&w=2074&auto=format&fit=crop",
        attendees: 450,
    },
];

const Events = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = MOCK_EVENTS.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Events</h1>
                    <p className="text-gray-500">Discover and join alumni events near you</p>
                </div>
                <Button className="bg-indigo-600">
                    <Plus className="mr-2 h-4 w-4" /> Create Event
                </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Tabs defaultValue="upcoming" className="w-full sm:w-auto">
                    <TabsList>
                        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                        <TabsTrigger value="past">Past Events</TabsTrigger>
                        <TabsTrigger value="my-events">My Events</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search events..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No events found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default Events;
