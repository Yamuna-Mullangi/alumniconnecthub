import { MapPin, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AlumniCard = ({ alumni }) => {
    return (
        <Card className="hover:shadow-md transition-shadow duration-300 border-gray-100 overflow-hidden group">
            <div className="h-20 bg-gradient-to-r from-indigo-500 to-purple-500 relative" />
            <CardContent className="pt-0 relative">
                <div className="flex justify-center -mt-10 mb-3">
                    <Avatar className="w-20 h-20 border-4 border-white shadow-sm ring-1 ring-gray-100">
                        <AvatarImage src={alumni.avatar} alt={alumni.name} />
                        <AvatarFallback>{alumni.name[0]}</AvatarFallback>
                    </Avatar>
                </div>

                <div className="text-center space-y-1 mb-4">
                    <h3 className="font-bold text-gray-900 truncate">{alumni.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{alumni.role}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{alumni.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="Batch" className="h-4 w-4 text-gray-400 object-contain rounded-full bg-white" />
                        <span className="truncate">Class of {alumni.gradYear}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="truncate">{alumni.location}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-3 pt-3 flex gap-2">
                <Link to={`/profile/${alumni.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                        View Profile
                    </Button>
                </Link>
                <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                    Connect
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AlumniCard;
