import { MapPin, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";


const AlumniCard = ({ alumni }) => {
    return (
        <Card className="hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 border-white/10 overflow-hidden group glass-card">
            <div className="h-20 bg-gradient-to-r from-primary to-purple-600 relative" />
            <CardContent className="pt-0 relative">
                <div className="flex justify-center -mt-10 mb-3">
                    <Avatar className="w-20 h-20 border-4 border-card shadow-sm ring-1 ring-white/10">
                        <AvatarImage src={alumni.avatar} alt={alumni.name} />
                        <AvatarFallback>{alumni.name[0]}</AvatarFallback>
                    </Avatar>
                </div>

                <div className="text-center space-y-1 mb-4">
                    <h3 className="font-bold text-foreground truncate">{alumni.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{alumni.role}</p>
                </div>

                <div className="space-y-2 text-sm text-foreground/80">
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary/70" />
                        <span className="truncate">{alumni.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="Batch" className="h-4 w-4 text-primary/70 object-contain rounded-full bg-white/90" />
                        <span className="truncate">Class of {alumni.gradYear}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary/70" />
                        <span className="truncate">{alumni.location}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="bg-white/5 p-3 pt-3 flex gap-2 border-t border-white/10">
                <Button variant="outline" size="sm" className="w-full text-primary border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50">
                    View Profile
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_10px_rgba(123,51,126,0.2)]">
                    Connect
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AlumniCard;
