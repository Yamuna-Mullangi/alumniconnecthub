import { Users, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const GroupCard = ({ group }) => {
    return (
        <Card className="hover:shadow-md transition-shadow duration-300 border-gray-100 overflow-hidden">
            <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url(${group.coverImage})` }} />
            <CardHeader className="pt-0 relative px-4 pb-2">
                <div className="flex justify-between items-end -mt-8 mb-2">
                    <Avatar className="w-16 h-16 border-4 border-white shadow-sm rounded-lg">
                        <AvatarImage src={group.image} alt={group.name} />
                        <AvatarFallback className="rounded-lg">{group.name[0]}</AvatarFallback>
                    </Avatar>
                    {group.isPrivate ? (
                        <div className="text-gray-500 bg-white/80 backdrop-blur-sm p-1 rounded-full" title="Private Group">
                            <Lock className="h-4 w-4" />
                        </div>
                    ) : (
                        <div className="text-gray-500 bg-white/80 backdrop-blur-sm p-1 rounded-full" title="Public Group">
                            <Globe className="h-4 w-4" />
                        </div>
                    )}
                </div>
                <h3 className="font-bold text-lg text-gray-900 leading-tight">{group.name}</h3>
                <p className="text-xs text-gray-500">{group.category}</p>
            </CardHeader>
            <CardContent className="px-4 pb-4">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Users className="h-4 w-4 mr-1.5 text-gray-400" />
                    <span>{group.members} members</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                    {group.description}
                </p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-0">
                <Button className={group.joined ? "w-full bg-gray-100 text-gray-900 hover:bg-gray-200" : "w-full bg-indigo-600 hover:bg-indigo-700"}>
                    {group.joined ? "Joined" : "Join Group"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default GroupCard;
