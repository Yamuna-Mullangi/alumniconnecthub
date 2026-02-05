import { Users, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const GroupCard = ({ group }) => {
    return (
        <Card className="hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 border-white/10 overflow-hidden glass-card">
            <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url(${group.coverImage})` }} />
            <CardHeader className="pt-0 relative px-4 pb-2">
                <div className="flex justify-between items-end -mt-8 mb-2">
                    <Avatar className="w-16 h-16 border-4 border-card shadow-sm rounded-lg ring-1 ring-white/10">
                        <AvatarImage src={group.image} alt={group.name} />
                        <AvatarFallback className="rounded-lg bg-primary/20 text-primary">{group.name[0]}</AvatarFallback>
                    </Avatar>
                    {group.isPrivate ? (
                        <div className="text-muted-foreground bg-card/80 backdrop-blur-sm p-1 rounded-full border border-white/10" title="Private Group">
                            <Lock className="h-4 w-4" />
                        </div>
                    ) : (
                        <div className="text-muted-foreground bg-card/80 backdrop-blur-sm p-1 rounded-full border border-white/10" title="Public Group">
                            <Globe className="h-4 w-4" />
                        </div>
                    )}
                </div>
                <h3 className="font-bold text-lg text-foreground leading-tight">{group.name}</h3>
                <p className="text-xs text-muted-foreground">{group.category}</p>
            </CardHeader>
            <CardContent className="px-4 pb-4">
                <div className="flex items-center text-sm text-foreground/80 mb-3">
                    <Users className="h-4 w-4 mr-1.5 text-primary/70" />
                    <span>{group.members} members</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {group.description}
                </p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
                <Button className={group.joined ? "w-full bg-white/10 text-foreground hover:bg-white/20 border border-white/10" : "w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_10px_rgba(123,51,126,0.3)]"}>
                    {group.joined ? "Joined" : "Join Group"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default GroupCard;
