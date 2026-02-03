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
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Notifications</h1>
                    <p className="text-gray-500">Stay updated with your network activity.</p>
                </div>
                <Button variant="outline" size="sm">Mark all as read</Button>
            </div>

            <Card>
                <CardHeader className="pb-3 border-b border-gray-100">
                    <CardTitle className="text-base font-medium">Recent</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    {NOTIFICATIONS.map((notification) => (
                        <div
                            key={notification.id}
                            className={`flex items-start gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${!notification.read ? "bg-indigo-50/30" : ""}`}
                        >
                            <div className="relative">
                                <Avatar>
                                    <AvatarImage src={notification.avatar} />
                                    <AvatarFallback>{notification.user[0]}</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-sm">
                                    {getIcon(notification.type)}
                                </div>
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-sm text-gray-900">
                                    <span className="font-semibold hover:underline cursor-pointer">{notification.user}</span> {notification.content}
                                </p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                            {!notification.read && (
                                <div className="h-2 w-2 bg-indigo-600 rounded-full mt-2"></div>
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default Notifications;
