import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

const CONVERSATIONS = [
    {
        id: 1,
        name: "Sarah Wilson",
        lastMessage: "See you at the event tomorrow!",
        time: "10:30 AM",
        unread: 2,
        online: true,
        avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        id: 2,
        name: "David Chen",
        lastMessage: "Thanks for the referral!",
        time: "Yesterday",
        unread: 0,
        online: false,
        avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
        id: 3,
        name: "Tech Innovation Group",
        lastMessage: "Alice: Check out this article",
        time: "Yesterday",
        unread: 0,
        online: false,
        avatar: "https://via.placeholder.com/150",
        isGroup: true,
    },
];

const MESSAGES = [
    { id: 1, senderId: 1, text: "Hey! Are you going to the Alumni Gala?", time: "10:25 AM" },
    { id: 2, senderId: 0, text: "Yes, I just RSVP'd. Are you?", time: "10:28 AM" },
    { id: 3, senderId: 1, text: "See you at the event tomorrow!", time: "10:30 AM" },
];

const Messages = () => {
    const [activeChat, setActiveChat] = useState(CONVERSATIONS[0]);
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState(MESSAGES);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim()) return;

        const newMsg = {
            id: Date.now(),
            senderId: 0, // Me
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, newMsg]);
        setMessageInput("");
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Sidebar - Chat List */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search..." className="pl-9 bg-gray-50" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {CONVERSATIONS.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => setActiveChat(chat)}
                            className={cn(
                                "flex items-center gap-3 p-4 cursor-pointer transition-colors hover:bg-gray-50",
                                activeChat.id === chat.id && "bg-indigo-50 border-r-2 border-indigo-600"
                            )}
                        >
                            <div className="relative">
                                <Avatar>
                                    <AvatarImage src={chat.avatar} />
                                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                                </Avatar>
                                {chat.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                                    <span className="text-xs text-gray-500">{chat.time}</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                            </div>
                            {chat.unread > 0 && (
                                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    {chat.unread}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={activeChat.avatar} />
                            <AvatarFallback>{activeChat.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-bold text-gray-900">{activeChat.name}</h3>
                            <p className="text-xs text-green-600">{activeChat.online ? "Online" : "Offline"}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-500">
                        <Button variant="ghost" size="icon"><Phone className="h-5 w-5" /></Button>
                        <Button variant="ghost" size="icon"><Video className="h-5 w-5" /></Button>
                        <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "flex max-w-[70%]",
                                msg.senderId === 0 ? "ml-auto justify-end" : ""
                            )}
                        >
                            <div className={cn(
                                "p-3 rounded-2xl px-4",
                                msg.senderId === 0
                                    ? "bg-indigo-600 text-white rounded-br-none"
                                    : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                            )}>
                                <p>{msg.text}</p>
                                <p className={cn(
                                    "text-[10px] mt-1 text-right",
                                    msg.senderId === 0 ? "text-indigo-100" : "text-gray-400"
                                )}>
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                        <Button type="button" variant="ghost" size="icon" className="text-gray-400">
                            <Paperclip className="h-5 w-5" />
                        </Button>
                        <Input
                            placeholder="Type a message..."
                            className="flex-1"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        />
                        <Button type="button" variant="ghost" size="icon" className="text-gray-400">
                            <Smile className="h-5 w-5" />
                        </Button>
                        <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Messages;
