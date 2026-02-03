import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventCard = ({ event }) => {
    return (
        <Card className="hover:shadow-md transition-shadow duration-300 border-gray-100 overflow-hidden group">
            <div className="relative h-48">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                    <div className="text-xs font-bold text-red-500 uppercase">{event.month}</div>
                    <div className="text-xl font-bold text-gray-900">{event.day}</div>
                </div>
                <div className="absolute top-4 left-4">
                    <Badge className="bg-indigo-600 hover:bg-indigo-700">{event.category}</Badge>
                </div>
            </div>

            <CardContent className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">{event.title}</h3>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-indigo-500" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-indigo-500" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-indigo-500" />
                        <span className="truncate">{event.location}</span>
                    </div>
                </div>

                <div className="flex items-center -space-x-2 mb-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
                            <img src={`https://i.pravatar.cc/150?u=${event.id}${i}`} alt="attendee" />
                        </div>
                    ))}
                    <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">
                        +{event.attendees - 3}
                    </div>
                    <span className="ml-4 text-xs text-gray-500">{event.attendees} attending</span>
                </div>
            </CardContent>

            <CardFooter className="bg-gray-50 p-4 border-t border-gray-100">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">RSVP Now</Button>
            </CardFooter>
        </Card>
    );
};

export default EventCard;
