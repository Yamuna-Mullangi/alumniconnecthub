import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageSquare, Calendar, UserPlus } from "lucide-react";

const NOTIFICATIONS = [
    {
        id: 1,
        type: "like",
        user: "Sarah Wilson",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        content: "liked your post about the new campus initiative.",
        time: "2 hours ago",
        read: false,
    },
    {
        id: 2,
        type: "comment",
        user: "David Chen",
        avatar: "https://i.pravatar.cc/150?u=david",
        content: "commented on your photo: 'Great memories!'",
        time: "5 hours ago",
        read: true,
    },
    {
        id: 3,
        type: "event",
        user: "Alumni Association",
        avatar: "",
        content: "invited you to 'Annual Alumni Gala 2024'.",
        time: "1 day ago",
        read: true,
    },
    {
        id: 4,
        type: "connection",
        user: "Emily Davis",
        avatar: "https://i.pravatar.cc/150?u=emily",
        content: "sent you a connection request.",
        time: "2 days ago",
        read: true,
    },
];

const getIcon = (type) => {
    switch (type) {
        case "like": return <Heart className="h-4 w-4 text-red-500" />;
        case "comment": return <MessageSquare className="h-4 w-4 text-blue-500" />;
        case "event": return <Calendar className="h-4 w-4 text-orange-500" />;
        case "connection": return <UserPlus className="h-4 w-4 text-green-500" />;
        default: return <div className="h-4 w-4 bg-gray-200 rounded-full" />;
    }
};

const Notifications = () => {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Notifications</h1>
                    <p className="text-muted-foreground">Stay updated with your network activity.</p>
                </div>
                <Button variant="outline" size="sm" className="border-white/10 text-foreground hover:bg-white/10 bg-transparent">Mark all as read</Button>
            </div>

            <Card className="glass-card border-white/10">
                <CardHeader className="pb-3 border-b border-white/10">
                    <CardTitle className="text-base font-medium text-foreground">Recent</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    {NOTIFICATIONS.map((notification) => (
                        <div
                            key={notification.id}
                            className={`flex items-start gap-4 p-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors cursor-pointer group ${!notification.read ? "bg-primary/5" : ""}`}
                        >
                            <div className="relative">
                                <Avatar className="ring-1 ring-white/10">
                                    <AvatarImage src={notification.avatar} />
                                    <AvatarFallback className="bg-primary/20 text-primary">{notification.user[0]}</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 p-1 bg-card rounded-full shadow-sm border border-white/10">
                                    {getIcon(notification.type)}
                                </div>
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-sm text-foreground/90 group-hover:text-foreground transition-colors">
                                    <span className="font-semibold hover:underline text-primary-foreground">{notification.user}</span> {notification.content}
                                </p>
                                <p className="text-xs text-muted-foreground">{notification.time}</p>
                            </div>
                            {!notification.read && (
                                <div className="h-2 w-2 bg-primary rounded-full mt-2 ring-2 ring-primary/20"></div>
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default Notifications;
