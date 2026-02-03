import NewsFeed from "@/components/dashboard/NewsFeed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Users } from "lucide-react";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar - User Profile & Stats */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
                <Card>
                    <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-500 relative">
                        <Avatar className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 border-4 border-white">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xl font-bold">JD</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="pt-12 pb-6 px-4 text-center">
                        <h2 className="font-bold text-lg">John Doe</h2>
                        <p className="text-sm text-gray-500">Software Engineer</p>
                        <p className="text-xs text-gray-400 mt-1">Class of 2020 • Computer Science</p>

                        <div className="mt-6 flex justify-center gap-4 text-sm">
                            <div className="text-center">
                                <p className="font-bold text-gray-900">548</p>
                                <p className="text-gray-500 text-xs">Connections</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-gray-900">1.2k</p>
                                <p className="text-gray-500 text-xs">Profile Views</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-green-100 rounded-md text-green-600">
                                        <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">Job views</span>
                                </div>
                                <span className="text-sm font-bold">24</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-100 rounded-md text-blue-600">
                                        <Users className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">Event RSVPs</span>
                                </div>
                                <span className="text-sm font-bold">3</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Middle - Feed */}
            <div className="col-span-1 lg:col-span-6">
                <NewsFeed />
            </div>

            {/* Right Sidebar - Suggested & Events */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base text-gray-900">Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex flex-col items-center justify-center text-indigo-600">
                                <span className="text-xs font-bold uppercase">Oct</span>
                                <span className="text-lg font-bold">12</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium line-clamp-2">Alumni Networking Night 2024</h4>
                                <p className="text-xs text-gray-500">San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex flex-col items-center justify-center text-indigo-600">
                                <span className="text-xs font-bold uppercase">Nov</span>
                                <span className="text-lg font-bold">05</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium line-clamp-2">Tech Leadership Summit</h4>
                                <p className="text-xs text-gray-500">Online</p>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full text-xs">View all events</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base text-gray-900">Suggested Connections</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarFallback>U{i}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">User Name {i}</p>
                                    <p className="text-xs text-gray-500 truncate">Product Designer • '19</p>
                                </div>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-indigo-600">
                                    +
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
